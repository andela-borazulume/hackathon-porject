'use strict';


angular.module('core').controller('quizController', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.count = 1;
    $scope.isDisabled =false;
    $scope.questionNum = 'question' + $scope.count;
    $scope.currentCat = $rootScope.Questions[$rootScope.currentCategory];
    $scope.category = $rootScope.currentCategory;
    $scope.currentQuestion = $scope.currentCat[$scope.questionNum];
    $scope.currentAnswer = $scope.currentQuestion.correctAnswer;
    console.log($scope.currentQuestion);


    $scope.loadNextQuestion = function() {
      if($scope.count < 5)
      $scope.count += 1;
      $scope.isDisabled =false;
      $scope.answera = '', $scope.answerb = '', $scope.answerc = '', $scope.answerd = '';
      $scope.questionNum = 'question' + $scope.count;
      $scope.currentQuestion = $scope.currentCat[$scope.questionNum];
      $scope.currentAnswer = $scope.currentQuestion.correctAnswer;
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
