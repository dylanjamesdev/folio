import initConnection from "@db/init";
import dataModel from "@db/model";

async function removeBadStuff() {
  await initConnection();

  try {
    const comments = await dataModel.find({
      content: { $regex: /\bnigger\b/i },
    });

    await dataModel.deleteMany({ content: { $regex: /\bnigger\b/i } });

    console.log(
      `${comments.length} comments with "nigger" removed successfully.`
    );
  } catch (error) {
    console.error("Error removing comments with 'nigger':", error);
  }
}

removeBadStuff();
