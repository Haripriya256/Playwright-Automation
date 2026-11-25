import {test} from '@playwright/test';

// test('Frame Handling', async ({page}) => {
//   await page.goto('https://globalsqa.com/demo-site/frames-and-windows/#iFrame');
//   const frame = page.frameLocator('iframe[class="lazyloaded"]');
//   await frame.locator('//h3[text()="HP LoadRunner Training"]').click();
//   //page.frameLocator('iframe[class="lazyloaded"]').
//   // locator('//h3[text()="HP LoadRunner Training"]').click();
//   //await page.waitForTimeout(1000);
//   await page.getByRole('link', { name: 'Tooltip'}).click();
// });

test('Multiple frames Handling', async ({page}) => {  
    
    await page.goto("https://practice-automation.com/iframes/");
    const frame1 = page.frameLocator('#iframe-1');
    await frame1.locator("//a[text()='MCP']").click();
    await frame1.locator("span[title='Installation']").click();

    const frame2 = page.frameLocator('#iframe-2');
    await frame2.locator("//span[text()='Documentation']").click();
    await frame2.locator("(//span[text()='WebDriver'])[1]").click();
    //await frame2.locator("//a[@href='/documentation/webdriver/']/span[text()='WebDriver']");

});

test.only('Frame Handle', async ({page}) => {

    await page.goto("https://globalsqa.com/demo-site/frames-and-windows/#iFrame");
    const frame=page.frameLocator("//iframe[@class=' lazyloaded']");
    await frame.locator("//img[@alt='JMeter Training']").click();


});