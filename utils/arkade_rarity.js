const fs = require("fs");
const path = require("path");
const { createCanvas, loadImage } = require("canvas");
const basePath = process.cwd();
const buildDir = `${basePath}/build/rarity`;

const metadata = require("../build/json/_metadata.json");
const rarities = require("../build/rarity/_rarity.json");

const buildSetup = () => {
  if (fs.existsSync(buildDir)) {
    fs.rmdirSync(buildDir, { recursive: true });
  }
  fs.mkdirSync(buildDir);
};

const getOccurrence = (a) => {
  return parseFloat(
    parseFloat(
      rarities[a.trait_type].find((item) => item.trait === a.value).occurrence
    ).toFixed(2)
  );
};

const createRarity = () => {
  const md = metadata
    .sort((a, b) => a.edition - b.edition)
    .map((item) => {
      const sum = item.attributes.reduce(
        (partialSum, a) => partialSum + getOccurrence(a),
        0
      );

      console.log("sum:", sum);

      let total = sum / item.attributes.length;

      item.attributes.forEach((item) => {
        if (item.trait_type === "Special Edition") {
          total = 0;
          return;
        }
        // has very common trait
        if (getOccurrence(item) > 20 && total >= 6) {
          total -= 2;
        }
        // has rare trait 2
        if (getOccurrence(item) > 1 && getOccurrence(item) < 2 && total >= 6) {
          total -= 2;
        }
        // has rare trait
        if (getOccurrence(item) < 1.2 && total >= 2) {
          total -= 1;
        }
      });

      let rank;
      if (total === 0) {
        rank = "Legendary";
      } else if (total > 0 && total <= 7) {
        rank = "Super";
      } else if (total > 7 && total <= 10) {
        rank = "Epic";
      } else if (total > 10 && total <= 13) {
        rank = "Rare";
      } else if (total > 13) {
        rank = "Common";
      }
      item.rank = rank;
      item.rarity = total;
      // return { id: item.edition, total };
      return item;
    });
  //   console.log(
  //     "md:",
  //     md.sort((a, b) => a.total - b.total).map((item) => item.id)
  //   );
  fs.writeFileSync(
    `${buildDir}/_metadata_with_rarity.json`,
    JSON.stringify(md, null, 2)
  );
};

buildSetup();
createRarity();
