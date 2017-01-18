function ControladorSimple($scope) {
    $scope.misClientes = [
        { nombre: 'Fran', ciudad: 'Vietnan/Cadiz' },
        { nombre: 'Sergio', ciudad: 'Madrid' },
        { nombre: 'Angel', ciudad: 'Madrid' },
        { nombre: 'Julio', ciudad: 'Toledo' },
        { nombre: 'Pedro', ciudad: 'Toledo' }
    ];
    $scope.nombreCliente = "Texto desde JS";
}

function ControladorAnimales($scope) {
    $scope.misAnimales = [
        { nombre: 'Gato', ciudad: 'Vietnan/Cadiz' },
        { nombre: 'Perro', ciudad: 'Madrid' }
    ];
}

var moduloAplicacion = angular.module("miAplicacion", []);

moduloAplicacion.controller("ControladorMuySimple", ControladorSimple);

moduloAplicacion.controller("ControladoAnimales", ControladorAnimales);