//var shuffleSequence = seq("intro", sepWith("sep", seq("practice", rshuffle("s1", "s2"))), sepWith("sep", rshuffle("q1", "q2")));
//
var shuffleSequence = seq(sepWith("sep", randomize("filler")));

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
        hasCorrect: true
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

    // New in Ibex 0.3-beta-9. You can now add a '__SendResults__' controller in your shuffle
    // sequence to send results before the experiment has finished. This is NOT intended to allow
    // for incremental sending of results -- you should send results exactly once per experiment.
    // However, it does permit additional messages to be displayed to participants once the
    // experiment itself is over. If you are manually inserting a '__SendResults__' controller into
    // the shuffle sequence, you must set the 'manualSendResults' configuration variable to 'true', since
    // otherwise, results are automatically sent at the end of the experiment.
    //
    //["sr", "__SendResults__", { }],

    ["sep", "Separator", { }],

    // New in Ibex 0.3-beta19. You can now determine the point in the experiment at which the counter
    // for latin square designs will be updated. (Previously, this was always updated upon completion
    // of the experiment.) To do this, insert the special '__SetCounter__' controller at the desired
    // point in your running order. If given no options, the counter is incremented by one. If given
    // an 'inc' option, the counter is incremented by the specified amount. If given a 'set' option,
    // the counter is set to the given number. (E.g., { set: 100 }, { inc: -1 })
    //
    //["setcounter", "__SetCounter__", { }],

    // NOTE: You could also use the 'Message' controller for the experiment intro (this provides a simple
    // consent checkbox).

    ["intro", "Form", {
        html: { include: "example_intro.html" },
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    } ],
//   ["intro", "Form", {consentRequired: true, html: {include: "intro.html" }} ],
  // ["intro", "Form", {consentRequired: true, html: {include: "intro1.html" }} ],
//   ["intro", "Form", {consentRequired: true, html: {include: "intro2.html" }} ],
  // ["intro", "Form", {consentRequired: true, html: {include: "intro3.html" }} ],
    //
    // Three practice items for self-paced reading (one with a comprehension question).
    //
    ["practice", "DashedSentence", {s: "This is a practice sentence to get you used to reading sentences like this."}],
    ["practice", "DashedSentence", {s: "This is another practice sentence with a practice question following it."},
                 "Question", {hasCorrect: false, randomOrder: false,
                              q: "How would you like to answer this question?",
                              as: ["Press 1 or click here for this answer.",
                                   "Press 2 or click here for this answer.",
                                   "Press 3 or click here for this answer."]}],
    ["practice", "DashedSentence", {s: "This is the last practice sentence before the experiment begins."}],

    //
    // Two "real" (i.e. non-filler) self-paced reading items with corresponding acceptability judgment items.
    // There are two conditions.
    //

    [["s1",1], "DashedSentence", {s: "The shirt that the seamstress who the officer had investigated last week was carefully mending needed to be washed at thirty degrees."},
               "Question",       {q: "The actress was:", as: ["shy", "publicity-seeking", "impatient"]}],
    [["s2",1], "DashedSentence", {s: "The journalist interviewed an actress who after meeting on a previous occasion he knew to be shy of publicity."},
               "Question",       {q: "The actress was:", as: ["shy", "publicity-seeking", "impatient"]}],

    // The first question will be chosen if the first sentence from the previous two items is chosen;
    // the second question will be chosen if the second sentence from the previous pair of items is chosen.
    [["q1",[100,1]], "AcceptabilityJudgment", {s: "Which actress did the journalist interview after meeting her PA on a previous occasion?"}],
    [["q2",[100,1]], "AcceptabilityJudgment", {s: "Which actress did the journalist interview her husband after meeting on a previous occasion?"}],

    [["s1",2], "DashedSentence", {s: "The teacher helped struggling students who he encouraged to succeed without treating like idiots."},
               "Question",       {q: "What did the teacher do?",
                                  as: ["Encourage struggling students to succeed",
                                       "Encourage his best students to succeed",
                                       "Treat struffling students like idiots"]}],
    [["s2",2], "DashedSentence", {s: "The teacher helped struggling students who without treating like idiots he encouraged to succeed."},
               "Question",       {q: "What did the teacher do?", as: ["Encourage struggling students to succeed",
                                                                      "Encourage his best students to succeed",
                                                                      "Treat struggling students like idiots"]}],

    [["q1",[200,2]], "AcceptabilityJudgment", {s: {html: "<b>Which struggling students</b> did the teacher encourage to succeed without treating their friends like idiots?"}}],
    [["q2",[200,2]], "AcceptabilityJudgment", {s: {html: "<b>Which struggling students</b> did the teacher encourage their friends to succeed without treating like idiots?"}}],

    //
    // 10 self-paced-reading filler sentences.
    //

["filler", "DashedSentence", {s : "Since that when it storms, the grass gets wet, the landscaper can't cut the grass, the garden will be overgrown."}, "Question", {q : "Will the garden be cut?", as : ["No", "Yes"]}],
["filler", "DashedSentence", {s : "The lecturer spoke to the man in the classroom wearing a blue suit which had good seating and blackboards."}, "Question", {q : "Was the man wearing a blue suit?", as : ["Yes", "No"]}],
["filler", "DashedSentence", {s : "The florist sent the flowers on the table to the boy that were very expensive."}, "Question", {q : "Did the boy send flowers?", as : ["No", "Yes"]}],
["filler", "DashedSentence", {s : "The librarian delivered the books with many photographs to the building which depicted horses."}, "Question", {q : "Did the librarian deliver the books?", as : ["Yes", "No"]}],
["filler", "DashedSentence", {s : "The astronaut flew the spaceship with three tanks to the moon which were filled with fuel."}, "Question", {q : "Did the spaceship have two tanks?", as : ["No", "Yes"]}],
["filler", "DashedSentence", {s : "The delivery man left the package with two labels on the porch which were printed with an address."}, "Question", {q : "Was the package left in the mailbox?", as : ["No", "Yes"]}],
["filler", "DashedSentence", {s : "Jonathan will buy the red sports car from the dealer as soon as he returns from his vacation in the Caribbean."}, "Question", {q : "Was Jonathan vacationing in the Caribbean?", as : ["Yes", "No"]}],
["filler", "DashedSentence", {s : "The soccer team easily defeated their opponents with an impressive show of speed, cleverness and tenacity."}, "Question", {q : "Did the soccer team defeat their opponents?", as : ["Yes", "No"]}],
["filler", "DashedSentence", {s : "When my father lived in Australia, he would often go surfing along the coastal waters of Melbourne."}, "Question", {q : "Did my father surf?", as : ["Yes", "No"]}],
["filler", "DashedSentence", {s : "The police officer will guard the crosswalk as the children pass by on the way to elementary school."}, "Question", {q : "Did the police officer guard the crosswalk?", as : ["Yes", "No"]}],
["filler", "DashedSentence", {s : "The board of directors announced that the business acquisition strategy was proceeding as planned."}, "Question", {q : "Did the board of directors make an announcement?", as : ["Yes", "No"]}],
["filler", "DashedSentence", {s : "In 1945, Germany and Japan surrendered to the Allied forces, ending one of the bloodiest conflicts in history."}, "Question", {q : "Did Japan surrender to Germany?", as : ["No", "Yes"]}],
["filler", "DashedSentence", {s : "Harvard University recently purchased a large tract of land to be used as a new boathouse for the rowing team."}, "Question", {q : "Did Stanford University purchase land?", as : ["No", "Yes"]}],
["filler", "DashedSentence", {s : "Maple trees are classified as deciduous, whereas Norwegian pines are considered to be evergreen."}, "Question", {q : "Are maple and Norwegian pine trees classified similarly?", as : ["No", "Yes"]}],
["filler", "DashedSentence", {s : "The two children walked slowly in front of their mother as they gradually approached the playground."}, "Question", {q : "Did the children run in front of their mother?", as : ["No", "Yes"]}],
["filler", "DashedSentence", {s : "The city of San Francisco is considered an expensive place to live, as rental rates routinely approach thousands of dollars."}, "Question", {q : "Is San Francisco considered an inexpensive place to live?", as : ["No", "Yes"]}],
["filler", "DashedSentence", {s : "The team decided that the strategy that the visitors from Arkansas that were known to be troublemakers had used to win the tournament was a form of cheating."}, "Question", {q : "Were the visitors from Arkansas known to be troublemakers?", as : ["Yes", "No"]}],
["filler", "DashedSentence", {s : "The man that drove the car that had the paint job that was peeling ran into a pedestrian."}, "Question", {q : "Did the man run into a pedestrian?", as : ["Yes", "No"]}],
["filler", "DashedSentence", {s : "When the boat on the shore Philip reached try to start the engine and escape from the soldiers he did."}, "Question", {q : "Did Philip try to escape from the soldiers?", as : ["Yes", "No"]}],
["filler", "DashedSentence", {s : "Because if when the baby is crying, the mother gets upset, the father will help, the grandmother can rest easily."}, "Question", {q : "Will the father help?", as : ["Yes", "No"]}],
["filler", "DashedSentence", {s : "The professor said that the student that the committee that was visiting picked would present at the conference."}],
["filler", "DashedSentence", {s : "The student petitioned the instructor about the college who was writing a thesis on Philosophy."}],
["filler", "DashedSentence", {s : "The socialite praised the hostess about the party who was preparing a fresh batch of punch."}],
["filler", "DashedSentence", {s : "The parent called the teacher about the class who was giving bad grades to foreign students."}],
["filler", "DashedSentence", {s : "The neighbor approached the owner about the dog who was building a doghouse over the property line."}],
["filler", "DashedSentence", {s : "The policeman questioned the driver about the bus who was directing tourists to the restricted ruins."}],
["filler", "DashedSentence", {s : "The chairman consulted the executive about the company who was playing golf at the country club."}],
["filler", "DashedSentence", {s : "The republican challenged the president about the nation who was elected by the left-wing opposition."}],
["filler", "DashedSentence", {s : "The reporter approached the victim about the attack who was injured by the suicide bomber."}],
["filler", "DashedSentence", {s : "The principal questioned the member about the clique who was mouthing off to teachers."}],
["filler", "DashedSentence", {s : "The homeowner consulted the architect about the house who was worried about being behind schedule."}],
["filler", "DashedSentence", {s : "The sportscaster interviewed the captain about the team who was leading his team to the championship."}],
["filler", "DashedSentence", {s : "The colonel cautioned the commander about the platoon who was ordering the troops to continue fighting."}],
["filler", "DashedSentence", {s : "The critic complimented the director about the play who was asked to write the screenplay."}],
["filler", "DashedSentence", {s : "The salesman called the buyer about the rifle who was looking for antiques from the war."}],
["filler", "DashedSentence", {s : "The activist petitioned the sponsor about the bill who was speaking out against immigration."}],
["filler", "DashedSentence", {s : "The officer cautioned the driver about the explorer who was talking on the phone while driving."}],
["filler", "DashedSentence", {s : "The scientist challenged the inventor about the drug who was claiming to have found a cure for cancer."}],
["filler", "DashedSentence", {s : "The host complimented the author about the book who was being interviewed on all the talk shows."}],
["filler", "DashedSentence", {s : "Yesterday, a patient complained who had missed his noon appointment so the doctor agreed to see him early tomorrow."}],
["filler", "DashedSentence", {s : "This morning, a manager stayed who is rarely in the office so the employees were very well behaved."}],
["filler", "DashedSentence", {s : "The reporter interviewed the actors about the movie."}],
["filler", "DashedSentence", {s : "The student petitioned the professors regarding the course."}],
["filler", "DashedSentence", {s : "The agent approached the publicists about the photo-shoot."}],
["filler", "DashedSentence", {s : "The socialite praised the hostesses for the party which was held yesterday in a luxurious ballroom."}],
["filler", "DashedSentence", {s : "The publisher complimented the editors on the magazine."}],
["filler", "DashedSentence", {s : "The counselor consoled the students about the competition."}],
["filler", "DashedSentence", {s : "The principal criticized the instructors for the program."}],


    ["f", "DashedSentence", {s: "The foreign spy that encoded the top-secret messages was given a new mission that required going to Japan."},
          "Question",       {q: "The spy's mission required him to:", as: ["Go to Japan", "Destroy top-secret messages", "Bug a hotel room"]}],

    ["f", "DashedSentence", {s: "The receptionist that the real estate company just hired immediately familiarized herself with all the phone numbers of their clients."},
          "Question",       {q: "The receptionist familiarized herself with:",
                             as: ["Some phone numbers",
                                  "The health and safety regulations",
                                  "Her boss"]}],

    ["f", "DashedSentence", {s: "Only two specialized surgeons that work in the hospital could do this operation."},
          "Question",       {q: "The operation can be performed by:",
                             as: ["Two surgeons with specialist training",
                                  "All the surgeons at the hospital",
                                  "Three surgeons who are currently off sick"]}],

    ["f", "DashedSentence", {s: "The gangsters that the local police officers tracked for years were represented by an inexperienced lawyer."},
          "Question",       {q: "Who did the inexperienced lawyer represent?",
                             as: ["Some gangsters", "Some local police officers", "A murder suspect"]}],

    ["f", "DashedSentence", {s: "The woman that John had seen in the subway bought herself a pair of stunning shoes that cost a fortune."},
          "Question",       {q: "Where did John see the woman?", as: ["In the subway", "On the bus", "In the shoe shop"]}],

    ["f", "DashedSentence", {s: "If the award-winning chef had entered this competition, he surely would have won first prize."},
          "Question",       {q: "Why didn't the chef win the competition?",
                             as: ["Because he didn't enter it",
                                  "Because his food wasn't good enough.",
                                  "Because he was kicked out for cheating."]}],

    ["f", "DashedSentence", {s: "If the organized secretary had filed the documents when she first received them, they would have been easy to find."},
          "Question",       {q: "Why were the documents difficult to find?",
                             as: ["Because the secretary hadn't filed them properly",
                                  "Because a manager at the company had lost them",
                                  "Because they had been stolen."]}],
    // first is "group" -- effectively the item, and exactly one version per group will be selected
    ["f", "DashedSentence", {s: "If the homemade beer had been left to ferment more, it would have been drinkable."},
          "Question",       {q: "Why wasn't the homemade beer drinkable?",
                             as: ["It hadn't been left to ferment long enough",
                                  "It had been left to ferment too long",
                                  "The ingredients had been measured incorrectly."]}],

    ["f", "DashedSentence", {s: "The cowboy that the bulls tried to trample injured himself getting off a horse."}],

    ["f", "DashedSentence", {s: "The patient that was admitted to the hospital last month still suffers severe pain in his left leg."},
          "Question",       {q: "Which of the following is true?",
                             as: ["The patient still has severe pain in his left leg",
                                  "The patient still has severe pain in his right leg",
                                  "The patient no longer suffers from pain in his left leg"]}],
];

