import {test} from '@playwright/test';

test('upload',async({page})=>{

    await page.goto("https://demoqa.com/upload-download");
    await page.locator('#uploadFile').setInputFiles('./Screenshot/dropdownscreenshot.jpeg');
    //page.locator('#uploadFile').setInputFiles('"C:\\Users\\harip\\Downloads\\WhatsApp Image 2026-11-22 at 6.50.59 PM.jpeg"')
    //await page.setInputFiles('#uploadFile','./Screenshot/facebook.jpeg');
    await page.locator('#uploadFile').setInputFiles([]);
   // page.waitForTimeout(3000);
});

test('Multiple files',async({page})=>{

    await page.goto('https://uploadnow.io/en');
    await page.locator('[type="file"]').setInputFiles
    (['./Screenshot/134351292467304564.jpg'
        ,'./Screenshot/134351292499322882.jpg']);

});


test('Upload Multiple files',async({page})=>{
    await page.goto('https://www.file.io/');
    await page.locator('#select-files-input').setInputFiles(
        ['./Screenshot/134351292467304564.jpg'
        ,'./Screenshot/134351292499322882.jpg']);
        
});

test('Download',async({page})=>{

    await page.goto('https:/demoqa.com/upload-download');

    const [download_file]=await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button',{name:"Download"}).click()

    ]);

    await download_file.saveAs(
        './Download/'+await download_file.suggestedFilename());
    //await download_file.saveAs('./Download/image.jpg);

});