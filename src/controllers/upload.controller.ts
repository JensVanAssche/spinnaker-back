var path = require("path");
var sharp = require("sharp");
var fs = require("fs");

export async function upload(req, res) {
  const { filename: image } = req.file;

  sharp.concurrency(1);
  sharp.cache(false);

  await sharp(req.file.path)
    .resize(parseInt(req.params.size))
    .toFile(path.resolve(__dirname, "../data/img", image));
  fs.unlinkSync(req.file.path);
  return res.sendStatus(200);
}

export async function uploadMultiple(req, res) {
  for (let i = 0; i < req.files.length; i++) {
    const { filename: image } = req.files[i];

    sharp.concurrency(1);
    sharp.cache(false);

    await sharp(req.files[i].path)
      .resize(parseInt(req.params.size))
      .toFile(path.resolve(__dirname, "../data/img", image));
    fs.unlinkSync(req.files[i].path);
  }

  return res.sendStatus(200);
}
