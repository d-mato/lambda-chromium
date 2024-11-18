import { chromium } from "playwright";

export async function handler(e) {
  const browser = await chromium.launch({
    executablePath: process.env.CHROMIUM_PATH,
    args: [
      "--headless",
      "--no-sandbox",
      "-–disable-dev-shm-usage",
      "--disable-gpu",
      "--no-zygote",
      "--single-process",
    ],
  });
  const page = await browser.newPage();
  await page.goto("https://example.com");
  const title = await page.title();

  return {
    statusCode: 200,
    body: JSON.stringify({ title }),
  };
}
