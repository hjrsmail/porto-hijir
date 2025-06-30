import { Project } from "@/types";

export async function getProjects(): Promise<Project[]> {
  const res = await fetch("/api/projects"); 
  const json = await res.json();

  if (!res.ok) throw new Error(json.message || "Gagal fetch project");
  return json.data;
}
