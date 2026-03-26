import { type ComponentType, useEffect, useRef, useState } from "react";

type DeferredSectionModule = {
  default: ComponentType;
};

interface DeferredSectionProps {
  id: string;
  loader: () => Promise<DeferredSectionModule>;
  placeholderClassName: string;
  rootMargin?: string;
}

const DeferredSection = ({
  id,
  loader,
  placeholderClassName,
  rootMargin = "256px",
}: DeferredSectionProps) => {
  const [Component, setComponent] = useState<ComponentType | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (Component) return;

    let cancelled = false;
    const load = async () => {
      const module = await loader();
      if (!cancelled) {
        setComponent(() => module.default);
      }
    };

    const target = sectionRef.current;
    if (!target || typeof IntersectionObserver === "undefined") {
      void load();
      return () => {
        cancelled = true;
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          void load();
        }
      },
      { rootMargin },
    );

    observer.observe(target);

    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [Component, loader, rootMargin]);

  if (Component) {
    return <Component />;
  }

  return <section id={id} ref={sectionRef} className={placeholderClassName} aria-hidden="true" />;
};

export default DeferredSection;
