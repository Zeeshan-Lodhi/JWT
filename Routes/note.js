const { postNote } = require("../Controler/note");
const { protect } = require("../Middleware/userAuth");
const noteRouter = require(`express`).Router();

noteRouter.post("/notepost", protect, postNote);

module.exports = { noteRouter };
