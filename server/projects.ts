"use server";

export interface Project {
  id: number;
  project_image: string;
  project_title: string;
  project_description: string;
  project_date: string;
  project_url?: string;
  project_github?: string;
  author: string;
}

export const get = async () => {
  const res = await fetch(`/api/projects`);
  if (!res.ok) throw new Error("Gagal mengambil data project");
  const json = await res.json();
  return json.data;
};

