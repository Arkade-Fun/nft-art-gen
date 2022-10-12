const fs = require("fs");
const basePath = process.cwd();
const sha1 = require(`${basePath}/node_modules/sha1`);

const moveFiles = (oldPath, newPath) => {
  for (let i = 1; i <= 62; i += 1) {
    const oldFile = `${oldPath + i}.json`;
    const newFile = `${newPath + i}.json`;

    fs.copyFile(oldFile, newFile, (err) => {
      if (err) throw err;
    });
  }
};

const removeNoneAttribute = () => {
  for (let i = 0; i < 3400; i += 1) {
    try {
      const fileName = `${i}.json`;
      const path = "build/json/";
      const fullPath = path + fileName;
      const data = JSON.parse(fs.readFileSync(fullPath));
      const { attributes } = data;

      const newAttributes = attributes.filter((atr) => atr.value !== "None");
      data.attributes = newAttributes;
      fs.writeFileSync(fullPath, JSON.stringify(data, null, 4));
    } catch (err) {
      console.log(`Error with ${i}`, err);
    }
  }
};

const addCollectionsField = () => {
  for (let i = 0; i < 10101; i += 1) {
    const fileName = `${i}.json`;
    const path = "build/images/";
    const fullPath = path + fileName;
    const data = JSON.parse(fs.readFileSync(fullPath));
    data.collection = {
      name: "Hero NFT",
      family: "Original 10101 Unique Heros Collection",
    };

    fs.writeFileSync(fullPath, JSON.stringify(data, null, 4));
  }
};

const updateRoyalities = () => {
  for (let i = 0; i < 10101; i += 1) {
    const fileName = `${i}.json`;
    const path = "build/images/";
    const fullPath = path + fileName;
    const data = JSON.parse(fs.readFileSync(fullPath));
    const { properties } = data;

    properties.creators = [
      {
        address: "F8XMcqXLAXGcyWmkbyPvWvEJmkcGddrPUohG9su8Pris",
        share: 67,
      },
      {
        address: "AoSrZ19EtzcN9YbuaKJdQvabH5YnD6iR8kSSHytdYGQ7",
        share: 33,
      },
    ];

    properties.terra_creators = [
      {
        address: "terra1kf4k0l7hj5tlkuzf67ly43q8d2gcxay3hwa7fr",
        share: 67,
      },
      {
        address: "terra1zxtczmxtw8mk8xncvr8lcq2qmvk4dz88ek6f79",
        share: 33,
      },
    ];

    properties.eth_creators = [
      {
        address: "0x46984CEb996aaCB585F63c81f15332860eFfa623",
        share: 67,
      },
      {
        address: "0x5a882Eb704EA153B117Ab2b1797bA46a1B09Da2c",
        share: 33,
      },
    ];
    fs.writeFileSync(fullPath, JSON.stringify(data, null, 4));
  }
};

const updateMagicEdenRoyalities = () => {
  for (let i = 0; i < 1000; i += 1) {
    const fileName = `${i}.json`;
    const path = "build/upload/";
    const fullPath = path + fileName;
    const data = JSON.parse(fs.readFileSync(fullPath));
    const { properties } = data;

    properties.creators = [
      {
        address: "F8XMcqXLAXGcyWmkbyPvWvEJmkcGddrPUohG9su8Pris",
        share: 63.5,
      },
      {
        address: "AoSrZ19EtzcN9YbuaKJdQvabH5YnD6iR8kSSHytdYGQ7",
        share: 31.5,
      },
      {
        address: "RRUMF9KYPcvNSmnicNMAFKx5wDYix3wjNa6bA7R6xqA",
        share: 5,
      },
    ];

    fs.writeFileSync(fullPath, JSON.stringify(data, null, 4));
  }
};

const renumberFiles = () => {
  const path = "build/upload4/";
  // const path = 'prodMetadata/devnetmeta2/';

  for (let i = 4000; i < 5000; i += 1) {
    const j = i - 4000;
    const originalPNG = `${path + i}.png`;
    const newPNG = `${path + j}.png`;
    const originalJson = `${path + i}.json`;
    const newJson = `${path + j}.json`;

    fs.rename(originalPNG, newPNG, (err) => {
      if (err) console.log("error renaming png file =>", err);
    });
    fs.rename(originalJson, newJson, (err) => {
      if (err) console.log("error renaming json file =>", err);
    });
  }
};

const prepareUploadFiles = () => {
  const index = 0;
  const dest = "build/upload0/";
  const oldJsonPath = "build/json/";
  const oldImgPath = "build/images/";
  const inc = 1000 * index;
  for (let i = 0; i < 1000; i++) {
    const oldIndex = i + inc;
    const oldFile = `${oldJsonPath + oldIndex}.json`;
    const newFile = `${dest + i}.json`;

    const oldImg = `${oldImgPath + oldIndex}.png`;
    const newImg = `${dest + i}.png`;

    fs.rename(oldFile, newFile, (err) => {
      if (err) throw err;
    });

    fs.rename(oldImg, newImg, (err) => {
      if (err) throw err;
    });
  }
};

const rekeyUploadedJSON = () => {
  const data = require("../../prodMetadata/devnetmeta2.json");
  const { items } = data;
  let index = 0;
  const newItems = {};
  for (const [key, value] of Object.entries(items)) {
    newItems[index] = value;
    index++;
  }
  data.items = newItems;
  fs.writeFileSync(
    "prodMetadata/devnetmeta2-temp.json",
    JSON.stringify(data, null, 4)
  );
};

const createCombinedMetadata = () => {
  const allItems = {};
  for (let i = 0; i <= 10; i++) {
    const path = `../../prodMetadata/devnetmeta${i}.json`;
    const data = require(path);
    const { items } = data;
    const NFTmetadata = Object.values(items);
    NFTmetadata.forEach((data, index) => {
      let cIndex = i * 1000 + index;
      allItems[cIndex] = data;
    });
  }
  const jsonData = {
    items: allItems,
  };
  fs.writeFileSync(
    "prodMetadata/fullMetadata.json",
    JSON.stringify(jsonData, null, 4)
  );
};

const checkDupes = async () => {
  const HashList = {};
  const dir = "build/json/";
  try {
    const files = await fs.readdirSync(dir);
    // files object contains all files names
    // log them on console
    files.forEach((file) => {
      try {
        let atrStr = "";
        const data = JSON.parse(fs.readFileSync(`${dir}${file}`));
        let { attributes } = data;
        // console.log("attributes =>", attributes);
        attributes = attributes.sort((a, b) => a.trait_type - b.trait_type);
        attributes.forEach((attr) => {
          atrStr += attr.trait_type + attr.value;
        });
        let hash = sha1(atrStr);
        if (HashList[hash]) {
          console.warn(`${file} is duplicate`);
        }
        HashList[hash] = true;
      } catch (err) {
        console.log(`Error with file ${file}`, err);
      }
    });

    // console.log("HashList =>", HashList);
  } catch (err) {
    console.log("err =>", err);
  }
};

// moveFiles('Pre Gen Images/', 'build/images/');
moveFiles("Pre Gen Metadata/", "build/json/");
// removeNoneAttribute();
// addCollectionsField();
// updateRoyalities();
// updateMagicEdenRoyalities();
// prepareUploadFiles();
// renumberFiles();
// rekeyUploadedJSON();
// createCombinedMetadata();
checkDupes();
