class LoginItemController {
  constructor(loginService) {
    this.loginService = loginService;
    this.editing = false;
  }

  login() {
    this.loginService.login();
  }
}

export const LoginItem = {
  template: require('./LoginItem.html'),
  controller: LoginItemController
};
