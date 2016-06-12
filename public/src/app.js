var app = angular.module('app', []);

app.controller('BookController', BookController);

function BookController($scope, $http) {
    $scope.isEnableSend = true;

    updateBookList();

    $scope.send = function () {
        var book = {name: $scope.bookName};

        $http
            .post('/api/books', book)
            .then(function () {
                updateBookList();
                $scope.bookName = '';
            }, function () {
                alert('Something wrong');
            });
    };

    function updateBookList() {
        $http
            .get('/api/books')
            .then(function (res) {
                $scope.books = res.data;
            });
    }
}