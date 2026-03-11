/**
 * Generate OG image for social sharing (Telegram, VK, etc.)
 * 1200x630px — standard Open Graph dimensions
 * Palette: teal #51A8AF background + orange #E07830 accents
 */

const { createCanvas, loadImage } = require("canvas");
const fs = require("fs");
const path = require("path");

const LOGO_PATH = path.join(__dirname, "..", "the_raki_R.png");
const OUTPUT_PATH = path.join(__dirname, "og-image.png");

async function generate() {
  const W = 1200;
  const H = 630;
  const c = createCanvas(W, H);
  const ctx = c.getContext("2d");

  // Background — brand teal
  ctx.fillStyle = "#51A8AF";
  ctx.fillRect(0, 0, W, H);

  // Subtle gradient overlay
  const grad = ctx.createLinearGradient(0, 0, W, H);
  grad.addColorStop(0, "rgba(255,255,255,0.08)");
  grad.addColorStop(1, "rgba(224,120,48,0.06)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  // Load and draw logo (original dark)
  const logo = await loadImage(LOGO_PATH);

  const logoH = 140;
  const logoW = (logo.width / logo.height) * logoH;
  const logoX = (W - logoW) / 2;
  const logoY = 120;

  ctx.drawImage(logo, logoX, logoY, logoW, logoH);

  // Main text — dark
  ctx.fillStyle = "#1a2e3b";
  ctx.font = "bold 48px -apple-system, BlinkMacSystemFont, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("Скачай приложение", W / 2, 340);

  // Subtext
  ctx.fillStyle = "rgba(26,46,59,0.7)";
  ctx.font = "24px -apple-system, BlinkMacSystemFont, sans-serif";
  ctx.fillText("Премиум раки и морепродукты с доставкой", W / 2, 390);

  // Cashback badge — orange
  const badgeText = "Кешбэк до 10%";
  ctx.font = "bold 22px -apple-system, BlinkMacSystemFont, sans-serif";
  const badgeW = ctx.measureText(badgeText).width + 48;
  const badgeX = (W - badgeW) / 2;
  const badgeY = 430;

  const badgeGrad = ctx.createLinearGradient(badgeX, badgeY, badgeX + badgeW, badgeY + 44);
  badgeGrad.addColorStop(0, "#E07830");
  badgeGrad.addColorStop(1, "#e89050");
  ctx.fillStyle = badgeGrad;

  // Rounded rect
  const r = 22;
  ctx.beginPath();
  ctx.moveTo(badgeX + r, badgeY);
  ctx.lineTo(badgeX + badgeW - r, badgeY);
  ctx.quadraticCurveTo(badgeX + badgeW, badgeY, badgeX + badgeW, badgeY + r);
  ctx.lineTo(badgeX + badgeW, badgeY + 44 - r);
  ctx.quadraticCurveTo(badgeX + badgeW, badgeY + 44, badgeX + badgeW - r, badgeY + 44);
  ctx.lineTo(badgeX + r, badgeY + 44);
  ctx.quadraticCurveTo(badgeX, badgeY + 44, badgeX, badgeY + 44 - r);
  ctx.lineTo(badgeX, badgeY + r);
  ctx.quadraticCurveTo(badgeX, badgeY, badgeX + r, badgeY);
  ctx.closePath();
  ctx.fill();

  // Badge text — white on orange
  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";
  ctx.fillText(badgeText, W / 2, badgeY + 31);

  // Bottom line
  ctx.fillStyle = "rgba(26,46,59,0.4)";
  ctx.font = "16px -apple-system, BlinkMacSystemFont, sans-serif";
  ctx.fillText("theraki.ru  ·  +7 (980) 888 05 88", W / 2, 550);

  // Decorative line — orange
  ctx.strokeStyle = "rgba(224,120,48,0.4)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(W / 2 - 40, 510);
  ctx.lineTo(W / 2 + 40, 510);
  ctx.stroke();

  // Save
  const buf = c.toBuffer("image/png");
  fs.writeFileSync(OUTPUT_PATH, buf);
  console.log(`og-image.png generated (${Math.round(buf.length / 1024)}KB)`);
}

generate().catch(console.error);
