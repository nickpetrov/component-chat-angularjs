export default runApp;
function runApp($transitions, loginService) {
  $transitions.onStart({to: '*'}, () => {
    loginService.isAuthenticated();
  });
}
