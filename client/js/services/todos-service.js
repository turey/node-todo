angular.module('todoService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Todos', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/todos');
			},
                        create : function(newText, isDone) {
                                return $http.post('/api/todos', {text: newText, done: isDone, oldtext: newText, olddone: isDone});
                        },
                        update : function(newText, isDone, oldText, wasDone) {
                                return $http.post('/api/todos', {text: newText, done: isDone, oldtext: oldText, olddone: wasDone});
            		}

		}
	}]);
