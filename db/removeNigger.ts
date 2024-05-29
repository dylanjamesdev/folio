import initConnection from "./init";
import dataModel from "./model";

async function removeBadStuff() {
  initConnection();

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
