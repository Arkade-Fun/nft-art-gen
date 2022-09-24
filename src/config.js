const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Looney Bulls";
const description = "That's all bulls!";
const baseUri = "ipfs://uri";

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
    growEditionSizeTo: 125,
    layersOrder: [
      { name: "Background" },
      { name: "Shadow" },
      {
        name: "Hands On Side",
        options: {
          displayName: "Body",
        },
      },
      {
        name: "Hands On Side Outfit",
        options: {
          displayName: "Outfit",
        },
      },
      { name: "Eyes" },
      { name: "Mouth" },
      { name: "Head" },
      { name: "Overlay" },
    ],
  },
  {
    growEditionSizeTo: 200,
    layersOrder: [
      { name: "Background" },
      { name: "Shadow" },
      {
        name: "Arms Crossed",
        options: {
          displayName: "Body",
        },
      },
      {
        name: "Arms Crossed Outfit",
        options: {
          displayName: "Outfit",
        },
      },
      { name: "Eyes" },
      { name: "Mouth" },
      { name: "Head" },
      { name: "Overlay" },
    ],
  },
  {
    growEditionSizeTo: 250,
    layersOrder: [
      { name: "Background" },
      { name: "Shadow" },
      {
        name: "Hands Up",
        options: {
          displayName: "Body",
        },
      },
      {
        name: "Hands Up Outfit",
        options: {
          displayName: "Outfit",
        },
      },
      { name: "Eyes" },
      { name: "Mouth" },
      { name: "Head" },
      { name: "Overlay" },
    ],
  },
  {
    growEditionSizeTo: 310,
    layersOrder: [
      { name: "Background" },
      { name: "Shadow" },
      {
        name: "Running",
        options: {
          displayName: "Body",
        },
      },
      {
        name: "Running Outfit",
        options: {
          displayName: "Outfit",
        },
      },
      {
        name: "Running Accessory",
        options: {
          displayName: "Item",
        },
      },
      { name: "Eyes" },
      { name: "Mouth" },
      { name: "Head" },
      { name: "Overlay" },
    ],
  },
  {
    growEditionSizeTo: 334,
    layersOrder: [
      { name: "Background" },
      { name: "Shadow" },
      {
        name: "Tip Toe",
        options: {
          displayName: "Body",
        },
      },
      {
        name: "Tip Toe Outfit",
        options: {
          displayName: "Outfit",
        },
      },
      { name: "Eyes" },
      { name: "Mouth" },
      { name: "Head" },
      { name: "Overlay" },
    ],
  },
  {
    growEditionSizeTo: 340,
    layersOrder: [{ name: "Special Edition" }],
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
