var App = angular.module('controllers', []);

App.controller('ReadCtrl', function($scope, Tipo, $route){
	$scope.tipo = [];
	$scope.notFound = false;
	Tipo.list().then(function(data){
		$scope.tipo = data.data;
		if(data.data.length == 0){
			$scope.notFound = true;
		}
	},function(data){
		console.log("data", data);
	});

	$scope.deletar = function(id){
		Tipo.delete(id).then(function(data){
			console.log(data);
			$route.reload();
		});	
	}
});	

App.controller('CreateCtrl', function($scope, Tipo, $location){
	 $scope.descricao = 'Descricao';
	
	$scope.cadastrar = function(){
		var data = {
			"descricao":  $scope.descricao
		};
		console.log('objeto pra salvar '. data);

		Tipo.create(data).then(function(data){
			$location.path('/');
		});
	}
});	

App.controller('EditCtrl', function($scope, Tipo, $routeParams, $location){
	var id = $routeParams.id;
	console.log('=================meu id', id);
	Tipo.profile(id).then(function(data){
		$scope.item = data.data;
	})

	$scope.atualizar = function(item){
		console.log(item);
		Tipo.update(item, item.id).then(function(data){
			$location.path('/');
		});
	}
});	
