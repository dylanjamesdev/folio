import "@/db/connect";
import dataModel from "@/db/model";

export async function GET(req: Request) {
  const comments = await dataModel.find().sort({ _id: -1 }).lean();

  return new Response(JSON.stringify(comments), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
