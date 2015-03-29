'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication', '$location', '$rootScope',
    function ($scope, Authentication, $location, $rootScope) {
        // This provides Authentication context.
        $scope.authentication = Authentication;
        $scope.redirectToCategorypage = function () {
            $location.path('/category');
        }; 

        $rootScope.count = 1;
        $rootScope.questionNum = 'question' + $rootScope.count;

        $scope.redirectToQuizpage = function (category) {
            if (category === 'photo') {
              $rootScope.currentCategory = $rootScope.Questions.Photography;
              $rootScope.questionCat = 'Photography';
            }
            else if (category === 'history') {
              $rootScope.currentCategory = $rootScope.Questions.computerProgramming;
              $rootScope.questionCat = 'History';              
            }
            else if (category === 'carpentry') {
              $rootScope.currentCategory = $rootScope.Questions.Swimming;
              $rootScope.questionCat = 'Carpentry';              
            }
            else if (category === 'music') {
              $rootScope.currentCategory = $rootScope.Questions.Drawing;
              $rootScope.questionCat = 'Music';
            }
            $rootScope.currentQuestion = $rootScope.currentCategory[$scope.questionNum];

            $location.path('/quiz');
        };

        $scope.loadNextQuestion = function() {
          if($rootScope.count < 5)
          $rootScope.count += 1;
          $rootScope.questionNum = 'question' + $rootScope.count;
          $rootScope.currentQuestion = $rootScope.currentCategory[$rootScope.questionNum];
        };

        $rootScope.Questions = {

            Photography: {
                question1: {
                    question: 'The amount of light or darkness on a photograph is known as the:',
                    option1: 'Exposure',
                    option2: 'Shutter Speed',
                    option3: 'Contrast',
                    option4: 'Sharpness',
                    correctAnswer: 'Exposure',
                    resource: 'yidi yada'
                },

                question2: {
                    question: 'The amount of light passing through a lens is defined by the:',
                    option1: 'Shutter speed',
                    option2: 'Aperture',
                    option3: 'Film speed',
                    option4: 'Exposure',
                    correctAnswer: 'Aperture',
                    resource: 'yidi yada'
                },

                question3: {
                    question: 'Perfect exposure is a result of the right mixture of:',
                    option1: 'Shutter speed + aperture + resolution',
                    option2: 'Film speed + aperture + exposure',
                    option3: 'Exposure + aperture + shutter speed',
                    option4: 'Aperture + shutter speed + film speed',
                    correctAnswer: 'Aperture + shutter speed + film speed',
                    resource: 'yidi yada'
                },

                question4: {
                    question: 'What is the unit of measurement for light in photography:',
                    option1: 'Apertures',
                    option2: 'Shutter Speed',
                    option3: 'Candelabras',
                    option4: 'Stops',
                    //correctAnswer: option3,
                    resource: 'yidi yada'
                },

                question5: {
                    question: 'What is Aperture measured in?',
                    option1: 'Spots',
                    option2: 'Stops',
                    option3: 'F Numbers',
                    option4: 'Fractions',
                    //correctAnswer: option3,
                    resource: 'yidi yada'
                },

                question6: {
                    question: 'What is shutter speed measured in?',
                    option1: 'Stops',
                    option2: 'F Numbers',
                    option3: 'Seconds',
                    option4: 'Exposures',
                    //correctAnswer: option2,
                    resource: 'yidi yada'
                },

                question7: {
                    question: 'If a shutter speed is 1/100, what is twice as quick?',
                    option1: '2/50',
                    option2: '1/200',
                    option3: '1/50',
                    option4: '1/500',
                    //correctAnswer: option3,
                    resource: 'yidi yada'
                },

                question8: {
                    question: 'When taking a photo at a gig, which camera mode should you be on?',
                    option1: 'Sport',
                    option2: 'Manual ',
                    option3: 'Aperture',
                    option4: 'Macro',
                    //correctAnswer: option3,
                    resource: 'yidi yada'
                }
            },

            computerProgramming: {
                question1: {
                    question: 'If you needed to execute some code repeatedly based on a certain condition, which of the following would you use?',
                    option1: 'Variable',
                    option2: 'Loop',
                    option3: 'Compiler',
                    option4: 'Conditional',
                    //correctAnswer: option2,
                    resource: 'yidi yada'
                },

                question2: {
                    question: 'Beginner programmers should start with a development environment',
                    option1: 'true',
                    option2: 'false',
                    option3: 'Not sure',
                    option4: 'Depends',
                    //correctAnswer: option2,
                    resource: 'yidi yada'
                },

                question3: {
                    question: 'What is the software called that translates code into something meaningful the computer can understand?',
                    option1: 'Compiler',
                    option2: 'Transliterator',
                    option3: 'Converter',
                    option4: 'Translator',
                    //correctAnswer: option1,
                    resource: 'Specifically, a compiler is used to turn source code into object code which is then passed through a program called a linker which turns it into an executable program.'
                },

                question4: {
                    question: 'Which generation of languages allows for the use of words and commands?',
                    option1: '1st generation',
                    option2: '2nd generation',
                    option3: '5th generation',
                    option4: '3rd generation',
                    //correctAnswer: option4,
                    resource: 'yidi yada'
                },

                question5: {
                    question: 'Ask user for a number, ask user for another number, multiply the two numbers, print result..What do you call this set of instructions?',
                    option1: 'An algorithm',
                    option2: 'PHP',
                    option3: 'A class',
                    option4: 'A compiler',
                    //correctAnswer: option1,
                    resource: 'yidi yada'
                },

                question6: {
                    question: 'You need special software to write programs',
                    option1: 'True',
                    option2: 'False',
                    option3: 'Not sure',
                    option4: 'Depends',
                    //correctAnswer: option2,
                    resource: 'yidi yada'
                }
            },


            Drawing: {
                question1: {
                    question: 'A drawing is started with',
                    option1: 'All simple shapes laid out in composition.',
                    option2: 'The colors being mixed and ready for application.',
                    option3: 'All the important details',
                    option4: 'The separation between lights and darks.',
                    //correctAnswer: option2,
                    resource: 'yidi yada'
                },

                question2: {
                    question: ' A highlight is',
                    option1: 'The darkest part of a drawing.',
                    option2: 'A moment of thoughtfulness.',
                    option3: 'The lightest part of a drawing',
                    option4: 'The area which has all the values and tones.',
                    //correctAnswer: option4,
                    resource: 'yidi yada'
                },

                question3: {
                    question: 'An artist squints his or her eyes while drawing to',
                    option1: 'Capture all the details',
                    option2: 'Clear objects from the depth of field',
                    option3: 'View all the colors of an object',
                    option4: 'Simplify the shapes being drawn',
                    //correctAnswer: option1,
                    resource: 'Specifically, an artist squints his eyes to drain it of dirts.. This is propbably the dumbest answer ever'
                },

                question4: {
                    question: 'When doing a drawing with pencil, the artist shows the intensity of color by',
                    option1: 'Pre-mixing all colors on a pallet',
                    option2: 'Planning everything in tissue form',
                    option3: 'Using a series of gray values and textures',
                    option4: 'Using dingbats to represent the values',
                    //correctAnswer: option43,
                    resource: 'yidi yada'
                },

                question5: {
                    question: 'When developing a drawing, the artist must show the light source',
                    option1: 'Coming from all directions.',
                    option2: 'With a definite direction.',
                    option3: 'In negative form.',
                    option4: 'All of the above',
                    //correctAnswer: option4,
                    resource: 'yidi yada'
                }
            },

            Cooking: {
                question1: {
                    question: 'Cooking food in enough hot fat to cover it halfway',
                    option1: 'Panfrying',
                    option2: 'Poaching',
                    option3: 'Simmering',
                    option4: 'Steaming',
                    //correctAnswer: option2,
                    resource: 'yidi yada'
                },

                question2: {
                    question: 'Cooking food in liquid just below boiling',
                    option1: 'Panfrying',
                    option2: 'Simmering',
                    option3: 'Sauteing',
                    option4: 'Poaching',
                    //correctAnswer: option4,
                    resource: 'yidi yada'
                },

                question3: {
                    question: 'Quickly cooking an item in a small amount of hot fat over high heat',
                    option1: 'Simmering',
                    option2: 'Steaming',
                    option3: 'Sauteing',
                    option4: 'Poaching',
                    //correctAnswer: option1,
                    resource: ' '
                },

                question4: {
                    question: 'The manner in which heat energy travels through liquids and gases',
                    option1: 'Convection',
                    option2: 'Conduction',
                    option3: 'Au bain marie',
                    option4: 'Steaming',
                    //correctAnswer: option43,
                    resource: 'yidi yada'
                },

                question5: {
                    question: 'A moist method that cooks food by surrounding it with steam vapor',
                    optoption1: 'Steaming',
                    option2: 'Sauteing',
                    option3: 'Simmering',
                    option4: 'Poaching',
                    //correctAnswer: option4,
                    resource: 'yidi yada'
                }
            },

            Swimming: {
                question1: {
                    question: 'To get the most out of your swim, your fingers should be',
                    option1: 'Spread apart',
                    option2: 'Clamped Shut',
                    option3: 'Straight yet relaxed',
                    option4: 'Tucked behind your ears',
                    //correctAnswer: option2,
                    resource: 'yidi yada'
                },

                question2: {
                    question: 'To help you become more hydrodynamic, it is better to visualize yourself',
                    option1: 'Swimming Uphill',
                    option2: 'Swimming Downhill',
                    option3: 'Swimming at night',
                    option4: 'Swimming on your back',
                    //correctAnswer: option2,
                    resource: 'yidi yada'
                },

                question3: {
                    question: 'In the freestyle stroke, as soon as you begin to catch and pull the water, you should',
                    option1: 'Put pressure in your fingertips and press the water back behind you',
                    option2: 'Put pressure in your fingertips and press the water up',
                    option3: 'Put pressure in your fingertips and press the water down',
                    option4: 'Put pressure in your fingertips and press the water sideways',
                    //correctAnswer: option1,
                    resource: ' some random resource or information'
                },

                question4: {
                    question: 'Just like running, you shouldn not increase your weekly swimming distance by more than',
                    option1: '5%',
                    option2: '15%',
                    option3: '10%',
                    option4: '20%',
                    //correctAnswer: option43,
                    resource: 'yidi yada'
                },

                question5: {
                    question: 'Which swimming stroke burns the most calories?',
                    optoption1: 'Front stroke and back stroke',
                    option2: 'Butterfly and breast stroke',
                    option3: 'Freestyle stroke',
                    option4: 'Back stroke',
                    //correctAnswer: option4,
                    resource: 'yidi yada'
                }
            }

        };
    }

]);
