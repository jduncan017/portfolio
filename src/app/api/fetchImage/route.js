import { NextResponse } from "next/server";

// pages/api/fetchImage.js
export async function GET(req) {
  const url = req.headers.get("xurl");

  if (!url) {
    return NextResponse.json({ error: "no url provided" }, { status: 400 });
  }

  try {
    const response = await fetch(url);
    const html = await response.text();
    const metaTags = html.match(/<meta[^>]+>/g);

    const ogImageTag = metaTags.find(
      (tag) =>
        tag.includes('property="og:image"') || tag.includes('name="og:image"'),
    );
    const ogImageUrl = ogImageTag.match(/content="([^"]+)"/)[1];

    return NextResponse.json({ ogImageUrl }, { status: 200 });
  } catch (error) {
    console.error(error);
  }
}
