//var shuffleSequence = seq("intro", sepWith("sep", seq("practice", rshuffle("s1", "s2"))), sepWith("sep", rshuffle("q1", "q2")));
//
//var shuffleSequence = seq(sepWith("sep", randomize("filler")));
//var shuffleSequence = seq(sepWith("sep", randomize("critical1", "critical2")));
//var shuffleSequence = seq("setcounter", sepWith("sep", rshuffle(startsWith("tense"), startsWith("filler"))));

//var shuffleSequence = seq("intro", seq(sepWith("sep", seq("practice", rshuffle(startsWith("critical"), startsWith("filler"))))));
var shuffleSequence = seq(sepWith("sep", seq("practice", rshuffle(startsWith("critical"), startsWith("filler")))));

var practiceItemTypes = ["practice"];

var defaults = [
    "Separator", {
        transfer: 1000,
        normalMessage: "Please wait for the next sentence.",
        errorMessage: "Wrong. Please wait for the next sentence."
    },
    "DashedSentence", {
        mode: "self-paced reading"
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "Use number keys or click boxes to answer.",
        leftComment: "(Bad)", rightComment: "(Good)"
    },
    "Question", {
	    randomOrder : false
    },
    "Message", {
        hideProgressBar: true
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true
    }
];

var items = [


    ["sep", "Separator", { }],

    ["setcounter", "__SetCounter__", { }],

    ["intro", "Form", {
        html: { include: "example_intro.html" },
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    } ],
   ["intro", "Form", {consentRequired: true, html: {include: "intro.html" }} ],
   ["intro", "Form", {consentRequired: true, html: {include: "intro1.html" }} ],
   ["intro", "Form", {consentRequired: true, html: {include: "intro2.html" }} ],
   ["intro", "Form", {consentRequired: true, html: {include: "intro3.html" }} ],
    //
    // Three practice items for self-paced reading (one with a comprehension question).
    //
    ["practice", "DashedSentence", {s: "This is a practice sentence to get you used to reading sentences like this."}],
    ["practice", "DashedSentence", {s: "This is another practice sentence with a practice question following it."},
                 "Question", {
                              q: "Is this a practice sentence?",
                              as: ["Yes", "No"], hasCorrect : 0}],
    ["practice", "DashedSentence", {s: "This is the last practice sentence before the experiment begins."}],


[["critical1", 1], "DashedSentence", {s : "The book that the student who the new catalog had confused a great deal was studying in the library was missing an important page."}],
[["critical2", 1], "DashedSentence", {s : "The book that the student who the new catalog was studying in the library was missing an important page."}],
[["critical3", 1], "DashedSentence", {s : "The book that the student who the new catalog had confused a great deal was missing an important page."}],
[["critical4", 1], "DashedSentence", {s : "The book that the student who the new catalog had confused a great deal was studying in the library."}],
[["critical5", 1], "DashedSentence", {s : "The book that the student who the new catalog was missing an important page."}],
[["critical1", 2], "DashedSentence", {s : "The lullaby that the singer who the record label had signed to a big contract was singing yesterday was written sixty years ago."}],
[["critical2", 2], "DashedSentence", {s : "The lullaby that the singer who the record label was singing yesterday was written sixty years ago."}],
[["critical3", 2], "DashedSentence", {s : "The lullaby that the singer who the record label had signed to a big contract was written sixty years ago."}],
[["critical4", 2], "DashedSentence", {s : "The lullaby that the singer who the record label had signed to a big contract was singing yesterday."}],
[["critical5", 2], "DashedSentence", {s : "The lullaby that the singer who the record label was written sixty years ago."}],
[["critical1", 3], "DashedSentence", {s : "The game that the child who the lawnmower had startled in the yard was playing in the morning lasted for several hours."}],
[["critical2", 3], "DashedSentence", {s : "The game that the child who the lawnmower was playing in the morning lasted for several hours."}],
[["critical3", 3], "DashedSentence", {s : "The game that the child who the lawnmower had startled in the yard lasted for several hours."}],
[["critical4", 3], "DashedSentence", {s : "The game that the child who the lawnmower had startled in the yard was playing in the morning."}],
[["critical5", 3], "DashedSentence", {s : "The game that the child who the lawnmower lasted for several hours."}],
[["critical1", 4], "DashedSentence", {s : "The crime that the gangster who the story had profiled thoroughly had planned for weeks was solved in the middle of the night."}],
[["critical2", 4], "DashedSentence", {s : "The crime that the gangster who the story had planned for weeks was solved in the middle of the night."}],
[["critical3", 4], "DashedSentence", {s : "The crime that the gangster who the story had profiled thoroughly was solved in the middle of the night."}],
[["critical4", 4], "DashedSentence", {s : "The crime that the gangster who the story had profiled thoroughly had planned for weeks."}],
[["critical5", 4], "DashedSentence", {s : "The crime that the gangster who the story was solved in the middle of the night."}],
[["critical1", 5], "DashedSentence", {s : "The picture that the student who the school had expelled for cheating was hurriedly copying was printed in a popular magazine."}],
[["critical2", 5], "DashedSentence", {s : "The picture that the student who the school was hurriedly copying was printed in a popular magazine."}],
[["critical3", 5], "DashedSentence", {s : "The picture that the student who the school had expelled for cheating was printed in a popular magazine."}],
[["critical4", 5], "DashedSentence", {s : "The picture that the student who the school had expelled for cheating was hurriedly copying."}],
[["critical5", 5], "DashedSentence", {s : "The picture that the student who the school was printed in a popular magazine."}],
[["critical1", 6], "DashedSentence", {s : "The trophy that the athlete who the restaurant had hired as a spokesman had won at the championship was stolen the day after."}],
[["critical2", 6], "DashedSentence", {s : "The trophy that the athlete who the restaurant had won at the championship was stolen the day after."}],
[["critical3", 6], "DashedSentence", {s : "The trophy that the athlete who the restaurant had hired as a spokesman was stolen the day after."}],
[["critical4", 6], "DashedSentence", {s : "The trophy that the athlete who the restaurant had hired as a spokesman had won at the championship."}],
[["critical5", 6], "DashedSentence", {s : "The trophy that the athlete who the restaurant was stolen the day after."}],
[["critical1", 7], "DashedSentence", {s : "The apartment that the maid who the service had sent over was cleaning every week was decorated with beautiful flowers."}],
[["critical2", 7], "DashedSentence", {s : "The apartment that the maid who the service was cleaning every week was decorated with beautiful flowers."}],
[["critical3", 7], "DashedSentence", {s : "The apartment that the maid who the service had sent over was decorated with beautiful flowers."}],
[["critical4", 7], "DashedSentence", {s : "The apartment that the maid who the service had sent over was cleaning every week."}],
[["critical5", 7], "DashedSentence", {s : "The apartment that the maid who the service was decorated with beautiful flowers."}],
[["critical1", 8], "DashedSentence", {s : "The shirt that the seamstress who the officer had investigated last week was carefully mending needed to be washed at thirty degrees."}],
[["critical2", 8], "DashedSentence", {s : "The shirt that the seamstress who the officer was carefully mending needed to be washed at thirty degrees."}],
[["critical3", 8], "DashedSentence", {s : "The shirt that the seamstress who the officer had investigated last week needed to be washed at thirty degrees."}],
[["critical4", 8], "DashedSentence", {s : "The shirt that the seamstress who the officer had investigated last week was carefully mending."}],
[["critical5", 8], "DashedSentence", {s : "The shirt that the seamstress who the officer needed to be washed at thirty degrees."}],
[["critical1", 9], "DashedSentence", {s : "The lecture that the professor who the newspaper had interviewed in detail was teaching poorly was attended by twenty students."}],
[["critical2", 9], "DashedSentence", {s : "The lecture that the professor who the newspaper was teaching poorly was attended by twenty students."}],
[["critical3", 9], "DashedSentence", {s : "The lecture that the professor who the newspaper had interviewed in detail was attended by twenty students."}],
[["critical4", 9], "DashedSentence", {s : "The lecture that the professor who the newspaper had interviewed in detail was teaching poorly."}],
[["critical5", 9], "DashedSentence", {s : "The lecture that the professor who the newspaper was attended by twenty students."}],
[["critical1", 10], "DashedSentence", {s : "The novel that the horror author who the publisher had fired recently had typed quickly was banned by the local library."}],
[["critical2", 10], "DashedSentence", {s : "The novel that the horror author who the publisher had typed quickly was banned by the local library."}],
[["critical3", 10], "DashedSentence", {s : "The novel that the horror author who the publisher had fired recently was banned by the local library."}],
[["critical4", 10], "DashedSentence", {s : "The novel that the horror author who the publisher had fired recently had typed quickly."}],
[["critical5", 10], "DashedSentence", {s : "The novel that the horror author who the publisher was banned by the local library."}],
[["critical1", 11], "DashedSentence", {s : "The prayer that the monk who the religious man had persecuted fiercely was chanting every day was echoing in the empty church."}],
[["critical2", 11], "DashedSentence", {s : "The prayer that the monk who the religious man was chanting every day was echoing in the empty church."}],
[["critical3", 11], "DashedSentence", {s : "The prayer that the monk who the religious man had persecuted fiercely was echoing in the empty church."}],
[["critical4", 11], "DashedSentence", {s : "The prayer that the monk who the religious man had persecuted fiercely was chanting every day."}],
[["critical5", 11], "DashedSentence", {s : "The prayer that the monk who the religious man was echoing in the empty church."}],
[["critical1", 12], "DashedSentence", {s : "The play that the actor who the company had underpaid repeatedly was performing last month was extremely well written by a famous author."}],
[["critical2", 12], "DashedSentence", {s : "The play that the actor who the company was performing last month was extremely well written by a famous author."}],
[["critical3", 12], "DashedSentence", {s : "The play that the actor who the company had underpaid repeatedly was extremely well written by a famous author."}],
[["critical4", 12], "DashedSentence", {s : "The play that the actor who the company had underpaid repeatedly was performing last month."}],
[["critical5", 12], "DashedSentence", {s : "The play that the actor who the company was extremely well written by a famous author."}],
["filler", "DashedSentence", {s : "Since that when it storms, the grass gets wet, the landscaper can't cut the grass, the garden will be overgrown."}, "Question", {q : "Will the garden be cut?", as : ["Yes", "No"], hasCorrect : 1}],
["filler", "DashedSentence", {s : "The lecturer spoke to the man in the classroom wearing a blue suit which had good seating and blackboards."}, "Question", {q : "Was the man wearing a blue suit?", as : ["Yes", "No"], hasCorrect : 0}],
["filler", "DashedSentence", {s : "The florist sent the flowers on the table to the boy that were very expensive."}, "Question", {q : "Did the boy send flowers?", as : ["Yes", "No"], hasCorrect : 1}],
["filler", "DashedSentence", {s : "The librarian delivered the books with many photographs to the building which depicted horses."}, "Question", {q : "Did the librarian deliver the books?", as : ["Yes", "No"], hasCorrect : 0}],
["filler", "DashedSentence", {s : "The astronaut flew the spaceship with three tanks to the moon which were filled with fuel."}, "Question", {q : "Did the spaceship have two tanks?", as : ["Yes", "No"], hasCorrect : 1}],
["filler", "DashedSentence", {s : "The delivery man left the package with two labels on the porch which were printed with an address."}, "Question", {q : "Was the package left in the mailbox?", as : ["Yes", "No"], hasCorrect : 1}],
["filler", "DashedSentence", {s : "Jonathan will buy the red sports car from the dealer as soon as he returns from his vacation in the Caribbean."}, "Question", {q : "Was Jonathan vacationing in the Caribbean?", as : ["Yes", "No"], hasCorrect : 0}],
["filler", "DashedSentence", {s : "The soccer team easily defeated their opponents with an impressive show of speed, cleverness and tenacity."}, "Question", {q : "Did the soccer team defeat their opponents?", as : ["Yes", "No"], hasCorrect : 0}],
["filler", "DashedSentence", {s : "When my father lived in Australia, he would often go surfing along the coastal waters of Melbourne."}, "Question", {q : "Did my father surf?", as : ["Yes", "No"], hasCorrect : 0}],
["filler", "DashedSentence", {s : "The police officer will guard the crosswalk as the children pass by on the way to elementary school."}, "Question", {q : "Did the police officer guard the crosswalk?", as : ["Yes", "No"], hasCorrect : 0}],
["filler", "DashedSentence", {s : "The board of directors announced that the business acquisition strategy was proceeding as planned."}, "Question", {q : "Did the board of directors make an announcement?", as : ["Yes", "No"], hasCorrect : 0}],
["filler", "DashedSentence", {s : "In 1945, Germany and Japan surrendered to the Allied forces, ending one of the bloodiest conflicts in history."}, "Question", {q : "Did Japan surrender to Germany?", as : ["Yes", "No"], hasCorrect : 1}],
["filler", "DashedSentence", {s : "Harvard University recently purchased a large tract of land to be used as a new boathouse for the rowing team."}, "Question", {q : "Did Stanford University purchase land?", as : ["Yes", "No"], hasCorrect : 1}],
["filler", "DashedSentence", {s : "Maple trees are classified as deciduous, whereas Norwegian pines are considered to be evergreen."}, "Question", {q : "Are maple and Norwegian pine trees classified similarly?", as : ["Yes", "No"], hasCorrect : 1}],
["filler", "DashedSentence", {s : "The two children walked slowly in front of their mother as they gradually approached the playground."}, "Question", {q : "Did the children run in front of their mother?", as : ["Yes", "No"], hasCorrect : 1}],
["filler", "DashedSentence", {s : "The city of San Francisco is considered an expensive place to live, as rental rates routinely approach thousands of dollars."}, "Question", {q : "Is San Francisco considered an inexpensive place to live?", as : ["Yes", "No"], hasCorrect : 1}],
["filler", "DashedSentence", {s : "The team decided that the strategy that the visitors from Arkansas that were known to be troublemakers had used to win the tournament was a form of cheating."}, "Question", {q : "Were the visitors from Arkansas known to be troublemakers?", as : ["Yes", "No"], hasCorrect : 0}],
["filler", "DashedSentence", {s : "The man that drove the car that had the paint job that was peeling ran into a pedestrian."}, "Question", {q : "Did the man run into a pedestrian?", as : ["Yes", "No"], hasCorrect : 0}],
["filler", "DashedSentence", {s : "When the boat on the shore Philip reached try to start the engine and escape from the soldiers he did."}, "Question", {q : "Did Philip try to escape from the soldiers?", as : ["Yes", "No"], hasCorrect : 0}],
["filler", "DashedSentence", {s : "Because if when the baby is crying, the mother gets upset, the father will help, the grandmother can rest easily."}, "Question", {q : "Will the father help?", as : ["Yes", "No"], hasCorrect : 0}],
//["filler", "DashedSentence", {s : "The professor said that the student that the committee that was visiting picked would present at the conference."}],
//["filler", "DashedSentence", {s : "The student petitioned the instructor about the college who was writing a thesis on Philosophy."}],
//["filler", "DashedSentence", {s : "The socialite praised the hostess about the party who was preparing a fresh batch of punch."}],
//["filler", "DashedSentence", {s : "The parent called the teacher about the class who was giving bad grades to foreign students."}],
//["filler", "DashedSentence", {s : "The neighbor approached the owner about the dog who was building a doghouse over the property line."}],
//["filler", "DashedSentence", {s : "The policeman questioned the driver about the bus who was directing tourists to the restricted ruins."}],
//["filler", "DashedSentence", {s : "The chairman consulted the executive about the company who was playing golf at the country club."}],
//["filler", "DashedSentence", {s : "The republican challenged the president about the nation who was elected by the left-wing opposition."}],
//["filler", "DashedSentence", {s : "The reporter approached the victim about the attack who was injured by the suicide bomber."}],
//["filler", "DashedSentence", {s : "The principal questioned the member about the clique who was mouthing off to teachers."}],
//["filler", "DashedSentence", {s : "The homeowner consulted the architect about the house who was worried about being behind schedule."}],
//["filler", "DashedSentence", {s : "The sportscaster interviewed the captain about the team who was leading his team to the championship."}],
//["filler", "DashedSentence", {s : "The colonel cautioned the commander about the platoon who was ordering the troops to continue fighting."}],
//["filler", "DashedSentence", {s : "The critic complimented the director about the play who was asked to write the screenplay."}],
//["filler", "DashedSentence", {s : "The salesman called the buyer about the rifle who was looking for antiques from the war."}],
//["filler", "DashedSentence", {s : "The activist petitioned the sponsor about the bill who was speaking out against immigration."}],
//["filler", "DashedSentence", {s : "The officer cautioned the driver about the explorer who was talking on the phone while driving."}],
//["filler", "DashedSentence", {s : "The scientist challenged the inventor about the drug who was claiming to have found a cure for cancer."}],
//["filler", "DashedSentence", {s : "The host complimented the author about the book who was being interviewed on all the talk shows."}],
//["filler", "DashedSentence", {s : "Yesterday, a patient complained who had missed his noon appointment so the doctor agreed to see him early tomorrow."}],
//["filler", "DashedSentence", {s : "This morning, a manager stayed who is rarely in the office so the employees were very well behaved."}],
//["filler", "DashedSentence", {s : "The reporter interviewed the actors about the movie."}],
//["filler", "DashedSentence", {s : "The student petitioned the professors regarding the course."}],
//["filler", "DashedSentence", {s : "The agent approached the publicists about the photo-shoot."}],
//["filler", "DashedSentence", {s : "The socialite praised the hostesses for the party which was held yesterday in a luxurious ballroom."}],
//["filler", "DashedSentence", {s : "The publisher complimented the editors on the magazine."}],
//["filler", "DashedSentence", {s : "The counselor consoled the students about the competition."}],
//["filler", "DashedSentence", {s : "The principal criticized the instructors for the program."}]
//
// have you deleted the last comma???

];

