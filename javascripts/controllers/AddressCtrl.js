"use strict";

app.controller("AddressCtrl", ($scope, ItemFactory) => {
	$scope.welcome = "hello";
	$scope.showListView = true;
	$scope.newTask = {};
	$scope.items = [];

	let getItems = function(){
		ItemFactory.getItemList().then(function(fbItems) {
			console.log("items from controller", fbItems);
			$scope.items = fbItems;
		});
	};
	
	getItems();
	$scope.allItems = () => {
		$scope.showListView = true;
	};	

	$scope.newItem = () => {
		console.log("you clicked here");
		$scope.showListView = false;
	};

	$scope.newItem = () => {
		$scope.newTask.isCompleted = false;
		console.log("hello");
		ItemFactory.postNewItem($scope.newTask).then((itemId) => {
			getItems();
			$scope.newTask = {};
			$scope.showListView = true;
     });
    };

});