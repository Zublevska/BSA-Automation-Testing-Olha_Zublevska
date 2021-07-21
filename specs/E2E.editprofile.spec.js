const { App } = require('../src/pages');

const app = new App();

describe('Profile Editing:', function () {
  beforeEach(async function () {
    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');
    await app.authPage.login({
      email: 'john_admin2@admin.com',
      password: 'Pa55word'      
    });
  });

  afterEach(async function () {
    await browser.reloadSession();
  });

  it('should be able to change profile data', async function () {
    await app.profilePage.editprofile({
      surname: 'Watson'     
    });

    await browser.waitUntil(
      async function () {
        const mySurname = await $('input[name="surname"]');
        return mySurname;
      },
      { timeout: 5000 },
    );
    
    const mySurname = await $('input[name="surname"]');
    expect(mySurname).toHaveValueContaining('Watson');
  }); 
});
