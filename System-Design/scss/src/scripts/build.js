const Fs = require("fs");

const Path = require("path");

const Sass = require("node-sass");

Sass.render({
  data: Fs.readFileSync(Path.resolve("src/global.scss")).toString(),
});
