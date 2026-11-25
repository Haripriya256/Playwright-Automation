import {test} from '@playwright/test';

test('Launch amazon',async({page})=>
{
    await page.goto('https://www.amazon.com/');

});