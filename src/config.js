const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

var seedrandom = require("seedrandom");
seedrandom("Your seed here", { global: true });

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Kujira Hero";
const description = "Alone you can go fast but together we can go far!";
const baseUri = "";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

const layerConfigurations = [
  {
    growEditionSizeTo: 1680,
    layersOrder: [
      { name: "Male Gender", options: { displayName: "Gender" } },
      { name: "Background" },
      { name: "Male Body Items", options: { displayName: "Body Items" } },
      { name: "Male Bot", options: { displayName: "Bot" } },
      { name: "Male Legs", options: { displayName: "Legs" } },
      { name: "Male Body", options: { displayName: "Body" } },
      { name: "Male Forces", options: { displayName: "Forces" } },
      { name: "Male Hands", options: { displayName: "Hands" } },
      { name: "Male Head", options: { displayName: "Head" } },
    ],
  },
  {
    growEditionSizeTo: 3360,
    layersOrder: [
      { name: "Female Gender", options: { displayName: "Gender" } },
      { name: "Background" },
      { name: "Female Body Items", options: { displayName: "Body Items" } },
      { name: "Female Bot", options: { displayName: "Bot" } },
      { name: "Female Legs", options: { displayName: "Legs" } },
      { name: "Female Body", options: { displayName: "Body" } },
      { name: "Female Forces", options: { displayName: "Forces" } },
      { name: "Female Hands", options: { displayName: "Hands" } },
      { name: "Female Head", options: { displayName: "Head" } },
    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 2000,
  height: 2000,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
