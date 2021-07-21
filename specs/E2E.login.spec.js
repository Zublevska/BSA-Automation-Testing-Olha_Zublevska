const { App } = require('../src/pages');

const app = new App();

describe('Autorization:', function () {
  beforeEach(async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');
  });

  afterEach(async function () {
    await browser.reloadSession();
  });

 
  it('should be able to log in', async function () {
    await app.authPage.login({
      email: 'jane123smith@gmail.com',
      password: 'Pa55word'      
    });

    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/doctors';
      },
      { timeout: 5000 },
    );

    expect(browser).toHaveUrl('http://46.101.234.121/doctors');
  });


  it('should not be able to log in', async function () {
    await app.authPage.login({
      email: '1@gmail.com',
      password: 'Pa55word'      
    });

    await browser.waitUntil(
      async function () {
        const errorMessage = await $('div.rrt-text=Email is incorrect');
        return errorMessage;
      },
      { timeout: 5000 },
    );

    const errorMessage = await $('div.rrt-text=Email is incorrect');
    expect(errorMessage).toBeDisplayed();
  });
});
