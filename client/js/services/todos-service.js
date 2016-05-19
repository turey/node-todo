angular.module('todoService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Todos', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/todos');
			},
                        create : function(newText, isDone) {
                                return $http.post('/api/todos', {text: newText, done: isDone, snooze: false, oldtext: newText, olddone: isDone, oldsnooze: false});
                        },
                        update : function(newText, isDone, snoozed, oldText, wasDone, wasSnoozed) {
                                return $http.post('/api/todos', {text: newText, done: isDone, snooze : snoozed, oldtext: oldText, olddone: wasDone, oldsnooze: wasSnoozed});
            		},
                        deleteCompleted : function() {
                                return $http.post('/api/todos/clean', {});
            		}
		}
	}]);
