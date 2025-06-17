import { Project } from "@/types";

export async function getProjects(): Promise<Project[]> {
  const res = await fetch("/api/projects", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Gagal mengambil data project");
  }

  const json = await res.json();
  return json.data;
}
