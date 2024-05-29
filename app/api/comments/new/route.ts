import "@/db/connect";
import dataModel from "@/db/model";

export async function POST(req: Request) {
  let { content, time, date } = await req.json();

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
    .catch((e: any) => console.error(e));

  return new Response(succ, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
