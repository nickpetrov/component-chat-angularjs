import angular from 'angular';
import 'moment';
import 'todomvc-app-css/index.css';

import {LoginService} from './app/login/login';
import {ApiService} from './app/api/api';
import {Login} from './app/containers/Login';
import {Chat} from './app/containers/Chat';
import {LoginTextInput} from './app/components/LoginTextInput';
import {LoginItem} from './app/components/LoginItem';
import {ChatForm} from './app/components/ChatForm';
import {ChatInputText} from './app/components/ChatInputText';
import {ChatContent} from './app/components/ChatContent';
import 'angular-ui-router';
import routesConfig from './routes';
import appRun from './run';

import './index.css';

angular
  .module('app', ['ui.router'])
  .config(routesConfig)
  .run(appRun)
  .service('loginService', LoginService)
  .service('apiService', ApiService)
  .component('login', Login)
  .component('chat', Chat)
  .component('chatInputText', ChatInputText)
  .component('chatContent', ChatContent)
  .component('loginTextInput', LoginTextInput)
  .component('loginItem', LoginItem)
  .component('chatForm', ChatForm)
  .run(appRun);
