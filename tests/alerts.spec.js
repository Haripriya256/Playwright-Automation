import {test} from '@playwright/test';

test('Alerts', async ({page}) => {
    await page.goto('https://demo.automationtesting.in/Alerts.html');
    page.on('dialog', async (Dialog) => {
        console.log(Dialog.message());
        console.log(Dialog.type());
       // await page.waitForTimeout(2000);
       if(Dialog.type() === 'alert'){
           Dialog.accept();
       }else if(Dialog.type() === 'confirm'){
              Dialog.dismiss(); 
       }else if(Dialog.type() === 'prompt'){
              Dialog.accept('Haripriya');
       }
    });


   //Simple alert
   await page.locator("//button[contains(text(),'alert box:')]").click();

   //Confirm alert
   await page.getByRole('link', { name: 'Alert with OK & Cancel' }).click();
   await page.getByText('click the button to display a confirm box').click();

   //Prompt alert
   //await page.getByText('Alert with Textbox ').click();
   await page.getByRole('link', { name: 'Alert with Textbox ' }).click();
   await page.getByText('click the button to demonstrate the prompt box').click();

   await page.waitForTimeout(2000);
});

test('Handling DOM Popus', async ({page}) => {  

    await page.goto('https://www.flipkart.com/');

    try{

        (await page.waitForSelector('.b3wTlE',{timeout: 5000})).click();
        //await page.click('.b3wTlE');

    }catch(e){
        console.log("Popup not found");
    }

    await page.locator("//span[text()='Cart']").click();

});

test('MakeMyTrip', async ({page}) => {  

    await page.goto('https://www.makemytrip.com/');

    try{

        (await page.waitForSelector('.b3wTlE',{timeout: 5000})).click();

    }catch(e){
        console.log("Popup not found");
    }

    await page.locator("//span[text()='Cart']").click();

});