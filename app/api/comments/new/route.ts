import "@/lib/db";
import dataModel from "@/lib/db/model";

export const revalidate = 0;

export async function POST(req: Request) {
  const { content, time, date } = await req.json();

  if (!content || !time || !date) {
    return new Response("Missing fields", {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const succ = new dataModel({
    time: time,
    date: date,
    content: content,
  })
    .save()
    .catch((e: Error) => console.error(e));

  return new Response(succ, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
