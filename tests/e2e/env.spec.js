// @ts-check
const { test, expect } = require('@playwright/test');

// Single test.
// test( 'should be logged in', async ( { page } ) => {

// } );

// Test suit.
test.describe( 'Wordpress environment test', () => {
    test( 'Admin dashboard is live', async ({ page }) => {
    await page.goto( '/wp-admin/' );

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Log In/);

    // create locators
    await page.getByLabel( 'Username or Email Address' ).fill( 'admin' );
    await page.getByLabel( 'Password' ).fill( 'admin' );

    await page.locator( '#wp-submit' ).click();

    // Expects the URL to contain intro.
    await expect( page ).toHaveURL( /wp-admin/ );

    await expect( page.locator( '#wpbody-content h1' ) ).toHaveText( 'Dashboard' );

    // await expect( page.locator( '#adminmenu .wp-menu-name' ) ).toHaveText( 'Dokan' );

    } );
} );



// test('WordPress Environment Tests', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);

//   // create a locator
//   const getStarted = page.getByText('Get Started');

//   // Expect an attribute "to be strictly equal" to the value.
//   await expect(getStarted).toHaveAttribute('href', '/docs/intro');

//   // Click the get started link.
//   await getStarted.click();

//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/);
// });
