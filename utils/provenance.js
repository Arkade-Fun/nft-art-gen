const keccak256 = require("keccak256");
const fs = require("fs");
const path = require("path");
const basePath = process.cwd();

const buildDir = `${basePath}/build`;
// Read files from the build folder defined in config.
const metadata = JSON.parse(
  fs.readFileSync(path.join(buildDir, `/json/_metadata.json`), "utf-8")
);

const accumulatedHashString = metadata.reduce((acc, item) => {
  return acc.concat(item.dna);
}, []);

const provenance = keccak256(accumulatedHashString.join("")).toString("hex");

fs.writeFileSync(
  `${buildDir}/_provenance.json`,
  JSON.stringify(
    { provenance, concatenatedHashString: accumulatedHashString.join("") },
    null,
    "\t"
  )
);

console.log(`\nProvenance Hash Save in !\n${buildDir}/_provenance.json\n`);
// console.log(chalk.greenBright.bold(`${provenance} \n`));
