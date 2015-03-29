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
            else if (category === 'music') {
              $rootScope.currentCategory = $rootScope.Questions.Music;
              $rootScope.questionCat = 'Music';
            }
            else if (category === 'computer') {
              $rootScope.currentCategory = $rootScope.Questions.computerProgramming;
              $rootScope.questionCat = 'Computer Programming';              
            }
            else if (category === 'carpentry') {
              $rootScope.currentCategory = $rootScope.Questions.Carpentry;
              $rootScope.questionCat = 'Carpentry';              
            }
            else if (category === 'drawing') {
              $rootScope.currentCategory = $rootScope.Questions.Drawing;
              $rootScope.questionCat = 'Drawing';              
            }
            else if (category === 'swimming') {
              $rootScope.currentCategory = $rootScope.Questions.Swimming;
              $rootScope.questionCat = 'Swimming';              
            }
            $rootScope.currentQuestion = $rootScope.currentCategory[$scope.questionNum];

            $location.path('/quiz');
        };

        $rootScope.Questions = {

            Photography: {
                question1: {
                    question: 'The amount of light or darkness on a photograph is known as the:',
                    option1: 'Exposure',
                    option2: 'Shutter Speed',
                    option3: 'Contrast',
                    option4: 'Sharpness',
                    correctAnswer: 'option1',
                    resource: 'https://www.udemy.com/ditch-auto-start-shooting-in-manual'
                },

                question2: {
                    question: 'The amount of light passing through a lens is defined by the:',
                    option1: 'Shutter speed',
                    option2: 'Aperture',
                    option3: 'Film speed',
                    option4: 'Exposure',
                    correctAnswer: 'option2',
                    resource: 'http://en.wikipedia.org/wiki/Aperture'
                },

                question3: {
                    question: 'Perfect exposure is a result of the right mixture of:',
                    option1: 'Shutter speed + aperture + resolution',
                    option2: 'Film speed + aperture + exposure',
                    option3: 'Exposure + aperture + shutter speed',
                    option4: 'Aperture + shutter speed + film speed',
                    correctAnswer: 'option4',
                    resource: 'http://en.wikibooks.org/wiki/Basic_Photography/Exposure_controls'
                },

                question4: {
                    question: 'What is the unit of measurement for light in photography:',
                    option1: 'Apertures',
                    option2: 'Shutter Speed',
                    option3: 'Candelabras',
                    option4: 'Stops',
                    correctAnswer: 'option3',
                    resource: 'http://en.wikipedia.org/wiki/Foot-candle'
                },

                question5: {
                    question: 'Do you know:',
                    text: 'A light meter is a device used to measure the amount of light. In photography, a light meter is often used to determine the proper exposure for a photograph. Typically a light meter will include a computer, either digital or analog, which allows the photographer to determine which shutter speed and f-number should be selected for an optimum exposure, given a certain lighting situation and film speed.',
                    resource: 'http://en.wikipedia.org/wiki/Light_meter'
                },

                question6: {
                    question: 'What is shutter speed measured in?',
                    option1: 'Stops',
                    option2: 'F Numbers',
                    option3: 'Seconds',
                    option4: 'Exposures',
                    correctAnswer: 'option2',
                    resource: 'http://en.wikipedia.org/wiki/Shutter_speed'
                },

                question7: {
                    question: 'If a shutter speed is 1/100, what is twice as quick?',
                    option1: '2/50',
                    option2: '1/200',
                    option3: '1/50',
                    option4: '1/500',
                    correctAnswer: 'option3',
                    resource: 'http://en.wikipedia.org/wiki/Film_speed'
                },
                question8: {
                    question: 'Do you know:',
                    text: 'In photography, exposure value (EV) is a number that represents a combination of a camera shutter speed and f-number, such that all combinations that yield the same exposure have the same EV value. Exposure value is also used to indicate an interval on the photographic exposure scale, with a difference of 1 EV corresponding to a standard power of 2 exposure step, commonly referred to as a stop.',
                    resource: 'http://en.wikipedia.org/wiki/Exposure_value'
                }
            },

            computerProgramming: {
                question1: {
                    question: 'If you needed to execute some code repeatedly based on a certain condition, which of the following would you use?',
                    option1: 'Variable',
                    option2: 'Loop',
                    option3: 'Compiler',
                    option4: 'Conditional',
                    correctAnswer: 'option2',
                    resource: 'http://en.wikipedia.org/wiki/LOOP_(programming_language)'
                },

                question2: {
                    question: 'Do you know:',
                    text: 'Computer programming (often shortened to programming) is a process that leads from an original formulation of a computing problem to executable computer programs. Programming involves activities such as analysis, developing understanding, generating algorithms, verification of requirements of algorithms including their correctness and resources consumption, and implementation (commonly referred to as coding[1][2]) of algorithms in a target programming language.',
                    resource: 'http://en.wikipedia.org/wiki/Computer_programming'
                },

                question3: {
                    question: 'What is the software called that translates code into something meaningful the computer can understand?',
                    option1: 'Compiler',
                    option2: 'Transliterator',
                    option3: 'Converter',
                    option4: 'Translator',
                    correctAnswer: 'option1',
                    resource: 'http://en.wikipedia.org/wiki/Compiler'
                },

                question4: {
                    question: 'Do you know:',
                    text: 'Programming languages have been classified into several programming language generations. Historically, this classification was used to indicate increasing power of programming styles.',
                    resource: 'http://en.wikipedia.org/wiki/Programming_language_generations'
                },

                question5: {
                    question: 'Ask user for a number, ask user for another number, multiply the two numbers, print result..What do you call this set of instructions?',
                    option1: 'An algorithm',
                    option2: 'PHP',
                    option3: 'A class',
                    option4: 'A compiler',
                    correctAnswer: 'option1',
                    resource: 'http://en.wikipedia.org/wiki/Algorithm'
                },

                question6: {
                    question: 'Do you know:',
                    text: 'Application software (an application) is a set of one or more programs designed to permit the user to perform a group of coordinated functions, tasks, or activities. Application software cannot run on itself but is dependent on system software to execute. ',
                    resource: 'http://en.wikipedia.org/wiki/Application_software'
                }
            },


            Drawing: {
                question1: {
                    question: 'A drawing is started with',
                    option1: 'All simple shapes laid out in composition.',
                    option2: 'The colors being mixed and ready for application.',
                    option3: 'All the important details',
                    option4: 'The separation between lights and darks.',
                    correctAnswer: 'option2',
                    resource: 'http://en.wikipedia.org/wiki/Watercolor_painting'
                },

                question2: {
                    question: 'Do you know:',
                    text: 'An expressive image involves the arrangement and rendering of various scene elements according to the photographer’s desire. Achieving the desired image involves image management (placement of the camera, choice of lens, and possibly the use of camera movements) and control of image values.',
                    resource: 'http://en.wikipedia.org/wiki/Zone_System'
                },

                question3: {
                    question: 'An artist squints his or her eyes while drawing to',
                    option1: 'Capture all the details',
                    option2: 'Clear objects from the depth of field',
                    option3: 'View all the colors of an object',
                    option4: 'option1',
                    correctAnswer: 'Capture all the details ',
                    resource: 'http://www.studiorousar.com/2011/07/01/the-value-of-squinting/'
                },

                question4: {
                    question: 'When doing a drawing with pencil, the artist shows the intensity of color by',
                    option1: 'Pre-mixing all colors on a pallet',
                    option2: 'Planning everything in tissue form',
                    option3: 'Using a series of gray values and textures',
                    option4: 'Using dingbats to represent the values',
                    correctAnswer:'option4',
                    resource: 'http://en.wikipedia.org/wiki/Shading'
                },

                question5: {
                    question: 'Do you know:',
                    text: 'Drawing is a form of visual art that makes use of any number of drawing instruments to mark a two-dimensional medium. Instruments used include graphite pencils, pen and ink, inked brushes, wax color pencils, crayons, charcoal, chalk, pastels, various kinds of erasers, markers, styluses, various metals (such as silverpoint) and electronic drawing.',
                    resource: 'http://en.wikipedia.org/wiki/Drawing'
                }
            },

            Swimming: {
                question1: {
                    question: 'To get the most out of your swim, your fingers should be',
                    option1: 'Spread apart',
                    option2: 'Clamped Shut',
                    option3: 'Straight yet relaxed',
                    option4: 'Tucked behind your ears',
                    correctAnswer: 'option2',
                    resource: 'http://en.wikipedia.org/wiki/Dry_suit'
                },

                question2: {
                    question: 'Do you know:',
                    text: 'Swimming lessons is the process of learning to swim. In most countries there is a definition of a number of swimming levels that is reached in the process of the curriculum. The respective certificates of swimming tests are required for further training in aquatic abilities.',
                    resource: 'http://en.wikipedia.org/wiki/Swimming_lessons'
                },

                question3: {
                    question: 'In the freestyle stroke, as soon as you begin to catch and pull the water, you should',
                    option1: 'Put pressure in your fingertips and press the water back behind you',
                    option2: 'Put pressure in your fingertips and press the water up',
                    option3: 'Put pressure in your fingertips and press the water down',
                    option4: 'Put pressure in your fingertips and press the water sideways',
                    correctAnswer: 'option1',
                    resource: 'http://en.wikipedia.org/wiki/Freestyle_swimming'
                },

                question4: {
                    question: 'Do you know:',
                    text: 'Long-distance swimming is distinguished from ordinary swimming in that the distances involved are longer than are typically swum in pool competitions. When a given swim calls more on endurance than on outright speed, it is the more likely to be considered a long-distance swim. ',
                    resource: 'http://en.wikipedia.org/wiki/Long-distance_swimming'
                },

                question5: {
                    question: 'Which swimming stroke burns the most calories?',
                    option1: 'Front stroke and back stroke',
                    option2: 'Butterfly and breast stroke',
                    option3: 'Freestyle stroke',
                    option4: 'Back stroke',
                    correctAnswer: 'option4',
                    resource: 'http://en.wikipedia.org/wiki/Backstroke'
                }
            },

            Music: {
                question1: {
                    question: 'Medieval music was roughly between which years:',
                    option1: '500 BC - 500 AD',
                    option2: '500 BC - 1400 AD',
                    option3: '1400 BC - 1500 AD',
                    option4: '600 BC - 800 AD',
                    correctAnswer: 'option2',
                    resource: 'http://en.wikipedia.org/wiki/Medieval_music'

                },

                 question2: {
                    question: 'Which term means "one single line of music: ',
                    option1: 'Polyphonic',
                    option2: 'Homophonic',
                    option3: 'Stereophonic',
                    option4: 'Monophonic',
                    correctAnswer: 'option4',
                    resource: 'http://en.wikipedia.org/wiki/Monophony'
                },

                question3: {
                    question: 'Another word for Gregorian Chant is: ',
                    option1: 'Singsong',
                    option2: 'Ostinato',
                    option3: 'Plainsong',
                    option4: 'Cantata',
                    correctAnswer: 'option3',
                    resource: 'http://en.wikipedia.org/wiki/Gregorian_chant'
                },

                question4: {
                    question: 'Do you know:',
                    text: 'Music notation or musical notation is any system used to visually represent aurally perceived music through the use of written symbols, including ancient or modern musical symbols. Types and methods of notation have varied between cultures and throughout history, and much information about ancient music notation is fragmentary.',
                    resource: 'http://en.wikipedia.org/wiki/Musical_notation'
                },

                question5: {  
                    question: 'Do you know:',
                    text: 'Music can be divided into different genres in many different ways. The artistic nature of music means that these classifications are often subjective and controversial, and some genres may overlap. There are even varying academic definitions of the term genre itself. In his book Form in Tonal Music, Douglass M. Green distinguishes between genre and form. ',
                    resource: 'http://en.wikipedia.org/wiki/Music_genre'
                }
            },

            Carpentry: {
                question1: {
                    question: 'If fixing 12mm plasterboards to a timber stud the most suitable fixing to use is:',
                    option1: '50mm Ovals',
                    option2: '35mm Stainless steel screws',
                    option3: '35mm Drywall Screws',
                    option4: '75mm Roundheads',
                    correctAnswer: 'option3',
                    resource: 'http://wiki.diyfaq.org.uk/index.php?title=Plasterboarding'

                },

                 question2: {
                    question: 'What must you do to a door, so it does not catch on the frame/lining when it closes shut: ',
                    option1: 'Plane the arris off',
                    option2: 'Plane a leading Edge on it',
                    option3: 'Fit the handles',
                    option4: 'Fit the Architrave',
                    correctAnswer: 'option2',
                    resource: 'http://wiki.diyfaq.org.uk/index.php?title=Hanging_a_door'
                },

                question3: {
                    question: 'What size Ply wood would be most suitable for a Pipe Boxing : ',
                    option1: '6mm',
                    option2: '18mm',
                    option3: '22mm',
                    option4: '25mm',
                    correctAnswer: 'option1',
                    resource: 'http://en.wikipedia.org/wiki/Wood_veneer'
                },

                question4: {
                    question: 'Do you know:',
                    text: 'Woodworking, veneer refers to thin slices of wood, usually thinner than 3 mm (1/8 inch), that typically are glued onto core panels (typically, wood, particle board or medium-density fiberboard) to produce flat panels such as doors, tops and panels for cabinets, parquet floors and parts of furniture.',
                    resource: 'http://en.wikipedia.org/wiki/Wood_veneer'
                },

                question5: {
                    question: 'Do you know:',
                    text: 'Carpentry is a skilled trade in which the primary work performed is the cutting, shaping and installation of building materials during the construction of buildings, ships, timber bridges, concrete formwork, etc. Carpenters traditionally worked with natural wood and did the rougher work such as framing, but today many other materials are also used[1] and sometimes the finer trades of cabinetmaking and furniture building are considered carpentry.',
                    resource: 'http://en.wikipedia.org/wiki/Carpentry'
                }
            }

        };
    }

]);
