class ChatInputTextController {
  /** @ngInject */
  constructor(apiService) {
    this.apiService = apiService;
    this.msgBox = {};
    this.msgBox.msg = '';
  }

  send() {
    this.apiService.send(this.msgBox);
    this.msgBox = {};
  }
}

export const ChatInputText = {
  template: require('./ChatInputText.html'),
  controller: ChatInputTextController
};
