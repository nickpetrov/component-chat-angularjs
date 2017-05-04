class ChatFormController {
  constructor(loginService) {
    this.loginService = loginService;
    this.editing = false;
  }

  logout() {
    this.loginService.logout();
  }
}

export const ChatForm = {
  template: require('./ChatForm.html'),
  controller: ChatFormController
};
