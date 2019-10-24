//var shuffleSequence = seq("intro", sepWith("sep", seq("practice", rshuffle("s1", "s2"))), sepWith("sep", rshuffle("q1", "q2")));
//
//var shuffleSequence = seq(sepWith("sep", randomize("filler")));
//var shuffleSequence = seq(sepWith("sep", randomize("critical1", "critical2")));
//var shuffleSequence = seq("setcounter", sepWith("sep", rshuffle(startsWith("tense"), startsWith("filler"))));

var shuffleSequence = seq("intro", seq(sepWith("sep", seq("practice", rshuffle(startsWith("critical"), startsWith("filler"))))));
//var shuffleSequence = seq(sepWith("sep", seq("practice", rshuffle(startsWith("critical"), startsWith("filler")))));

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
	    randomOrder : false,
	    as : ["Yes", "No"]
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


[["critical1", 1], "DashedSentence", {s : "The book that the student who the new catalog had confused a great deal was studying in the library was missing an important page."}, "Question", {q : "Was the book missing an important page?", hasCorrect : 0}],
[["critical2", 1], "DashedSentence", {s : "The book that the student who the new catalog was studying in the library was missing an important page."}, "Question", {q : "Was the book missing an important page?", hasCorrect : 0}],
[["critical3", 1], "DashedSentence", {s : "The book that the student who the new catalog had confused a great deal was missing an important page."}, "Question", {q : "Was the book missing an important page?", hasCorrect : 0}],
[["critical1", 2], "DashedSentence", {s : "The lullaby that the singer who the record label had signed to a big contract was singing yesterday was written sixty years ago."}, "Question", {q : "Was the symphony written eighty years ago?", hasCorrect : 1}],
[["critical2", 2], "DashedSentence", {s : "The lullaby that the singer who the record label was singing yesterday was written sixty years ago."}, "Question", {q : "", hasCorrect : 1}],
[["critical3", 2], "DashedSentence", {s : "The lullaby that the singer who the record label had signed to a big contract was written sixty years ago."}],
[["critical1", 3], "DashedSentence", {s : "The game that the child who the lawnmower had startled in the yard was playing in the morning lasted for several hours."}, "Question", {q : "Did the game last for several hours?", hasCorrect : 0}],
[["critical2", 3], "DashedSentence", {s : "The game that the child who the lawnmower was playing in the morning lasted for several hours."}],
[["critical3", 3], "DashedSentence", {s : "The game that the child who the lawnmower had startled in the yard lasted for several hours."}],
[["critical1", 4], "DashedSentence", {s : "The crime that the gangster who the story had profiled thoroughly had planned for weeks was solved in the middle of the night."}, "Question", {q : "Was the crime solved in the morning?", hasCorrect : 1}],
[["critical2", 4], "DashedSentence", {s : "The crime that the gangster who the story had planned for weeks was solved in the middle of the night."}],
[["critical3", 4], "DashedSentence", {s : "The crime that the gangster who the story had profiled thoroughly was solved in the middle of the night."}],
[["critical1", 5], "DashedSentence", {s : "The picture that the student who the school had expelled for cheating was hurriedly copying was printed in a popular magazine."}, "Question", {q : "Was the picture printed in a popular magazine?", hasCorrect : 0}],
[["critical2", 5], "DashedSentence", {s : "The picture that the student who the school was hurriedly copying was printed in a popular magazine."}],
[["critical3", 5], "DashedSentence", {s : "The picture that the student who the school had expelled for cheating was printed in a popular magazine."}],
[["critical1", 6], "DashedSentence", {s : "The trophy that the athlete who the restaurant had hired as a spokesman had won at the championship was stolen the day after."}, "Question", {q : "Was the trophy stolen a year after the championship?", hasCorrect : 1}],
[["critical2", 6], "DashedSentence", {s : "The trophy that the athlete who the restaurant had won at the championship was stolen the day after."}],
[["critical3", 6], "DashedSentence", {s : "The trophy that the athlete who the restaurant had hired as a spokesman was stolen the day after."}],
[["critical1", 7], "DashedSentence", {s : "The apartment that the maid who the service had sent over was cleaning every week was decorated with beautiful flowers."}],
[["critical2", 7], "DashedSentence", {s : "The apartment that the maid who the service was cleaning every week was decorated with beautiful flowers."}],
[["critical3", 7], "DashedSentence", {s : "The apartment that the maid who the service had sent over was decorated with beautiful flowers."}],
[["critical1", 8], "DashedSentence", {s : "The shirt that the seamstress who the officer had investigated last week was carefully mending needed to be washed at thirty degrees."}, "Question", {q : "Did the shirt need to be washed at eighty degrees?", hasCorrect : 1}],
[["critical2", 8], "DashedSentence", {s : "The shirt that the seamstress who the officer was carefully mending needed to be washed at thirty degrees."}],
[["critical3", 8], "DashedSentence", {s : "The shirt that the seamstress who the officer had investigated last week needed to be washed at thirty degrees."}],
[["critical1", 9], "DashedSentence", {s : "The lecture that the professor who the newspaper had interviewed in detail was teaching poorly was attended by twenty students."}],
[["critical2", 9], "DashedSentence", {s : "The lecture that the professor who the newspaper was teaching poorly was attended by twenty students."}],
[["critical3", 9], "DashedSentence", {s : "The lecture that the professor who the newspaper had interviewed in detail was attended by twenty students."}],
[["critical1", 10], "DashedSentence", {s : "The novel that the horror author who the publisher had fired recently had typed quickly was banned by the local library."}, "Question", {q : "Was the horror author banned by the local library?", hasCorrect : 1}],
[["critical2", 10], "DashedSentence", {s : "The novel that the horror author who the publisher had typed quickly was banned by the local library."}],
[["critical3", 10], "DashedSentence", {s : "The novel that the horror author who the publisher had fired recently was banned by the local library."}],
[["critical1", 11], "DashedSentence", {s : "The prayer that the monk who the religious man had persecuted fiercely was chanting every day was echoing in the empty church."}],
[["critical2", 11], "DashedSentence", {s : "The prayer that the monk who the religious man was chanting every day was echoing in the empty church."}],
[["critical3", 11], "DashedSentence", {s : "The prayer that the monk who the religious man had persecuted fiercely was echoing in the empty church."}],
[["critical1", 12], "DashedSentence", {s : "The play that the actor who the company had underpaid repeatedly was performing last month was extremely well written by a famous author."}, "Question", {q : "Had the company underpaid the author?", hasCorrect : 1}],
[["critical2", 12], "DashedSentence", {s : "The play that the actor who the company was performing last month was extremely well written by a famous author."}],
[["critical3", 12], "DashedSentence", {s : "The play that the actor who the company had underpaid repeatedly was extremely well written by a famous author."}],


["filler", "DashedSentence", {s : "The woman who was in the apartment hired the plumber despite the fact that he couldn't fix the toilet."}, "Question", {q : "", hasCorrect : 0}],
["filler", "DashedSentence", {s : "The cook who the servant in the kitchen hired offended the butler and then left the mansion early to see a movie at the local theater."}, "Question", {q : "", hasCorrect : 0}],
["filler", "DashedSentence", {s : "The hippies who the police at the concert arrested complained to the officials while the last act was going on stage."}, "Question", {q : "", hasCorrect : 0}],
["filler", "DashedSentence", {s : "The manager who the baker loathed spoke to the new pastry chef because he had instituted a new dress code for all employees."}, "Question", {q : "", hasCorrect : 0}],
["filler", "DashedSentence", {s : "The astronaut that the journalists who were at the launch worshipped criticized the administrators after he discovered a potential leak in the fuel tank."}, "Question", {q : "", hasCorrect : 0}],
["filler", "DashedSentence", {s : "The student quickly finished his homework assignments."}, "Question", {q : "", hasCorrect : 0}],
["filler", "DashedSentence", {s : "The defender is constantly scolding the keeper."}, "Question", {q : "", hasCorrect : 0}],
["filler", "DashedSentence", {s : "The company was sure that its new product, which its researchers had developed, would soon be sold out."}, "Question", {q : "", hasCorrect : 0}],
["filler", "DashedSentence", {s : "The gangster who the detective at the club followed implicated the waitress because the police suspected he had murdered the shopkeeper."}, "Question", {q : "", hasCorrect : 0}],
["filler", "DashedSentence", {s : "The roommate takes out the garbage every week."}, "Question", {q : "", hasCorrect : 0}],
["filler", "DashedSentence", {s : "The rebels who were in the jungle captured the diplomat after they threatened to kill his family for not complying with their demands."}, "Question", {q : "", hasCorrect : 0}],
["filler", "DashedSentence", {s : "The speaker who the historian offended kicked a chair after the talk was over and everyone had left the room."}, "Question", {q : "", hasCorrect : 0}],
["filler", "DashedSentence", {s : "The engineer who the lawyer who was by the elevator scolded blamed the secretary but nobody listened to his complaints."}, "Question", {q : "", hasCorrect : 0}],
["filler", "DashedSentence", {s : "The photographer processed the film on time."}, "Question", {q : "Was the film processed on time?", hasCorrect : 0}],
["filler", "DashedSentence", {s : "The sportsman goes jogging in the park regularly."}, "Question", {q : "Does the sportsman go jogging in the park?", hasCorrect : 0}],
["filler", "DashedSentence", {s : "Yesterday the swimmer saw only a turtle at the beach."}, "Question", {q : "Did the swimmer see a turtle?", hasCorrect : 0}],
["filler", "DashedSentence", {s : "The teacher doubted that the test that had taken him a long time to design would be easy to answer."}, "Question", {q : "Did it take a long time to design the test?", hasCorrect : 0}],
["filler", "DashedSentence", {s : "The intern comforted the patient because he was in great pain."}, "Question", {q : "Was the patient in pain?", hasCorrect : 0}],
["filler", "DashedSentence", {s : "The cartoonist who the readers supported pressured the dean because she thought that censorship was never appropriate."}, "Question", {q : "Did the readers support the cartoonist?", hasCorrect : 0}],
["filler", "DashedSentence", {s : "The trainee knew that the task which the director had set for him was impossible to finish within a week."}, "Question", {q : "Did the director set a task for the trainee?", hasCorrect : 0}],
["filler", "DashedSentence", {s : "The firemen at the scene apprehended the arsonist because there was a great deal of evidence pointing to his guilt."}, "Question", {q : "Was the arsonist arrested?", hasCorrect : 0}],
["filler", "DashedSentence", {s : "The technician at the show repaired the robot while people were taking a break for coffee."}, "Question", {q : "Were people raking a break?", hasCorrect : 0}],
["filler", "DashedSentence", {s : "The beggar is often scrounging for cigarettes."}, "Question", {q : "", hasCorrect : 0}],
["filler", "DashedSentence", {s : "The dragon wounded the knight although he was far too crippled to protect the princess."}, "Question", {q : "", hasCorrect : 0}],
["filler", "DashedSentence", {s : "The office-worker worked through the stack of files on his desk quickly."}, "Question", {q : "", hasCorrect : 0}],
["filler", "DashedSentence", {s : "The janitor who the doorman who was at the hotel chatted with bothered a guest but the manager decided not to fire him for it."}, "Question", {q : "", hasCorrect : 0}],
["filler", "DashedSentence", {s : "The administrator who the nurse from the clinic supervised scolded the medic while a patient was brought into the emergency room."}, "Question", {q : "", hasCorrect : 0}],
["filler", "DashedSentence", {s : "The producer shoots a new movie every year."}],
["filler", "DashedSentence", {s : "The locksmith can crack the safe easily."}],
["filler", "DashedSentence", {s : "The surgeon who the detective who was on the case consulted questioned the coroner because the markings on the body were difficult to explain."}],
["filler", "DashedSentence", {s : "The fans at the concert loved the guitarist because he played with so much energy."}],
["filler", "DashedSentence", {s : "The quarterback dated the cheerleader although this hurt her reputation around school."}],
["filler", "DashedSentence", {s : "The audience who was at the club booed the singer before the owner of the bar could remove him from the stage."}],
["filler", "DashedSentence", {s : "The scientists who were in the lab studied the alien while the blood sample was run through the computer."}, "Question", {q : "Did the alien study the blood sample?", hasCorrect : 1}],
["filler", "DashedSentence", {s : "The private tutor explained the assignment carefully."}],
["filler", "DashedSentence", {s : "The librarian put the book onto the shelf."}],
["filler", "DashedSentence", {s : "The students studied the surgeon whenever he performed an important operation."}],
["filler", "DashedSentence", {s : "The environmentalist who the demonstrators at the rally supported calmed the crowd until security came and sent everyone home."}],
["filler", "DashedSentence", {s : "The casino hired the daredevil because he was confident that everything would go according to plan."}],
["filler", "DashedSentence", {s : "The citizens of France eat oysters."}],
["filler", "DashedSentence", {s : "The prisoner who the guard attacked tackled the warden although he had no intention of trying to escape."}],
["filler", "DashedSentence", {s : "The biker who the police arrested ran a light since he was driving under the influence of alcohol."}],
["filler", "DashedSentence", {s : "Dinosaurs ate other reptiles during the stone age."}],
["filler", "DashedSentence", {s : "The salesman feared that the printer which the customer bought was damaged."}],
["filler", "DashedSentence", {s : "After the argument, the husband ignored his wife."}],
["filler", "DashedSentence", {s : "The customer who was on the phone contacted the operator because the new long-distance pricing plan was extremely inconvenient."}],
["filler", "DashedSentence", {s : "The divorcee has come to love her life ever since she got divorced."}],
["filler", "DashedSentence", {s : "During the party everybody was dancing to rock music."}],
["filler", "DashedSentence", {s : "The showman travels to different cities every month."}],
["filler", "DashedSentence", {s : "The bully punched the kid after all the kids had to leave to go to class."}],
["filler", "DashedSentence", {s : "The spider that the boy who was in the yard captured scared the dog since it was larger than the average spider."}],
["filler", "DashedSentence", {s : "The natives on the island captured the anthropologist because she had information that could help the tribe."}],
["filler", "DashedSentence", {s : "The passer-by threw the cardboard box into the trash-can with great force."}, "Question", {q : "Did the passer-by throw the trash-can?", hasCorrect : 1}],
["filler", "DashedSentence", {s : "The mathematician at the banquet baffled the philosopher although she rarely needed anyone else's help."}, "Question", {q : "Did the philosopher baffle the mathematician?", hasCorrect : 1}],
["filler", "DashedSentence", {s : "During the season, the choir holds rehearsals in the church regularly."}, "Question", {q : "Does the choir hold rehearsals in the townhall?", hasCorrect : 1}],
["filler", "DashedSentence", {s : "The milkman punctually delivers the milk at the door every day."}, "Question", {q : "Is the milkman sometimes late?", hasCorrect : 1}],


	// Modified fillers
//["filler", "DashedSentence", {s : "The scientists studied the alien while the blood sample was run through the computer."}],
//["filler", "DashedSentence", {s : "The guard by the gate attacked the prisoner although he had no intention of trying to escape."}, "Question", {q : "Did the prisoner attack the guard?", hasCorrect : 1}],
//["filler", "DashedSentence", {s : "The surgeon who the detective on the case consulted questioned the coroner because the markings on the body were difficult to explain."}, "Question", {q : "Did the coroner question the surgeon?", hasCorrect : 1}],
//["filler", "DashedSentence", {s : "The baker who was at the shop loathed the manager because he had instituted a new dress code for all employees."}, "Question", {q : "Did the manager loath the baker?", hasCorrect : 1}],
//["filler", "DashedSentence", {s : "The manager who the baker at the shop loathed spoke to the new pastry chef because he had instituted a new dress code for all employees."}, "Question", {q : "Did the chef speak to the baker?", hasCorrect : 1}],
//
//["filler", "DashedSentence", {s : "The quarterback on the team dated the cheerleader although this hurt her reputation around school."}, "Question", {q : "Did the quarterback date the cheerleader?", hasCorrect : 0}],
//
//["filler", "DashedSentence", {s : "The janitor who the doorman at the hotel chatted with bothered a guest but the manager decided not to fire him for it."}, "Question", {q : "Did the janitor chat with the guest?", hasCorrect : 1}],
//["filler", "DashedSentence", {s : "The bully on the playground punched the kid after all the kids had to leave to go to class."}, "Question", {q : "Did the bully go to class?", hasCorrect : 1}],
//["filler", "DashedSentence", {s : "The speaker who the historian by the podium offended kicked a chair after the talk was over and everyone had left the room."}, "Question", {q : "Did the historian kick a chair?", hasCorrect : 1}],
//["filler", "DashedSentence", {s : "The knight who the dragon wounded married the princess although he was far too crippled to protect her."}, "Question", {q : "Was the dragon crippled?", hasCorrect : 1}],
//["filler", "DashedSentence", {s : "The speaker who the historian offended kicked a chair after the talk was over and everyone had left the room."}, "Question", {q : "Had the speaker left the room?", hasCorrect : 1}],
//["filler", "DashedSentence", {s : "The alien who the scientists studied killed an assistant while the blood sample was run through the computer."}, "Question", {q : "Did the scientist kill the alien?", hasCorrect : 1}],
//["filler", "DashedSentence", {s : "The engineer who the lawyer by the elevator scolded blamed the secretary but nobody listened to his complaints."}, "Question", {q : "Did the engineer listen to the complaints?", hasCorrect : 1}],
//["filler", "DashedSentence", {s : "The environmentalist who the demonstrators who were at the rally supported calmed the crowd until security came and sent everyone home."}, "Question", {q : "Did the environmentalist send everyone home?", hasCorrect : 1}],
//["filler", "DashedSentence", {s : "The quarterback dated the cheerleader although this hurt her reputation around school."}],
//["filler", "DashedSentence", {s : "The daredevil who the casino hired waved to the crowd because he was confident that everything would go according to plan."}],
//["filler", "DashedSentence", {s : "The philosopher who the mathematician who was at the banquet baffled consulted a colleague although she rarely needed anyone else's help."}],
//["filler", "DashedSentence", {s : "The biker who the police who were at the intersection arrested ran a light since he was driving under the influence of alcohol."}],
//["filler", "DashedSentence", {s : "The robot that the technician who was at the show repaired surveyed the crowd while people were taking a break for coffee."}],
//["filler", "DashedSentence", {s : "The students studied the surgeon whenever he performed an important operation."}],
//["filler", "DashedSentence", {s : "The bully punched the kid after all the kids had to leave to go to class."}],
//["filler", "DashedSentence", {s : "The guitarist who the fans who were at the concert loved injured a spectator because he played with so much energy."}],
//["filler", "DashedSentence", {s : "The guitarist who the fans loved injured a spectator because he played with so much energy."}],
//["filler", "DashedSentence", {s : "The historian who was by the podium offended the speaker after the talk was over and everyone had left the room."}],
//["filler", "DashedSentence", {s : "The cheerleader who the quarterback dated snubbed the teammates although this hurt her reputation around school."}],
//["filler", "DashedSentence", {s : "The technician at the show repaired the robot while people were taking a break for coffee."}],
//["filler", "DashedSentence", {s : "The alien who the scientists who were in the lab studied killed an assistant while the blood sample was run through the computer."}],
//["filler", "DashedSentence", {s : "The students who were at the operation studied the surgeon whenever he performed an important operation."}],
//["filler", "DashedSentence", {s : "The operator who the customer contacted notified the supervisor because the new long-distance pricing plan was extremely inconvenient."}],
//["filler", "DashedSentence", {s : "The anthropologist who the natives captured talked to the chief because she had information that could help the tribe."}],
//["filler", "DashedSentence", {s : "The cartoonist who the readers who were from the university supported pressured the dean because she thought that censorship was never appropriate."}],
//["filler", "DashedSentence", {s : "The spider that the boy in the yard captured scared the dog since it was larger than the average spider."}],
//["filler", "DashedSentence", {s : "The nurse from the clinic supervised the administrator while a patient was brought into the emergency room."}],
//["filler", "DashedSentence", {s : "The surgeon who the detective who was on the case consulted questioned the coroner because the markings on the body were difficult to explain."}],
//["filler", "DashedSentence", {s : "The photographer processed the film on time."}],
//["filler", "DashedSentence", {s : "The firemen at the scene apprehended the arsonist because there was a great deal of evidence pointing to his guilt."}],
//["filler", "DashedSentence", {s : "The readers supported the cartoonist because she thought that censorship was never appropriate."}],
//["filler", "DashedSentence", {s : "The biker who the police arrested ran a light since he was driving under the influence of alcohol."}],
//["filler", "DashedSentence", {s : "The producer shoots a new movie every year."}],
//["filler", "DashedSentence", {s : "The sportsman goes jogging in the park regularly."}],
//["filler", "DashedSentence", {s : "The spider that the boy captured scared the dog since it was larger than the average spider."}],
//["filler", "DashedSentence", {s : "The boy in the yard captured the spider since it was larger than the average spider."}],
//["filler", "DashedSentence", {s : "The guard attacked the prisoner although he had no intention of trying to escape."}],
//["filler", "DashedSentence", {s : "The janitor who the doorman chatted with bothered a guest but the manager decided not to fire him for it."}],
//["filler", "DashedSentence", {s : "The quarterback who was on the team dated the cheerleader although this hurt her reputation around school."}],
//["filler", "DashedSentence", {s : "The defender is constantly scolding the keeper."}],
//["filler", "DashedSentence", {s : "The plumber who the woman in the kitchen hired fixed the sink despite the fact that he couldn't fix the toilet."}],
//["filler", "DashedSentence", {s : "The alien who the scientists in the lab studied killed an assistant while the blood sample was run through the computer."}],
//["filler", "DashedSentence", {s : "The fans at the concert loved the guitarist because he played with so much energy."}],
//["filler", "DashedSentence", {s : "The gangster who the detective who was at the club followed implicated the waitress because the police suspected he had murdered the shopkeeper."}],
//["filler", "DashedSentence", {s : "The nurse who was from the clinic supervised the administrator while a patient was brought into the emergency room."}],
//["filler", "DashedSentence", {s : "The detective who was at the club followed the gangster because the police suspected he had murdered the shopkeeper."}],
//["filler", "DashedSentence", {s : "The knight who the dragon who was in the tower wounded married the princess although he was far too crippled to protect her."}],
//["filler", "DashedSentence", {s : "The roommate takes out the garbage every week."}],
//["filler", "DashedSentence", {s : "The office-worker worked through the stack of files on his desk quickly."}],
//["filler", "DashedSentence", {s : "The servant in the kitchen hired the cook and then left the mansion early to see a movie at the local theater."}],
//
// have you deleted the last comma???




];





	// The following five are changed to remove extraposition
//["filler", "DashedSentence", {s : "The lecturer spoke to the man in the classroom wearing a blue suit which had good seating and blackboards."}, "Question", {q : "Was the man wearing a blue suit?", as : ["Yes", "No"], hasCorrect : 0}],
//["filler", "DashedSentence", {s : "The florist sent the flowers on the table to the boy that were very expensive."}, "Question", {q : "Did the boy send flowers?", as : ["Yes", "No"], hasCorrect : 1}],
//["filler", "DashedSentence", {s : "The librarian delivered the books with many photographs to the building which depicted horses."}, "Question", {q : "Did the librarian deliver the books?", as : ["Yes", "No"], hasCorrect : 0}],
//["filler", "DashedSentence", {s : "The astronaut flew the spaceship with three tanks to the moon which were filled with fuel."}, "Question", {q : "Did the spaceship have two tanks?", as : ["Yes", "No"], hasCorrect : 1}],
//["filler", "DashedSentence", {s : "The delivery man left the package with two labels on the porch which were printed with an address."}, "Question", {q : "Was the package left in the mailbox?", as : ["Yes", "No"], hasCorrect : 1}],


//["filler", "DashedSentence", {s : "When the boat on the shore Philip reached try to start the engine and escape from the soldiers he did."}, "Question", {q : "Did Philip try to escape from the soldiers?", as : ["Yes", "No"], hasCorrect : 0}],
//["filler", "DashedSentence", {s : "Because if when the baby is crying, the mother gets upset, the father will help, the grandmother can rest easily."}, "Question", {q : "Will the father help?", as : ["Yes", "No"], hasCorrect : 0}],

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



