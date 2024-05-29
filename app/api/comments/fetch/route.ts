import initConnection from "@/db/init";
import dataModel from "@/db/model";

export const revalidate = 0;

(async () => {
  await initConnection();
})();

export async function GET(req: Request) {
  let comments = await dataModel.find({}).sort({ _id: -1 });

  return new Response(JSON.stringify(comments), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
