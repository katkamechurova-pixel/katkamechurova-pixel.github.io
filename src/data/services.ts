import {
  Stethoscope, Syringe, Bug, Cpu, Droplets, Scissors, MessageCircle, HeartHandshake, HousePlus, ScanLine, LucideIcon
} from "lucide-react";

// Map icon string names from markdown frontmatter to actual Lucide components
const iconMap: Record<string, LucideIcon> = {
  Stethoscope,
  Syringe,
  Bug,
  Cpu,
  Droplets,
  Scissors,
  MessageCircle,
  HeartHandshake,
  HousePlus,
  ScanLine,
};

export interface ServiceData {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortDesc: string;
  html: string;
  metaTitle: string;
  metaDescription: string;
}

// Eagerly import all service markdown files at build time
const modules = import.meta.glob<{
  attributes: Record<string, string>;
  html: string;
}>('/content/services/*.md', { eager: true });

export const services: ServiceData[] = Object.entries(modules).map(([filepath, mod]) => {
  const slug = filepath.split('/').pop()!.replace('.md', '');
  const attrs = mod.attributes;
  return {
    slug,
    icon: iconMap[attrs.icon] || Stethoscope,
    title: attrs.title,
    shortDesc: attrs.shortDesc,
    html: mod.html,
    metaTitle: attrs.metaTitle,
    metaDescription: attrs.metaDescription,
  };
});
