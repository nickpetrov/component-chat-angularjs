export class LoginService {
  /** @ngInject */
  constructor($timeout, $state, $http, $log) {
    this.$log = $log;
    this.$timeout = $timeout;
    this.$state = $state;
    this.$http = $http;
    this.user = {};
    this.user.name = '';
  }

  login() {
    this.$http({
      method: 'GET',
      url: 'https://randomuser.me/api/'
    }).then(response => {
      const user = {};
      user.name = this.user.name;
      user.avatar = response.data.results[0].picture.thumbnail;
      this.setUser(angular.toJson(user));
      this.$state.go('chat');
    }, error => this.$log.log('[error]', error));
  }

  logout() {
    localStorage.removeItem('user');
    this.$state.go('login');
  }

  setUser(user) {
    localStorage.setItem('user', user);
    this.user = angular.fromJson(user);
  }

  setUserName(name) {
    this.user.name = name;
  }

  getUser() {
    return this.user;
  }

  isAuthenticated() {
    this.$timeout(() => {
      if (localStorage.getItem('user')) {
        this.setUser(localStorage.getItem('user'));
        this.redirect('chat');
      } else {
        this.redirect('login');
      }
    });
  }

  redirect(state) {
    switch (state) {
      default:
        this.$state.go(state);
    }
  }

}
