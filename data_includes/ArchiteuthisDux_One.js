// Pumpkin//experimentwithRodica
// Do show progress bar (fine! I give in)

var showProgressBar = true;

// Main shuffleSequence definition
var shuffleSequence = seq(
    'consent',
    'setcounter',
    'intro',
    'shared-intro',
    sepWith("timeoutSep",rshuffle(startsWith('SAD'),startsWith('filler'))),
    'debrief'
     );

// Using modified controller coded by Ethan Poole (Umass, 2017)
// Disallows use of mouse for responses.
var defaults = [
    "Separator", {
        transfer: 1000,
        normalMessage: "",
        errorMessage: ""
    },
    "DashedSentence", {
        mode: "self-paced reading"
    },
 
    "Question", {
        hasCorrect: false
    },
    "Message", {
        hideProgressBar: true

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
    }
];

// Items array.
var items = [

["consent", "Form", {consentRequired: true, html: {include: "consent.html"}}],
 ["setcounter", "__SetCounter__", { }],
["intro", "Form", {consentRequired: true, html: {include: "intro.html"}}],
["debrief", "Form", {consentRequired: true, html: {include: "debrief.html"}}],

['shared-intro', "Form", {consentRequired: false, html: {include: "shared_intro1.html"}}],

['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Hai să exersăm un pic înainte de a începe efectiv."]
                         ]}],
['shared-intro', "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Omul a căzuit.", "Omul a minţit.",
                                                                                                            "Ambele"]},

['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Cum vi s-a părut? Pur şi simplu alegeţi varianta/variantele care credeţi că poate fi continuată/pot fi continuate cu <intenţionat>."],
                           ["p", "Unor vorbitori nativi de limba română li se pare că doar propoziţia 'Omul a minţit' poate fi continuată cu <intenţionat>."],
                           ["p", "Altor vorbitori li se pare că ambele propoziţii pot fi continuate cu <intenţionat>."],           
                           ["p", "Hai să mai exersăm un pic."],
                         ]}],
['shared-intro', "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>?",as: ["Fata a rupt scaunul.", "Fata a murdărit scaunul.",
                                                                                                            "Ambele"]},
['shared-intro', "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>?", as: ["Actorul a murit.", "Actorul a urlat.",
                                                                                                            "Ambele"]},

['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Bun, gata cu exersatul! Apăsaţi orice tastă când sunteţi gata să începeţi."]
                        ]}],

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
[["SAD-aromapart",2], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>?",as: ["Dumitru s-a piersicit la faţă.", "Dumitru s-a piersicit pe faţă.",
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
 [["SAD-aromapart",3], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Marina s-a zmeurit la cap.", "Marina s-a zmeurit pe cap.",
                                                                                                                        "Ambele"]}},
[["SAD-aromapart",3], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Marina s-a zmeurit la faţă.", "Marina s-a zmeurit pe faţă.",
                                                                                                                        "Ambele"]}},
[["SAD-aromapart",3], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Marina s-a zmeurit la mȃini.", "Marina s-a zmeurit pe mȃini.",
                                                                                                                        "Ambele"]}},
[["SAD-aromapart",3], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Marina s-a zmeurit la picioare.", "Marina s-a zmeurit pe picioare.",
                                                                                                                        "Ambele"]}},
[["SAD-aromapart",3], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Marina s-a zmeurit la gȃt.", "Marina s-a zmeurit pe gȃt.",
                                                                                                                        "Ambele"]}},                                                                                                                                                                                                                         "Ambele"]}},
[["SAD-aromapart",3], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Marina s-a zmeurit la gură.", "Marina s-a zmeurit pe gură.",
                                                                                                            "Ambele"]}},
[["SAD-aromapart",3], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Marina s-a zmeurit la deget.", "Marina s-a zmeurit pe deget.",
                                                                                                            "Ambele"]}},
[["SAD-aromapart",3], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Marina s-a zmeurit la spate.", "Marina s-a zmeurit pe spate.",
                                                                                                            "Ambele"]}},
[["SAD-aromapart",3], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Marina s-a zmeurit la burtă.", "Marina s-a zmeurit pe burtă.",
                                                                                                            "Ambele"]}},                                                                                     
 [["SAD-shapepart",5], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Laura s-a ciupercit la cap.", "Laura s-a ciupercit pe cap.",
                                                                                                                        "Ambele"]}},
[["SAD-shapepart",5], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Laura s-a ciupercit la faţă.", "Laura s-a ciupercit pe faţă.",
                                                                                                                        "Ambele"]}},
[["SAD-shapepart",5], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Laura s-a ciupercit la mȃini.", "Laura s-a ciupercit pe mȃini.",
                                                                                                                        "Ambele"]}},
[["SAD-shapepart",5], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Laura s-a ciupercit la picioare.", "Laura s-a ciupercit pe picioare.",
                                                                                                                        "Ambele"]}},
[["SAD-shapepart",5], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Laura s-a ciupercit la gȃt.", "Laura s-a ciupercit pe gȃt.",
                                                                                                                        "Ambele"]}},                                                                                                                                                                                                                         "Ambele"]}},
[["SAD-shapepart",5], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Laura s-a ciupercit la gură.", "Laura s-a ciupercit pe gură.",
                                                                                                            "Ambele"]}},
[["SAD-shapepart",5], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Laura s-a ciupercit la deget.", "Laura s-a ciupercit pe deget.",
                                                                                                            "Ambele"]}},
 [["SAD-shapepart",5], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Laura s-a ciupercit la spate.", "Laura s-a ciupercit pe spate.",
                                                                                                            "Ambele"]}},
 [["SAD-shapepart",5], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Laura s-a ciupercit la burtă.", "Laura s-a ciupercit pe burtă.",
                                                                                                            "Ambele"]}},
 [["SAD-shapepart",6], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Matei s-a conopidit la cap.", "Matei s-a conopidit pe cap.",
                                                                                                                        "Ambele"]}},
[["SAD-shapepart",6], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Matei s-a conopidit la faţă.", "Matei s-a conopidit pe faţă.",
                                                                                                                        "Ambele"]}},
[["SAD-shapepart",6], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Matei s-a conopidit la mȃini.", "Matei s-a conopidit pe mȃini.",
                                                                                                                        "Ambele"]}},
[["SAD-shapepart",6], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Matei s-a conopidit la picioare.", "Matei s-a conopidit pe picioare.",
                                                                                                                        "Ambele"]}},
[["SAD-shapepart",6], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Matei s-a conopidit la gȃt.", "Matei s-a conopidit pe gȃt.",
                                                                                                                        "Ambele"]}},                                                                                                                                                                                                                         "Ambele"]}},
[["SAD-shapepart",6], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Matei s-a conopidit la gură.", "Matei s-a conopidit pe gură.",
                                                                                                            "Ambele"]}},
[["SAD-shapepart",6], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Matei s-a conopidit la deget.", "Matei s-a conopidit pe deget.",
                                                                                                            "Ambele"]}},
 [["SAD-shapepart",6], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Matei s-a conopidit la spate.", "Matei s-a conopidit pe spate.",
                                                                                                            "Ambele"]}},
 [["SAD-shapepart",6], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Matei  s-a conopidit la burtă.", "Matei s-a conopidit pe burtă.",
                                                                                                            "Ambele"]}},
[["SAD-mixedpart",7], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Elena s-a cartofit la cap.", "Elena s-a cartofit pe cap.",
                                                                                                                        "Ambele"]}},
[["SAD-mixedpart",7], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Elena s-a cartofit la faţă.", "Elena s-a cartofit pe faţă.",
                                                                                                                        "Ambele"]}},
[["SAD-mixedpart",7], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Elena s-a cartofit la mȃini.", "Elena s-a cartofit pe mȃini.",
                                                                                                                        "Ambele"]}},
[["SAD-mixedpart",7], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Elena s-a cartofit la picioare.", "Elena s-a cartofit pe picioare.",
                                                                                                                        "Ambele"]}},
[["SAD-mixedpart",7], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Elena s-a cartofit la gȃt.", "Elena s-a cartofit pe gȃt.",
                                                                                                                        "Ambele"]}},                                                                                                                                                                                                                         "Ambele"]}},
[["SAD-mixedpart",7], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Elena s-a cartofit la gură.", "Elena s-a cartofit pe gură.",
                                                                                                            "Ambele"]}},
[["SAD-mixedpart",7], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Elena s-a cartofit la deget.", "Elena s-a cartofit pe deget.",
                                                                                                            "Ambele"]}},
 [["SAD-mixedpart",7], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Elena s-a cartofit la spate.", "Elena s-a cartofit pe spate.",
                                                                                                            "Ambele"]}},
 [["SAD-mixedpart",7], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Elena s-a cartofit la burtă.", "Elena s-a cartofit pe burtă.",
                                                                                                            "Ambele"]}},
  [["SAD-mixedpart",8], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Monica s-a pepenit la cap.", "Monica s-a pepenit pe cap.",
                                                                                                                        "Ambele"]}},
[["SAD-mixedpart",8], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Monica s-a pepenit la faţă.", "Monica s-a pepenit pe faţă.",
                                                                                                                        "Ambele"]}},
[["SAD-mixedpart",8], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Monica s-a pepenit la mȃini.", "Monica s-a pepenit pe mȃini.",
                                                                                                                        "Ambele"]}},
[["SAD-mixedpart",8], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Monica s-a pepenit la picioare.", "Monica s-a pepenit pe picioare.",
                                                                                                                        "Ambele"]}},
[["SAD-mixedpart",8], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Monica s-a pepenit la gȃt.", "Monica s-a pepenit pe gȃt.",
                                                                                                                        "Ambele"]}},                                                                                                                                                                                                                         "Ambele"]}},
[["SAD-mixedpart",8], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Monica s-a pepenit la gură.", "Monica s-a pepenit pe gură.",
                                                                                                            "Ambele"]}},
[["SAD-mixedpart",8], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Monica s-a pepenit la deget.", "Monica s-a pepenit pe deget.",
                                                                                                            "Ambele"]}},
 [["SAD-mixedpart",8], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Monica  s-a pepenit la spate.", "Monica  s-a pepenit pe spate.",
                                                                                                            "Ambele"]}},
 [["SAD-mixedpart",8], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Monica  s-a pepenit la burtă.", "Monica  s-a pepenit pe burtă.",
                                                                                                            "Ambele"]}},
  [["SAD-mixedpart",9], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Alexandru s-a dovlecit la cap.", "Alexandru s-a dovlecit pe cap.",
                                                                                                                        "Ambele"]}},
[["SAD-mixedpart",9], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Alexandru s-a dovlecit la faţă.", "Alexandru s-a dovlecit pe faţă.",
                                                                                                                        "Ambele"]}},
[["SAD-mixedpart",9], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Alexandru s-a dovlecit la mȃini.", "Alexandru s-a dovlecit pe mȃini.",
                                                                                                                        "Ambele"]}},
[["SAD-mixedpart",9], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Alexandru s-a dovlecit la picioare.", "Alexandru s-a dovlecit pe picioare.",
                                                                                                                        "Ambele"]}},
[["SAD-mixedpart",9], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Alexandru s-a dovlecit la gȃt.", "Alexandru s-a dovlecit pe gȃt.",
                                                                                                                        "Ambele"]}},                                                                                                                                                                                                                         "Ambele"]}},
[["SAD-mixedpart",9], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Alexandru s-a dovlecit la gură.", "Alexandru s-a dovlecit pe gură.",
                                                                                                            "Ambele"]}},
[["SAD-mixedpart",9], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Alexandru  s-a dovlecit la deget.", "Alexandru s-a dovlecit pe deget.",
                                                                                                            "Ambele"]}},
 [["SAD-mixedpart",9], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Alexandru  s-a dovlecit la spate.", "Alexandru  s-a dovlecit pe spate.",
                                                                                                            "Ambele"]}},
 [["SAD-mixedpart",9], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Alexandru  s-a dovlecit la burtă.", "Alexandru  s-a dovlecit pe burtă.",
                                                                                                            "Ambele"]}},
    //// Fillers
[["filler-activepassive",10], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Mirela a fost spănacită.", "Mirela a spănacit.",
                                                                                                            "Ambele"]}},
[["filler-activepassive",11], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Mihai a fost caisit.", "Mihai a caisit.",
                                                                                                            "Ambele"]}},
[["filler-activepassive",12], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Miriam a fost sălăţită.", "Miriam a sălăţit.",
                                                                                                            "Ambele"]}},
[["filler-activepassive",13], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Tiberiu a fost ananasit.", "Miriam a ananasit.",
                                                                                                            "Ambele"]}},
[["filler-activepassive",14], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Lorena a fost ţelinită.", "Lorena a ţelinit.",
                                                                                                            "Ambele"]}},
[["filler-activepassive",15], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Andu a fost smochinit.", "Andu a smochinit.",
                                                                                                            "Ambele"]}},
[["filler-activepassive",16], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Mihaela a fost gogoşărită.", "Andu a gogoşărit.",
                                                                                                            "Ambele"]}},                                                                                                                                                                                                                               
[["filler-activepassive",17], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Silviu a fost nectarinit.", "Andu a nectarinit.",
                                                                                                            "Ambele"]}},
[["filler-activepassive",18], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Sofia a fost prunită.", "Sofia a prunit.", "Ambele"]}},
[["filler-animateinanimate",19], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Rodica a lămȃit.", "Copacul a lămȃit.", "Ambele"]}},
[["filler-animateinanimate",20], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Luca a căpşunit.", "Tufa a căpşunit.", "Ambele"]}},
[["filler-animateinanimate", 21], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Loredana a alunit.", "Arborele a alunit.", "Ambele"]}},
[["filler-animateinanimate", 22], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Toma a strugurit.", "Via a strugurit.", "Ambele"]}},
[["filler-animateinanimate", 23], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Cristina a corcoduşit.", "Ramura a corcoduşit.", "Ambele"]}},
[["filler-animateinanimate", 24], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Dragoş a măzărit.", "Planta a măzărit.", "Ambele"]}},
[["filler-animateinanimate", 25], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Alina a cepuit.", "Bulbul a cepuit.", "Ambele"]}},  
[["filler-animateinanimate", 26], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Traian a ridichit.", "Pămȃntul a ridichit.", "Ambele"]}},
[["filler-animateinanimate", 27], "Question", {q:"Care propoziţie poate fi continuată cu <intenţionat>? ",as: ["Laura a măruit.", "Livada a măruit.", "Ambele"]}}
 ];



