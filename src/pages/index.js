const { AuthPage } = require('./auth.page');
const { ProfilePage } = require('./profile.page');
const { SpecialtyclinicPage } = require('./specialtyclinic.page');
const { AddClinicPage } = require('./addclinic.page');

class App {
  constructor() {
    this.authPage = new AuthPage();
    this.profilePage = new ProfilePage();
    this.specialtyclinicPage = new SpecialtyclinicPage();
    this.addclinicPage = new AddClinicPage();
  }
}

module.exports = { App };
