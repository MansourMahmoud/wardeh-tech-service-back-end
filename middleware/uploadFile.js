const appError = require("../utils/appError");
const { FAIL } = require("../utils/httpStatusText");
const multer = require("multer");

const fileFilter = (req, file, cb) => {
  const imageType = file.mimetype.split("/")[0];
  if (imageType === "image") {
    cb(null, true);
  } else {
    const error = appError.create(
      "رجاء تأكد من المرفقات التي ترسلها. يجب أن تكون كلها صورا",
      400,
      FAIL
    );
    cb(error, false);
  }
};

const upload = multer({ storage: multer.memoryStorage(), fileFilter });

module.exports = upload;
