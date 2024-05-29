import initConnection from "./init";
import dataModel from "./model";

async function removeBadStuff() {
  initConnection();

  try {
    let comments = await dataModel.find({ content: { $regex: /\bnigga\b/i } });

    await dataModel.deleteMany({ content: { $regex: /\bnigga\b/i } });

    console.log(
      `${comments.length} comments with "nigger" removed successfully.`
    );
  } catch (error) {
    console.error("Error removing comments with 'pie':", error);
  }
}

removeBadStuff();
