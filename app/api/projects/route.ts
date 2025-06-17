import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(`${process.env.APP_URL}/projects`, {
    headers: {
      "X-API-KEY": process.env.API_KEY as string,
      Accept: "application/json",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    return NextResponse.json(
      { message: "Gagal mengambil data project" },
      { status: 500 }
    );
  }

  await new Promise((resolve) => setTimeout(resolve, 600));
  const json = await res.json();

  const projects = json.data.map((item: any) => ({
    id: item.id,
    image: item.project_image,
    title: item.project_title,
    description: item.project_description,
    date: item.project_date,
    url: item.project_url,
    github: item.project_github,
    author: item.author,
  }));

  return NextResponse.json({ data: projects });
}
