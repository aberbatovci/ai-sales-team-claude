const { chromium } = require('playwright-core');
const path = require('path');
(async () => {
  const [src, out, scale] = [process.argv[2], process.argv[3], Number(process.argv[4] || 1)];
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
  const page = await browser.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: scale });
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
  await page.goto('file://' + path.resolve(src));
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(300);
  await page.screenshot({ path: out, clip: { x: 0, y: 0, width: 1080, height: 1920 } });
  if (errors.length) console.log('ERRORS:', errors.join('\n'));
  await browser.close();
})();
