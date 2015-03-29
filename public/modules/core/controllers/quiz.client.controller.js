'use strict';


angular.module('core').controller('quizController', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location) {
    $scope.count = 1;
    $scope.isDisabled =false;
    $scope.noQuestion = false;
    $scope.questionNum = 'question' + $scope.count;
    $scope.currentCat = $rootScope.currentCategory;
    console.log($scope.currentCat);
    $scope.category = $rootScope.questionCat;
    $scope.currentQuestion = $scope.currentCat[$scope.questionNum];
    $scope.currentAnswer = $scope.currentQuestion.correctAnswer;
    console.log($scope.currentQuestion);

    $scope.loadNextQuestion = function() {
        $scope.noQuestion = false;
      if($scope.count < 5) {
        $scope.count += 1;
        $scope.isDisabled =false;
        $scope.answera = '', $scope.answerb = '', $scope.answerc = '', $scope.answerd = '';
        $scope.questionNum = 'question' + $scope.count;
        $scope.currentQuestion = $scope.currentCat[$scope.questionNum];
        $scope.currentAnswer = $scope.currentQuestion.correctAnswer;        
      }
      else {
        $location.path('/beginner');
      }
      if($scope.currentQuestion.text !== undefined ) {
        $scope.noQuestion = true;
      }
    };

    $scope.checkAnswer = function(arg, char) {
      var correctOpt = char;
      $scope.isDisabled =true;
      if(arg === $scope.currentAnswer) {
        $scope[correctOpt] = 'correctAns';
        console.log($scope.ansStat);
        console.log('correct answer picked');
      }
      else {
        $scope[correctOpt] = 'wrongAns';
        $scope.rightAns = false;
      }
    };
}
]);
