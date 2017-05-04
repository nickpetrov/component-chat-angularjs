import * as moment from 'moment';

export class ApiService {
  /** @ngInject */
  constructor($log, $interval, $timeout, $http, loginService) {
    this.$log = $log;
    this.$timeout = $timeout;
    this.$interval = $interval;
    this.loginService = loginService;
    this.$http = $http;
    this.chatContent = [];
    this.$http({
      method: 'GET',
      url: 'chump.json'
    }).then(response => {
      this.chump = response.data;
    }, error => this.$log.log('[error]', error));
  }

  get(key) {
    return this[key];
  }

  set(key, value) {
    this[key] = value;
  }

  watch($scope, key, onChange) {
    return $scope.$watch(
      () => {
        return this.get(key);
      },
      (newValue, oldValue) => {
        if (newValue !== oldValue) {
          $scope[key] = newValue;
          if (angular.isFunction(onChange)) {
            onChange(newValue, oldValue);
          }
        }
      },
      true
    );
  }

  send(msg) {
    msg.id = this.getRandom(0, 10000);
    msg.time = moment.default(new Date()).format('HH:mm:ss');
    this.user = this.loginService.getUser();
    msg.name = this.user.name;
    msg.avatar = this.user.avatar;
    this.chatContent.unshift(msg);
  }

  simulate(interval) {
    const max = interval * 0.66;
    const min = interval * 0.33;
    if (angular.isDefined(this.interval)) {
      return;
    }
    this.interval = this.$interval(() => {
      this.$timeout(() => {
        this.$http({
          method: 'GET',
          url: 'https://randomuser.me/api/'
        }).then(response => {
          const msg = this.chump[this.getRandom(0, this.chump.length)];
          msg.id = this.getRandom(0, 10000);
          msg.avatar = response.data.results[0].picture.thumbnail;
          msg.name = this.capitalize(response.data.results[0].name.first) + ' ' + this.capitalize(response.data.results[0].name.last);
          msg.time = moment.default(new Date()).format('HH:mm:ss');
          this.chatContent.unshift(msg);
        }, error => this.$log.log('[error]', error));
      }, this.getRandom(min, max));
    }, interval);
  }

  getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  capitalize(s) {
    return s && s[0].toUpperCase() + s.slice(1);
  }
}
