import {
  Bug,
  Cpu,
  Droplets,
  HeartHandshake,
  HousePlus,
  MessageCircle,
  ScanLine,
  Scissors,
  Stethoscope,
  Syringe,
  type LucideIcon,
} from "lucide-react";
import type { ServiceIconName } from "@/data/serviceSummaries";

const serviceIcons: Record<ServiceIconName, LucideIcon> = {
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

export const getServiceIcon = (iconName: ServiceIconName): LucideIcon =>
  serviceIcons[iconName] ?? Stethoscope;
