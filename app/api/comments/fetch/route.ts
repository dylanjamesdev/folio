import initConnection from "@/db/init";
import dataModel from "@/db/model";

export async function GET(req: Request) {
  initConnection();

  let comments = await dataModel.find();

  return new Response(JSON.stringify(comments), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
