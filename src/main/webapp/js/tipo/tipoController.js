var App = angular.module('controllers', []);

App.controller('TipoCtrl', function($scope, TipoService, $route, EnvioService){
	$scope.tipo = [];
	$scope.tipoEditar = {};
	$scope.notFound = false;
	TipoService.list().then(function(data){
		$scope.tipo = data.data;
		if(data.data.length == 0){
			$scope.notFound = true;
		}
	},function(data){
		console.log("data", data);
	});
	$scope.tipoEditar = EnvioService.getParametro();

	$scope.deletar = function(id){
		console.log('id para deletar', id);	
		TipoService.delete(id).then(function(data){
			console.log(data);
			
		});	
		$location.path('/tipo');
	}
	
	$scope.editar = function(item){
		$scope.tipoEditar = {};
		EnvioService.addParametro(item);
		$location.path('/edit');
	}

	$scope.atualizar = function(item){
		TipoService.update(item, item.idTipo).then(function(data){
				$location.path('/tipo');
			});
	}
});	

App.controller('TipoCreatCtrl', function($scope, TipoService, $location){
	 $scope.tipo = {
			 "descricao":  "descrição"
	 }
	
	$scope.cadastrar = function(){
		console.log('objeto para salvar', $scope.tipo);
		TipoService.create($scope.tipo).then(function(data){
			console.log('objeto recebido', data);
			$location.path('/tipo');
		});
		$location.path('/tipo');
	}
});	

