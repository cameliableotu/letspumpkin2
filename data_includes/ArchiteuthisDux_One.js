// Pumpkin//experimentwithRodica
// Do show progress bar (fine! I give in)

var showProgressBar = true;

// Main shuffleSequence definition
var shuffleSequence = seq(
    'consent',
    'setcounter',
    'intro',
    'shared-intro',
    sepWith("timeoutSep",rshuffle(startsWith('PUMPKINREFLEXIVE'),startsWith('filler'))),
    'debrief'
     );

// Using modified controller coded by Ethan Poole (Umass, 2017)
// Disallows use of mouse for responses.
var DS = 'EPDashedAcceptabilityJudgment';

//  Set the Prolific Academic Completion URL
var sendingResultsMessage = "Vă rugăm să aşteptaţi. Răspunsurile dumneavoastră se trimit serverului."; 
var completionMessage = "Mulţumim pentru participare!"
;
var completionErrorMessage = "Eroare în trimiterea răspunsurilor dumneavoastră către server."; 

// Controller settings.
// Parameter settings taken from Staub 2009

var defaults = [
    "Separator", {
        transfer: 1000,                                      // How long between sentences? (ms)
        normalMessage: " "  // What is message presented between stims? Can be blank.
    },
    "AcceptabilityJudgment", 
        as: ["a", "b", "c"],            
        presentAsScale: false,                               /// Should it be presented as a scale? 'true' or 'false'
        instructions: "Alegeţi una din variantele de mai sus.",    /// Brief instructions present on each trial
               /// Labels on end-points of scale
    }
];

// Items array.
var items = [
["timeoutSep", Separator, { transfer: 1500, normalMessage: "", errorMessage: "Timed out. Vă rugăm să răspundeți mai rapid."}],

["consent", "Form", {consentRequired: true, html: {include: "consent.html"}}],
 ["setcounter", "__SetCounter__", { }],
["intro", "Form", {consentRequired: true, html: {include: "intro.html"}}],
["debrief", "Form", {consentRequired: true, html: {include: "debrief.html"}}],

['shared-intro', "Form", {consentRequired: false, html: {include: "shared_intro1.html"}}],
['shared-intro', "Form", {consentRequired: false, html: {include: "shared_intro2.html"}}],
['shared-intro', "Form", {consentRequired: false, html: {include: "shared_intro3.html"}}],

['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Hai să exersăm un pic înainte de a începe efectiv."]
                         ]}],
['shared-intro', "EPDashedSentence", {s:"+"}, DS, {s:"Pisicuţele tigrate",as: [['s','sunt'],['k','este']]}, Separator, { transfer: 1500, normalMessage: "", errorMessage: "Timed out. Vă rugăm să răspundeți mai rapid."}],

['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Cum vi s-a părut? Pur şi simplu alegeţi rapid varianta care vi se pare o continuare mai bună a propoziţiei."],
                           ["p", "Multor vorbitori nativi de limba română li se pare că 'sunt' este o continuare mai firească a fragmentului anterior. Hai să mai exersăm un pic."],
                         ]}],

['shared-intro', "EPDashedSentence", {s:"+"}, DS, {s:"Zambila roz",as: [['s','miros'],['k','miroase']]}, Separator, { transfer: 1500, normalMessage: "", errorMessage: "Timed out. Vă rugăm să răspundeți mai rapid."}],
['shared-intro', "EPDashedSentence", {s:"+"}, DS, {s:"Maria şi Ion",as: [['s','sunt'],['k','este']]}, Separator, { transfer: 1500, normalMessage: "", errorMessage: "Timed out. Vă rugăm să răspundeți mai rapid."}],

['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Bun, gata cu exersatul! Apăsaţi orice tastă când sunteţi gata să începeţi."]
                        ]}],

['shared-intro',"Separator",{transfer: 2500, normalMessage: "Atenţie! Primul fragment de propoziţie din acest set va apărea pe ecran în curând."}],


//// Shared experimental items + fillers
[["SAD-aromapart",1], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Maria s-a cireşit la cap.", "Maria s-a cireşit pe cap.",
                                                                                                                        "Ambele"]}},
[["SAD-aromapart",1], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Maria s-a cireşit la faţă.", "Maria s-a cireşit pe faţă.",
                                                                                                                        "Ambele"]}},
[["SAD-aromapart",1], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Maria s-a cireşit la mȃini.", "Maria s-a cireşit pe mȃini.",
                                                                                                                        "Ambele"]}},
[["SAD-aromapart",1], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Maria s-a cireşit la picioare.", "Maria s-a cireşit pe picioare.",
                                                                                                                        "Ambele"]}},
[["SAD-aromapart",1], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Maria s-a cireşit la gȃt.", "Maria s-a cireşit pe gȃt.",
                                                                                                                        "Ambele"]}},                                                                                                                                                                                                                         "Ambele"]}},
[["SAD-aromapart",1], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Maria s-a cireşit la gură.", "Maria s-a cireşit pe gură.",
                                                                                                            "Ambele"]}},
[["SAD-aromapart",1], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Maria s-a cireşit la deget.", "Maria s-a cireşit pe deget.",
                                                                                                            "Ambele"]}},
 [["SAD-aromapart",1], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Maria s-a cireşit la spate.", "Maria s-a cireşit pe spate.",
                                                                                                            "Ambele"]}},
 [["SAD-aromapart",1], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Maria s-a cireşit la burtă.", "Maria s-a cireşit pe burtă.",
                                                                                                            "Ambele"]}}
[["SAD-aromapart",2], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Dumitru s-a piersicit la cap.", "Dumitru s-a piersicit pe cap.",
                                                                                                                        "Ambele"]}},
[["SAD-aromapart",2], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Dumitru s-a piersicit la faţă.", "Dumitru s-a piersicit pe faţă.",
                                                                                                                        "Ambele"]}},
[["SAD-aromapart",2], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Dumitru s-a piersicit la mȃini.", "Dumitru s-a piersicit pe mȃini.",
                                                                                                                        "Ambele"]}},
[["SAD-aromapart",2], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Dumitru s-a piersicit la picioare.", "Dumitru s-a piersicit pe picioare.",
                                                                                                                        "Ambele"]}},
[["SAD-aromapart",2], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Dumitru s-a piersicit  la gȃt.", "Dumitru s-a piersicit pe gȃt.",
                                                                                                                        "Ambele"]}},                                                                                                                                                                                                                         "Ambele"]}},
[["SAD-aromapart",2], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Dumitru s-a piersicit la gură.", "Dumitru s-a piersicit pe gură.",
                                                                                                            "Ambele"]}},
[["SAD-aromapart",2], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Dumitru s-a piersicit la deget.", "Dumitru s-a piersicit pe deget.",
                                                                                                            "Ambele"]}},
 [["SAD-aromapart",2], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Dumitru s-a piersicit la spate.", "Dumitru s-a piersicit pe spate.",
                                                                                                            "Ambele"]}},
 [["SAD-aromapart",2], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Dumitru s-a piersicit la burtă.", "Dumitru s-a piersicit pe burtă.",
                                                                                                            "Ambele"]}},
 [["SAD-aromapart",3], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Marina  s-a zmeurit la cap.", "Marina  s-a zmeurit pe cap.",
                                                                                                                        "Ambele"]}},
[["SAD-aromapart",3], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Marina  s-a zmeurit la faţă.", "Marina  s-a zmeurit pe faţă.",
                                                                                                                        "Ambele"]}},
[["SAD-aromapart",3], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Marina  s-a zmeurit la mȃini.", "Marina  s-a zmeurit pe mȃini.",
                                                                                                                        "Ambele"]}},
[["SAD-aromapart",3], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Marina  s-a zmeurit la picioare.", "Marina  s-a zmeurit pe picioare.",
                                                                                                                        "Ambele"]}},
[["SAD-aromapart",3], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Marina  s-a zmeurit la gȃt.", "Marina  s-a zmeurit pe gȃt.",
                                                                                                                        "Ambele"]}},                                                                                                                                                                                                                         "Ambele"]}},
[["SAD-aromapart",3], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Marina  s-a zmeurit la gură.", "Marina  s-a zmeurit pe gură.",
                                                                                                            "Ambele"]}},
[["SAD-aromapart",3], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Marina  s-a zmeurit la deget.", "Marina  s-a zmeurit pe deget.",
                                                                                                            "Ambele"]}},
[["SAD-aromapart",3], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Marina  s-a zmeurit la spate.", "Marina  s-a zmeurit pe spate.",
                                                                                                            "Ambele"]}},
[["SAD-aromapart",3], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Marina  s-a zmeurit la burtă.", "Marina  s-a zmeurit pe burtă.",
                                                                                                            "Ambele"]}},                                                                                     
 [["SAD-shapepart",5], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Laura  s-a ciupercit la cap.", "Laura  s-a ciupercit pe cap.",
                                                                                                                        "Ambele"]}},
[["SAD-shapepart",5], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Laura  s-a ciupercit la faţă.", "Laura  s-a ciupercit pe faţă.",
                                                                                                                        "Ambele"]}},
[["SAD-shapepart",5], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Laura  s-a ciupercit la mȃini.", "Laura  s-a ciupercit pe mȃini.",
                                                                                                                        "Ambele"]}},
[["SAD-shapepart",5], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Laura  s-a ciupercit la picioare.", "Laura  s-a ciupercit pe picioare.",
                                                                                                                        "Ambele"]}},
[["SAD-shapepart",5], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Laura  s-a ciupercit la gȃt.", "Laura  s-a ciupercit pe gȃt.",
                                                                                                                        "Ambele"]}},                                                                                                                                                                                                                         "Ambele"]}},
[["SAD-shapepart",5], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Laura  s-a ciupercit la gură.", "Laura  s-a ciupercit pe gură.",
                                                                                                            "Ambele"]}},
[["SAD-shapepart",5], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Laura  s-a ciupercit la deget.", "Laura  s-a ciupercit pe deget.",
                                                                                                            "Ambele"]}},
 [["SAD-shapepart",5], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Laura  s-a ciupercit la spate.", "Laura  s-a ciupercit pe spate.",
                                                                                                            "Ambele"]}},
 [["SAD-shapepart",5], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Laura  s-a ciupercit la burtă.", "Laura  s-a ciupercit pe burtă.",
                                                                                                            "Ambele"]}},
 [["SAD-shapepart",6], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Matei  s-a conopidit la cap.", "Matei  s-a conopidit pe cap.",
                                                                                                                        "Ambele"]}},
[["SAD-shapepart",6], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Matei  s-a conopidit la faţă.", "Matei  s-a conopidit pe faţă.",
                                                                                                                        "Ambele"]}},
[["SAD-shapepart",6], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Matei  s-a conopidit la mȃini.", "Matei  s-a conopidit pe mȃini.",
                                                                                                                        "Ambele"]}},
[["SAD-shapepart",6], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Matei  s-a conopidit la picioare.", "Matei  s-a conopidit pe picioare.",
                                                                                                                        "Ambele"]}},
[["SAD-shapepart",6], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Matei  s-a conopidit la gȃt.", "Matei  s-a conopidit pe gȃt.",
                                                                                                                        "Ambele"]}},                                                                                                                                                                                                                         "Ambele"]}},
[["SAD-shapepart",6], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Matei  s-a conopidit la gură.", "Matei  s-a conopidit pe gură.",
                                                                                                            "Ambele"]}},
[["SAD-shapepart",6], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Matei  s-a conopidit la deget.", "Matei  s-a conopidit pe deget.",
                                                                                                            "Ambele"]}},
 [["SAD-shapepart",6], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Matei  s-a conopidit la spate.", "Matei  s-a conopidit pe spate.",
                                                                                                            "Ambele"]}},
 [["SAD-shapepart",6], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Matei  s-a conopidit la burtă.", "Matei  s-a conopidit pe burtă.",
                                                                                                            "Ambele"]}},
[["SAD-mixedpart",7], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Elena  s-a cartofit la cap.", "Elena  s-a cartofit pe cap.",
                                                                                                                        "Ambele"]}},
[["SAD-mixedpart",7], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Elena  s-a cartofit la faţă.", "Elena  s-a cartofit pe faţă.",
                                                                                                                        "Ambele"]}},
[["SAD-mixedpart",7], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Elena  s-a cartofit la mȃini.", "Elena  s-a cartofit pe mȃini.",
                                                                                                                        "Ambele"]}},
[["SAD-mixedpart",7], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Elena  s-a cartofit la picioare.", "Elena  s-a cartofit pe picioare.",
                                                                                                                        "Ambele"]}},
[["SAD-mixedpart",7], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Elena  s-a cartofit la gȃt.", "Elena  s-a cartofit pe gȃt.",
                                                                                                                        "Ambele"]}},                                                                                                                                                                                                                         "Ambele"]}},
[["SAD-mixedpart",7], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Elena  s-a cartofit la gură.", "Elena  s-a cartofit pe gură.",
                                                                                                            "Ambele"]}},
[["SAD-mixedpart",7], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Elena  s-a cartofit la deget.", "Elena  s-a cartofit pe deget.",
                                                                                                            "Ambele"]}},
 [["SAD-mixedpart",7], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Elena  s-a cartofit la spate.", "Elena  s-a cartofit pe spate.",
                                                                                                            "Ambele"]}},
 [["SAD-mixedpart",7], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Elena  s-a cartofit la burtă.", "Elena  s-a cartofit pe burtă.",
                                                                                                            "Ambele"]}},
  [["SAD-mixedpart",8], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Monica  s-a pepenit la cap.", "Monica  s-a pepenit pe cap.",
                                                                                                                        "Ambele"]}},
[["SAD-mixedpart",8], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Monica  s-a pepenit la faţă.", "Monica  s-a pepenit pe faţă.",
                                                                                                                        "Ambele"]}},
[["SAD-mixedpart",8], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Monica  s-a pepenit la mȃini.", "Monica  s-a pepenit pe mȃini.",
                                                                                                                        "Ambele"]}},
[["SAD-mixedpart",8], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Monica  s-a pepenit la picioare.", "Monica  s-a pepenit pe picioare.",
                                                                                                                        "Ambele"]}},
[["SAD-mixedpart",8], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Monica  s-a pepenit la gȃt.", "Monica  s-a pepenit pe gȃt.",
                                                                                                                        "Ambele"]}},                                                                                                                                                                                                                         "Ambele"]}},
[["SAD-mixedpart",8], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Monica  s-a pepenit la gură.", "Monica  s-a pepenit pe gură.",
                                                                                                            "Ambele"]}},
[["SAD-mixedpart",8], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Monica  s-a pepenit la deget.", "Monica  s-a pepenit pe deget.",
                                                                                                            "Ambele"]}},
 [["SAD-mixedpart",8], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Monica  s-a pepenit la spate.", "Monica  s-a pepenit pe spate.",
                                                                                                            "Ambele"]}},
 [["SAD-mixedpart",8], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Monica  s-a pepenit la burtă.", "Monica  s-a pepenit pe burtă.",
                                                                                                            "Ambele"]}},
  [["SAD-mixedpart",9], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Alexandru  s-a dovlecit la cap.", "Alexandru  s-a dovlecit pe cap.",
                                                                                                                        "Ambele"]}},
[["SAD-mixedpart",9], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Alexandru  s-a dovlecit la faţă.", "Alexandru  s-a dovlecit pe faţă.",
                                                                                                                        "Ambele"]}},
[["SAD-mixedpart",9], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Alexandru  s-a dovlecit la mȃini.", "Alexandru  s-a dovlecit pe mȃini.",
                                                                                                                        "Ambele"]}},
[["SAD-mixedpart",9], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Alexandru  s-a dovlecit la picioare.", "Alexandru  s-a dovlecit pe picioare.",
                                                                                                                        "Ambele"]}},
[["SAD-mixedpart",9], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Alexandru  s-a dovlecit la gȃt.", "Alexandru  s-a dovlecit pe gȃt.",
                                                                                                                        "Ambele"]}},                                                                                                                                                                                                                         "Ambele"]}},
[["SAD-mixedpart",9], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Alexandru  s-a dovlecit la gură.", "Alexandru  s-a dovlecit pe gură.",
                                                                                                            "Ambele"]}},
[["SAD-mixedpart",9], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Alexandru  s-a dovlecit la deget.", "Alexandru  s-a dovlecit pe deget.",
                                                                                                            "Ambele"]}},
 [["SAD-mixedpart",9], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Alexandru  s-a dovlecit la spate.", "Alexandru  s-a dovlecit pe spate.",
                                                                                                            "Ambele"]}},
 [["SAD-mixedpart",9], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Alexandru  s-a dovlecit la burtă.", "Alexandru  s-a dovlecit pe burtă.",
                                                                                                            "Ambele"]}},
                                                                                                                
                                                                                                                
                                                                                                              
                                                                                                         
                                                                                                           
                                                                                                                
                                                                                                        
                                                                                                                
                                                                                                            
                                                                                                                
                                                                                                             
                                                                                                               
                                                                                                                



   

    //// Fillers
[["filler-twonounspluralcorrectchoice",25], "EPDashedSentence", {s:"+"}, DS, {s:"Fata pe care domnii o",as: [['s','iubesc'],['k','iubeşte']]}],
[["filler-twonounspluralcorrectchoice",26], "EPDashedSentence", {s:"+"}, DS, {s:"Cartea pe care fetele o",as: [['s','citesc'],['k','citeşte']]}],
[["filler-twonounspluralcorrectchoice",27], "EPDashedSentence", {s:"+"}, DS, {s:"Pinguinul pe care copiii îl",as: [['s','privesc'],['k','priveşte']]}],
[["filler-twonounspluralcorrectchoice",28], "EPDashedSentence", {s:"+"}, DS, {s:"Pisica pe care băieţii o",as: [['s','lovesc'],['k','loveşte']]}],
[["filler-twonounspluralcorrectchoice",29], "EPDashedSentence", {s:"+"}, DS, {s:"Veveriţa pe care bărbaţii o",as: [['s','prind'],['k','prinde']]}],
[["filler-twonounspluralcorrectchoice",30], "EPDashedSentence", {s:"+"}, DS, {s:"Lumina pe care oamenii o",as: [['s','văd'],['k','vede']]}],
[["filler-twonounspluralcorrectchoice",31], "EPDashedSentence", {s:"+"}, DS, {s:"Casa pe care contabilii o",as: [['s','construiesc'],['k','construieşte']]}],
[["filler-twonounspluralcorrectchoice",32], "EPDashedSentence", {s:"+"}, DS, {s:"Mingea pe care sportivii o",as: [['s','aleg'],['k','alege']]}],
[["filler-twonounspluralcorrectchoice",33], "EPDashedSentence", {s:"+"}, DS, {s:"Vinul pe care bucătarii îl",as: [['s','beau'],['k','bea']]}],
[["filler-twonounspluralcorrectchoice",34], "EPDashedSentence", {s:"+"}, DS, {s:"Câinele pe care doctorii îl",as: [['s','hrănesc'],['k','hrăneşte']]}],
[["filler-twonounspluralcorrectchoice",35],  "EPDashedSentence", {s:"+"}, DS, {s:"Poemul pe care tinerii îl",as: [['s','spun'],['k','spune']]}],
[["filler-twonounspluralcorrectchoice",36], "EPDashedSentence", {s:"+"}, DS, {s:"Omul pe care animalele îl",as: [['s','îndrăgesc'],['k','îndrăgeşte']]}], 
[["filler-twonounssingularcorrectchoice",37], "EPDashedSentence", {s:"+"}, DS, {s:"Vinurile pe care domnul le",as: [['s','iubesc'],['k','iubeşte']]}], 
[["filler-twonounssingularcorrectchoice",38], "EPDashedSentence", {s:"+"}, DS, {s:"Scrisorile pe care fata le",as: [['s','citesc'],['k','citeşte']]}], 
[["filler-twonounssingularcorrectchoice",39], "EPDashedSentence", {s:"+"}, DS, {s:"Girafele pe care copilul le",as: [['s','privesc'],['k','priveşte']]}], 
[["filler-twonounssingularcorrectchoice",40], "EPDashedSentence", {s:"+"}, DS, {s:"Motanii pe care bunicul îi",as: [['s','adăpostesc'],['k','adăposteşte']]}], 
[["filler-twonounssingularcorrectchoice",41], "EPDashedSentence", {s:"+"}, DS, {s:"Şerpii pe care bărbatul îi",as: [['s','strivesc'],['k','striveşte']]}], 
[["filler-twonounssingularcorrectchoice",42], "EPDashedSentence", {s:"+"}, DS, {s:"Stelele pe care înţeleptul le",as: [['s','urmăresc'],['k','urmăreşte']]}], 
[["filler-twonounssingularcorrectchoice",43], "EPDashedSentence", {s:"+"}, DS, {s:"Barurile pe care pictorul le",as: [['s','construiesc'],['k','construieşte']]}], 
[["filler-twonounssingularcorrectchoice",44], "EPDashedSentence", {s:"+"}, DS, {s:"Păsările pe care colecţionarul le",as: [['s','văd'],['k','vede']]}], 
[["filler-twonounssingularcorrectchoice",45], "EPDashedSentence", {s:"+"}, DS, {s:"Sucurile pe care chelnerul le",as: [['s','beau'],['k','bea']]}], 
[["filler-twonounssingularcorrectchoice",46], "EPDashedSentence", {s:"+"}, DS, {s:"Pisicile pe care doamna le",as: [['s','îngrijesc'],['k','îngrijeşte']]}], 
[["filler-twonounssingularcorrectchoice",47], "EPDashedSentence", {s:"+"}, DS, {s:"Cuvintele pe care preotul le",as: [['s','rostesc'],['k','rosteşte']]}], 
[["filler-twonounssingularcorrectchoice",48], "EPDashedSentence", {s:"+"}, DS, {s:"Câinii pe care pisica îi",as: [['s','urăsc'],['k','urăşte']]}], 
[["filler-coordination",49], "EPDashedSentence", {s:"+"}, DS, {s:"Femeia şi copilul",as: [['s','beau'],['k','bea']]}], 
[["filler-coordination",50], "EPDashedSentence", {s:"+"}, DS, {s:"Doctorul şi bolnavul",as: [['s','plâng'],['k','plânge']]}],
[["filler-coordination",51], "EPDashedSentence", {s:"+"}, DS, {s:"Vulpoiul şi vulpea",as: [['s','sar'],['k','sare']]}],
[["filler-coordination",52], "EPDashedSentence", {s:"+"}, DS, {s:"Găina şi puiul",as: [['s','ciugulesc'],['k','ciuguleşte']]}],
[["filler-coordination",53], "EPDashedSentence", {s:"+"}, DS, {s:"Paharul şi sticla",as: [['s','cad'],['k','cade']]}],
[["filler-coordination",54], "EPDashedSentence", {s:"+"}, DS, {s:"Oboseala şi plictisul",as: [['s','ucid'],['k','ucide']]}],
[["filler-coordination",55], "EPDashedSentence", {s:"+"}, DS, {s:"Iubirea şi prietenia",as: [['s','susţin'],['k','susţine']]}],
[["filler-coordination",56], "EPDashedSentence", {s:"+"}, DS, {s:"Căţelul şi pisica",as: [['s','dorm'],['k','doarme']]}],
[["filler-coordination",57], "EPDashedSentence", {s:"+"}, DS, {s:"Cafeaua şi ceaiul",as: [['s','au'],['k','are']]}],
[["filler-coordination",58], "EPDashedSentence", {s:"+"}, DS, {s:"Trandafirul şi zambila",as: [['s','miros'],['k','miroase']]}],
[["filler-coordination",59], "EPDashedSentence", {s:"+"}, DS, {s:"Cartea şi caietul",as: [['s','sunt'],['k','este']]}],
[["filler-coordination",60], "EPDashedSentence", {s:"+"}, DS, {s:"Papagalul şi băiatul",as: [['s','vorbesc'],['k','vorbeşte']]}],
[["filler-semanticchoice",61], "EPDashedSentence", {s:"+"}, DS, {s:"Lampa de lângă cartea verde ",as: [['s','se aprinde'],['k','se citeşte']]}],
[["filler-semanticchoice",62], "EPDashedSentence", {s:"+"}, DS, {s:"Fetiţa de lângă camera albastră",as: [['s','dansează'],['k','luminează']]}],
[["filler-semanticchoice",63], "EPDashedSentence", {s:"+"}, DS, {s:"Iepuraşul de lângă scaunul roşu ",as: [['s','doarme'],['k','se rupe']]}],
[["filler-semanticchoice",64], "EPDashedSentence", {s:"+"}, DS, {s:"Pasărea de lângă masa neagră",as: [['s','cântă'],['k','se pliază']]}],
[["filler-semanticchoice",65], "EPDashedSentence", {s:"+"}, DS, {s:"Măgarul de lângă căţelul maro",as: [['s','rage'],['k','latră']]}],
[["filler-semanticchoice",66], "EPDashedSentence", {s:"+"}, DS, {s:"Papucii de lângă copiii bolnavi",as: [['s','alunecă'],['k','strănută']]}],
[["filler-semanticchoice",67], "EPDashedSentence", {s:"+"}, DS, {s:"Hainele de lângă femeile zâmbăreţe",as: [['s','cad'],['k','vorbesc']]}],
[["filler-semanticchoice",68], "EPDashedSentence", {s:"+"}, DS, {s:"Albinele de lângă portocalele stricate",as: [['s','bâzâie'],['k','miros']]}],
[["filler-semanticchoice",69], "EPDashedSentence", {s:"+"}, DS, {s:"Râul de lângă pădurea frumoasă",as: [['s','curge'],['k','arde']]}],
[["filler-semanticchoice",70], "EPDashedSentence", {s:"+"}, DS, {s:"Urşii de lângă prinţesele minunate ",as: [['s','hibernează'],['k','se căsătoresc']]}],
[["filler-semanticchoice",71], "EPDashedSentence", {s:"+"}, DS, {s:"Florile de lângă sticlele albastre",as: [['s','se ofilesc'],['k','se sparg']]}],
[["filler-semanticchoice",72], "EPDashedSentence", {s:"+"}, DS, {s:"Calculatoarele de lângă copiii năzdrăvani",as: [['s','se strică'],['k','se joacă']]}],
[["filler-onenounplagreement",73], "EPDashedSentence", {s:"+"}, DS, {s:"Iepuraşii fricoşi",as: [['s','se ascund'],['k','se ascunde']]}],
[["filler-onenounplagreement",74], "EPDashedSentence",{s:"+"}, DS, {s:"Cutremurele mari",as: [['s','distrug'],['k','distruge']]}],
[["filler-onenounplagreement",75], "EPDashedSentence",{s:"+"}, DS, {s:"Grădinile japoneze",as: [['s','au'],['k','are']]}],
[["filler-onenounplagreement",76], "EPDashedSentence",{s:"+"}, DS, {s:"Fetele seducătoare",as: [['s','atrag'],['k','atrage']]}],
[["filler-onenounplagreement",77], "EPDashedSentence", {s:"+"}, DS, {s:"Muzicienii creativi ",as: [['s','compun'],['k','compune']]}],
[["filler-onenounplagreement",78], "EPDashedSentence", {s:"+"}, DS, {s:"Rănile sufleteşti ",as: [['s','dor'],['k','doare']]}],
[["filler-onenounplagreement",79], "EPDashedSentence", {s:"+"}, DS, {s:"Paharele colorate",as: [['s','conţin'],['k','conţine']]}],
[["filler-onenounplagreement",80], "EPDashedSentence", {s:"+"}, DS, {s:"Hamsterii curioşi",as: [['s','apar'],['k','apare']]}],
[["filler-onenounplagreement",81], "EPDashedSentence", {s:"+"}, DS, {s:"Elevii cuminţi",as: [['s','doresc'],['k','doreşte']]}],
[["filler-onenounplagreement",82], "EPDashedSentence", {s:"+"}, DS, {s:"Parfumurile franţuzeşti",as: [['s','miros'],['k','miroase']]}],
[["filler-onenounplagreement",83], "EPDashedSentence", {s:"+"}, DS, {s:"Bunicii iubitori",as: [['s','dau'],['k','dă']]}],
 [["filler-onenounplagreement",84], "EPDashedSentence", {s:"+"}, DS, {s:"Cheile verzi",as: [['s','deschid'],['k','deschide']]}],
[["filler-onenounsgagreement",85], "EPDashedSentence", {s:"+"}, DS, {s:"Fata şatenă",as: [['s','se ascund'],['k','se ascunde']]}],
[["filler-onenounsgagreement",86], "EPDashedSentence", {s:"+"}, DS, {s:"Pisica năzdrăvană",as: [['s','sparg'],['k','sparge']]}],
[["filler-onenounsgagreement",87], "EPDashedSentence", {s:"+"}, DS, {s:"Caietul negru",as: [['s','au'],['k','are']]}],
[["filler-onenounsgagreement",88], "EPDashedSentence", {s:"+"}, DS, {s:"Magnetul maro",as: [['s','atrag'],['k','atrage']]}],
[["filler-onenounsgagreement",89], "EPDashedSentence", {s:"+"}, DS, {s:"Pixul albastru",as: [['s','scriu'],['k','scrie']]}],
[["filler-onenounsgagreement",90], "EPDashedSentence", {s:"+"}, DS, {s:"Iepurele alb",as: [['s','sar'],['k','sare']]}],
[["filler-onenounsgagreement",91], "EPDashedSentence", {s:"+"}, DS, {s:"Studentul harnic",as: [['s','muncesc'],['k','munceşte']]}],
[["filler-onenounsgagreement",92], "EPDashedSentence", {s:"+"}, DS, {s:"Femeia misterioasă",as: [['s','dispar'],['k','dispare']]}],
[["filler-onenounsgagreement",93], "EPDashedSentence", {s:"+"}, DS, {s:"Poetul talentat",as: [['s','vorbesc'],['k','vorbeşte']]}],
[["filler-onenounsgagreement",94], "EPDashedSentence", {s:"+"}, DS, {s:"Mâncarea gustoasă",as: [['s','miros'],['k','miroase']]}],
[["filler-onenounsgagreement",95], "EPDashedSentence", {s:"+"}, DS, {s:"Cursul masteral",as: [['s','cuprind'],['k','cuprinde']]}],
[["filler-onenounsgagreement",96], "EPDashedSentence", {s:"+"}, DS, {s:"Bagajul mare",as: [['s','conţin'],['k','conţine']]}]


];



