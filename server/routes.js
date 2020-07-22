var express = require("express");
var router = express.Router();
var fs = require("fs");
var path = require("path");
var util = require("util");

const mapfilePath = process.env.MAPFILE_PATH;
const templatePath = process.env.TEMPLATE_PATH;

const readdir = util.promisify(fs.readdir);
const stat = util.promisify(fs.stat);
const writeFile = util.promisify(fs.writeFile);
const unlink = util.promisify(fs.unlink);

const exists = (filename) => {
  return new Promise(async (resolve, reject) => {
    try {
      await stat(path.join(mapfilePath, filename));
      resolve(true);
    } catch (e) {
      resolve(false);
    }
  });
};

/**
 * Get contents of a template file
 */
router.use("/templates", express.static(path.join(templatePath)));

/**
 * Get a list of files in our mapfiles folder
 */
router.get("/files", async (req, res, next) => {
  try {
    const dir = path.join(mapfilePath);
    const files = await readdir(dir);
    let fileStats = await Promise.all(
      files.map(async (file) => {
        const stats = await stat(`${dir}/${file}`);
        return {
          type: stats.isFile() ? "file" : "folder",
          filename: file,
          size: stats.size,
          last_modified: stats.mtime,
          created: stats.birthtime,
          url: `${req.host}/api/files/${file}`,
        };
      })
    );
    fileStats = fileStats.filter((fileinfo) => {
      return fileinfo.type === "file";
    });
    res.status(200).json(fileStats);
  } catch (e) {
    next(e);
  }
});
/**
 * Serve our mapfiles out by name
 */
router.use("/files", express.static(path.join(mapfilePath)));
/**
 * Create a new mapfile with content and filename
 * Should post with a JSON body that looks like:
 * {
 *  "filename": <string>,
 *  "content": <string>
 * }
 */
router.post("/files", async (req, res, next) => {
  try {
    // grab the data out of our request body
    const { filename, content } = req.body;

    // if we don't get a filename or content then bail
    if (!filename || !content)
      return res
        .status(400)
        .send("Request did not include either a filename or file content");

    // check to see if a file exists with that name, if so, bail
    const fileExists = await exists(filename);
    if (fileExists)
      return res.status(409).send("A file with that name already exists");

    // if we make it here we can save the file
    await writeFile(path.join(mapfilePath, filename), content);
    res.status(200).send(`Created ${filename}`);
  } catch (e) {
    next(e);
  }
});

/**
 * Edit a file by filename, can include re-naming the file
 * Should put with a JSON body that looks like:
 * {
 *  "filename": <string>,
 *  "content": <string>
 * }
 *
 * The filename in the path is used to find the file to edit, if
 * the filename in the request body is different the file will be saved
 * with the new filename instead and the old one will be removed
 */
router.put("/files/:filename", async (req, res, next) => {
  try {
    // grab the data out of our request body and params
    const { filename, content } = req.body;
    const existingFilename = req.params.filename;

    // check to see if a file exists with that name, if not, bail
    const fileExists = await exists(existingFilename);
    if (!fileExists)
      return res.status(404).send(`${existingFilename} does not exist`);

    // if we don't get content then bail, filename is optional
    if (!content)
      return res.status(400).send("Request did not include file content");

    // set delete flag if we have a new filename
    const deleteExisting = filename && filename !== existingFilename;

    // set our new or existing filename that we're going to write to
    const writeFilename = deleteExisting ? filename : existingFilename;

    // if deleteExisting is true, then delete it
    if (deleteExisting) await unlink(path.join(mapfilePath, existingFilename));

    // if we make it here we can save the file
    await writeFile(path.join(mapfilePath, writeFilename), content);
    res.status(200).send(`Saved ${writeFilename}`);
  } catch (e) {
    next(e);
  }
});

/**
 * Delete a file by filename
 */
router.delete("/files/:filename", async (req, res, next) => {
  try {
    // grab the data out of our request body and params
    const existingFilename = req.params.filename;

    // check to see if a file exists with that name, if not, bail
    const fileExists = await exists(existingFilename);
    if (!fileExists)
      return res.status(404).send(`${existingFilename} does not exist`);

    // if we find the file let's delete it
    await unlink(path.join(mapfilePath, existingFilename));
    res.status(200).send(`Deleted ${existingFilename}`);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
