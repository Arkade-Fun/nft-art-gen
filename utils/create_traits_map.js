const fs = require("fs");

createTraitsMapfromMetadata();

function createTraitsMapfromMetadata() {
  let metadata = require("../build/json/_metadata.json");
  const TraitsMap = {};

  metadata.forEach((item) => {
    const { attributes } = item;

    attributes.forEach((attribute) => {
      const { trait_type, value } = attribute;
      if (!TraitsMap[trait_type]) {
        TraitsMap[trait_type] = [];
      }
      if (!TraitsMap[trait_type].includes(value)) {
        TraitsMap[trait_type].push(value);
        TraitsMap[trait_type].sort();
      }
    });
  });

  // sort TraitsMap and format
  for (const [key, value] of Object.entries(TraitsMap)) {
    console.log(`${key}: ${value}`);
    let traitsArr = value.map((trait) => {
      return { value: trait };
    });
    TraitsMap[key] = traitsArr;
  }

  // calculate rarity
  metadata.forEach((item) => {
    const { attributes } = item;

    attributes.forEach((attribute) => {
      const { trait_type, value } = attribute;

      let traitObj = TraitsMap[trait_type].filter(
        (trait) => trait.value == value
      )[0];
      if (!traitObj.occurrence) {
        traitObj.occurrence = 0;
      }
      traitObj.occurrence++;
    });
  });

  console.log("TraitsMap =>", TraitsMap);

  fs.writeFile(
    `build/TraitsMap.json`,
    JSON.stringify(TraitsMap),
    "utf8",
    (err) => {
      console.log("err =>", err);
    }
  );
}
