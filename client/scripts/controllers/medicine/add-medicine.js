'use strict';

/**
 * @ngdoc function
 * @name jewelleryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jewelleryApp
 */
angular.module('kamakshiJewellersApp')
	.controller('AddMedicineCtrl', function ($scope, $rootScope, $http, $location, $timeout, $routeParams) {

		$scope.Update = false;
		$scope.Add = true;

		$scope.medicine = {};
	
		$http.get('/api/CategoryNames').then(function (resp) {
			console.log("resp", resp)
			$scope.categoryNames = resp.data;
		})

		$scope.medicineSave = function (obj) {
			console.log("obj", obj)
			$http.post('/api/medicines', obj).then(function (resp) {
				console.log("resp", resp)
				if (resp.status == 200) {
					$scope.medicine = {};
					$scope.Medicine.$setPristine();
					$scope.Medicine.$setUntouched();

					$timeout(function () {
						$location.path('/view-medicine')
					}, 500)

				}
			})
		}


	});
