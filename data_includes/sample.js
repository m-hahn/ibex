//for G-maze
var shuffleSequence = seq("intro", "intro-gram", "intro-practice", followEachWith("sep", "practice"), "end-practice", followEachWith("sep",randomize(anyOf(startsWith("critical"),startsWith("and"), startsWith("adverb"), startsWith("filler")))),  "exit");

var showProgressBar =true;

var defaults = [
   // "Maze", {redo: true}, //uncomment to try "redo" mode
];

var nouns = ['announcement', 'suspicion', 'allegation', 'realization', 'indication', 'remark', 'speculation', 'assurance', 'presumption', 'finding', 'assertion', 'statement', 'assumption', 'conclusion', 'report', 'story', 'disclosure', 'confirmation', 'information', 'evidence', 'reminder', 'rumor', 'thought', 'suggestion', 'revelation', 'belief', 'inkling', 'suspicion', 'idea', 'claim', 'news', 'proof', 'admission', 'declaration', 'fact'];
shuffle(nouns);
console.log(nouns);

var items = [
    ["intro", "Form", {
        html: { include: "example_intro.html" },
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    } ],
   ["intro", "Form", {consentRequired: true, html: {include: "intro.html" }} ],
//   ["intro", "Form", {consentRequired: true, html: {include: "intro1.html" }} ],
//   ["intro", "Form", {consentRequired: true, html: {include: "intro2.html" }} ],
//   ["intro", "Form", {consentRequired: true, html: {include: "intro3.html" }} ],

//		["instructions2", "Message", {html:'End of sample Maze experiment.'}],
	["intro-gram", "Message", {html: "<p>For this experiment, please place your left index finger on the 'e' key and your right index finger on the 'i' key.</p><p> You will read sentences word by word. On each screen you will see two options: one will be the next word in the sentence, and one will not. Select the word that continues the sentence by pressing 'e' (left-hand) for the word on the left or pressing 'i' (right-hand) for the word on the right.</p><p>Select the best word as quickly as you can, but without making too many errors.</p>"}],
//	["intro-practice", "Message", {html: "The following items are for practice." }],
//	["end-practice", "Message", {html: "End of practice. The experiment will begin next."}],
	["sep", "MazeSeparator", {normalMessage: "Correct! Press any key to continue", errorMessage: "Incorrect! Press any key to continue."}],
   ["exit", "Form", {consentRequired: true, html: {include: "post.html" }} ],
   ["exit", "Form", {consentRequired: false, html: {include: "exit.html" }} ],
	["done", "Message", {html: "All done!"}],
//	[["adverb_high", 72], "Maze", {s:"Kim will display the photos she took next month, but she won't show all of them.", a:"x-x-x- x-x-x- dealing sit compel eat thin poem older, us thy scale soft ran eat soon."}],
[["critical_g", 0], "Maze", {s:"The "+nouns[0]+" that the principal who the teacher liked was fired was quoted in the newspaper.", a:"x-x-x imposes soul ago involving glad holy instead chest cent medal lake brooks let camp involving."}],
[["critical_u", 0], "Maze", {s:"The "+nouns[0]+" that the principal who the teacher liked was quoted in the newspaper.", a:"x-x-x imposes soul ago involving glad holy instead chest lake brooks let camp involving."}],
[["critical_g", 1], "Maze", {s:"The "+nouns[1]+" that the sculptor who the painter admired wasn't talented was completely untrue.", a:"x-x-x compiles join map competed okay wide extends grilled strong threaten mid commission toured."}],
[["critical_u", 1], "Maze", {s:"The "+nouns[1]+" that the sculptor who the painter admired was completely untrue.", a:"x-x-x compiles join map competed okay wide extends grilled mid commission toured."}],
[["critical_g", 2], "Maze", {s:"The "+nouns[2]+" that the consultant who the artist hired was a fraud shocked everyone.", a:"x-x-x unlocks boy okay irrelevant us eye asleep smell east bill mills tourist consider."}],
[["critical_u", 2], "Maze", {s:"The "+nouns[2]+" that the consultant who the artist hired shocked everyone.", a:"x-x-x unlocks boy okay irrelevant us eye asleep smell tourist consider."}],
[["critical_g", 3], "Maze", {s:"The "+nouns[3]+" that the runner who the psychiatrist treated was doping was ridiculous.", a:"x-x-x narrates pro buy detect holy lord enthusiastic ongoing sun bidder cent exhibition."}],
[["critical_u", 3], "Maze", {s:"The "+nouns[3]+" that the runner who the psychiatrist treated was ridiculous.", a:"x-x-x narrates pro buy detect holy lord enthusiastic ongoing cent exhibition."}],
[["critical_g", 4], "Maze", {s:"The "+nouns[4]+" that the child who the medic rescued was unharmed relieved everyone.", a:"x-x-x symbolizes wish jack there trip hot vases fascist link tortoise tracking involved."}],
[["critical_u", 4], "Maze", {s:"The "+nouns[4]+" that the child who the medic rescued relieved everyone.", a:"x-x-x symbolizes wish jack there trip hot vases fascist tracking involved."}],
[["critical_g", 5], "Maze", {s:"The "+nouns[5]+" that the criminal who the officer arrested was guilty was entirely bogus.", a:"x-x-x violates ice dad together foot map however identity data vision mean universe maids."}],
[["critical_u", 5], "Maze", {s:"The "+nouns[5]+" that the criminal who the officer arrested was entirely bogus.", a:"x-x-x violates ice dad together foot map however identity mean universe maids."}],
[["critical_g", 6], "Maze", {s:"The "+nouns[6]+" that the student who the professor hated dropped out made the professor happy.", a:"x-x-x protects sea mom towards me true including brush license ass pick ass everybody gonna."}],
[["critical_u", 6], "Maze", {s:"The "+nouns[6]+" that the student who the professor hated made the professor happy.", a:"x-x-x protects sea mom towards me true including brush pick ass everybody gonna."}],
[["critical_g", 7], "Maze", {s:"The "+nouns[7]+" that the mobster who the media portrayed had disappeared turned out to be true.", a:"x-x-x realizes slow hear hairpin oh cent which footsteps trip importantly summer week cup sick rate."}],
[["critical_u", 7], "Maze", {s:"The "+nouns[7]+" that the mobster who the media portrayed turned out to be true.", a:"x-x-x realizes slow hear hairpin oh cent which footsteps summer week cup sick rate."}],
[["critical_g", 8], "Maze", {s:"The "+nouns[8]+" that the actor who the starlet loved was missing made her cry.", a:"x-x-x commemorates wild ass forth holy wide densest miles note comment walk mid gear."}],
[["critical_u", 8], "Maze", {s:"The "+nouns[8]+" that the actor who the starlet loved made her cry.", a:"x-x-x commemorates wild ass forth holy wide densest miles walk mid gear."}],
[["critical_g", 9], "Maze", {s:"The "+nouns[9]+" that the preacher who the parishioners fired stole money proved to be true.", a:"x-x-x assumes vote hear donating yeah jobs mysteriously medal float click desert wall wife am."}],
[["critical_u", 9], "Maze", {s:"The "+nouns[9]+" that the preacher who the parishioners fired proved to be true.", a:"x-x-x assumes vote hear donating yeah jobs mysteriously medal desert wall wife am."}],
[["critical_g", 10], "Maze", {s:"The "+nouns[10]+" that the violinist who the sponsors backed abused drugs is likely true.", a:"x-x-x reappears slow hear isolating dad port factions victor phases brain sir finish year."}],
[["critical_u", 10], "Maze", {s:"The "+nouns[10]+" that the violinist who the sponsors backed is likely true.", a:"x-x-x reappears slow hear isolating dad port factions victor sir finish year."}],
[["critical_g", 11], "Maze", {s:"The "+nouns[11]+" that the senator who the diplomat opposed was winning really made him angry.", a:"x-x-x endorses air guys confirm ass ways rewarded masters bus century happen web wall drama."}],
[["critical_u", 11], "Maze", {s:"The "+nouns[11]+" that the senator who the diplomat opposed really made him angry.", a:"x-x-x endorses air guys confirm ass ways rewarded masters happen web wall drama."}],
[["critical_g", 12], "Maze", {s:"The "+nouns[12]+" that the commander who the president appointed was corrupt troubled people.", a:"x-x-x stimulates tax jack wondering hall tree therefore emergency idea tourism organize listen."}],
[["critical_u", 12], "Maze", {s:"The "+nouns[12]+" that the commander who the president appointed troubled people.", a:"x-x-x stimulates tax jack wondering hall tree therefore emergency organize listen."}],
[["critical_g", 13], "Maze", {s:"The "+nouns[13]+" that the victims who the criminal assaulted were surviving calmed everyone down.", a:"x-x-x derives yeah jack connect lake mid continue accessing sort animation duplex standing ha."}],
[["critical_u", 13], "Maze", {s:"The "+nouns[13]+" that the victims who the criminal assaulted calmed everyone down.", a:"x-x-x derives yeah jack connect lake mid continue accessing duplex standing ha."}],
[["critical_g", 14], "Maze", {s:"The "+nouns[14]+" that the politician who the banker bribed laundered money came as a shock to his supporters.", a:"x-x-x avoids ice eyes emphasized fine but bamboo nieces catalysis stuff yeah camp eat meets eyes born vegetables."}],
[["critical_u", 14], "Maze", {s:"The "+nouns[14]+" that the politician who the banker bribed came as a shock to his supporters.", a:"x-x-x avoids ice eyes emphasized fine but bamboo nieces yeah camp eat meets eyes born vegetables."}],
[["critical_g", 15], "Maze", {s:"The "+nouns[15]+" that the surgeon who the patient thanked had no degree was not a surprise.", a:"x-x-x instructs food lot extends hot lake selling leaking fear vote remain ball walk sun sections."}],
[["critical_u", 15], "Maze", {s:"The "+nouns[15]+" that the surgeon who the patient thanked was not a surprise.", a:"x-x-x instructs food lot extends hot lake selling leaking ball walk sun sections."}],
[["critical_g", 16], "Maze", {s:"The "+nouns[16]+" that the extremist who the agent caught got an award was disconcerting.", a:"x-x-x approximates fire hear interpret sick okay apply battle mid kids throw wind psychoanalyst."}],
[["critical_u", 16], "Maze", {s:"The "+nouns[16]+" that the extremist who the agent caught was disconcerting.", a:"x-x-x approximates fire hear interpret sick okay apply battle wind psychoanalyst."}],
[["critical_g", 17], "Maze", {s:"The "+nouns[17]+" that the clerk who the customer called was a hero seemed absurd.", a:"x-x-x berates old jack acres wind old reaching forget anti win rid levels circus."}],
[["critical_u", 17], "Maze", {s:"The "+nouns[17]+" that the clerk who the customer called seemed absurd.", a:"x-x-x berates old jack acres wind old reaching forget levels circus."}],
[["critical_g", 18], "Maze", {s:"The "+nouns[18]+" that the trader who the businessman consulted had insider information was confirmed.", a:"x-x-x specializes sad hear pushes laws yeah constraints patiently wall cyclone competitive anti afternoon."}],
[["critical_u", 18], "Maze", {s:"The "+nouns[18]+" that the trader who the businessman consulted was confirmed.", a:"x-x-x specializes sad hear pushes laws yeah constraints patiently anti afternoon."}],
[["critical_g", 19], "Maze", {s:"The "+nouns[19]+" that the CEO who the employee impressed was retiring was entirely correct.", a:"x-x-x befriends lord oh Ms ways okay annoying ancestors okay scissors send agencies command."}],
[["critical_u", 19], "Maze", {s:"The "+nouns[19]+" that the CEO who the employee impressed was entirely correct.", a:"x-x-x befriends lord oh Ms ways okay annoying ancestors send agencies command."}],
[["filler",  20], "Maze", {s:"The divorcee has come to love her life ever since she got divorced.", a:"x-x-x- x-x-x- else bed took fell lord cup air stand base web keyboard."}], 
[["filler",  21], "Maze", {s:"The mathematician at the banquet baffled the philosopher although she rarely needed anyone else's help.", a:"x-x-x- x-x-x- trip lot corpses audible kept inspections appeared card branch moving happen polish oh."}], 
[["filler",  22], "Maze", {s:"The showman travels to different cities every month.", a:"x-x-x- x-x-x- terrain hall certainly listen write rates."}], 
[["filler",  23], "Maze", {s:"The roommate takes out the garbage every week.", a:"x-x-x- x-x-x- doubt sold lose enables worst anti."}], 
[["filler",  24], "Maze", {s:"The dragon wounded the knight although he was far too crippled to protect the princess.", a:"x-x-x- x-x-x- funding plan borrow question walk tree pop key teammate stay society map indicate."}], 
[["filler",  25], "Maze", {s:"The office-worker worked through the stack of files on his desk quickly.", a:"x-x-x- x-x-x- forget arrived lady prone wife treat fall born rain western."}], 
[["filler",  26], "Maze", {s:"The firemen at the scene apprehended the arsonist because there was a great deal of evidence pointing to his guilt.", a:"x-x-x- x-x-x- war sure among outsourcing cent deviance anymore mouth fun us enter laws yes produced observer plus bill weigh."}], 
[["filler",  27], "Maze", {s:"During the season, the choir holds rehearsals in the church regularly.", a:"x-x-x- x-x-x- called, us haunt anger prophecies laws thus issues customers."}], 
[["filler",  28], "Maze", {s:"The speaker who the historian offended kicked a chair after the talk was over and everyone had left the room.", a:"x-x-x- x-x-x- holy sad activated fraction upside mom files cases lot know port lord holy products port van guy how."}], 
[["filler",  29], "Maze", {s:"The milkman punctually delivers the milk at the door every day.", a:"x-x-x- x-x-x- clerestory lesbians lose quit ass nor took weird join."}], 
[["filler",  30], "Maze", {s:"The quarterback dated the cheerleader although this hurt her reputation around school.", a:"x-x-x- x-x-x- fairy sit propagation violence tell east lake represents access placed."}], 
[["filler",  31], "Maze", {s:"The citizens of France eat oysters.", a:"x-x-x- x-x-x- anti Amount girl lattice."}], 
[["filler",  32], "Maze", {s:"The bully punched the kid after all the kids had to leave to go to class.", a:"x-x-x- x-x-x- rituals eat what birth felt ha ha sun lake forms link jack size feels."}], 
[["filler",  33], "Maze", {s:"After the argument, the husband ignored his wife.", a:"x-x-x- x-x-x- suggests, cent without harmony seen here."}], 
[["filler",  34], "Maze", {s:"The engineer who the lawyer who was by the elevator scolded blamed the secretary but nobody listened to his complaints.", a:"x-x-x- x-x-x- oh ha defend feet mine ones ha shouting rescind ounces sort including ass happen infantry laws far protecting."}], 
[["filler",  35], "Maze", {s:"The librarian put the book onto the shelf.", a:"x-x-x- x-x-x- east grow this wave grow bacon."}], 
[["filler",  36], "Maze", {s:"The photographer processed the film on time.", a:"x-x-x- x-x-x- eliminate ago yes non nor."}], 
[["filler",  37], "Maze", {s:"The spider that the boy who was in the yard captured scared the dog since it was larger than the average spider.", a:"x-x-x- x-x-x- sad cent been hell pro say jack earn resource expert file gets ended list per decide lady anti imagine quotes."}], 
[["filler",  38], "Maze", {s:"The sportsman goes jogging in the park regularly.", a:"x-x-x- x-x-x- hear outback hope fell been processes."}], 
[["filler",  39], "Maze", {s:"The customer who was on the phone contacted the operator because the new long-distance pricing plan was extremely inconvenient.", a:"x-x-x- x-x-x- okay yeah bill sun maybe desperate wish wondered married link an unfortunately chronic miss yes residence inscriptions."}], 
[["filler",  40], "Maze", {s:"The private tutor explained the assignment carefully.", a:"x-x-x- x-x-x- bumps amendment lot kilometers centuries."}], 
[["filler",  41], "Maze", {s:"The audience who was at the club booed the singer before the owner of the bar could remove him from the stage.", a:"x-x-x- x-x-x- anti mid sir why me levee glad argued larger rich lying east done yes worse allows term file rose there."}], 
[["filler",  42], "Maze", {s:"The defender is constantly scolding the keeper.", a:"x-x-x- x-x-x- sick definition dilation yeah albeit."}], 
[["filler",  43], "Maze", {s:"The hippies who the police at the concert arrested complained to the officials while the last act was going on stage.", a:"x-x-x- x-x-x- sale room anyone oh fit writers resource completion kill cup discussed worst damn yes grow sick worry sir older."}], 
[["filler",  44], "Maze", {s:"The natives on the island captured the anthropologist because she had information that could help the tribe.", a:"x-x-x- x-x-x- fat else forget managers plan misconceptions release pick away combination die gonna damn gets shake."}], 
[["filler",  45], "Maze", {s:"The trainee knew that the task which the director had set for him was impossible to finish within a week.", a:"x-x-x- x-x-x- easy jack eat earn prime note together wind word lose anti girl commission gun served degree cup thus."}], 
[["filler",  46], "Maze", {s:"The administrator who the nurse from the clinic supervised scolded the medic while a patient was brought into the emergency room.", a:"x-x-x- x-x-x- hell fact forth none anti scales detectives pungent nice smoky match lake islands boys imagine view luck recommend able."}], 
[["filler",  47], "Maze", {s:"The company was sure that its new product, which its researchers had developed, would soon be sold out.", a:"x-x-x- x-x-x- mind dad sir cent nor another, throw drug accompanied eyes everybody, south page ha trip whom."}], 
[["filler",  48], "Maze", {s:"The astronaut that the journalists who were at the launch worshipped criticized the administrators after he discovered a potential leak in the fuel tank.", a:"x-x-x- x-x-x- oh oh necessarily bed sure size yeah hungry vigorously calculated died reinforcements gotta rose electrical kept countries dean pain told laid cat."}], 
[["filler",  49], "Maze", {s:"The janitor who the doorman who was at the hotel chatted with bothered a guest but the manager decided not to fire him for it.", a:"x-x-x- x-x-x- fat us intakes east ones miss ha today bedding mid tendency vote woods oh law however healthy rest kid wide road lake jack."}], 
[["filler",  50], "Maze", {s:"The technician at the show repaired the robot while people were taking a break for coffee.", a:"x-x-x- x-x-x- hate been guys comrades cup sells sweet stupid sale policy met today sale cannot."}], 
[["filler",  51], "Maze", {s:"The salesman feared that the printer which the customer bought was damaged.", a:"x-x-x- x-x-x- robust walk bar knocked weeks mid sciences impact map premier."}], 
[["filler",  52], "Maze", {s:"The students studied the surgeon whenever he performed an important operation.", a:"x-x-x- x-x-x- summary stay advised indicate file something cent president companies."}], 
[["filler",  53], "Maze", {s:"The locksmith can crack the safe easily.", a:"x-x-x- x-x-x- okay firms met took agreed."}], 
[["filler",  54], "Maze", {s:"The woman who was in the apartment hired the plumber despite the fact that he couldn't fix the toilet.", a:"x-x-x- x-x-x- cool sea hear ass basically plain lie jerseys reached eyes came mom sit football bell cent enters."}], 
[["filler",  55], "Maze", {s:"Yesterday the swimmer saw only a turtle at the beach.", a:"x-x-x- x-x-x- hurdles ways fund web intake anti sold china."}], 
[["filler",  56], "Maze", {s:"The surgeon who the detective who was on the case consulted questioned the coroner because the markings on the body were difficult to explain.", a:"x-x-x- x-x-x- way web belonging bad girl ways soul hope databases profitable soul bullion playing hour explores ball won fun hope statement town windows."}], 
[["filler",  57], "Maze", {s:"The gangster who the detective at the club followed implicated the waitress because the police suspected he had murdered the shopkeeper.", a:"x-x-x- x-x-x- lack how arbitrary far came held economic contracted park realizes animals read except religions bed case displays size furthering."}], 
[["filler",  58], "Maze", {s:"During the party everybody was dancing to rock music.", a:"x-x-x- x-x-x- comes otherwise few monster pay ago agree."}], 
[["filler",  59], "Maze", {s:"The fans at the concert loved the guitarist because he played with so much energy.", a:"x-x-x- x-x-x- holy via citizen older seat cooperate limited keep cancer sit does mass months."}], 
[["filler",  60], "Maze", {s:"The intern comforted the patient because he was in great pain.", a:"x-x-x- x-x-x- receptive wind noticed percent kid move park basis win."}], 
[["filler",  61], "Maze", {s:"The casino hired the daredevil because he was confident that everything would go according to plan.", a:"x-x-x- x-x-x- sword yes universes protect does her describes add understand china six authority ways down."}], 
[["filler",  62], "Maze", {s:"The beggar is often scrounging for cigarettes.", a:"x-x-x- x-x-x- mid feels concourses fan agreements."}], 
[["filler",  63], "Maze", {s:"The cartoonist who the readers supported pressured the dean because she thought that censorship was never appropriate.", a:"x-x-x- x-x-x- heat god whoever communist legalized jack den perfect keep account oh affiliates feet learn description."}], 
[["filler",  64], "Maze", {s:"The prisoner who the guard attacked tackled the warden although he had no intention of trying to escape.", a:"x-x-x- x-x-x- luck fine aimed suitable teaming mind invent congress mom grow boy describes pick author walk poetry."}], 
[["filler",  65], "Maze", {s:"The passer-by threw the cardboard box into the trash-can with great force.", a:"x-x-x- x-x-x- quiet draw equitable his lord wish quarterly born agree agree."}], 
[["filler",  66], "Maze", {s:"The biker who the police arrested ran a light since he was driving under the influence of alcohol.", a:"x-x-x- x-x-x- risk glad except breaking pain goal exist reach till loss opinion rules nor presented find discuss."}], 
[["filler",  67], "Maze", {s:"The scientists who were in the lab studied the alien while the blood sample was run through the computer.", a:"x-x-x- x-x-x- holy yes add goes bob monster son lacks wanna lie agree update wish ha reality note everyone."}], 
[["filler",  68], "Maze", {s:"The student quickly finished his homework assignments.", a:"x-x-x- x-x-x- healthy southern wife airports magistrates."}], 
[["filler",  69], "Maze", {s:"The environmentalist who the demonstrators at the rally supported calmed the crowd until security came and sent everyone home.", a:"x-x-x- x-x-x- yeah sad perpendicular bed lot valve marketing spills best laugh spend contract me sure mom function hair."}], 
[["filler",  70], "Maze", {s:"The producer shoots a new movie every year.", a:"x-x-x- x-x-x- pierce page anti enjoy peace mom."}], 
[["filler",  71], "Maze", {s:"The rebels who were in the jungle captured the diplomat after they threatened to kill his family for not complying with their demands.", a:"x-x-x- x-x-x- girl body soul girl visits memories card nuisance feels guys scientists says able move please pain ball nostalgic sir learn drivers."}], 
[["filler",  72], "Maze", {s:"Dinosaurs ate other reptiles during the stone age.", a:"x-x-x- x-x-x- write exporter minute guys wants dad."}], 
[["filler",  73], "Maze", {s:"The manager who the baker loathed spoke to the new pastry chef because he had instituted a new dress code for all employees.", a:"x-x-x- x-x-x- anti map walks tenuous voted ass goal anti devoid skip weekend star mind veterinary lose dad sides want rose knew indicates."}], 
[["filler",  74], "Maze", {s:"The teacher doubted that the test that had taken him a long time to design would be easy to answer.", a:"x-x-x- x-x-x- grinder star feet them your miss miles song anti oh her ha posted enjoy door fund foot county."}], 
[["filler",  75], "Maze", {s:"The cook who the servant in the kitchen hired offended the butler and then left the mansion early to see a movie at the local theater.", a:"x-x-x- x-x-x- trip cell justify cool lose wanting rough collapse runs thirds gold term miss rate evolved ideas bill code mean miles yeah hear their acquire."}], 
//[["adverb_low", 72], "Maze", {s:"Kim will display the photos she took last month, but she won't show all of them.", a:"x-x-x- x-x-x- dealing sit compel eat thin poem older, us thy scale soft ran eat soon."}],
[["practice", 108], "Maze", {s:"The semester will start next week, but the students and teachers are not ready.", a:"x-x-x- x-x-x- anti wages body sold, sin sky entitled sky concrete oil him goods."}],
[["practice", 107], "Maze", {s:"The mother of the prisoner sent him packages that contained cookies and novels.", a:"x-x-x- x-x-x- dry arm amounted rare nor rhythmic fund authority blossom me defect."}],
[["practice", 105], "Maze", {s:"The reporter had dinner yesterday with the baseball player who Kevin admired.", a:"x-x-x- x-x-x- joy reduce organisms rise sum attained tended sin Troop flowing."}],
[["practice", 104], "Maze", {s:"The therapist set up a meeting with the upset woman and her husband yesterday.", a:"x-x-x- x-x-x- ten sit sum absence wave ran keeps exist dry sum settled remainder."}],
];
