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

test('Frame Handle', async ({page}) => {

    await page.goto("https://globalsqa.com/demo-site/frames-and-windows/#iFrame");
    const frame=page.frameLocator("//iframe[@class=' lazyloaded']");
    await frame.locator("//img[@alt='JMeter Training']").click();
    await frame.locator("//div[@id='mobile_menu_toggler']").click();
    await frame.getByRole('link', { name: 'About' }).click();
    await frame.getByRole('link', { name: 'Load More' }).click();
    await page.getByText('Sortable').click();

});

test('Nested Frame', async ({page}) => {

    await page.goto("https://www.hyrtutorials.com/p/frames-practice.html#google_vignette");
    const frame=page.frameLocator("#frm1");
    await frame.locator("//select[@id='course']").selectOption({value:'java'});
    const frame2=page.frameLocator("#frm2");
    await frame2.locator("#firstName").fill("Haripriya");
    await frame2.locator("#lastName").fill("S");
    await frame2.locator("#femalerb").check();
    //await frame2.locator("//input[@id='femalerb']").check();
    await frame2.locator("#englishchbx").check();
    await frame2.locator("//input[@placeholder='Enter Email']").fill("haripriyashankar65@gmail.com");
    frame2.locator("//input[@placeholder='Enter Password']").fill("Haripriya@123");
    await frame2.locator("//button[@id='registerbtn']").click();
    const frame3=page.frameLocator("#frm3");
    const frame3_1=frame3.frameLocator("#frm1");
    const frame3_2=frame3.frameLocator("#frm2");

    //frame1
    await frame3_1.locator("//select[@id='course']").selectOption({value:'java'});
    //await frame3_1.locator("//select[@id='course']").selectOption({value:'java'});

    //frame2
    await frame3_2.locator("#firstName").fill("Haripriya");
    await frame3_2.locator("#lastName").fill("S");
    await frame3_2.locator("//input[@id='femalerb']").check();
    await frame3_2.locator("#englishchbx").check();
    await frame3_2.locator("//input[@placeholder='Enter Email']").fill("haripriyashankar65@gmail.com");
    await frame3_2.locator("//input[@placeholder='Enter Password']").fill("Haripriya@123");
    await frame3_2.locator("//button[@id='registerbtn']").click();
});