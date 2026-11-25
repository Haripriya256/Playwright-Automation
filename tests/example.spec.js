import{test} from '@playwright/test';

test("Lanuch the filpkart application",async({page})=>{

  await page.goto("https://www.flipkart.com/");
  await page.goto('https://www.facebook.com/');

});

test('open the instagram',async({page})=>{

  await page.goto('https://www.instagram.com/');
  const titleinsta=await page.title();
  const instaurl=await page.url();
  console.log(titleinsta);
  console.log(instaurl);
  await page.screenshot({path:'C:\\Users\\harip\\OneDrive\\Documents\\JavaScriptDemo\\screenshot\\insta.png'});
  await page.screenshot({path:'./screenshot/insta1.png'});
  await page.goto('https://www.facebook.com/');
  const title=await page.title();
  const url=await page.url();
  console.log(title);
  console.log(url);
  await page.screenshot({path:'./screenshot/facebook.png'});
  await page.goBack();
  await page.goForward();
  await page.reload();

});