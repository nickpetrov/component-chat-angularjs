class LoginTextInputController {
  /** @ngInject */
  constructor(loginService) {
    this.loginService = loginService;
    this.user = '';
  }

  setUser() {
    this.loginService.setUserName(this.user);
  }
}

export const LoginTextInput = {
  template: require('./LoginTextInput.html'),
  controller: LoginTextInputController
};
