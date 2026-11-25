import {test} from '@playwright/test';

test('Launch application', async({page})=>{
    await page.goto('https://www.flipkart.com/');
    const title=await page.title();
    console.log(title);
    const url=await page.url();
    console.log(url);
    await page.goto('https://www.instagram.com/');
    const instaTitle=await page.title();
    console.log(instaTitle);
    const instaUrl=await page.url();
    console.log(instaUrl);
    await page.goBack();
    console.log(page.url());
});

test('Launch the applications1',async({page})=>{
    await page.goto('https://www.amazon.in/');
    await page.goto('https://www.makemytrip.com/');
    const mmttitle=await page.title();
    console.log(mmttitle);
    await page.goto('https://www.facebook.com/');
    await page.goBack();
    await page.goback();
    

});