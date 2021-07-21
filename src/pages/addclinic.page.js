const { Button, Input, Link } = require('../elements');

class AddClinicPage {
    constructor() {
        this.link = new Link('a[href="/clinics"]');
        this.addButton = new Button('button.styles_btn___s1BB.styles_without-border__3Vbp3.styles_primary-dark__1WnyR');
        
        this.clinicnameField = new Input('input[name="name"]');
        this.addressField = new Input('input[name="address"]');

        this.statusDdl = new Button('div.selectStyles__control', 0);
        this.cityDdl = new Button('div.selectStyles__control', 1);

        this.ddlOption = new Button('div.selectStyles__option=TEXT_TO_REPLACE');

        this.addfinButton = new Button('button[type="submit"]');
    }

async addclinic({ name, address, status, city }) {
    await this.link.click();
    await this.addButton.click();

    await this.clinicnameField.setValue(name);
    await this.addressField.setValue(address);

    await this.statusDdl.click();
    await this.ddlOption.clickByText(status);
        
    await this.cityDdl.click();
    await this.ddlOption.clickByText(city);

    await this.addfinButton.click();
  }
}

module.exports = { AddClinicPage };