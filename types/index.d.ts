import { LucideIcon } from 'lucide-react';
import type { Config } from 'ziggy-js';

export interface Project {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
  url?: string;
  github?: string;
  author: string;
}



