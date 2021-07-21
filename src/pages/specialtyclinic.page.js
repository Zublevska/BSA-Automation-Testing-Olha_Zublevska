const { Button, Link } = require('../elements');

class SpecialtyclinicPage {
    constructor() {
        this.profileLink = new Link('a[href="/user-profile/10b17307-24a9-4893-a841-4f3b5a0899e2"]');

        this.specialtyDdl = new Button('div.selectStyles__control', 0);
        this.clinicDdl = new Button('div.selectStyles__control', 1);

        this.ddlOption = new Button('div.selectStyles__option=TEXT_TO_REPLACE');

        this.firstsaveButton = new Button('button[type="submit"]', 0);
        this.secondsaveButton = new Button('button[type="submit"]', 1);
    }
    
    async editspecialtyclinic({ specialty, clinic }) {
        await this.profileLink.click();

        await this.specialtyDdl.click();
        await this.ddlOption.clickByText(specialty);
        
        await this.clinicDdl.click();
        await this.ddlOption.clickByText(clinic);
        
        await this.firstsaveButton.click();
        await this.secondsaveButton.click();
  }
}

module.exports = { SpecialtyclinicPage };