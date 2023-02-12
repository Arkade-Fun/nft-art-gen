const PREBUILT = require("./prebuilt.json");

function predeterminedGen(layers, delimiter, layerConfigIndex, index) {
  //get prebuilt files from layer
  const LAYOUT = PREBUILT[layerConfigIndex]?.[index];
  if (!LAYOUT) return null;
  let keys = Object.keys(LAYOUT);
  //get layer
  const props = [];
  keys.forEach((key) => {
    let layer = layers.filter((layer) => layer.configName == key);
    let item = LAYOUT[key];
    let element = layer[0].elements.filter((ele) => ele.name == item);
    // console.log("element =>", element);
    if (!element.length) {
      throw new Error(`${item} not found in folder ${key}`);
    }
    props.push(`${element[0].id}:${element[0].filename}`);
  });
  return props.join(delimiter);
}

module.exports = { predeterminedGen };
