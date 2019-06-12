const { Sketch } = require('sketch-constructor');
const fs = require('fs');

Sketch.fromFile(`${process.cwd()}/design/design-spec.sketch`)
  .then((sketch) => {
    let colors = sketch
      .getLayerStyles()
      .reduce((obj, item) => {
        obj[item.name] = `#${item.value.fills[0].color.toHex()}`
        return obj
      }, {})

    const colorObject = {
      "color": {
        "base": colors
      }
    }

    // console.log(colorObject)
    fs.writeFile("./properties/color/base.json", JSON.stringify(colorObject, null, 2), function(err) {
      if(err) return console.log(err)
      console.log("The file was saved!")
    }); 
  });

