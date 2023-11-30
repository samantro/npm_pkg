const sharp = require('sharp');

const sharper = async (req, res) => {
        try {

                // craete the boiler image 
                // const newImage = await sharp({
                //     create: {
                //         width: 1200,
                //         height: 1200,
                //         channels: 4,
                //         background: "blue" // { r: 255, g: 0, b: 0, alpha: 0.5 }

                //     }
                // }).png().toFile("output/newimage.png");

                // resize image
                // const newImage = await sharp("images/work.png").resize(1000, 300).toFile("output/newimage.png");

                // information of the image
                const newImage = await sharp("./images/work.png").metadata();
                // console.log(newImage);

                // modulate the image
                // const newImage = await sharp("images/work.png").modulate({
                //     brightness: 1,
                //     saturation: 0.6,
                //     hue: 140,
                // }).png().blur().toFile("output/newimage.png");
                res.send(newImage);
        } catch (e) {
                console.log(e.message);
        }
};

module.exports = sharper;