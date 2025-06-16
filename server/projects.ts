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

export const get = async (): Promise<Project[]> => {
    const data = await fetch (`${process.env.APP_URL}/projects`);
    const json = await data.json();

    return json.data;

};