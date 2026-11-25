
import { test } from '@playwright/test'

test('singleDropdown', async ({ page }) => {

    await page.goto('https://www.testautomationcentral.com/demo/dropdown.html');
    await page.locator('//button[@data-target="simple-dropdown"]').click();
    await page.locator('.form-select').selectOption({ value: 'option1' });

})

test('styledDropdown', async ({ page }) => {

    await page.goto('https://www.testautomationcentral.com/demo/dropdown.html');
    await page.getByText('Simple Dropdown').click();
    await page.locator('.form-select').selectOption({ value: 'option1' });

})

test('multiDropdown', async ({ page }) => {

    await page.goto('https://www.testautomationcentral.com/demo/dropdown.html');
    await page.getByRole('button', { name: 'Multi-Select' }).click();
    await page.locator('.form-multiselect').selectOption([{ index: 0 }, { index: 2 }, { index: 4 }]);

})
