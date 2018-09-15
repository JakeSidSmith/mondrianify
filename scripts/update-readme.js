const fs = require('fs');
const path = require('path');

const UTF8 = 'utf8';

const MATCHES_URL = /(```)[^`]*?(```)/;

const MONDRIANIFY_PATH = path.join(__dirname, '../mondrianify.js');
const README_PATH = path.join(__dirname, '../README.md');

const mondrianifyContents = fs.readFileSync(MONDRIANIFY_PATH, UTF8);
const readmeContents = fs.readFileSync(README_PATH, UTF8);

const link = `javascript:${encodeURIComponent(mondrianifyContents)}`;

const newReadmeContents = readmeContents.replace(MATCHES_URL, `$1\n${link}\n$2`);

fs.writeFileSync(README_PATH, newReadmeContents, UTF8);
