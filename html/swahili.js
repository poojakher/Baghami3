/**************** 
 * Swahili Test *
 ****************/

import { PsychoJS } from './lib/core-2020.2.js';
import * as core from './lib/core-2020.2.js';
import { TrialHandler } from './lib/data-2020.2.js';
import { Scheduler } from './lib/util-2020.2.js';
import * as visual from './lib/visual-2020.2.js';
import * as sound from './lib/sound-2020.2.js';
import * as util from './lib/util-2020.2.js';
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'norm',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'swahili';  // from the Builder filename that created this script
let expInfo = {'participant': 'name',  'session': '001'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(consentRoutineBegin());
flowScheduler.add(consentRoutineEachFrame());
flowScheduler.add(consentRoutineEnd());
const instr_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(instr_loopLoopBegin, instr_loopLoopScheduler);
flowScheduler.add(instr_loopLoopScheduler);
flowScheduler.add(instr_loopLoopEnd);
flowScheduler.add(instr_learningRoutineBegin());
flowScheduler.add(instr_learningRoutineEachFrame());
flowScheduler.add(instr_learningRoutineEnd());
const card_gen_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(card_gen_loopLoopBegin, card_gen_loopLoopScheduler);
flowScheduler.add(card_gen_loopLoopScheduler);
flowScheduler.add(card_gen_loopLoopEnd);
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(instr_movieRoutineBegin());
flowScheduler.add(instr_movieRoutineEachFrame());
flowScheduler.add(instr_movieRoutineEnd());
flowScheduler.add(movieRoutineBegin());
flowScheduler.add(movieRoutineEachFrame());
flowScheduler.add(movieRoutineEnd());
flowScheduler.add(readyRoutineBegin());
flowScheduler.add(readyRoutineEachFrame());
flowScheduler.add(readyRoutineEnd());
flowScheduler.add(instr_assessRoutineBegin());
flowScheduler.add(instr_assessRoutineEachFrame());
flowScheduler.add(instr_assessRoutineEnd());
const assess_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(assess_loopLoopBegin, assess_loopLoopScheduler);
flowScheduler.add(assess_loopLoopScheduler);
flowScheduler.add(assess_loopLoopEnd);
const ans_gen_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(ans_gen_loopLoopBegin, ans_gen_loopLoopScheduler);
flowScheduler.add(ans_gen_loopLoopScheduler);
flowScheduler.add(ans_gen_loopLoopEnd);
flowScheduler.add(instr_transferRoutineBegin());
flowScheduler.add(instr_transferRoutineEachFrame());
flowScheduler.add(instr_transferRoutineEnd());
const transfersLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(transfersLoopBegin, transfersLoopScheduler);
flowScheduler.add(transfersLoopScheduler);
flowScheduler.add(transfersLoopEnd);
flowScheduler.add(finishRoutineBegin());
flowScheduler.add(finishRoutineEachFrame());
flowScheduler.add(finishRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.2.4';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var consentClock;
var consent_text;
var consent_key;
var instrClock;
var done_with_instructions;
var waiting;
var study;
var test;
var userinput;
var card_index;
var size_at_start;
var answers;
var instr_num;
var iteration;
var conditions;
var image_name;
var condition;
var instruction;
var instr_learningClock;
var instr_learning_text;
var instr_learning_key;
var card_genClock;
var initialize_trialClock;
var choiceClock;
var choose_pile;
var unsorted_card;
var study_pile;
var test_pile;
var done_pile;
var study_pile_text;
var test_pile_text;
var done_pile_text;
var unsorted_vocab;
var instr_choice;
var study_size_text;
var test_size_text;
var done_size_text;
var unsorted_size_text;
var interpret_choiceClock;
var pick_deckClock;
var study_first;
var test_first;
var study_first_text;
var test_first_text;
var mouse_pick;
var instr_pick;
var interpret_pickClock;
var init_active_cardsClock;
var instr_studyClock;
var instr_study_text;
var key_instr_study;
var studyingClock;
var studycard;
var studycard_text;
var next_study;
var instr_testClock;
var instr_test_text;
var key_instr_test;
var testingClock;
var isalpha;
var testcard;
var text_box;
var testcard_text;
var input_text;
var show_answer_promptClock;
var no;
var yes;
var would_you_like;
var yes_or_no;
var no_text;
var yes_text;
var show_answerClock;
var correct_text;
var user_text;
var change_methodClock;
var instr_movieClock;
var instr_movie_key;
var instr_movie_text;
var movieClock;
var moviestimClock;
var moviestim;
var readyClock;
var ready_to_continue;
var return_to_exp;
var instr_assessClock;
var instr_assess_text;
var instr_assess_key;
var assessClock;
var assess_card;
var assess_text_box;
var assess_card_text;
var assess_input_text;
var ans_genClock;
var instr_transferClock;
var instr_transfer_text;
var instr_transfer_key;
var transferClock;
var a;
var b;
var c;
var a_text;
var b_text;
var c_text;
var sentence;
var transfer_text;
var select_word;
var finishClock;
var finish_text;
var end_experiment;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "consent"
  consentClock = new util.Clock();
  consent_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'consent_text',
    text: 'LETTER OF CONSENT\nDear participant:\n\nThis quarter, under the direction of Professor Simone in the Department of Psychology at Santa Clara University, we are conducting a research study to examine learning strategies and remembering in college students.\n\nWe are requesting your participation, which will involve learning 20 English-Swahili translations on a computer and will take no more than one hour of your time. Your participation in this study is voluntary.  If you choose not to participate or to withdraw from the study at any time, there will be no penalty. It will not affect your grade. The results of the research study may be published, but your name will not be used. \n\nAlthough there may be no direct benefit to you, the possible benefit of your participation is better understanding of strategies students choose to use when learning something new.\n\nIf you have any questions concerning the research study, please call Dr. Simone at (408) 554 – 4577.\nIf you have any questions about your rights as a subject/participant in this research, or if you feel you have been placed at risk, you can contact the Chair of the Human Subjects Committee, through the Office of Research Compliance and Integrity at (408) 554-5591.\n\nBy pressing “Enter”, which will begin to run the computer program, you certify that you are at least 18 years old and are giving consent to participate in the study described here.',
    font: 'Times New Roman',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  consent_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instr"
  instrClock = new util.Clock();
  done_with_instructions = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  waiting = [];
  study = [];
  test = [];
  userinput = "";
  card_index = 0;
  size_at_start = waiting.length;
  answers = [];
  instr_num = 0;
  iteration = 0;
  conditions = [];
  image_name = "";
  /*each line corresponds to a condition,
  each string in the parentheses should be a filename
  present in html/resources */
  conditions = [["cond1.jpg"],
  ["cond2a.jpg", "cond2b.jpg"]];
  condition = Math.floor(Math.random()*conditions.length);
  psychoJS.experiment.addData("condition", condition+1);
  
  instruction = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instruction', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size :(1),
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -20.0 
  });
  // Initialize components for Routine "instr_learning"
  instr_learningClock = new util.Clock();
  instr_learning_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_learning_text',
    text: "We will now begin with the learning phase. \n\nPlease make sure to sort your word-pairs into the STUDY or TEST piles.\n\nIf you feel confident about the word and its translation, put the word in the DONE pile. \n\nPlease take a moment to put your phone on Do Not Disturb or to put it away. \n\nPRESS 'Enter' TO CONTINUE",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  instr_learning_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "card_gen"
  card_genClock = new util.Clock();
  // Initialize components for Routine "initialize_trial"
  initialize_trialClock = new util.Clock();
  // Initialize components for Routine "choice"
  choiceClock = new util.Clock();
  choose_pile = new core.Mouse({
    win: psychoJS.window,
  });
  choose_pile.mouseClock = new util.Clock();
  unsorted_card = new visual.Rect ({
    win: psychoJS.window, name: 'unsorted_card', 
    width: [0.6, 0.5][0], height: [0.6, 0.5][1],
    ori: 0, pos: [(- 0.4), 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  study_pile = new visual.Rect ({
    win: psychoJS.window, name: 'study_pile', 
    width: [0.4, 0.3][0], height: [0.4, 0.3][1],
    ori: 0, pos: [0.5, 0.5],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  test_pile = new visual.Rect ({
    win: psychoJS.window, name: 'test_pile', 
    width: [0.4, 0.3][0], height: [0.4, 0.3][1],
    ori: 0, pos: [0.5, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  done_pile = new visual.Rect ({
    win: psychoJS.window, name: 'done_pile', 
    width: [0.4, 0.3][0], height: [0.4, 0.3][1],
    ori: 0, pos: [0.5, (- 0.5)],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  study_pile_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'study_pile_text',
    text: 'Study',
    font: 'Arial',
    units: undefined, 
    pos: [0.5, 0.5], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -5.0 
  });
  
  test_pile_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'test_pile_text',
    text: 'Test',
    font: 'Arial',
    units: undefined, 
    pos: [0.5, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -6.0 
  });
  
  done_pile_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'done_pile_text',
    text: 'Done',
    font: 'Arial',
    units: undefined, 
    pos: [0.5, (- 0.5)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -7.0 
  });
  
  unsorted_vocab = new visual.TextStim({
    win: psychoJS.window,
    name: 'unsorted_vocab',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.4), 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -8.0 
  });
  
  instr_choice = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_choice',
    text: 'Click on the card on the left to see a word pair. Then click on the card to the right to choose what to do with that word pair.',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.3), 0.6], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -9.0 
  });
  
  study_size_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'study_size_text',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0.5, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -15.0 
  });
  
  test_size_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'test_size_text',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -16.0 
  });
  
  done_size_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'done_size_text',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0.5, (- 0.7)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -17.0 
  });
  
  unsorted_size_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'unsorted_size_text',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.4), (- 0.5)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -18.0 
  });
  
  // Initialize components for Routine "interpret_choice"
  interpret_choiceClock = new util.Clock();
  // Initialize components for Routine "pick_deck"
  pick_deckClock = new util.Clock();
  study_first = new visual.Rect ({
    win: psychoJS.window, name: 'study_first', 
    width: [0.5, 0.5][0], height: [0.5, 0.5][1],
    ori: 0, pos: [(- 0.5), 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  test_first = new visual.Rect ({
    win: psychoJS.window, name: 'test_first', 
    width: [0.5, 0.5][0], height: [0.5, 0.5][1],
    ori: 0, pos: [0.5, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  study_first_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'study_first_text',
    text: 'Study First',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.5), 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -3.0 
  });
  
  test_first_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'test_first_text',
    text: 'Test First',
    font: 'Arial',
    units: undefined, 
    pos: [0.5, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -4.0 
  });
  
  mouse_pick = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_pick.mouseClock = new util.Clock();
  instr_pick = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_pick',
    text: 'Which would you like to do first?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  // Initialize components for Routine "interpret_pick"
  interpret_pickClock = new util.Clock();
  // Initialize components for Routine "init_active_cards"
  init_active_cardsClock = new util.Clock();
  // Initialize components for Routine "instr_study"
  instr_studyClock = new util.Clock();
  instr_study_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_study_text',
    text: 'For the study trials, you will see the English-Swahili translations one at a time. When you are ready to move on to the next trial, press "enter".',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  key_instr_study = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "studying"
  studyingClock = new util.Clock();
  studycard = new visual.Rect ({
    win: psychoJS.window, name: 'studycard', 
    width: [0.7, 0.5][0], height: [0.7, 0.5][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  studycard_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'studycard_text',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  next_study = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instr_test"
  instr_testClock = new util.Clock();
  instr_test_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_test_text',
    text: 'For the test trials, please type in the Swahili translation for the English word. Select "enter" to move on to the next trial.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  key_instr_test = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "testing"
  testingClock = new util.Clock();
  isalpha = function alphatest(chr) {
      return /[a-zA-Z]/.test(chr);
  }
  testcard = new visual.Rect ({
    win: psychoJS.window, name: 'testcard', 
    width: [0.7, 0.5][0], height: [0.7, 0.5][1],
    ori: 0, pos: [0, 0.2],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  text_box = new visual.Rect ({
    win: psychoJS.window, name: 'text_box', 
    width: [0.7, 0.2][0], height: [0.7, 0.2][1],
    ori: 0, pos: [0, (- 0.3)],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  testcard_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'testcard_text',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -4.0 
  });
  
  input_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'input_text',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -5.0 
  });
  
  // Initialize components for Routine "show_answer_prompt"
  show_answer_promptClock = new util.Clock();
  no = new visual.Rect ({
    win: psychoJS.window, name: 'no', 
    width: [0.5, 0.5][0], height: [0.5, 0.5][1],
    ori: 0, pos: [(- 0.5), 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  yes = new visual.Rect ({
    win: psychoJS.window, name: 'yes', 
    width: [0.5, 0.5][0], height: [0.5, 0.5][1],
    ori: 0, pos: [0.5, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  would_you_like = new visual.TextStim({
    win: psychoJS.window,
    name: 'would_you_like',
    text: 'Would you like to see the correct answer?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  yes_or_no = new core.Mouse({
    win: psychoJS.window,
  });
  yes_or_no.mouseClock = new util.Clock();
  no_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'no_text',
    text: 'No',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.5), 0], height: 0.2,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -5.0 
  });
  
  yes_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'yes_text',
    text: 'Yes',
    font: 'Arial',
    units: undefined, 
    pos: [0.5, 0], height: 0.2,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -6.0 
  });
  
  // Initialize components for Routine "show_answer"
  show_answerClock = new util.Clock();
  correct_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'correct_text',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  user_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'user_text',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "change_method"
  change_methodClock = new util.Clock();
  // Initialize components for Routine "instr_movie"
  instr_movieClock = new util.Clock();
  instr_movie_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  instr_movie_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_movie_text',
    text: "We will now begin a short 15 minute Ted talk. \n \nBefore you press enter, make sure your volume is on and if you want, plug in your headphones. \n\nPlease pay attention to the video, you will be asked questions at the end of this study. \n\nPress 'ENTER' to start the video. ",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.08,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "movie"
  movieClock = new util.Clock();
  moviestimClock = new util.Clock();
  moviestim = new visual.MovieStim({
    win: psychoJS.window,
    name: 'moviestim',
    units: undefined,
    movie: 'movie.mp4',
    pos: [0, 0],
    size: 1.5,
    ori: 0,
    opacity: 1,
    loop: false,
    noAudio: false,
    });
  // Initialize components for Routine "ready"
  readyClock = new util.Clock();
  ready_to_continue = new visual.TextStim({
    win: psychoJS.window,
    name: 'ready_to_continue',
    text: "You will now begin the test phase of this study. Press 'enter' to continue. ",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color([0, 1, 0]),  opacity: 1,
    depth: 0.0 
  });
  
  return_to_exp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instr_assess"
  instr_assessClock = new util.Clock();
  instr_assess_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_assess_text',
    text: 'Please type in the Swahili translation for the English word in the space below. You can keep all your answers all lowercase. Select "enter" to move on to the next trial.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  instr_assess_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "assess"
  assessClock = new util.Clock();
  assess_card = new visual.Rect ({
    win: psychoJS.window, name: 'assess_card', 
    width: [0.7, 0.5][0], height: [0.7, 0.5][1],
    ori: 0, pos: [0, 0.2],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  assess_text_box = new visual.Rect ({
    win: psychoJS.window, name: 'assess_text_box', 
    width: [0.7, 0.2][0], height: [0.7, 0.2][1],
    ori: 0, pos: [0, (- 0.3)],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  assess_card_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'assess_card_text',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -4.0 
  });
  
  assess_input_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'assess_input_text',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -5.0 
  });
  
  // Initialize components for Routine "ans_gen"
  ans_genClock = new util.Clock();
  // Initialize components for Routine "instr_transfer"
  instr_transferClock = new util.Clock();
  instr_transfer_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_transfer_text',
    text: 'In the next part of the test, you will choose the Swahili word that completes the English sentence.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  instr_transfer_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "transfer"
  transferClock = new util.Clock();
  a = new visual.Rect ({
    win: psychoJS.window, name: 'a', 
    width: [0.4, 0.3][0], height: [0.4, 0.3][1],
    ori: 0, pos: [(- 0.5), (- 0.5)],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -5, interpolate: true,
  });
  
  b = new visual.Rect ({
    win: psychoJS.window, name: 'b', 
    width: [0.4, 0.3][0], height: [0.4, 0.3][1],
    ori: 0, pos: [0, (- 0.5)],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -6, interpolate: true,
  });
  
  c = new visual.Rect ({
    win: psychoJS.window, name: 'c', 
    width: [0.4, 0.3][0], height: [0.4, 0.3][1],
    ori: 0, pos: [0.5, (- 0.5)],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -7, interpolate: true,
  });
  
  a_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'a_text',
    text: 'atext',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.5), (- 0.5)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -8.0 
  });
  
  b_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'b_text',
    text: 'btext',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.5)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -9.0 
  });
  
  c_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'c_text',
    text: 'btext',
    font: 'Arial',
    units: undefined, 
    pos: [0.5, (- 0.5)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -10.0 
  });
  
  sentence = new visual.TextStim({
    win: psychoJS.window,
    name: 'sentence',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -11.0 
  });
  
  transfer_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'transfer_text',
    text: 'Choose the Swahili word that would complete this English sentence.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.5], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -12.0 
  });
  
  select_word = new core.Mouse({
    win: psychoJS.window,
  });
  select_word.mouseClock = new util.Clock();
  // Initialize components for Routine "finish"
  finishClock = new util.Clock();
  finish_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'finish_text',
    text: 'Thank you for participating! \n\nPlease press enter to process your data from this task, and then return to the email to complete the rest of the study.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  end_experiment = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var _consent_key_allKeys;
var consentComponents;
function consentRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'consent'-------
    t = 0;
    consentClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    consent_key.keys = undefined;
    consent_key.rt = undefined;
    _consent_key_allKeys = [];
    // keep track of which components have finished
    consentComponents = [];
    consentComponents.push(consent_text);
    consentComponents.push(consent_key);
    
    for (const thisComponent of consentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function consentRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'consent'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = consentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *consent_text* updates
    if (t >= 0.0 && consent_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent_text.tStart = t;  // (not accounting for frame time here)
      consent_text.frameNStart = frameN;  // exact frame index
      
      consent_text.setAutoDraw(true);
    }

    
    // *consent_key* updates
    if (t >= 0.0 && consent_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent_key.tStart = t;  // (not accounting for frame time here)
      consent_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { consent_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { consent_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { consent_key.clearEvents(); });
    }

    if (consent_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = consent_key.getKeys({keyList: ['return'], waitRelease: false});
      _consent_key_allKeys = _consent_key_allKeys.concat(theseKeys);
      if (_consent_key_allKeys.length > 0) {
        consent_key.keys = _consent_key_allKeys[_consent_key_allKeys.length - 1].name;  // just the last key pressed
        consent_key.rt = _consent_key_allKeys[_consent_key_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of consentComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function consentRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'consent'-------
    for (const thisComponent of consentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('consent_key.keys', consent_key.keys);
    if (typeof consent_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('consent_key.rt', consent_key.rt);
        routineTimer.reset();
        }
    
    consent_key.stop();
    // the Routine "consent" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var instr_loop;
var currentLoop;
function instr_loopLoopBegin(instr_loopLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  instr_loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1000, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'instr_loop'
  });
  psychoJS.experiment.addLoop(instr_loop); // add the loop to the experiment
  currentLoop = instr_loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisInstr_loop of instr_loop) {
    const snapshot = instr_loop.getSnapshot();
    instr_loopLoopScheduler.add(importConditions(snapshot));
    instr_loopLoopScheduler.add(instrRoutineBegin(snapshot));
    instr_loopLoopScheduler.add(instrRoutineEachFrame(snapshot));
    instr_loopLoopScheduler.add(instrRoutineEnd(snapshot));
    instr_loopLoopScheduler.add(endLoopIteration(instr_loopLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function instr_loopLoopEnd() {
  psychoJS.experiment.removeLoop(instr_loop);

  return Scheduler.Event.NEXT;
}


var card_gen_loop;
function card_gen_loopLoopBegin(card_gen_loopLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  card_gen_loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'cards.xlsx',
    seed: undefined, name: 'card_gen_loop'
  });
  psychoJS.experiment.addLoop(card_gen_loop); // add the loop to the experiment
  currentLoop = card_gen_loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisCard_gen_loop of card_gen_loop) {
    const snapshot = card_gen_loop.getSnapshot();
    card_gen_loopLoopScheduler.add(importConditions(snapshot));
    card_gen_loopLoopScheduler.add(card_genRoutineBegin(snapshot));
    card_gen_loopLoopScheduler.add(card_genRoutineEachFrame(snapshot));
    card_gen_loopLoopScheduler.add(card_genRoutineEnd(snapshot));
    card_gen_loopLoopScheduler.add(endLoopIteration(card_gen_loopLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function card_gen_loopLoopEnd() {
  psychoJS.experiment.removeLoop(card_gen_loop);

  return Scheduler.Event.NEXT;
}


var trials;
function trialsLoopBegin(trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1000, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial of trials) {
    const snapshot = trials.getSnapshot();
    trialsLoopScheduler.add(importConditions(snapshot));
    trialsLoopScheduler.add(initialize_trialRoutineBegin(snapshot));
    trialsLoopScheduler.add(initialize_trialRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(initialize_trialRoutineEnd(snapshot));
    const choicesLoopScheduler = new Scheduler(psychoJS);
    trialsLoopScheduler.add(choicesLoopBegin, choicesLoopScheduler);
    trialsLoopScheduler.add(choicesLoopScheduler);
    trialsLoopScheduler.add(choicesLoopEnd);
    trialsLoopScheduler.add(pick_deckRoutineBegin(snapshot));
    trialsLoopScheduler.add(pick_deckRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(pick_deckRoutineEnd(snapshot));
    trialsLoopScheduler.add(interpret_pickRoutineBegin(snapshot));
    trialsLoopScheduler.add(interpret_pickRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(interpret_pickRoutineEnd(snapshot));
    const learn_loopLoopScheduler = new Scheduler(psychoJS);
    trialsLoopScheduler.add(learn_loopLoopBegin, learn_loopLoopScheduler);
    trialsLoopScheduler.add(learn_loopLoopScheduler);
    trialsLoopScheduler.add(learn_loopLoopEnd);
    trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var choices;
function choicesLoopBegin(choicesLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  choices = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1000, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'choices'
  });
  psychoJS.experiment.addLoop(choices); // add the loop to the experiment
  currentLoop = choices;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisChoice of choices) {
    const snapshot = choices.getSnapshot();
    choicesLoopScheduler.add(importConditions(snapshot));
    choicesLoopScheduler.add(choiceRoutineBegin(snapshot));
    choicesLoopScheduler.add(choiceRoutineEachFrame(snapshot));
    choicesLoopScheduler.add(choiceRoutineEnd(snapshot));
    choicesLoopScheduler.add(interpret_choiceRoutineBegin(snapshot));
    choicesLoopScheduler.add(interpret_choiceRoutineEachFrame(snapshot));
    choicesLoopScheduler.add(interpret_choiceRoutineEnd(snapshot));
    choicesLoopScheduler.add(endLoopIteration(choicesLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function choicesLoopEnd() {
  psychoJS.experiment.removeLoop(choices);

  return Scheduler.Event.NEXT;
}


var learn_loop;
function learn_loopLoopBegin(learn_loopLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  learn_loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 2, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'learn_loop'
  });
  psychoJS.experiment.addLoop(learn_loop); // add the loop to the experiment
  currentLoop = learn_loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisLearn_loop of learn_loop) {
    const snapshot = learn_loop.getSnapshot();
    learn_loopLoopScheduler.add(importConditions(snapshot));
    learn_loopLoopScheduler.add(init_active_cardsRoutineBegin(snapshot));
    learn_loopLoopScheduler.add(init_active_cardsRoutineEachFrame(snapshot));
    learn_loopLoopScheduler.add(init_active_cardsRoutineEnd(snapshot));
    learn_loopLoopScheduler.add(instr_studyRoutineBegin(snapshot));
    learn_loopLoopScheduler.add(instr_studyRoutineEachFrame(snapshot));
    learn_loopLoopScheduler.add(instr_studyRoutineEnd(snapshot));
    const study_loopLoopScheduler = new Scheduler(psychoJS);
    learn_loopLoopScheduler.add(study_loopLoopBegin, study_loopLoopScheduler);
    learn_loopLoopScheduler.add(study_loopLoopScheduler);
    learn_loopLoopScheduler.add(study_loopLoopEnd);
    learn_loopLoopScheduler.add(instr_testRoutineBegin(snapshot));
    learn_loopLoopScheduler.add(instr_testRoutineEachFrame(snapshot));
    learn_loopLoopScheduler.add(instr_testRoutineEnd(snapshot));
    const test_loopLoopScheduler = new Scheduler(psychoJS);
    learn_loopLoopScheduler.add(test_loopLoopBegin, test_loopLoopScheduler);
    learn_loopLoopScheduler.add(test_loopLoopScheduler);
    learn_loopLoopScheduler.add(test_loopLoopEnd);
    learn_loopLoopScheduler.add(change_methodRoutineBegin(snapshot));
    learn_loopLoopScheduler.add(change_methodRoutineEachFrame(snapshot));
    learn_loopLoopScheduler.add(change_methodRoutineEnd(snapshot));
    learn_loopLoopScheduler.add(endLoopIteration(learn_loopLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var study_loop;
function study_loopLoopBegin(study_loopLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  study_loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: active_cards_length, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'study_loop'
  });
  psychoJS.experiment.addLoop(study_loop); // add the loop to the experiment
  currentLoop = study_loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisStudy_loop of study_loop) {
    const snapshot = study_loop.getSnapshot();
    study_loopLoopScheduler.add(importConditions(snapshot));
    study_loopLoopScheduler.add(studyingRoutineBegin(snapshot));
    study_loopLoopScheduler.add(studyingRoutineEachFrame(snapshot));
    study_loopLoopScheduler.add(studyingRoutineEnd(snapshot));
    study_loopLoopScheduler.add(endLoopIteration(study_loopLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function study_loopLoopEnd() {
  psychoJS.experiment.removeLoop(study_loop);

  return Scheduler.Event.NEXT;
}


var test_loop;
function test_loopLoopBegin(test_loopLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  test_loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: active_cards_length, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'test_loop'
  });
  psychoJS.experiment.addLoop(test_loop); // add the loop to the experiment
  currentLoop = test_loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTest_loop of test_loop) {
    const snapshot = test_loop.getSnapshot();
    test_loopLoopScheduler.add(importConditions(snapshot));
    test_loopLoopScheduler.add(testingRoutineBegin(snapshot));
    test_loopLoopScheduler.add(testingRoutineEachFrame(snapshot));
    test_loopLoopScheduler.add(testingRoutineEnd(snapshot));
    test_loopLoopScheduler.add(show_answer_promptRoutineBegin(snapshot));
    test_loopLoopScheduler.add(show_answer_promptRoutineEachFrame(snapshot));
    test_loopLoopScheduler.add(show_answer_promptRoutineEnd(snapshot));
    test_loopLoopScheduler.add(show_answerRoutineBegin(snapshot));
    test_loopLoopScheduler.add(show_answerRoutineEachFrame(snapshot));
    test_loopLoopScheduler.add(show_answerRoutineEnd(snapshot));
    test_loopLoopScheduler.add(endLoopIteration(test_loopLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function test_loopLoopEnd() {
  psychoJS.experiment.removeLoop(test_loop);

  return Scheduler.Event.NEXT;
}


function learn_loopLoopEnd() {
  psychoJS.experiment.removeLoop(learn_loop);

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var assess_loop;
function assess_loopLoopBegin(assess_loopLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  assess_loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'cards.xlsx',
    seed: undefined, name: 'assess_loop'
  });
  psychoJS.experiment.addLoop(assess_loop); // add the loop to the experiment
  currentLoop = assess_loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisAssess_loop of assess_loop) {
    const snapshot = assess_loop.getSnapshot();
    assess_loopLoopScheduler.add(importConditions(snapshot));
    assess_loopLoopScheduler.add(assessRoutineBegin(snapshot));
    assess_loopLoopScheduler.add(assessRoutineEachFrame(snapshot));
    assess_loopLoopScheduler.add(assessRoutineEnd(snapshot));
    assess_loopLoopScheduler.add(endLoopIteration(assess_loopLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function assess_loopLoopEnd() {
  psychoJS.experiment.removeLoop(assess_loop);

  return Scheduler.Event.NEXT;
}


var ans_gen_loop;
function ans_gen_loopLoopBegin(ans_gen_loopLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  ans_gen_loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'transfer.xlsx',
    seed: undefined, name: 'ans_gen_loop'
  });
  psychoJS.experiment.addLoop(ans_gen_loop); // add the loop to the experiment
  currentLoop = ans_gen_loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisAns_gen_loop of ans_gen_loop) {
    const snapshot = ans_gen_loop.getSnapshot();
    ans_gen_loopLoopScheduler.add(importConditions(snapshot));
    ans_gen_loopLoopScheduler.add(ans_genRoutineBegin(snapshot));
    ans_gen_loopLoopScheduler.add(ans_genRoutineEachFrame(snapshot));
    ans_gen_loopLoopScheduler.add(ans_genRoutineEnd(snapshot));
    ans_gen_loopLoopScheduler.add(endLoopIteration(ans_gen_loopLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function ans_gen_loopLoopEnd() {
  psychoJS.experiment.removeLoop(ans_gen_loop);

  return Scheduler.Event.NEXT;
}


var transfers;
function transfersLoopBegin(transfersLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  transfers = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'transfer.xlsx',
    seed: undefined, name: 'transfers'
  });
  psychoJS.experiment.addLoop(transfers); // add the loop to the experiment
  currentLoop = transfers;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTransfer of transfers) {
    const snapshot = transfers.getSnapshot();
    transfersLoopScheduler.add(importConditions(snapshot));
    transfersLoopScheduler.add(transferRoutineBegin(snapshot));
    transfersLoopScheduler.add(transferRoutineEachFrame(snapshot));
    transfersLoopScheduler.add(transferRoutineEnd(snapshot));
    transfersLoopScheduler.add(endLoopIteration(transfersLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function transfersLoopEnd() {
  psychoJS.experiment.removeLoop(transfers);

  return Scheduler.Event.NEXT;
}


var _done_with_instructions_allKeys;
var instrComponents;
function instrRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instr'-------
    t = 0;
    instrClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    done_with_instructions.keys = undefined;
    done_with_instructions.rt = undefined;
    _done_with_instructions_allKeys = [];
    image_name = conditions[condition][iteration];
    instruction.setImage(image_name);
    // keep track of which components have finished
    instrComponents = [];
    instrComponents.push(done_with_instructions);
    instrComponents.push(instruction);
    
    for (const thisComponent of instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function instrRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instr'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *done_with_instructions* updates
    if (t >= 0.0 && done_with_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      done_with_instructions.tStart = t;  // (not accounting for frame time here)
      done_with_instructions.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { done_with_instructions.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { done_with_instructions.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { done_with_instructions.clearEvents(); });
    }

    if (done_with_instructions.status === PsychoJS.Status.STARTED) {
      let theseKeys = done_with_instructions.getKeys({keyList: ['return'], waitRelease: false});
      _done_with_instructions_allKeys = _done_with_instructions_allKeys.concat(theseKeys);
      if (_done_with_instructions_allKeys.length > 0) {
        done_with_instructions.keys = _done_with_instructions_allKeys[_done_with_instructions_allKeys.length - 1].name;  // just the last key pressed
        done_with_instructions.rt = _done_with_instructions_allKeys[_done_with_instructions_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *instruction* updates
    if (t >= 0.0 && instruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction.tStart = t;  // (not accounting for frame time here)
      instruction.frameNStart = frameN;  // exact frame index
      
      instruction.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instrComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instrRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instr'-------
    for (const thisComponent of instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('done_with_instructions.keys', done_with_instructions.keys);
    if (typeof done_with_instructions.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('done_with_instructions.rt', done_with_instructions.rt);
        routineTimer.reset();
        }
    
    done_with_instructions.stop();
    /* if iteration is at len(condimages)-1, finish routine, otherwise increment */
    iteration += 1;
    if (iteration >= conditions[condition].length) {
        instr_loop.finished = true;
    }
    
    // the Routine "instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _instr_learning_key_allKeys;
var instr_learningComponents;
function instr_learningRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instr_learning'-------
    t = 0;
    instr_learningClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    instr_learning_key.keys = undefined;
    instr_learning_key.rt = undefined;
    _instr_learning_key_allKeys = [];
    // keep track of which components have finished
    instr_learningComponents = [];
    instr_learningComponents.push(instr_learning_text);
    instr_learningComponents.push(instr_learning_key);
    
    for (const thisComponent of instr_learningComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function instr_learningRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instr_learning'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = instr_learningClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_learning_text* updates
    if (t >= 0.0 && instr_learning_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_learning_text.tStart = t;  // (not accounting for frame time here)
      instr_learning_text.frameNStart = frameN;  // exact frame index
      
      instr_learning_text.setAutoDraw(true);
    }

    
    // *instr_learning_key* updates
    if (t >= 0.0 && instr_learning_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_learning_key.tStart = t;  // (not accounting for frame time here)
      instr_learning_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instr_learning_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instr_learning_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instr_learning_key.clearEvents(); });
    }

    if (instr_learning_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = instr_learning_key.getKeys({keyList: ['return'], waitRelease: false});
      _instr_learning_key_allKeys = _instr_learning_key_allKeys.concat(theseKeys);
      if (_instr_learning_key_allKeys.length > 0) {
        instr_learning_key.keys = _instr_learning_key_allKeys[_instr_learning_key_allKeys.length - 1].name;  // just the last key pressed
        instr_learning_key.rt = _instr_learning_key_allKeys[_instr_learning_key_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instr_learningComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_learningRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instr_learning'-------
    for (const thisComponent of instr_learningComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instr_learning_key.keys', instr_learning_key.keys);
    if (typeof instr_learning_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instr_learning_key.rt', instr_learning_key.rt);
        routineTimer.reset();
        }
    
    instr_learning_key.stop();
    // the Routine "instr_learning" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var card_genComponents;
function card_genRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'card_gen'-------
    t = 0;
    card_genClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    waiting.push([swa, eng]);
    
    // keep track of which components have finished
    card_genComponents = [];
    
    for (const thisComponent of card_genComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function card_genRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'card_gen'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = card_genClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of card_genComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function card_genRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'card_gen'-------
    for (const thisComponent of card_genComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "card_gen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var i;
var card_to_show;
var initialize_trialComponents;
function initialize_trialRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'initialize_trial'-------
    t = 0;
    initialize_trialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    study = [];
    test = [];
    i = 0;
    card_to_show = "";
    size_at_start = waiting.length;
    
    // keep track of which components have finished
    initialize_trialComponents = [];
    
    for (const thisComponent of initialize_trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function initialize_trialRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'initialize_trial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = initialize_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of initialize_trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function initialize_trialRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'initialize_trial'-------
    for (const thisComponent of initialize_trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "initialize_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var gotValidClick;
var study_size;
var test_size;
var done_size;
var unsorted_size;
var choiceComponents;
function choiceRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'choice'-------
    t = 0;
    choiceClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // setup some python lists for storing info about the choose_pile
    // current position of the mouse:
    choose_pile.x = [];
    choose_pile.y = [];
    choose_pile.leftButton = [];
    choose_pile.midButton = [];
    choose_pile.rightButton = [];
    choose_pile.time = [];
    choose_pile.clicked_name = [];
    gotValidClick = false; // until a click is received
    unsorted_vocab.setText(card_to_show);
    study_size = ("cards: " + study.length.toString());
    test_size = ("cards: " + test.length.toString());
    done_size = ("cards: " + (size_at_start - waiting.length).toString());
    unsorted_size = ("cards: " + (waiting.length - i).toString());
    
    study_size_text.setText(study_size);
    test_size_text.setText(test_size);
    done_size_text.setText(done_size);
    unsorted_size_text.setText(unsorted_size);
    // keep track of which components have finished
    choiceComponents = [];
    choiceComponents.push(choose_pile);
    choiceComponents.push(unsorted_card);
    choiceComponents.push(study_pile);
    choiceComponents.push(test_pile);
    choiceComponents.push(done_pile);
    choiceComponents.push(study_pile_text);
    choiceComponents.push(test_pile_text);
    choiceComponents.push(done_pile_text);
    choiceComponents.push(unsorted_vocab);
    choiceComponents.push(instr_choice);
    choiceComponents.push(study_size_text);
    choiceComponents.push(test_size_text);
    choiceComponents.push(done_size_text);
    choiceComponents.push(unsorted_size_text);
    
    for (const thisComponent of choiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function choiceRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'choice'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = choiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *choose_pile* updates
    if (t >= 0.0 && choose_pile.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choose_pile.tStart = t;  // (not accounting for frame time here)
      choose_pile.frameNStart = frameN;  // exact frame index
      
      choose_pile.status = PsychoJS.Status.STARTED;
      choose_pile.mouseClock.reset();
      prevButtonState = choose_pile.getPressed();  // if button is down already this ISN'T a new click
      }
    if (choose_pile.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = choose_pile.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = choose_pile.getPos();
          choose_pile.x.push(_mouseXYs[0]);
          choose_pile.y.push(_mouseXYs[1]);
          choose_pile.leftButton.push(_mouseButtons[0]);
          choose_pile.midButton.push(_mouseButtons[1]);
          choose_pile.rightButton.push(_mouseButtons[2]);
          choose_pile.time.push(choose_pile.mouseClock.getTime());
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [study_pile,test_pile,done_pile,unsorted_card]) {
            if (obj.contains(choose_pile)) {
              gotValidClick = true;
              choose_pile.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *unsorted_card* updates
    if (t >= 0.0 && unsorted_card.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      unsorted_card.tStart = t;  // (not accounting for frame time here)
      unsorted_card.frameNStart = frameN;  // exact frame index
      
      unsorted_card.setAutoDraw(true);
    }

    
    // *study_pile* updates
    if (t >= 0.0 && study_pile.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      study_pile.tStart = t;  // (not accounting for frame time here)
      study_pile.frameNStart = frameN;  // exact frame index
      
      study_pile.setAutoDraw(true);
    }

    
    // *test_pile* updates
    if (t >= 0.0 && test_pile.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test_pile.tStart = t;  // (not accounting for frame time here)
      test_pile.frameNStart = frameN;  // exact frame index
      
      test_pile.setAutoDraw(true);
    }

    
    // *done_pile* updates
    if (t >= 0.0 && done_pile.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      done_pile.tStart = t;  // (not accounting for frame time here)
      done_pile.frameNStart = frameN;  // exact frame index
      
      done_pile.setAutoDraw(true);
    }

    
    // *study_pile_text* updates
    if (t >= 0.0 && study_pile_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      study_pile_text.tStart = t;  // (not accounting for frame time here)
      study_pile_text.frameNStart = frameN;  // exact frame index
      
      study_pile_text.setAutoDraw(true);
    }

    
    // *test_pile_text* updates
    if (t >= 0.0 && test_pile_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test_pile_text.tStart = t;  // (not accounting for frame time here)
      test_pile_text.frameNStart = frameN;  // exact frame index
      
      test_pile_text.setAutoDraw(true);
    }

    
    // *done_pile_text* updates
    if (t >= 0.0 && done_pile_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      done_pile_text.tStart = t;  // (not accounting for frame time here)
      done_pile_text.frameNStart = frameN;  // exact frame index
      
      done_pile_text.setAutoDraw(true);
    }

    
    // *unsorted_vocab* updates
    if (t >= 0.0 && unsorted_vocab.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      unsorted_vocab.tStart = t;  // (not accounting for frame time here)
      unsorted_vocab.frameNStart = frameN;  // exact frame index
      
      unsorted_vocab.setAutoDraw(true);
    }

    
    // *instr_choice* updates
    if (t >= 0.0 && instr_choice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_choice.tStart = t;  // (not accounting for frame time here)
      instr_choice.frameNStart = frameN;  // exact frame index
      
      instr_choice.setAutoDraw(true);
    }

    
    // *study_size_text* updates
    if (t >= 0.0 && study_size_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      study_size_text.tStart = t;  // (not accounting for frame time here)
      study_size_text.frameNStart = frameN;  // exact frame index
      
      study_size_text.setAutoDraw(true);
    }

    
    // *test_size_text* updates
    if (t >= 0.0 && test_size_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test_size_text.tStart = t;  // (not accounting for frame time here)
      test_size_text.frameNStart = frameN;  // exact frame index
      
      test_size_text.setAutoDraw(true);
    }

    
    // *done_size_text* updates
    if (t >= 0.0 && done_size_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      done_size_text.tStart = t;  // (not accounting for frame time here)
      done_size_text.frameNStart = frameN;  // exact frame index
      
      done_size_text.setAutoDraw(true);
    }

    
    // *unsorted_size_text* updates
    if (t >= 0.0 && unsorted_size_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      unsorted_size_text.tStart = t;  // (not accounting for frame time here)
      unsorted_size_text.frameNStart = frameN;  // exact frame index
      
      unsorted_size_text.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of choiceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function choiceRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'choice'-------
    for (const thisComponent of choiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for thisExp (ExperimentHandler)
    if (choose_pile.x) {  psychoJS.experiment.addData('choose_pile.x', choose_pile.x[0])};
    if (choose_pile.y) {  psychoJS.experiment.addData('choose_pile.y', choose_pile.y[0])};
    if (choose_pile.leftButton) {  psychoJS.experiment.addData('choose_pile.leftButton', choose_pile.leftButton[0])};
    if (choose_pile.midButton) {  psychoJS.experiment.addData('choose_pile.midButton', choose_pile.midButton[0])};
    if (choose_pile.rightButton) {  psychoJS.experiment.addData('choose_pile.rightButton', choose_pile.rightButton[0])};
    if (choose_pile.time) {  psychoJS.experiment.addData('choose_pile.time', choose_pile.time[0])};
    if (choose_pile.clicked_name) {  psychoJS.experiment.addData('choose_pile.clicked_name', choose_pile.clicked_name[0])};
    
    // the Routine "choice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var interpret_choiceComponents;
function interpret_choiceRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'interpret_choice'-------
    t = 0;
    interpret_choiceClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    if (card_to_show === "" && unsorted_card.contains(choose_pile)) {
        //english first!!
        card_to_show = waiting[i][1] + " - " + waiting[i][0];
    } else {
        if (card_to_show !== "") {
            psychoJS.experiment.addData("card_to_show", card_to_show);
            var placed = true;
            if (study_pile.contains(choose_pile)) {
                study.push(waiting[i]);
                i += 1;
            } else {
                if (test_pile.contains(choose_pile)) {
                    test.push(waiting[i]);
                    i += 1;
                } else {
                    if (done_pile.contains(choose_pile)) {
                        waiting.splice(i,1);
                    } else {
                        placed = false;
                    }
                }
            }
            if (placed) {
                if (study.length + test.length === waiting.length) {
                    choices.finished = true;
                } else {
                    card_to_show = "";
                }
            }
        }
    }
    
    // keep track of which components have finished
    interpret_choiceComponents = [];
    
    for (const thisComponent of interpret_choiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function interpret_choiceRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'interpret_choice'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = interpret_choiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of interpret_choiceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function interpret_choiceRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'interpret_choice'-------
    for (const thisComponent of interpret_choiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "interpret_choice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var pick_deckComponents;
function pick_deckRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'pick_deck'-------
    t = 0;
    pick_deckClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    
    
    // setup some python lists for storing info about the mouse_pick
    // current position of the mouse:
    mouse_pick.x = [];
    mouse_pick.y = [];
    mouse_pick.leftButton = [];
    mouse_pick.midButton = [];
    mouse_pick.rightButton = [];
    mouse_pick.time = [];
    mouse_pick.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    pick_deckComponents = [];
    pick_deckComponents.push(study_first);
    pick_deckComponents.push(test_first);
    pick_deckComponents.push(study_first_text);
    pick_deckComponents.push(test_first_text);
    pick_deckComponents.push(mouse_pick);
    pick_deckComponents.push(instr_pick);
    
    for (const thisComponent of pick_deckComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function pick_deckRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'pick_deck'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = pick_deckClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (waiting.length === 0) {
        trials.finished = true;
        continueRoutine = false;
    } else {
        learn_method = "unknown";
        if (study.length === 0) {
            learn_method = "test";
            continueRoutine = false;
        } else {
            if (test.length === 0) {
                learn_method = "study";
                continueRoutine = false;
            }
        }
    }
    
    // *study_first* updates
    if (t >= 0.0 && study_first.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      study_first.tStart = t;  // (not accounting for frame time here)
      study_first.frameNStart = frameN;  // exact frame index
      
      study_first.setAutoDraw(true);
    }

    
    // *test_first* updates
    if (t >= 0.0 && test_first.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test_first.tStart = t;  // (not accounting for frame time here)
      test_first.frameNStart = frameN;  // exact frame index
      
      test_first.setAutoDraw(true);
    }

    
    // *study_first_text* updates
    if (t >= 0.0 && study_first_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      study_first_text.tStart = t;  // (not accounting for frame time here)
      study_first_text.frameNStart = frameN;  // exact frame index
      
      study_first_text.setAutoDraw(true);
    }

    
    // *test_first_text* updates
    if (t >= 0.0 && test_first_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test_first_text.tStart = t;  // (not accounting for frame time here)
      test_first_text.frameNStart = frameN;  // exact frame index
      
      test_first_text.setAutoDraw(true);
    }

    // *mouse_pick* updates
    if (t >= 0.0 && mouse_pick.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_pick.tStart = t;  // (not accounting for frame time here)
      mouse_pick.frameNStart = frameN;  // exact frame index
      
      mouse_pick.status = PsychoJS.Status.STARTED;
      mouse_pick.mouseClock.reset();
      prevButtonState = mouse_pick.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_pick.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_pick.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_pick.getPos();
          mouse_pick.x.push(_mouseXYs[0]);
          mouse_pick.y.push(_mouseXYs[1]);
          mouse_pick.leftButton.push(_mouseButtons[0]);
          mouse_pick.midButton.push(_mouseButtons[1]);
          mouse_pick.rightButton.push(_mouseButtons[2]);
          mouse_pick.time.push(mouse_pick.mouseClock.getTime());
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [study_first,test_first]) {
            if (obj.contains(mouse_pick)) {
              gotValidClick = true;
              mouse_pick.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *instr_pick* updates
    if (t >= 0.0 && instr_pick.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_pick.tStart = t;  // (not accounting for frame time here)
      instr_pick.frameNStart = frameN;  // exact frame index
      
      instr_pick.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of pick_deckComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pick_deckRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'pick_deck'-------
    for (const thisComponent of pick_deckComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for thisExp (ExperimentHandler)
    if (mouse_pick.x) {  psychoJS.experiment.addData('mouse_pick.x', mouse_pick.x[0])};
    if (mouse_pick.y) {  psychoJS.experiment.addData('mouse_pick.y', mouse_pick.y[0])};
    if (mouse_pick.leftButton) {  psychoJS.experiment.addData('mouse_pick.leftButton', mouse_pick.leftButton[0])};
    if (mouse_pick.midButton) {  psychoJS.experiment.addData('mouse_pick.midButton', mouse_pick.midButton[0])};
    if (mouse_pick.rightButton) {  psychoJS.experiment.addData('mouse_pick.rightButton', mouse_pick.rightButton[0])};
    if (mouse_pick.time) {  psychoJS.experiment.addData('mouse_pick.time', mouse_pick.time[0])};
    if (mouse_pick.clicked_name) {  psychoJS.experiment.addData('mouse_pick.clicked_name', mouse_pick.clicked_name[0])};
    
    // the Routine "pick_deck" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var learn_method;
var interpret_pickComponents;
function interpret_pickRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'interpret_pick'-------
    t = 0;
    interpret_pickClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    if (learn_method === "unknown") {
        if (study_first.contains(mouse_pick)) {
            learn_method = "study";
        } else {
            learn_method = "test";
        }
    }
    
    // keep track of which components have finished
    interpret_pickComponents = [];
    
    for (const thisComponent of interpret_pickComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function interpret_pickRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'interpret_pick'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = interpret_pickClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of interpret_pickComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function interpret_pickRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'interpret_pick'-------
    for (const thisComponent of interpret_pickComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "interpret_pick" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var active_cards;
var init_active_cardsComponents;
function init_active_cardsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'init_active_cards'-------
    t = 0;
    init_active_cardsClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    if (learn_method === "study") {
        active_cards = [...Array(study.length).keys()];
    } else {
        active_cards = [...Array(test.length).keys()];
    }
    
    // keep track of which components have finished
    init_active_cardsComponents = [];
    
    for (const thisComponent of init_active_cardsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function init_active_cardsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'init_active_cards'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = init_active_cardsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of init_active_cardsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function init_active_cardsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'init_active_cards'-------
    for (const thisComponent of init_active_cardsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "init_active_cards" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var active_cards_length;
var _key_instr_study_allKeys;
var instr_studyComponents;
function instr_studyRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instr_study'-------
    t = 0;
    instr_studyClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    active_cards_length = active_cards.length;
    key_instr_study.keys = undefined;
    key_instr_study.rt = undefined;
    _key_instr_study_allKeys = [];
    // keep track of which components have finished
    instr_studyComponents = [];
    instr_studyComponents.push(instr_study_text);
    instr_studyComponents.push(key_instr_study);
    
    for (const thisComponent of instr_studyComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function instr_studyRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instr_study'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = instr_studyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (((learn_method !== "study") || (study.length === 0))) {
        continueRoutine = false;
    }
    
    
    // *instr_study_text* updates
    if (t >= 0.0 && instr_study_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_study_text.tStart = t;  // (not accounting for frame time here)
      instr_study_text.frameNStart = frameN;  // exact frame index
      
      instr_study_text.setAutoDraw(true);
    }

    
    // *key_instr_study* updates
    if (t >= 0.0 && key_instr_study.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_instr_study.tStart = t;  // (not accounting for frame time here)
      key_instr_study.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_instr_study.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_instr_study.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_instr_study.clearEvents(); });
    }

    if (key_instr_study.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_instr_study.getKeys({keyList: ['return'], waitRelease: false});
      _key_instr_study_allKeys = _key_instr_study_allKeys.concat(theseKeys);
      if (_key_instr_study_allKeys.length > 0) {
        key_instr_study.keys = _key_instr_study_allKeys[_key_instr_study_allKeys.length - 1].name;  // just the last key pressed
        key_instr_study.rt = _key_instr_study_allKeys[_key_instr_study_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instr_studyComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_studyRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instr_study'-------
    for (const thisComponent of instr_studyComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_instr_study.keys', key_instr_study.keys);
    if (typeof key_instr_study.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_instr_study.rt', key_instr_study.rt);
        routineTimer.reset();
        }
    
    key_instr_study.stop();
    // the Routine "instr_study" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _next_study_allKeys;
var studyingComponents;
function studyingRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'studying'-------
    t = 0;
    studyingClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    if (learn_method === "study" && study.length !== 0) {
        card_index = Math.floor(Math.random()*active_cards.length);
        //english first
        card_to_show = study[active_cards[card_index]][1] + " - " + study[active_cards[card_index]][0];
        psychoJS.experiment.addData("card_to_show", card_to_show);
        active_cards.splice(card_index,1);
    }
    studycard_text.setText(card_to_show);
    next_study.keys = undefined;
    next_study.rt = undefined;
    _next_study_allKeys = [];
    // keep track of which components have finished
    studyingComponents = [];
    studyingComponents.push(studycard);
    studyingComponents.push(studycard_text);
    studyingComponents.push(next_study);
    
    for (const thisComponent of studyingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function studyingRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'studying'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = studyingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (((learn_method !== "study") || (study.length === 0))) {
        study_loop.finished = true;
        continueRoutine = false;
    }
    
    // *studycard* updates
    if (t >= 0.0 && studycard.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      studycard.tStart = t;  // (not accounting for frame time here)
      studycard.frameNStart = frameN;  // exact frame index
      
      studycard.setAutoDraw(true);
    }

    
    // *studycard_text* updates
    if (t >= 0.0 && studycard_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      studycard_text.tStart = t;  // (not accounting for frame time here)
      studycard_text.frameNStart = frameN;  // exact frame index
      
      studycard_text.setAutoDraw(true);
    }

    
    // *next_study* updates
    if (t >= 0.0 && next_study.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next_study.tStart = t;  // (not accounting for frame time here)
      next_study.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { next_study.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { next_study.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { next_study.clearEvents(); });
    }

    if (next_study.status === PsychoJS.Status.STARTED) {
      let theseKeys = next_study.getKeys({keyList: ['return'], waitRelease: false});
      _next_study_allKeys = _next_study_allKeys.concat(theseKeys);
      if (_next_study_allKeys.length > 0) {
        next_study.keys = _next_study_allKeys[_next_study_allKeys.length - 1].name;  // just the last key pressed
        next_study.rt = _next_study_allKeys[_next_study_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of studyingComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function studyingRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'studying'-------
    for (const thisComponent of studyingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('next_study.keys', next_study.keys);
    if (typeof next_study.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('next_study.rt', next_study.rt);
        routineTimer.reset();
        }
    
    next_study.stop();
    // the Routine "studying" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_instr_test_allKeys;
var instr_testComponents;
function instr_testRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instr_test'-------
    t = 0;
    instr_testClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    active_cards_length = active_cards.length;
    key_instr_test.keys = undefined;
    key_instr_test.rt = undefined;
    _key_instr_test_allKeys = [];
    // keep track of which components have finished
    instr_testComponents = [];
    instr_testComponents.push(instr_test_text);
    instr_testComponents.push(key_instr_test);
    
    for (const thisComponent of instr_testComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function instr_testRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instr_test'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = instr_testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (((learn_method !== "test") || (test.length === 0))) {
        continueRoutine = false;
    }
    
    // *instr_test_text* updates
    if (t >= 0.0 && instr_test_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_test_text.tStart = t;  // (not accounting for frame time here)
      instr_test_text.frameNStart = frameN;  // exact frame index
      
      instr_test_text.setAutoDraw(true);
    }

    
    // *key_instr_test* updates
    if (t >= 0.0 && key_instr_test.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_instr_test.tStart = t;  // (not accounting for frame time here)
      key_instr_test.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_instr_test.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_instr_test.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_instr_test.clearEvents(); });
    }

    if (key_instr_test.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_instr_test.getKeys({keyList: ['return'], waitRelease: false});
      _key_instr_test_allKeys = _key_instr_test_allKeys.concat(theseKeys);
      if (_key_instr_test_allKeys.length > 0) {
        key_instr_test.keys = _key_instr_test_allKeys[_key_instr_test_allKeys.length - 1].name;  // just the last key pressed
        key_instr_test.rt = _key_instr_test_allKeys[_key_instr_test_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instr_testComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_testRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instr_test'-------
    for (const thisComponent of instr_testComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_instr_test.keys', key_instr_test.keys);
    if (typeof key_instr_test.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_instr_test.rt', key_instr_test.rt);
        routineTimer.reset();
        }
    
    key_instr_test.stop();
    // the Routine "instr_test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var duration_start;
var testingComponents;
function testingRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'testing'-------
    t = 0;
    testingClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    if (!(learn_method !== "test") || test.length === 0) {
        card_index = Math.floor(Math.random()*active_cards.length);
        card_to_show = test[active_cards[card_index]][1]; //show english
    }
    psychoJS.eventManager.clearEvents("keyboard");
    userinput = "";
    
    testcard_text.setText(card_to_show);
    duration_start = psychoJS.monotonicClock.getTime();
    // keep track of which components have finished
    testingComponents = [];
    testingComponents.push(testcard);
    testingComponents.push(text_box);
    testingComponents.push(testcard_text);
    testingComponents.push(input_text);
    
    for (const thisComponent of testingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var keys;
function testingRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'testing'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = testingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (((learn_method !== "test") || (test.length === 0))) {
        test_loop.finished = true;
        continueRoutine = false;
    }
    keys = psychoJS.eventManager.getKeys();
    if (keys.length > 0) {
        if ((isalpha(keys[0]) && (keys[0].length === 1))) {
            userinput += keys[0].toUpperCase();
        } else {
            if ((keys[0] === "backspace")) {
                userinput = userinput.slice(0, (- 1));
            } else {
                if ((keys[0] === "escape")) {
                    win.close();
                    psychoJS.quit();
                } else {
                    if ((((keys[0] === "return") && ((psychoJS.monotonicClock.getTime() - duration_start) > 0.25)) && (userinput.length > 0))) {
                        continueRoutine = false;
                    }
                }
            }
        }
    }
    
    
    // *testcard* updates
    if (t >= 0.0 && testcard.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      testcard.tStart = t;  // (not accounting for frame time here)
      testcard.frameNStart = frameN;  // exact frame index
      
      testcard.setAutoDraw(true);
    }

    
    // *text_box* updates
    if (t >= 0.0 && text_box.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_box.tStart = t;  // (not accounting for frame time here)
      text_box.frameNStart = frameN;  // exact frame index
      
      text_box.setAutoDraw(true);
    }

    
    // *testcard_text* updates
    if (t >= 0.0 && testcard_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      testcard_text.tStart = t;  // (not accounting for frame time here)
      testcard_text.frameNStart = frameN;  // exact frame index
      
      testcard_text.setAutoDraw(true);
    }

    
    // *input_text* updates
    if (t >= 0.0 && input_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      input_text.tStart = t;  // (not accounting for frame time here)
      input_text.frameNStart = frameN;  // exact frame index
      
      input_text.setAutoDraw(true);
    }

    
    if (input_text.status === PsychoJS.Status.STARTED){ // only update if being drawn
      input_text.setText(userinput);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of testingComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function testingRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'testing'-------
    for (const thisComponent of testingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData("duration", (psychoJS.monotonicClock.getTime() - duration_start));
    
    // the Routine "testing" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var show_answer_promptComponents;
function show_answer_promptRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'show_answer_prompt'-------
    t = 0;
    show_answer_promptClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // setup some python lists for storing info about the yes_or_no
    // current position of the mouse:
    yes_or_no.x = [];
    yes_or_no.y = [];
    yes_or_no.leftButton = [];
    yes_or_no.midButton = [];
    yes_or_no.rightButton = [];
    yes_or_no.time = [];
    yes_or_no.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    show_answer_promptComponents = [];
    show_answer_promptComponents.push(no);
    show_answer_promptComponents.push(yes);
    show_answer_promptComponents.push(would_you_like);
    show_answer_promptComponents.push(yes_or_no);
    show_answer_promptComponents.push(no_text);
    show_answer_promptComponents.push(yes_text);
    
    for (const thisComponent of show_answer_promptComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function show_answer_promptRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'show_answer_prompt'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = show_answer_promptClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (learn_method !== "test" || test.length === 0) {
        continueRoutine = false;
    }
    
    
    // *no* updates
    if (t >= 0.0 && no.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      no.tStart = t;  // (not accounting for frame time here)
      no.frameNStart = frameN;  // exact frame index
      
      no.setAutoDraw(true);
    }

    
    // *yes* updates
    if (t >= 0.0 && yes.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      yes.tStart = t;  // (not accounting for frame time here)
      yes.frameNStart = frameN;  // exact frame index
      
      yes.setAutoDraw(true);
    }

    
    // *would_you_like* updates
    if (t >= 0.0 && would_you_like.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      would_you_like.tStart = t;  // (not accounting for frame time here)
      would_you_like.frameNStart = frameN;  // exact frame index
      
      would_you_like.setAutoDraw(true);
    }

    // *yes_or_no* updates
    if (t >= 0.0 && yes_or_no.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      yes_or_no.tStart = t;  // (not accounting for frame time here)
      yes_or_no.frameNStart = frameN;  // exact frame index
      
      yes_or_no.status = PsychoJS.Status.STARTED;
      yes_or_no.mouseClock.reset();
      prevButtonState = yes_or_no.getPressed();  // if button is down already this ISN'T a new click
      }
    if (yes_or_no.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = yes_or_no.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = yes_or_no.getPos();
          yes_or_no.x.push(_mouseXYs[0]);
          yes_or_no.y.push(_mouseXYs[1]);
          yes_or_no.leftButton.push(_mouseButtons[0]);
          yes_or_no.midButton.push(_mouseButtons[1]);
          yes_or_no.rightButton.push(_mouseButtons[2]);
          yes_or_no.time.push(yes_or_no.mouseClock.getTime());
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [no,yes]) {
            if (obj.contains(yes_or_no)) {
              gotValidClick = true;
              yes_or_no.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *no_text* updates
    if (t >= 0.0 && no_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      no_text.tStart = t;  // (not accounting for frame time here)
      no_text.frameNStart = frameN;  // exact frame index
      
      no_text.setAutoDraw(true);
    }

    
    // *yes_text* updates
    if (t >= 0.0 && yes_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      yes_text.tStart = t;  // (not accounting for frame time here)
      yes_text.frameNStart = frameN;  // exact frame index
      
      yes_text.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of show_answer_promptComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function show_answer_promptRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'show_answer_prompt'-------
    for (const thisComponent of show_answer_promptComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for thisExp (ExperimentHandler)
    if (yes_or_no.x) {  psychoJS.experiment.addData('yes_or_no.x', yes_or_no.x[0])};
    if (yes_or_no.y) {  psychoJS.experiment.addData('yes_or_no.y', yes_or_no.y[0])};
    if (yes_or_no.leftButton) {  psychoJS.experiment.addData('yes_or_no.leftButton', yes_or_no.leftButton[0])};
    if (yes_or_no.midButton) {  psychoJS.experiment.addData('yes_or_no.midButton', yes_or_no.midButton[0])};
    if (yes_or_no.rightButton) {  psychoJS.experiment.addData('yes_or_no.rightButton', yes_or_no.rightButton[0])};
    if (yes_or_no.time) {  psychoJS.experiment.addData('yes_or_no.time', yes_or_no.time[0])};
    if (yes_or_no.clicked_name) {  psychoJS.experiment.addData('yes_or_no.clicked_name', yes_or_no.clicked_name[0])};
    
    // the Routine "show_answer_prompt" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var show_answerComponents;
function show_answerRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'show_answer'-------
    t = 0;
    show_answerClock.reset(); // clock
    frameN = -1;
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    if (!(learn_method !== "test") || test.length === 0) {
        psychoJS.experiment.addData("test_response.stim", card_to_show);
        psychoJS.experiment.addData("test_response.resp", userinput);
        if (userinput === test[active_cards[card_index]][1]) {
            psychoJS.experiment.addData("test_response.eval", "correct");
        } else {
            psychoJS.experiment.addData("test_response.eval", "incorrect");
        }
        card_to_show = test[active_cards[card_index]][1] + " - " + test[active_cards[card_index]][0];
        active_cards.splice(card_index,1);
        if (no.contains(yes_or_no)) {
            continueRoutine = false;
        }
    }
    correct_text.setText(card_to_show);
    user_text.setText(("your answer: " + userinput));
    // keep track of which components have finished
    show_answerComponents = [];
    show_answerComponents.push(correct_text);
    show_answerComponents.push(user_text);
    
    for (const thisComponent of show_answerComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
function show_answerRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'show_answer'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = show_answerClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (((learn_method !== "test") || (test.length === 0))) {
        continueRoutine = false;
    } else if (no.contains(yes_or_no)) {
            continueRoutine = false;
    }
    
    // *correct_text* updates
    if (t >= 0.0 && correct_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      correct_text.tStart = t;  // (not accounting for frame time here)
      correct_text.frameNStart = frameN;  // exact frame index
      
      correct_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (correct_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      correct_text.setAutoDraw(false);
    }
    
    // *user_text* updates
    if (t >= 0.0 && user_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      user_text.tStart = t;  // (not accounting for frame time here)
      user_text.frameNStart = frameN;  // exact frame index
      
      user_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (user_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      user_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of show_answerComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function show_answerRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'show_answer'-------
    for (const thisComponent of show_answerComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var change_methodComponents;
function change_methodRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'change_method'-------
    t = 0;
    change_methodClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    if (learn_method === "study") {
        learn_method = "test";
    } else if (learn_method === "test") {
            learn_method = "study";
    }
    // keep track of which components have finished
    change_methodComponents = [];
    
    for (const thisComponent of change_methodComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function change_methodRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'change_method'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = change_methodClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of change_methodComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function change_methodRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'change_method'-------
    for (const thisComponent of change_methodComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "change_method" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _instr_movie_key_allKeys;
var instr_movieComponents;
function instr_movieRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instr_movie'-------
    t = 0;
    instr_movieClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    instr_movie_key.keys = undefined;
    instr_movie_key.rt = undefined;
    _instr_movie_key_allKeys = [];
    // keep track of which components have finished
    instr_movieComponents = [];
    instr_movieComponents.push(instr_movie_key);
    instr_movieComponents.push(instr_movie_text);
    
    for (const thisComponent of instr_movieComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function instr_movieRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instr_movie'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = instr_movieClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_movie_key* updates
    if (t >= 0.0 && instr_movie_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_movie_key.tStart = t;  // (not accounting for frame time here)
      instr_movie_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instr_movie_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instr_movie_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instr_movie_key.clearEvents(); });
    }

    if (instr_movie_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = instr_movie_key.getKeys({keyList: ['return'], waitRelease: false});
      _instr_movie_key_allKeys = _instr_movie_key_allKeys.concat(theseKeys);
      if (_instr_movie_key_allKeys.length > 0) {
        instr_movie_key.keys = _instr_movie_key_allKeys[_instr_movie_key_allKeys.length - 1].name;  // just the last key pressed
        instr_movie_key.rt = _instr_movie_key_allKeys[_instr_movie_key_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *instr_movie_text* updates
    if (t >= 0.0 && instr_movie_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_movie_text.tStart = t;  // (not accounting for frame time here)
      instr_movie_text.frameNStart = frameN;  // exact frame index
      
      instr_movie_text.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instr_movieComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_movieRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instr_movie'-------
    for (const thisComponent of instr_movieComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instr_movie_key.keys', instr_movie_key.keys);
    if (typeof instr_movie_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instr_movie_key.rt', instr_movie_key.rt);
        routineTimer.reset();
        }
    
    instr_movie_key.stop();
    // the Routine "instr_movie" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var movieComponents;
function movieRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'movie'-------
    t = 0;
    movieClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // keep track of which components have finished
    movieComponents = [];
    movieComponents.push(moviestim);
    
    for (const thisComponent of movieComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function movieRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'movie'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = movieClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *moviestim* updates
    if (t >= 0 && moviestim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      moviestim.tStart = t;  // (not accounting for frame time here)
      moviestim.frameNStart = frameN;  // exact frame index
      
      moviestim.setAutoDraw(true);
      moviestim.play();
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of movieComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function movieRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'movie'-------
    for (const thisComponent of movieComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    moviestim.stop();
    // the Routine "movie" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _return_to_exp_allKeys;
var readyComponents;
function readyRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'ready'-------
    t = 0;
    readyClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    return_to_exp.keys = undefined;
    return_to_exp.rt = undefined;
    _return_to_exp_allKeys = [];
    // keep track of which components have finished
    readyComponents = [];
    readyComponents.push(ready_to_continue);
    readyComponents.push(return_to_exp);
    
    for (const thisComponent of readyComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function readyRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'ready'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = readyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ready_to_continue* updates
    if (t >= 0.0 && ready_to_continue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ready_to_continue.tStart = t;  // (not accounting for frame time here)
      ready_to_continue.frameNStart = frameN;  // exact frame index
      
      ready_to_continue.setAutoDraw(true);
    }

    
    // *return_to_exp* updates
    if (t >= 1 && return_to_exp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      return_to_exp.tStart = t;  // (not accounting for frame time here)
      return_to_exp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { return_to_exp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { return_to_exp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { return_to_exp.clearEvents(); });
    }

    if (return_to_exp.status === PsychoJS.Status.STARTED) {
      let theseKeys = return_to_exp.getKeys({keyList: ['return'], waitRelease: false});
      _return_to_exp_allKeys = _return_to_exp_allKeys.concat(theseKeys);
      if (_return_to_exp_allKeys.length > 0) {
        return_to_exp.keys = _return_to_exp_allKeys[_return_to_exp_allKeys.length - 1].name;  // just the last key pressed
        return_to_exp.rt = _return_to_exp_allKeys[_return_to_exp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of readyComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function readyRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'ready'-------
    for (const thisComponent of readyComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('return_to_exp.keys', return_to_exp.keys);
    if (typeof return_to_exp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('return_to_exp.rt', return_to_exp.rt);
        routineTimer.reset();
        }
    
    return_to_exp.stop();
    // the Routine "ready" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _instr_assess_key_allKeys;
var instr_assessComponents;
function instr_assessRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instr_assess'-------
    t = 0;
    instr_assessClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    instr_assess_key.keys = undefined;
    instr_assess_key.rt = undefined;
    _instr_assess_key_allKeys = [];
    // keep track of which components have finished
    instr_assessComponents = [];
    instr_assessComponents.push(instr_assess_text);
    instr_assessComponents.push(instr_assess_key);
    
    for (const thisComponent of instr_assessComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function instr_assessRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instr_assess'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = instr_assessClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_assess_text* updates
    if (t >= 0.0 && instr_assess_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_assess_text.tStart = t;  // (not accounting for frame time here)
      instr_assess_text.frameNStart = frameN;  // exact frame index
      
      instr_assess_text.setAutoDraw(true);
    }

    
    // *instr_assess_key* updates
    if (t >= 0.0 && instr_assess_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_assess_key.tStart = t;  // (not accounting for frame time here)
      instr_assess_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instr_assess_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instr_assess_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instr_assess_key.clearEvents(); });
    }

    if (instr_assess_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = instr_assess_key.getKeys({keyList: ['return'], waitRelease: false});
      _instr_assess_key_allKeys = _instr_assess_key_allKeys.concat(theseKeys);
      if (_instr_assess_key_allKeys.length > 0) {
        instr_assess_key.keys = _instr_assess_key_allKeys[_instr_assess_key_allKeys.length - 1].name;  // just the last key pressed
        instr_assess_key.rt = _instr_assess_key_allKeys[_instr_assess_key_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instr_assessComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_assessRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instr_assess'-------
    for (const thisComponent of instr_assessComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instr_assess_key.keys', instr_assess_key.keys);
    if (typeof instr_assess_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instr_assess_key.rt', instr_assess_key.rt);
        routineTimer.reset();
        }
    
    instr_assess_key.stop();
    // the Routine "instr_assess" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var assessComponents;
function assessRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'assess'-------
    t = 0;
    assessClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    psychoJS.eventManager.clearEvents("keyboard");
    userinput = "";
    
    assess_card_text.setText(eng);
    duration_start = psychoJS.monotonicClock.getTime();
    
    // keep track of which components have finished
    assessComponents = [];
    assessComponents.push(assess_card);
    assessComponents.push(assess_text_box);
    assessComponents.push(assess_card_text);
    assessComponents.push(assess_input_text);
    
    for (const thisComponent of assessComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function assessRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'assess'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = assessClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    keys = psychoJS.eventManager.getKeys();
    if (keys.length > 0) {
        if ((isalpha(keys[0]) && (keys[0].length === 1))) {
            userinput += keys[0].toUpperCase();
        } else {
            if ((keys[0] === "backspace")) {
                userinput = userinput.slice(0, (- 1));
            } else {
                if ((keys[0] === "escape")) {
                    win.close();
                    psychoJS.quit();
                } else {
                    if ((((keys[0] === "return") && ((psychoJS.monotonicClock.getTime() - duration_start) > 0.25)) && (userinput.length > 0))) {
                        continueRoutine = false;
                    }
                }
            }
        }
    }
    
    
    // *assess_card* updates
    if (t >= 0.0 && assess_card.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      assess_card.tStart = t;  // (not accounting for frame time here)
      assess_card.frameNStart = frameN;  // exact frame index
      
      assess_card.setAutoDraw(true);
    }

    
    // *assess_text_box* updates
    if (t >= 0.0 && assess_text_box.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      assess_text_box.tStart = t;  // (not accounting for frame time here)
      assess_text_box.frameNStart = frameN;  // exact frame index
      
      assess_text_box.setAutoDraw(true);
    }

    
    // *assess_card_text* updates
    if (t >= 0.0 && assess_card_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      assess_card_text.tStart = t;  // (not accounting for frame time here)
      assess_card_text.frameNStart = frameN;  // exact frame index
      
      assess_card_text.setAutoDraw(true);
    }

    
    // *assess_input_text* updates
    if (t >= 0.0 && assess_input_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      assess_input_text.tStart = t;  // (not accounting for frame time here)
      assess_input_text.frameNStart = frameN;  // exact frame index
      
      assess_input_text.setAutoDraw(true);
    }

    
    if (assess_input_text.status === PsychoJS.Status.STARTED){ // only update if being drawn
      assess_input_text.setText(userinput);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of assessComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function assessRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'assess'-------
    for (const thisComponent of assessComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData("test_response.resp", userinput);
    if ((userinput === swa)) {
        psychoJS.experiment.addData("test_response.eval", "correct");
    } else {
        psychoJS.experiment.addData("test_response.eval", "incorrect");
    }
    
    psychoJS.experiment.addData("duration", (psychoJS.monotonicClock.getTime() - duration_start));
    
    // the Routine "assess" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var ans_genComponents;
function ans_genRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'ans_gen'-------
    t = 0;
    ans_genClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    answers.push(ans);
    
    // keep track of which components have finished
    ans_genComponents = [];
    
    for (const thisComponent of ans_genComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function ans_genRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'ans_gen'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = ans_genClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ans_genComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ans_genRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'ans_gen'-------
    for (const thisComponent of ans_genComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "ans_gen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _instr_transfer_key_allKeys;
var instr_transferComponents;
function instr_transferRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instr_transfer'-------
    t = 0;
    instr_transferClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    instr_transfer_key.keys = undefined;
    instr_transfer_key.rt = undefined;
    _instr_transfer_key_allKeys = [];
    // keep track of which components have finished
    instr_transferComponents = [];
    instr_transferComponents.push(instr_transfer_text);
    instr_transferComponents.push(instr_transfer_key);
    
    for (const thisComponent of instr_transferComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function instr_transferRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instr_transfer'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = instr_transferClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_transfer_text* updates
    if (t >= 0.0 && instr_transfer_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_transfer_text.tStart = t;  // (not accounting for frame time here)
      instr_transfer_text.frameNStart = frameN;  // exact frame index
      
      instr_transfer_text.setAutoDraw(true);
    }

    
    // *instr_transfer_key* updates
    if (t >= 0.0 && instr_transfer_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_transfer_key.tStart = t;  // (not accounting for frame time here)
      instr_transfer_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instr_transfer_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instr_transfer_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instr_transfer_key.clearEvents(); });
    }

    if (instr_transfer_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = instr_transfer_key.getKeys({keyList: ['return'], waitRelease: false});
      _instr_transfer_key_allKeys = _instr_transfer_key_allKeys.concat(theseKeys);
      if (_instr_transfer_key_allKeys.length > 0) {
        instr_transfer_key.keys = _instr_transfer_key_allKeys[_instr_transfer_key_allKeys.length - 1].name;  // just the last key pressed
        instr_transfer_key.rt = _instr_transfer_key_allKeys[_instr_transfer_key_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instr_transferComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_transferRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instr_transfer'-------
    for (const thisComponent of instr_transferComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instr_transfer_key.keys', instr_transfer_key.keys);
    if (typeof instr_transfer_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instr_transfer_key.rt', instr_transfer_key.rt);
        routineTimer.reset();
        }
    
    instr_transfer_key.stop();
    // the Routine "instr_transfer" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var correct;
var transferComponents;
function transferRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'transfer'-------
    t = 0;
    transferClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    correct = parseInt(Math.random()*3);
    function getOther(taken) {
        var possible;
        while (true) {
            possible = answers[parseInt(Math.random()*answers.length)];
            for (var answer_index = 0; answer_index<taken.length; answer_index++) {
                var answer = taken[answer_index];
                if ((possible === answer)) {
                    possible = "";
                }
            }
            if (possible !== "") {
                return possible;
            }
        }
    }
    if (correct === 0) {
        a_text.setText(ans);
        b_text.setText(getOther([a_text.text]));
        c_text.setText(getOther([a_text.text, b_text.text]));
    } else {
        if (correct === 1) {
            b_text.setText(ans);
            a_text.setText(getOther([b_text.text]));
            c_text.setText(getOther([b_text.text, a_text.text]));
        } else {
            if (correct === 2) {
                c_text.setText(ans);
                a_text.setText(getOther([c_text.text]));
                b_text.setText(getOther([c_text.text, a_text.text]));
            }
        }
    }
    
    sentence.setText(sen);
    // setup some python lists for storing info about the select_word
    // current position of the mouse:
    select_word.x = [];
    select_word.y = [];
    select_word.leftButton = [];
    select_word.midButton = [];
    select_word.rightButton = [];
    select_word.time = [];
    select_word.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    transferComponents = [];
    transferComponents.push(a);
    transferComponents.push(b);
    transferComponents.push(c);
    transferComponents.push(a_text);
    transferComponents.push(b_text);
    transferComponents.push(c_text);
    transferComponents.push(sentence);
    transferComponents.push(transfer_text);
    transferComponents.push(select_word);
    
    for (const thisComponent of transferComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function transferRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'transfer'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = transferClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *a* updates
    if (t >= 0.0 && a.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      a.tStart = t;  // (not accounting for frame time here)
      a.frameNStart = frameN;  // exact frame index
      
      a.setAutoDraw(true);
    }

    
    // *b* updates
    if (t >= 0.0 && b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      b.tStart = t;  // (not accounting for frame time here)
      b.frameNStart = frameN;  // exact frame index
      
      b.setAutoDraw(true);
    }

    
    // *c* updates
    if (t >= 0.0 && c.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      c.tStart = t;  // (not accounting for frame time here)
      c.frameNStart = frameN;  // exact frame index
      
      c.setAutoDraw(true);
    }

    
    // *a_text* updates
    if (t >= 0.0 && a_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      a_text.tStart = t;  // (not accounting for frame time here)
      a_text.frameNStart = frameN;  // exact frame index
      
      a_text.setAutoDraw(true);
    }

    
    // *b_text* updates
    if (t >= 0.0 && b_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      b_text.tStart = t;  // (not accounting for frame time here)
      b_text.frameNStart = frameN;  // exact frame index
      
      b_text.setAutoDraw(true);
    }

    
    // *c_text* updates
    if (t >= 0.0 && c_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      c_text.tStart = t;  // (not accounting for frame time here)
      c_text.frameNStart = frameN;  // exact frame index
      
      c_text.setAutoDraw(true);
    }

    
    // *sentence* updates
    if (t >= 0.0 && sentence.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sentence.tStart = t;  // (not accounting for frame time here)
      sentence.frameNStart = frameN;  // exact frame index
      
      sentence.setAutoDraw(true);
    }

    
    // *transfer_text* updates
    if (t >= 0.0 && transfer_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      transfer_text.tStart = t;  // (not accounting for frame time here)
      transfer_text.frameNStart = frameN;  // exact frame index
      
      transfer_text.setAutoDraw(true);
    }

    // *select_word* updates
    if (t >= 0.0 && select_word.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      select_word.tStart = t;  // (not accounting for frame time here)
      select_word.frameNStart = frameN;  // exact frame index
      
      select_word.status = PsychoJS.Status.STARTED;
      select_word.mouseClock.reset();
      prevButtonState = select_word.getPressed();  // if button is down already this ISN'T a new click
      }
    if (select_word.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = select_word.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = select_word.getPos();
          select_word.x.push(_mouseXYs[0]);
          select_word.y.push(_mouseXYs[1]);
          select_word.leftButton.push(_mouseButtons[0]);
          select_word.midButton.push(_mouseButtons[1]);
          select_word.rightButton.push(_mouseButtons[2]);
          select_word.time.push(select_word.mouseClock.getTime());
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [a,b,c]) {
            if (obj.contains(select_word)) {
              gotValidClick = true;
              select_word.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of transferComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var picked;
function transferRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'transfer'-------
    for (const thisComponent of transferComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if (a.contains(select_word)) {
        picked = a_text;
    } else {
        if (b.contains(select_word)) {
            picked = b_text;
        } else {
            picked = c_text;
        }
    }
    psychoJS.experiment.addData("transfer_response.resp", picked.text);
    if (((((correct === 0) && (picked === a_text)) || ((correct === 1) && (picked === b_text))) || ((correct === 2) && (picked === c_text)))) {
        psychoJS.experiment.addData("transfer_response.eval", "correct");
    } else {
        psychoJS.experiment.addData("transfer_response.eval", "incorrect");
    }
    
    // store data for thisExp (ExperimentHandler)
    if (select_word.x) {  psychoJS.experiment.addData('select_word.x', select_word.x[0])};
    if (select_word.y) {  psychoJS.experiment.addData('select_word.y', select_word.y[0])};
    if (select_word.leftButton) {  psychoJS.experiment.addData('select_word.leftButton', select_word.leftButton[0])};
    if (select_word.midButton) {  psychoJS.experiment.addData('select_word.midButton', select_word.midButton[0])};
    if (select_word.rightButton) {  psychoJS.experiment.addData('select_word.rightButton', select_word.rightButton[0])};
    if (select_word.time) {  psychoJS.experiment.addData('select_word.time', select_word.time[0])};
    if (select_word.clicked_name) {  psychoJS.experiment.addData('select_word.clicked_name', select_word.clicked_name[0])};
    
    // the Routine "transfer" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _end_experiment_allKeys;
var finishComponents;
function finishRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'finish'-------
    t = 0;
    finishClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    end_experiment.keys = undefined;
    end_experiment.rt = undefined;
    _end_experiment_allKeys = [];
    // keep track of which components have finished
    finishComponents = [];
    finishComponents.push(finish_text);
    finishComponents.push(end_experiment);
    
    for (const thisComponent of finishComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function finishRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'finish'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = finishClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *finish_text* updates
    if (t >= 0.0 && finish_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      finish_text.tStart = t;  // (not accounting for frame time here)
      finish_text.frameNStart = frameN;  // exact frame index
      
      finish_text.setAutoDraw(true);
    }

    
    // *end_experiment* updates
    if (t >= 0 && end_experiment.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_experiment.tStart = t;  // (not accounting for frame time here)
      end_experiment.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_experiment.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_experiment.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_experiment.clearEvents(); });
    }

    if (end_experiment.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_experiment.getKeys({keyList: ['return', 'enter'], waitRelease: false});
      _end_experiment_allKeys = _end_experiment_allKeys.concat(theseKeys);
      if (_end_experiment_allKeys.length > 0) {
        end_experiment.keys = _end_experiment_allKeys[_end_experiment_allKeys.length - 1].name;  // just the last key pressed
        end_experiment.rt = _end_experiment_allKeys[_end_experiment_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of finishComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function finishRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'finish'-------
    for (const thisComponent of finishComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('end_experiment.keys', end_experiment.keys);
    if (typeof end_experiment.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('end_experiment.rt', end_experiment.rt);
        routineTimer.reset();
        }
    
    end_experiment.stop();
    // the Routine "finish" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
