import {test,chromium} from '@playwright/test';

test('Browser launch',async()=>{

    const browser=await chromium.launch();
    const context=await browser.newContext();
    const context2=await browser.newContext();
    const page3=await context2.newPage();
    const page4=await context2.newPage();
    const page1=await context.newPage();
    const page2=await context.newPage();
    await page1.goto('https://www.google.com/');
    await page2.goto('https://www.github.com/');
    await page3.goto('https://www.stackoverflow.com/');
    await page4.goto('https://www.linkedin.com/');

});