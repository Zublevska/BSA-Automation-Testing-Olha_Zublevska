const { expect } = require('chai');

const { App } = require('../src/pages');

const app = new App();

describe('Specialty and Clinic Selection:', function () {
  beforeEach(async function () {
    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');
    await app.authPage.login({
      email: 'jane123smith@gmail.com',
      password: 'Pa55word'      
    });
  });

  afterEach(async function () {
    await browser.reloadSession();
  }); 
 
  it('should be able to select specialty and clinic', async function () {
    await app.specialtyclinicPage.editspecialtyclinic({
      specialty: 'dentist',
      clinic: 'UCSF Medical Center',    
    });

      
    await browser.waitUntil(
      async function () {
        const mySpecialty = await $('div[id="react-select-2-option-2"]');
        return mySpecialty === 'dentist';
      },
      { timeout: 5000 },
    );

    const mySpecialty = await $('div[id="react-select-2-option-2"]');
    expect(mySpecialty).to.be.eql('dentist');

    await browser.waitUntil(
      async function () {
        const myClinic = await $('div[id="react-select-3-option-4"]');
        return myClinic === 'UCSF Medical Center';
      },
      { timeout: 5000 },
    );

    const myClinic = await $('div[id="react-select-3-option-4"]');
    expect(myClinic).to.be.eql('UCSF Medical Center');
       
  }); 
});
