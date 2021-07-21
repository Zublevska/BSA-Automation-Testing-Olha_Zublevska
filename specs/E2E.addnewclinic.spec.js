const { expect } = require('chai');

const { App } = require('../src/pages');
const rundomNumber = () => Date.now();

const app = new App();

describe('New Clinic Adding:', function () {
  beforeEach(async function () {
    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');
    await app.authPage.login({
      email: 'john_admin1@admin.com',
      password: 'Pa55word'      
    });
  });

  afterEach(async function () {
    await browser.reloadSession();
  });
 
  it('should be able to add new clinic', async function () {
    await app.addclinicPage.addclinic({
      name: `Medlife${rundomNumber()}`, 
      address: 'Baltimore Str, 22', 
      status: 'private', 
      city: 'Boston, MA', 
    });

    await browser.waitUntil(
      async function () {
        const newClinic = await $$('span[class="styles_title__3xRcc"]');
        return newClinic = 'Medilife';
      },
      { timeout: 5000 },
    );
    
    const newClinic = await $$('span[class="styles_title__3xRcc"]');
    expect(newClinic).to.include('Medlife');

  }); 
});
