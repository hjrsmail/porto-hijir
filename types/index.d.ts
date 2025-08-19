import { LucideIcon } from "lucide-react";
import type { Config } from "ziggy-js";

export interface Project {
  id: number;
  image: string;
  title: string;
  description: string;
  created_at: string;
  demo_url?: string;
  github_url?: string;
  author: string;
}

export interface Certificate {
  id: number;
  title: string;
  image: string;
  // description: string;
  publisher: string;
}
