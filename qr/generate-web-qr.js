/**
 * Generate a small, clean QR code for embedding on the landing page.
 * Cream dots + gold corners on transparent background — for dark navy page.
 */

const { QRCodeStyling } = require("qr-code-styling/lib/qr-code-styling.common.js");
const nodeCanvas = require("canvas");
const { JSDOM } = require("jsdom");
const fs = require("fs");
const path = require("path");

const TARGET_URL = "https://app.theraki.ru";
const OUTPUT_SVG = path.join(__dirname, "output", "qr-web.svg");

async function generate() {
  const qr = new QRCodeStyling({
    jsdom: JSDOM,
    nodeCanvas,
    width: 200,
    height: 200,
    type: "svg",
    data: TARGET_URL,
    margin: 10,
    qrOptions: {
      errorCorrectionLevel: "M",
    },
    dotsOptions: {
      color: "#1a2e3b",
      type: "rounded",
    },
    cornersSquareOptions: {
      color: "#E07830",
      type: "extra-rounded",
    },
    cornersDotOptions: {
      color: "#1a2e3b",
      type: "dot",
    },
    backgroundOptions: {
      color: "transparent",
    },
  });

  const svgBlob = await qr.getRawData("svg");
  const svgString = svgBlob.toString();
  fs.writeFileSync(OUTPUT_SVG, svgString);
  console.log(`QR SVG saved (${svgString.length} bytes)`);
}

generate().catch(console.error);
