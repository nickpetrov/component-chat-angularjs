class ChatContentController {
  /** @ngInject */
  constructor($scope, apiService) {
    this.apiService = apiService;
    this.chatContent = apiService.get('chatContent');

    apiService.simulate(15000);
    apiService.watch($scope, 'chatContent', () => {
      this.chatContent = apiService.get('chatContent');
    });
  }
}

export const ChatContent = {
  template: require('./ChatContent.html'),
  controller: ChatContentController
};
