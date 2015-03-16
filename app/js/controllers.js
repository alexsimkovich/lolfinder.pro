
/**
 * Created by Alex.Simkovic on 16.03.2015.
 */
var LF = angular.module('LF', []);

LF.controller('ServerList', function ($scope) {
  $scope.servers = [
    {'name':'euw', 'title':'Europe West'},
    {'name':'eune','title':'Europe Nordic & East'},
    {'name':'ru','title':'Russia'},
    {'name':'br', 'title':'Brazil'},
    {'name':'tr','title':'Turkey'},
    {'name':'kr', 'title':'Korea'},
    {'name':'lan','title':'Latin America North'},
    {'name':'las', 'title':'Latin America South'},
    {'name':'na', 'title':'North America'},
    {'name':'oce','title':'Oceania'}
  ];
});