const fs = require('fs');
const PDFDocument = require('pdfkit');
const imageSize = require('image-size');

function convertImageToPDF(imagePath, pdfPath) {
    const doc = new PDFDocument();

    const { width, height } = imageSize.imageSize(imagePath);

    doc.addPage({ size: [width, height] });

    doc.image(imagePath, 0, 0, { width, height });

    doc.pipe(fs.createWriteStream(pdfPath));

    doc.end();

    console.log(`Conversion complete. PDF saved at: ${pdfPath}`);
}

const imagePath = './image/work.png'; // Replace with the path to your image
const pdfPath = './pdf/output.pdf';  // Replace with the desired output path

convertImageToPDF(imagePath, pdfPath);
