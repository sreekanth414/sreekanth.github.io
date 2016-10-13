angular.module('ionosApp', [])
	.controller('mainContoller', mainContoller);

mainController.$inject = ['$scope']
function mainController($scope) {
	var vm = this;
	
	vm.hi = 'hi there';
}