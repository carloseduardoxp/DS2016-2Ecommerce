var app = angular.module('categoriaModule',[]);
app.controller('categoriaControl',function($scope,$http) {
	
	url = 'http://127.0.0.1:8080/DS2016-2Ecommerce/rs/categoria';
	
	$scope.salvar = function() {    	
    	if ($scope.categoria.codigo == undefined || $scope.categoria.codigo == '') {    		
			$http.post(url,$scope.categoria).success(function(categoriaRetornada) {				
				$scope.categorias.push(categoriaRetornada);
				$scope.novo();
				$scope.mensagens.push('Categoria salva com sucesso');
			}).error(function (erro) {
				//$scope.mensagens.push('Erro ao salvar Categoria: '+JSON.stringify(erro));
				$scope.montaMensagemErro(erro.parameterViolations);
			});
		} else {
			$http.put(url,$scope.categoria).success(function(categoria) {
				$scope.pesquisar();
				$scope.novo();
				$scope.mensagens.push('Categoria atualizada com sucesso');
			}).error(function (erro) {				
				$scope.montaMensagemErro(erro.parameterViolations);
			});
		}		
	}
	
	$scope.montaMensagemErro = function(listaErro) {
		$scope.mensagens = [];
		$scope.mensagens.push('Falha de validação retornada do servidor');
		angular.forEach(listaErro, function(value, key){
			 $scope.mensagens.push(value.message);
		});
	}
	
	$scope.pesquisar = function() {
		$http.get(url).success(function (categorias) {
			$scope.categorias = categorias;
		}).error(function (erro) {
			alert(erro);
		});
	}
	
	$scope.excluir = function() {
		$scope.categorias.splice($scope.categorias.indexOf($scope.categoria), 1);	
		$scope.novo();  		
	}
	
	$scope.novo = function () { 
		$scope.categoria = {};
		$scope.mensagens = [];
	}; 	
	
	$scope.seleciona = function (categoria) {
		$scope.categoria = categoria; 								  
	};	
	
	$scope.pesquisar();
	$scope.novo();
	
});