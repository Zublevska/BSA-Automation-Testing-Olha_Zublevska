const { Button, Input, Link } = require('../elements');

class ProfilePage {
    constructor() {
        this.profileLink = new Link('a[href="/user-profile/10b17307-24a9-4893-a841-4f3b5a0899e2"]');
        this.editProfileButton = new Button('button[class="styles_btn___s1BB styles_medium-round__3KyFO styles_gray-light__3fTxu styles_edit__ftuHl"]');
        this.surnameField = new Input('input[name="surname"]');
        this.editButton = new Button('div.styles_editContainer__3utW5');
    }

async editprofile({ surname }) {
    await this.profileLink.click();
    await this.editProfileButton.click();
    await this.surnameField.setValue(surname);
    await this.editButton.click();
  }
}

module.exports = { ProfilePage };