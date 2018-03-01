const puppeteer = require('puppeteer');

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function run() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });

  const MENU_SELECTOR = 'body > section.site-header > section > div';
  await page.click(MENU_SELECTOR);
  console.log("clicked MENU SELECTOR");

  const APPLY_FOR_LOAN_SELECTOR = 'body > section.site-header > section > footer > section > div:nth-child(2) > a';
  await page.click(APPLY_FOR_LOAN_SELECTOR);
  console.log("clicked APPLY FOR LOAN");

  await sleep(2000);

  await page.click('[data-test="first-name"]');
  console.log("clicked FIRST NAME");
  await page.keyboard.type('Art');
  console.log("typed Art");

  await page.click('[data-test="last-name"]');
  await page.keyboard.type('Yule');

  const randomNumber = Math.floor(Math.random() * 5000)
  await page.click('[data-test="email"]');
  await page.keyboard.type(`andrew.dixon+${randomNumber}@lendstreet.com`);

  await page.click('[data-test="cell-phone"]');
  await page.keyboard.type('555-555-5555');

  await page.click('[data-test="street-address"]');
  await page.keyboard.type('600 Comet');

  await page.click('[data-test="city"]');
  await page.keyboard.type('Houston');

  await page.select('[data-test="state"]', '44');

  await page.click('[data-test="zip"]');
  await page.keyboard.type('77210');

  await page.select('[data-test="time-at-address"]', '16');

  await page.select('[data-test="month-of-birth"]', '0');
  await page.select('[data-test="day-of-birth"]', '8');
  await page.select('[data-test="year-of-birth"]', '23');

  await page.click('[data-test="social-security-number"]');
  await page.keyboard.type('666-20-6611');

  await page.select('[data-test="co-borrower"]', '1');
  await page.click('[data-test="next"]');

  await page.keyboard.press('Enter');
  await sleep(2000);

  await page.select('[data-test="employment-status"]', '2');

  await page.click('[data-test="monthly-net-income"]');
  await page.keyboard.type('5000');

  await page.select('[data-test="housing"]', '0');

  await page.click('[data-test="monthly-housing-cost"]');
  await page.keyboard.type('3000');

  await page.click('[data-test="amount-owed"]');
  await page.keyboard.type('45000');

  await page.click('[data-test="retirement-savings"]');
  await page.keyboard.type('20000');

  await page.select('[data-test="debt-program"]', '3');

  await page.click('[data-test="terms"]');
  await page.click('[data-test="information-sharing"]');
  await page.click('[data-test="synapse-privacy"]');
  await page.click('[data-test="credit-report-consent"]');

  await page.click('[data-test="next"]');
  await page.keyboard.press('Enter');
}

run();
