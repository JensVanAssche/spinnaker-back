var path = require("path");
var sharp = require("sharp");
var fs = require("fs");

export async function upload(req, res) {
  const image = req.body.text;

  sharp.concurrency(1);
  sharp.cache(false);

  if (req.params.size === "2000") {
    await sharp(req.file.path)
      .resize(2000)
      .toFile(path.resolve(__dirname, "../data/img", "large_" + image));

    await sharp(req.file.path)
      .resize(1000)
      .toFile(path.resolve(__dirname, "../data/img", "medium_" + image));

    await sharp(req.file.path)
      .resize(500)
      .toFile(path.resolve(__dirname, "../data/img", "small_" + image));
  } else if (req.params.size === "1200") {
    await sharp(req.file.path)
      .resize(1200)
      .toFile(path.resolve(__dirname, "../data/img", "large_" + image));

    await sharp(req.file.path)
      .resize(600)
      .toFile(path.resolve(__dirname, "../data/img", "small_" + image));
  } else {
    await sharp(req.file.path)
      .resize(parseInt(req.params.size))
      .toFile(path.resolve(__dirname, "../data/img", image));
  }

  fs.unlinkSync(req.file.path);
  return res.sendStatus(200);
}

export async function uploadMultiple(req, res) {
  for (let i = 0; i < req.files.length; i++) {
    const image = req.body.text[i];

    sharp.concurrency(1);
    sharp.cache(false);

    await sharp(req.files[i].path)
      .resize(parseInt(req.params.size))
      .toFile(path.resolve(__dirname, "../data/img", image));
    fs.unlinkSync(req.files[i].path);
  }

  return res.sendStatus(200);
}
