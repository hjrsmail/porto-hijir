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
    return NextResponse.json({ error: "Gagal fetch" }, { status: 500 });
  }

  const json = await res.json();
  return NextResponse.json(json);
}
