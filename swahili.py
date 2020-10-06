#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2020.2.2),
    on August 11, 2020, at 21:29
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2020.2.2'
expName = 'swahili'  # from the Builder filename that created this script
expInfo = {'participant': 'name', 'condition': '1', 'session': '001'}
dlg = gui.DlgFromDict(dictionary=expInfo, sort_keys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='D:\\Code\\psycho\\baste\\swahili.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run before the window creation

# Setup the Window
win = visual.Window(
    size=[2560, 1440], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='norm')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "Instr"
InstrClock = core.Clock()
from datetime import timedelta
from datetime import datetime
# Set experiment start values for variable component learn_method
learn_method = "study"
learn_methodContainer = []
# Set experiment start values for variable component card_to_show
card_to_show = "Card not found"
card_to_showContainer = []
# Set experiment start values for variable component active_cards
active_cards = []
active_cardsContainer = []
# Set experiment start values for variable component duration_start
duration_start = ''
duration_startContainer = []
# Set experiment start values for variable component waiting
waiting = ''
waitingContainer = []
# Set experiment start values for variable component study
study = ''
studyContainer = []
# Set experiment start values for variable component test
test = ''
testContainer = []
# Set experiment start values for variable component userinput
userinput = ''
userinputContainer = []
# Set experiment start values for variable component card_index
card_index = ''
card_indexContainer = []
# Set experiment start values for variable component size_at_start
size_at_start = ''
size_at_startContainer = []
# Set experiment start values for variable component answers
answers = ''
answersContainer = []
# Set experiment start values for variable component instr_num
instr_num = ''
instr_numContainer = []
# Set experiment start values for variable component conditions
conditions = ''
conditionsContainer = []
# Set experiment start values for variable component image_name
image_name = ''
image_nameContainer = []
# Set experiment start values for variable component active_cards_length
active_cards_length = ''
active_cards_lengthContainer = []
# Set experiment start values for variable component isalpha
isalpha = ''
isalphaContainer = []
done_with_instructions = keyboard.Keyboard()
"""each line corresponds to a condition,
each string in the parentheses should be a filename
present in html/resources"""
conditions = [
    ("cond1.jpg"),
    ("cond2a.jpg","cond2b.jpg"),
    ("cond3.jpg"),
    ("cond4a.jpg","cond4b.jpg")]
instruction = visual.ImageStim(
    win=win,
    name='instruction', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=1,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-21.0)

# Initialize components for Routine "card_gen"
card_genClock = core.Clock()

# Initialize components for Routine "initialize_trial"
initialize_trialClock = core.Clock()

# Initialize components for Routine "choice"
choiceClock = core.Clock()
choose_pile = event.Mouse(win=win)
x, y = [None, None]
choose_pile.mouseClock = core.Clock()
unsorted_card = visual.Rect(
    win=win, name='unsorted_card',
    width=(0.6, 0.35)[0], height=(0.6, 0.35)[1],
    ori=0, pos=(-0.4, 0),
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
study_pile = visual.Rect(
    win=win, name='study_pile',
    width=(0.33, 0.2)[0], height=(0.33, 0.2)[1],
    ori=0, pos=(0.5, 0.3),
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-2.0, interpolate=True)
test_pile = visual.Rect(
    win=win, name='test_pile',
    width=(0.33, 0.2)[0], height=(0.33, 0.2)[1],
    ori=0, pos=(0.5, 0),
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-3.0, interpolate=True)
done_pile = visual.Rect(
    win=win, name='done_pile',
    width=(0.33, 0.2)[0], height=(0.33, 0.2)[1],
    ori=0, pos=(0.5, -0.3),
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-4.0, interpolate=True)
study_pile_text = visual.TextStim(win=win, name='study_pile_text',
    text='Study',
    font='Arial',
    pos=(0.5, 0.3), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-5.0);
test_pile_text = visual.TextStim(win=win, name='test_pile_text',
    text='Test',
    font='Arial',
    pos=(0.5, 0), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-6.0);
done_pile_text = visual.TextStim(win=win, name='done_pile_text',
    text='Done',
    font='Arial',
    pos=(0.5, -0.3), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-7.0);
unsorted_vocab = visual.TextStim(win=win, name='unsorted_vocab',
    text='default text',
    font='Arial',
    pos=(-0.4, 0), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-8.0);
instr_choice = visual.TextStim(win=win, name='instr_choice',
    text='Click on the card on the left to see a word pair. Then click on the card to the right to choose what to do with that word pair.',
    font='Arial',
    pos=(-.2, .4), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-9.0);
# Set experiment start values for variable component study_size
study_size = ''
study_sizeContainer = []
# Set experiment start values for variable component test_size
test_size = ''
test_sizeContainer = []
# Set experiment start values for variable component done_size
done_size = ''
done_sizeContainer = []
# Set experiment start values for variable component unsorted_size
unsorted_size = ''
unsorted_sizeContainer = []
study_size_text = visual.TextStim(win=win, name='study_size_text',
    text='default text',
    font='Arial',
    pos=[0.5,0.15], height=0.15, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-15.0);
test_size_text = visual.TextStim(win=win, name='test_size_text',
    text='default text',
    font='Arial',
    pos=(0.5, -0.12), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-16.0);
done_size_text = visual.TextStim(win=win, name='done_size_text',
    text='default text',
    font='Arial',
    pos=(0.5, -0.42), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-17.0);
unsorted_size_text = visual.TextStim(win=win, name='unsorted_size_text',
    text='default text',
    font='Arial',
    pos=(-0.4, -0.2), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-18.0);

# Initialize components for Routine "interpret_choice"
interpret_choiceClock = core.Clock()

# Initialize components for Routine "pick_deck"
pick_deckClock = core.Clock()
study_first = visual.Rect(
    win=win, name='study_first',
    width=(0.5, 0.5)[0], height=(0.5, 0.5)[1],
    ori=0, pos=(-0.5, 0),
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
test_first = visual.Rect(
    win=win, name='test_first',
    width=(0.5, 0.5)[0], height=(0.5, 0.5)[1],
    ori=0, pos=(0.5, 0),
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-2.0, interpolate=True)
study_first_text = visual.TextStim(win=win, name='study_first_text',
    text='Study First',
    font='Arial',
    pos=(-0.5, 0), height=0.1, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
test_first_text = visual.TextStim(win=win, name='test_first_text',
    text='Test First',
    font='Arial',
    pos=(0.5, 0), height=0.1, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-4.0);
mouse_pick = event.Mouse(win=win)
x, y = [None, None]
mouse_pick.mouseClock = core.Clock()
instr_pick = visual.TextStim(win=win, name='instr_pick',
    text='Which would you like to do first?',
    font='Arial',
    pos=(0, 0.4), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-6.0);

# Initialize components for Routine "interpret_pick"
interpret_pickClock = core.Clock()

# Initialize components for Routine "init_active_cards"
init_active_cardsClock = core.Clock()

# Initialize components for Routine "instr_study"
instr_studyClock = core.Clock()
instr_study_text = visual.TextStim(win=win, name='instr_study_text',
    text='For the study trials, you will see the Swahili-English translations one at a time. When you are ready to move on to the next trial, press "enter".',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
key_instr_study = keyboard.Keyboard()

# Initialize components for Routine "studying"
studyingClock = core.Clock()
studycard = visual.Rect(
    win=win, name='studycard',
    width=(0.7, 0.42)[0], height=(0.7, 0.42)[1],
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
studycard_text = visual.TextStim(win=win, name='studycard_text',
    text='default text',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
next_study = keyboard.Keyboard()
study_instr = visual.TextStim(win=win, name='study_instr',
    text=None,
    font='Arial',
    pos=(0, 0.3), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-4.0);

# Initialize components for Routine "instr_test"
instr_testClock = core.Clock()
instr_test_text = visual.TextStim(win=win, name='instr_test_text',
    text='For the test trials, please type in the English translation for the Swahili word. Select "enter" to move on to the next trial.',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
key_instr_test = keyboard.Keyboard()

# Initialize components for Routine "testing"
testingClock = core.Clock()
testcard = visual.Rect(
    win=win, name='testcard',
    width=(0.7, 0.42)[0], height=(0.7, 0.42)[1],
    ori=0, pos=(0, 0.2),
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-2.0, interpolate=True)
text_box = visual.Rect(
    win=win, name='text_box',
    width=(0.7, 0.1)[0], height=(0.7, 0.1)[1],
    ori=0, pos=(0, -0.3),
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-3.0, interpolate=True)
testcard_text = visual.TextStim(win=win, name='testcard_text',
    text='default text',
    font='Arial',
    pos=(0, 0.2), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-4.0);
input_text = visual.TextStim(win=win, name='input_text',
    text='default text',
    font='Arial',
    pos=(0, -0.3), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-5.0);

# Initialize components for Routine "show_answer_prompt"
show_answer_promptClock = core.Clock()
no = visual.Rect(
    win=win, name='no',
    width=(0.5, 0.5)[0], height=(0.5, 0.5)[1],
    ori=0, pos=(-0.5, 0),
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
yes = visual.Rect(
    win=win, name='yes',
    width=(0.5, 0.5)[0], height=(0.5, 0.5)[1],
    ori=0, pos=(0.5, 0),
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-2.0, interpolate=True)
would_you_like = visual.TextStim(win=win, name='would_you_like',
    text='Would you like to see the correct answer?',
    font='Arial',
    pos=(0, 0.4), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
yes_or_no = event.Mouse(win=win)
x, y = [None, None]
yes_or_no.mouseClock = core.Clock()
no_text = visual.TextStim(win=win, name='no_text',
    text='No',
    font='Arial',
    pos=(-0.5, 0), height=0.1, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-5.0);
yes_text = visual.TextStim(win=win, name='yes_text',
    text='Yes',
    font='Arial',
    pos=(0.5, 0), height=0.1, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-6.0);

# Initialize components for Routine "show_answer"
show_answerClock = core.Clock()
correct_text = visual.TextStim(win=win, name='correct_text',
    text='default text',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
user_text = visual.TextStim(win=win, name='user_text',
    text='default text',
    font='Arial',
    pos=(0, 0.3), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);

# Initialize components for Routine "change_method"
change_methodClock = core.Clock()

# Initialize components for Routine "filler_instr"
filler_instrClock = core.Clock()
key_filler = keyboard.Keyboard()
filler_text = visual.TextStim(win=win, name='filler_text',
    text='Please select "enter" and then see the experimenter for the next task.',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "timer"
timerClock = core.Clock()
# Set experiment start values for variable component timer_text
timer_text = ''
timer_textContainer = []
# Set experiment start values for variable component timer_length
timer_length = 10
timer_lengthContainer = []
countdown = visual.TextStim(win=win, name='countdown',
    text='default text',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);

# Initialize components for Routine "ready"
readyClock = core.Clock()
ready_to_continue = visual.TextStim(win=win, name='ready_to_continue',
    text='Participant ready to continue!',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color=[0,1,0], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
return_to_exp = keyboard.Keyboard()
beep = sound.Sound('A', secs=0.5, stereo=True, hamming=True,
    name='beep')
beep.setVolume(1)

# Initialize components for Routine "instr_assess"
instr_assessClock = core.Clock()
instr_assess_text = visual.TextStim(win=win, name='instr_assess_text',
    text='Please type in the English translation for the Swahili word in the space below. Select "enter" to move on to the next trial.',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
instr_assess_key = keyboard.Keyboard()

# Initialize components for Routine "assess"
assessClock = core.Clock()
assess_card = visual.Rect(
    win=win, name='assess_card',
    width=(0.7, 0.42)[0], height=(0.7, 0.42)[1],
    ori=0, pos=(0, 0.2),
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-2.0, interpolate=True)
assess_text_box = visual.Rect(
    win=win, name='assess_text_box',
    width=(0.7, 0.1)[0], height=(0.7, 0.1)[1],
    ori=0, pos=(0, -0.3),
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-3.0, interpolate=True)
assess_card_text = visual.TextStim(win=win, name='assess_card_text',
    text='default text',
    font='Arial',
    pos=(0, 0.2), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-4.0);
assess_input_text = visual.TextStim(win=win, name='assess_input_text',
    text='default text',
    font='Arial',
    pos=(0, -0.3), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-5.0);

# Initialize components for Routine "ans_gen"
ans_genClock = core.Clock()

# Initialize components for Routine "inst_transfer"
inst_transferClock = core.Clock()
instr_transfer_text = visual.TextStim(win=win, name='instr_transfer_text',
    text='In the next part of the test, you will choose the Swahili word that completes the English sentence.',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
instr_transfer_key = keyboard.Keyboard()

# Initialize components for Routine "transfer"
transferClock = core.Clock()
# Set experiment start values for variable component picked
picked = ''
pickedContainer = []
# Set experiment start values for variable component correct
correct = ''
correctContainer = []
a = visual.Rect(
    win=win, name='a',
    width=(0.4, 0.2)[0], height=(0.4, 0.2)[1],
    ori=0, pos=(-0.5, -0.3),
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-4.0, interpolate=True)
b = visual.Rect(
    win=win, name='b',
    width=(0.4, 0.2)[0], height=(0.4, 0.2)[1],
    ori=0, pos=(0, -0.3),
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-5.0, interpolate=True)
c = visual.Rect(
    win=win, name='c',
    width=(0.4, 0.2)[0], height=(0.4, 0.2)[1],
    ori=0, pos=(0.5, -0.3),
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-6.0, interpolate=True)
a_text = visual.TextStim(win=win, name='a_text',
    text='atext',
    font='Arial',
    pos=(-0.5, -0.3), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-7.0);
b_text = visual.TextStim(win=win, name='b_text',
    text='btext',
    font='Arial',
    pos=(0, -0.3), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-8.0);
c_text = visual.TextStim(win=win, name='c_text',
    text='btext',
    font='Arial',
    pos=(0.5, -0.3), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-9.0);
sentence = visual.TextStim(win=win, name='sentence',
    text='default text',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-10.0);
instr_transfer = visual.TextStim(win=win, name='instr_transfer',
    text='Choose the Swahili word that would complete this English sentence.',
    font='Arial',
    pos=(0, 0.3), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-11.0);
select_word = event.Mouse(win=win)
x, y = [None, None]
select_word.mouseClock = core.Clock()

# Initialize components for Routine "finish"
finishClock = core.Clock()
finish_text = visual.TextStim(win=win, name='finish_text',
    text='Thank you for participating! Please see experimenter.',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# set up handler to look after randomisation of conditions etc
instr_loop = data.TrialHandler(nReps=1000, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='instr_loop')
thisExp.addLoop(instr_loop)  # add the loop to the experiment
thisInstr_loop = instr_loop.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisInstr_loop.rgb)
if thisInstr_loop != None:
    for paramName in thisInstr_loop:
        exec('{} = thisInstr_loop[paramName]'.format(paramName))

for thisInstr_loop in instr_loop:
    currentLoop = instr_loop
    # abbreviate parameter names if possible (e.g. rgb = thisInstr_loop.rgb)
    if thisInstr_loop != None:
        for paramName in thisInstr_loop:
            exec('{} = thisInstr_loop[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "Instr"-------
    continueRoutine = True
    # update component parameters for each repeat
    duration_start = "this parameter doesn't actually work"  # Set routine start values for duration_start
    done_with_instructions.keys = []
    done_with_instructions.rt = []
    _done_with_instructions_allKeys = []
    image_name = conditions[int(expInfo['condition'])-1][instr_num]
    
    instruction.setImage(image_name)
    # keep track of which components have finished
    InstrComponents = [done_with_instructions, instruction]
    for thisComponent in InstrComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    InstrClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "Instr"-------
    while continueRoutine:
        # get current time
        t = InstrClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=InstrClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *done_with_instructions* updates
        waitOnFlip = False
        if done_with_instructions.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            done_with_instructions.frameNStart = frameN  # exact frame index
            done_with_instructions.tStart = t  # local t and not account for scr refresh
            done_with_instructions.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(done_with_instructions, 'tStartRefresh')  # time at next scr refresh
            done_with_instructions.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(done_with_instructions.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(done_with_instructions.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if done_with_instructions.status == STARTED and not waitOnFlip:
            theseKeys = done_with_instructions.getKeys(keyList=['return'], waitRelease=False)
            _done_with_instructions_allKeys.extend(theseKeys)
            if len(_done_with_instructions_allKeys):
                done_with_instructions.keys = _done_with_instructions_allKeys[-1].name  # just the last key pressed
                done_with_instructions.rt = _done_with_instructions_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # *instruction* updates
        if instruction.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instruction.frameNStart = frameN  # exact frame index
            instruction.tStart = t  # local t and not account for scr refresh
            instruction.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instruction, 'tStartRefresh')  # time at next scr refresh
            instruction.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in InstrComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Instr"-------
    for thisComponent in InstrComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if done_with_instructions.keys in ['', [], None]:  # No response was made
        done_with_instructions.keys = None
    instr_loop.addData('done_with_instructions.keys',done_with_instructions.keys)
    if done_with_instructions.keys != None:  # we had a response
        instr_loop.addData('done_with_instructions.rt', done_with_instructions.rt)
    instr_loop.addData('done_with_instructions.started', done_with_instructions.tStartRefresh)
    instr_loop.addData('done_with_instructions.stopped', done_with_instructions.tStopRefresh)
    """if iteration is at len(condimages)-1, finish routine, otherwise increment"""
    iteration += 1
    if iteration >= len(conditions[expInfo['condition']-1]):
        instr_loop.finished=True
    instr_loop.addData('instruction.started', instruction.tStartRefresh)
    instr_loop.addData('instruction.stopped', instruction.tStopRefresh)
    # the Routine "Instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1000 repeats of 'instr_loop'


# set up handler to look after randomisation of conditions etc
card_gen_loop = data.TrialHandler(nReps=1, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('cards.xlsx'),
    seed=None, name='card_gen_loop')
thisExp.addLoop(card_gen_loop)  # add the loop to the experiment
thisCard_gen_loop = card_gen_loop.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisCard_gen_loop.rgb)
if thisCard_gen_loop != None:
    for paramName in thisCard_gen_loop:
        exec('{} = thisCard_gen_loop[paramName]'.format(paramName))

for thisCard_gen_loop in card_gen_loop:
    currentLoop = card_gen_loop
    # abbreviate parameter names if possible (e.g. rgb = thisCard_gen_loop.rgb)
    if thisCard_gen_loop != None:
        for paramName in thisCard_gen_loop:
            exec('{} = thisCard_gen_loop[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "card_gen"-------
    continueRoutine = True
    # update component parameters for each repeat
    waiting.append([swa,eng])
    # keep track of which components have finished
    card_genComponents = []
    for thisComponent in card_genComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    card_genClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "card_gen"-------
    while continueRoutine:
        # get current time
        t = card_genClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=card_genClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in card_genComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "card_gen"-------
    for thisComponent in card_genComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "card_gen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
# completed 1 repeats of 'card_gen_loop'


# set up handler to look after randomisation of conditions etc
trials = data.TrialHandler(nReps=1000, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='trials')
thisExp.addLoop(trials)  # add the loop to the experiment
thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
if thisTrial != None:
    for paramName in thisTrial:
        exec('{} = thisTrial[paramName]'.format(paramName))

for thisTrial in trials:
    currentLoop = trials
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "initialize_trial"-------
    continueRoutine = True
    # update component parameters for each repeat
    study = []
    test = []
    i=0
    card_to_show=""
    size_at_start=len(waiting)
    # keep track of which components have finished
    initialize_trialComponents = []
    for thisComponent in initialize_trialComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    initialize_trialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "initialize_trial"-------
    while continueRoutine:
        # get current time
        t = initialize_trialClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=initialize_trialClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in initialize_trialComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "initialize_trial"-------
    for thisComponent in initialize_trialComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "initialize_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    choices = data.TrialHandler(nReps=1000, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='choices')
    thisExp.addLoop(choices)  # add the loop to the experiment
    thisChoice = choices.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisChoice.rgb)
    if thisChoice != None:
        for paramName in thisChoice:
            exec('{} = thisChoice[paramName]'.format(paramName))
    
    for thisChoice in choices:
        currentLoop = choices
        # abbreviate parameter names if possible (e.g. rgb = thisChoice.rgb)
        if thisChoice != None:
            for paramName in thisChoice:
                exec('{} = thisChoice[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "choice"-------
        continueRoutine = True
        # update component parameters for each repeat
        # setup some python lists for storing info about the choose_pile
        choose_pile.x = []
        choose_pile.y = []
        choose_pile.leftButton = []
        choose_pile.midButton = []
        choose_pile.rightButton = []
        choose_pile.time = []
        choose_pile.clicked_name = []
        gotValidClick = False  # until a click is received
        unsorted_vocab.setText(card_to_show)
        study_size = 1  # Set routine start values for study_size
        test_size = 1  # Set routine start values for test_size
        done_size = 1  # Set routine start values for done_size
        unsorted_size = 1  # Set routine start values for unsorted_size
        study_size=("cards: "+str(len(study)))
        test_size=("cards: "+str(len(test)))
        done_size=("cards: "+str(size_at_start-len(waiting)))
        unsorted_size=("cards: "+str(len(waiting)-i))
        study_size_text.setText(study_size)
        test_size_text.setText(test_size)
        done_size_text.setText(done_size)
        unsorted_size_text.setText(unsorted_size)
        # keep track of which components have finished
        choiceComponents = [choose_pile, unsorted_card, study_pile, test_pile, done_pile, study_pile_text, test_pile_text, done_pile_text, unsorted_vocab, instr_choice, study_size_text, test_size_text, done_size_text, unsorted_size_text]
        for thisComponent in choiceComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        choiceClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "choice"-------
        while continueRoutine:
            # get current time
            t = choiceClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=choiceClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            # *choose_pile* updates
            if choose_pile.status == NOT_STARTED and t >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                choose_pile.frameNStart = frameN  # exact frame index
                choose_pile.tStart = t  # local t and not account for scr refresh
                choose_pile.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(choose_pile, 'tStartRefresh')  # time at next scr refresh
                choose_pile.status = STARTED
                choose_pile.mouseClock.reset()
                prevButtonState = choose_pile.getPressed()  # if button is down already this ISN'T a new click
            if choose_pile.status == STARTED:  # only update if started and not finished!
                buttons = choose_pile.getPressed()
                if buttons != prevButtonState:  # button state changed?
                    prevButtonState = buttons
                    if sum(buttons) > 0:  # state changed to a new click
                        # check if the mouse was inside our 'clickable' objects
                        gotValidClick = False
                        for obj in [study_pile,test_pile,done_pile,unsorted_card]:
                            if obj.contains(choose_pile):
                                gotValidClick = True
                                choose_pile.clicked_name.append(obj.name)
                        x, y = choose_pile.getPos()
                        choose_pile.x.append(x)
                        choose_pile.y.append(y)
                        buttons = choose_pile.getPressed()
                        choose_pile.leftButton.append(buttons[0])
                        choose_pile.midButton.append(buttons[1])
                        choose_pile.rightButton.append(buttons[2])
                        choose_pile.time.append(choose_pile.mouseClock.getTime())
                        if gotValidClick:  # abort routine on response
                            continueRoutine = False
            
            # *unsorted_card* updates
            if unsorted_card.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                unsorted_card.frameNStart = frameN  # exact frame index
                unsorted_card.tStart = t  # local t and not account for scr refresh
                unsorted_card.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(unsorted_card, 'tStartRefresh')  # time at next scr refresh
                unsorted_card.setAutoDraw(True)
            
            # *study_pile* updates
            if study_pile.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                study_pile.frameNStart = frameN  # exact frame index
                study_pile.tStart = t  # local t and not account for scr refresh
                study_pile.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(study_pile, 'tStartRefresh')  # time at next scr refresh
                study_pile.setAutoDraw(True)
            
            # *test_pile* updates
            if test_pile.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                test_pile.frameNStart = frameN  # exact frame index
                test_pile.tStart = t  # local t and not account for scr refresh
                test_pile.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(test_pile, 'tStartRefresh')  # time at next scr refresh
                test_pile.setAutoDraw(True)
            
            # *done_pile* updates
            if done_pile.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                done_pile.frameNStart = frameN  # exact frame index
                done_pile.tStart = t  # local t and not account for scr refresh
                done_pile.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(done_pile, 'tStartRefresh')  # time at next scr refresh
                done_pile.setAutoDraw(True)
            
            # *study_pile_text* updates
            if study_pile_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                study_pile_text.frameNStart = frameN  # exact frame index
                study_pile_text.tStart = t  # local t and not account for scr refresh
                study_pile_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(study_pile_text, 'tStartRefresh')  # time at next scr refresh
                study_pile_text.setAutoDraw(True)
            
            # *test_pile_text* updates
            if test_pile_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                test_pile_text.frameNStart = frameN  # exact frame index
                test_pile_text.tStart = t  # local t and not account for scr refresh
                test_pile_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(test_pile_text, 'tStartRefresh')  # time at next scr refresh
                test_pile_text.setAutoDraw(True)
            
            # *done_pile_text* updates
            if done_pile_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                done_pile_text.frameNStart = frameN  # exact frame index
                done_pile_text.tStart = t  # local t and not account for scr refresh
                done_pile_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(done_pile_text, 'tStartRefresh')  # time at next scr refresh
                done_pile_text.setAutoDraw(True)
            
            # *unsorted_vocab* updates
            if unsorted_vocab.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                unsorted_vocab.frameNStart = frameN  # exact frame index
                unsorted_vocab.tStart = t  # local t and not account for scr refresh
                unsorted_vocab.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(unsorted_vocab, 'tStartRefresh')  # time at next scr refresh
                unsorted_vocab.setAutoDraw(True)
            
            # *instr_choice* updates
            if instr_choice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                instr_choice.frameNStart = frameN  # exact frame index
                instr_choice.tStart = t  # local t and not account for scr refresh
                instr_choice.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(instr_choice, 'tStartRefresh')  # time at next scr refresh
                instr_choice.setAutoDraw(True)
            
            # *study_size_text* updates
            if study_size_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                study_size_text.frameNStart = frameN  # exact frame index
                study_size_text.tStart = t  # local t and not account for scr refresh
                study_size_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(study_size_text, 'tStartRefresh')  # time at next scr refresh
                study_size_text.setAutoDraw(True)
            
            # *test_size_text* updates
            if test_size_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                test_size_text.frameNStart = frameN  # exact frame index
                test_size_text.tStart = t  # local t and not account for scr refresh
                test_size_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(test_size_text, 'tStartRefresh')  # time at next scr refresh
                test_size_text.setAutoDraw(True)
            
            # *done_size_text* updates
            if done_size_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                done_size_text.frameNStart = frameN  # exact frame index
                done_size_text.tStart = t  # local t and not account for scr refresh
                done_size_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(done_size_text, 'tStartRefresh')  # time at next scr refresh
                done_size_text.setAutoDraw(True)
            
            # *unsorted_size_text* updates
            if unsorted_size_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                unsorted_size_text.frameNStart = frameN  # exact frame index
                unsorted_size_text.tStart = t  # local t and not account for scr refresh
                unsorted_size_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(unsorted_size_text, 'tStartRefresh')  # time at next scr refresh
                unsorted_size_text.setAutoDraw(True)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in choiceComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "choice"-------
        for thisComponent in choiceComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store data for choices (TrialHandler)
        if len(choose_pile.x): choices.addData('choose_pile.x', choose_pile.x[0])
        if len(choose_pile.y): choices.addData('choose_pile.y', choose_pile.y[0])
        if len(choose_pile.leftButton): choices.addData('choose_pile.leftButton', choose_pile.leftButton[0])
        if len(choose_pile.midButton): choices.addData('choose_pile.midButton', choose_pile.midButton[0])
        if len(choose_pile.rightButton): choices.addData('choose_pile.rightButton', choose_pile.rightButton[0])
        if len(choose_pile.time): choices.addData('choose_pile.time', choose_pile.time[0])
        if len(choose_pile.clicked_name): choices.addData('choose_pile.clicked_name', choose_pile.clicked_name[0])
        choices.addData('choose_pile.started', choose_pile.tStart)
        choices.addData('choose_pile.stopped', choose_pile.tStop)
        choices.addData('unsorted_card.started', unsorted_card.tStartRefresh)
        choices.addData('unsorted_card.stopped', unsorted_card.tStopRefresh)
        choices.addData('study_pile.started', study_pile.tStartRefresh)
        choices.addData('study_pile.stopped', study_pile.tStopRefresh)
        choices.addData('test_pile.started', test_pile.tStartRefresh)
        choices.addData('test_pile.stopped', test_pile.tStopRefresh)
        choices.addData('done_pile.started', done_pile.tStartRefresh)
        choices.addData('done_pile.stopped', done_pile.tStopRefresh)
        choices.addData('study_pile_text.started', study_pile_text.tStartRefresh)
        choices.addData('study_pile_text.stopped', study_pile_text.tStopRefresh)
        choices.addData('test_pile_text.started', test_pile_text.tStartRefresh)
        choices.addData('test_pile_text.stopped', test_pile_text.tStopRefresh)
        choices.addData('done_pile_text.started', done_pile_text.tStartRefresh)
        choices.addData('done_pile_text.stopped', done_pile_text.tStopRefresh)
        choices.addData('unsorted_vocab.started', unsorted_vocab.tStartRefresh)
        choices.addData('unsorted_vocab.stopped', unsorted_vocab.tStopRefresh)
        choices.addData('instr_choice.started', instr_choice.tStartRefresh)
        choices.addData('instr_choice.stopped', instr_choice.tStopRefresh)
        thisExp.addData('study_size.routineEndVal', study_size)  # Save end routine value
        thisExp.addData('test_size.routineEndVal', test_size)  # Save end routine value
        thisExp.addData('done_size.routineEndVal', done_size)  # Save end routine value
        thisExp.addData('unsorted_size.routineEndVal', unsorted_size)  # Save end routine value
        choices.addData('study_size_text.started', study_size_text.tStartRefresh)
        choices.addData('study_size_text.stopped', study_size_text.tStopRefresh)
        choices.addData('test_size_text.started', test_size_text.tStartRefresh)
        choices.addData('test_size_text.stopped', test_size_text.tStopRefresh)
        choices.addData('done_size_text.started', done_size_text.tStartRefresh)
        choices.addData('done_size_text.stopped', done_size_text.tStopRefresh)
        choices.addData('unsorted_size_text.started', unsorted_size_text.tStartRefresh)
        choices.addData('unsorted_size_text.stopped', unsorted_size_text.tStopRefresh)
        # the Routine "choice" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # ------Prepare to start Routine "interpret_choice"-------
        continueRoutine = True
        # update component parameters for each repeat
        if card_to_show == "" and unsorted_card.contains(choose_pile.getPos()):
            card_to_show=str(waiting[i][0]+" - "+waiting[i][1])
        elif card_to_show != "":
            thisExp.addData("card_to_show",card_to_show)
            placed=True
            if study_pile.contains(choose_pile.getPos()): #clicked study
                study.append(waiting[i])
                i+=1
            elif test_pile.contains(choose_pile.getPos()): #clicked test
                test.append(waiting[i])
                i+=1
            elif done_pile.contains(choose_pile.getPos()): #clicked done
                waiting.pop(i)
            else:
                placed=False
            if placed:
                if len(study)+len(test)==len(waiting): #cards have all been chosen
                    choices.finished=True
                else: #more cards to go
                    card_to_show=""
        # keep track of which components have finished
        interpret_choiceComponents = []
        for thisComponent in interpret_choiceComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        interpret_choiceClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "interpret_choice"-------
        while continueRoutine:
            # get current time
            t = interpret_choiceClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=interpret_choiceClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in interpret_choiceComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "interpret_choice"-------
        for thisComponent in interpret_choiceComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # the Routine "interpret_choice" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 1000 repeats of 'choices'
    
    
    # ------Prepare to start Routine "pick_deck"-------
    continueRoutine = True
    # update component parameters for each repeat
    if len(waiting) == 0:
        trials.finished = True
        continueRoutine = False
    else:
        learn_method="unknown"
        if len(study) == 0:
            learn_method = "test"
            continueRoutine=False
        elif len(test) == 0:
            learn_method = "study"
            continueRoutine=False
    # setup some python lists for storing info about the mouse_pick
    mouse_pick.x = []
    mouse_pick.y = []
    mouse_pick.leftButton = []
    mouse_pick.midButton = []
    mouse_pick.rightButton = []
    mouse_pick.time = []
    mouse_pick.clicked_name = []
    gotValidClick = False  # until a click is received
    # keep track of which components have finished
    pick_deckComponents = [study_first, test_first, study_first_text, test_first_text, mouse_pick, instr_pick]
    for thisComponent in pick_deckComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    pick_deckClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "pick_deck"-------
    while continueRoutine:
        # get current time
        t = pick_deckClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=pick_deckClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *study_first* updates
        if study_first.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            study_first.frameNStart = frameN  # exact frame index
            study_first.tStart = t  # local t and not account for scr refresh
            study_first.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(study_first, 'tStartRefresh')  # time at next scr refresh
            study_first.setAutoDraw(True)
        
        # *test_first* updates
        if test_first.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            test_first.frameNStart = frameN  # exact frame index
            test_first.tStart = t  # local t and not account for scr refresh
            test_first.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(test_first, 'tStartRefresh')  # time at next scr refresh
            test_first.setAutoDraw(True)
        
        # *study_first_text* updates
        if study_first_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            study_first_text.frameNStart = frameN  # exact frame index
            study_first_text.tStart = t  # local t and not account for scr refresh
            study_first_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(study_first_text, 'tStartRefresh')  # time at next scr refresh
            study_first_text.setAutoDraw(True)
        
        # *test_first_text* updates
        if test_first_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            test_first_text.frameNStart = frameN  # exact frame index
            test_first_text.tStart = t  # local t and not account for scr refresh
            test_first_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(test_first_text, 'tStartRefresh')  # time at next scr refresh
            test_first_text.setAutoDraw(True)
        # *mouse_pick* updates
        if mouse_pick.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            mouse_pick.frameNStart = frameN  # exact frame index
            mouse_pick.tStart = t  # local t and not account for scr refresh
            mouse_pick.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse_pick, 'tStartRefresh')  # time at next scr refresh
            mouse_pick.status = STARTED
            mouse_pick.mouseClock.reset()
            prevButtonState = mouse_pick.getPressed()  # if button is down already this ISN'T a new click
        if mouse_pick.status == STARTED:  # only update if started and not finished!
            buttons = mouse_pick.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    for obj in [study_first,test_first]:
                        if obj.contains(mouse_pick):
                            gotValidClick = True
                            mouse_pick.clicked_name.append(obj.name)
                    x, y = mouse_pick.getPos()
                    mouse_pick.x.append(x)
                    mouse_pick.y.append(y)
                    buttons = mouse_pick.getPressed()
                    mouse_pick.leftButton.append(buttons[0])
                    mouse_pick.midButton.append(buttons[1])
                    mouse_pick.rightButton.append(buttons[2])
                    mouse_pick.time.append(mouse_pick.mouseClock.getTime())
                    if gotValidClick:  # abort routine on response
                        continueRoutine = False
        
        # *instr_pick* updates
        if instr_pick.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instr_pick.frameNStart = frameN  # exact frame index
            instr_pick.tStart = t  # local t and not account for scr refresh
            instr_pick.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instr_pick, 'tStartRefresh')  # time at next scr refresh
            instr_pick.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in pick_deckComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "pick_deck"-------
    for thisComponent in pick_deckComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('study_first.started', study_first.tStartRefresh)
    trials.addData('study_first.stopped', study_first.tStopRefresh)
    trials.addData('test_first.started', test_first.tStartRefresh)
    trials.addData('test_first.stopped', test_first.tStopRefresh)
    trials.addData('study_first_text.started', study_first_text.tStartRefresh)
    trials.addData('study_first_text.stopped', study_first_text.tStopRefresh)
    trials.addData('test_first_text.started', test_first_text.tStartRefresh)
    trials.addData('test_first_text.stopped', test_first_text.tStopRefresh)
    # store data for trials (TrialHandler)
    if len(mouse_pick.x): trials.addData('mouse_pick.x', mouse_pick.x[0])
    if len(mouse_pick.y): trials.addData('mouse_pick.y', mouse_pick.y[0])
    if len(mouse_pick.leftButton): trials.addData('mouse_pick.leftButton', mouse_pick.leftButton[0])
    if len(mouse_pick.midButton): trials.addData('mouse_pick.midButton', mouse_pick.midButton[0])
    if len(mouse_pick.rightButton): trials.addData('mouse_pick.rightButton', mouse_pick.rightButton[0])
    if len(mouse_pick.time): trials.addData('mouse_pick.time', mouse_pick.time[0])
    if len(mouse_pick.clicked_name): trials.addData('mouse_pick.clicked_name', mouse_pick.clicked_name[0])
    trials.addData('mouse_pick.started', mouse_pick.tStart)
    trials.addData('mouse_pick.stopped', mouse_pick.tStop)
    trials.addData('instr_pick.started', instr_pick.tStartRefresh)
    trials.addData('instr_pick.stopped', instr_pick.tStopRefresh)
    # the Routine "pick_deck" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "interpret_pick"-------
    continueRoutine = True
    # update component parameters for each repeat
    if learn_method == "unknown":
        if study_first.contains(mouse_pick.getPos()):
            learn_method="study"
        else:
            learn_method="test"
    # keep track of which components have finished
    interpret_pickComponents = []
    for thisComponent in interpret_pickComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    interpret_pickClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "interpret_pick"-------
    while continueRoutine:
        # get current time
        t = interpret_pickClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=interpret_pickClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in interpret_pickComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "interpret_pick"-------
    for thisComponent in interpret_pickComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "interpret_pick" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    learn_loop = data.TrialHandler(nReps=2, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='learn_loop')
    thisExp.addLoop(learn_loop)  # add the loop to the experiment
    thisLearn_loop = learn_loop.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisLearn_loop.rgb)
    if thisLearn_loop != None:
        for paramName in thisLearn_loop:
            exec('{} = thisLearn_loop[paramName]'.format(paramName))
    
    for thisLearn_loop in learn_loop:
        currentLoop = learn_loop
        # abbreviate parameter names if possible (e.g. rgb = thisLearn_loop.rgb)
        if thisLearn_loop != None:
            for paramName in thisLearn_loop:
                exec('{} = thisLearn_loop[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "init_active_cards"-------
        continueRoutine = True
        # update component parameters for each repeat
        if learn_method == "study":
            active_cards = list(range(0,len(study)))
        else:
            active_cards = list(range(0,len(test)))
        # keep track of which components have finished
        init_active_cardsComponents = []
        for thisComponent in init_active_cardsComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        init_active_cardsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "init_active_cards"-------
        while continueRoutine:
            # get current time
            t = init_active_cardsClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=init_active_cardsClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in init_active_cardsComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "init_active_cards"-------
        for thisComponent in init_active_cardsComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # the Routine "init_active_cards" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # ------Prepare to start Routine "instr_study"-------
        continueRoutine = True
        # update component parameters for each repeat
        active_cards_length = len(active_cards)
        if learn_method != "study" or len(study)==0:
            continueRoutine = False
        key_instr_study.keys = []
        key_instr_study.rt = []
        _key_instr_study_allKeys = []
        # keep track of which components have finished
        instr_studyComponents = [instr_study_text, key_instr_study]
        for thisComponent in instr_studyComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        instr_studyClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "instr_study"-------
        while continueRoutine:
            # get current time
            t = instr_studyClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=instr_studyClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *instr_study_text* updates
            if instr_study_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                instr_study_text.frameNStart = frameN  # exact frame index
                instr_study_text.tStart = t  # local t and not account for scr refresh
                instr_study_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(instr_study_text, 'tStartRefresh')  # time at next scr refresh
                instr_study_text.setAutoDraw(True)
            
            # *key_instr_study* updates
            waitOnFlip = False
            if key_instr_study.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                key_instr_study.frameNStart = frameN  # exact frame index
                key_instr_study.tStart = t  # local t and not account for scr refresh
                key_instr_study.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_instr_study, 'tStartRefresh')  # time at next scr refresh
                key_instr_study.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_instr_study.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_instr_study.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_instr_study.status == STARTED and not waitOnFlip:
                theseKeys = key_instr_study.getKeys(keyList=['return'], waitRelease=False)
                _key_instr_study_allKeys.extend(theseKeys)
                if len(_key_instr_study_allKeys):
                    key_instr_study.keys = _key_instr_study_allKeys[-1].name  # just the last key pressed
                    key_instr_study.rt = _key_instr_study_allKeys[-1].rt
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in instr_studyComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "instr_study"-------
        for thisComponent in instr_studyComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        learn_loop.addData('instr_study_text.started', instr_study_text.tStartRefresh)
        learn_loop.addData('instr_study_text.stopped', instr_study_text.tStopRefresh)
        # check responses
        if key_instr_study.keys in ['', [], None]:  # No response was made
            key_instr_study.keys = None
        learn_loop.addData('key_instr_study.keys',key_instr_study.keys)
        if key_instr_study.keys != None:  # we had a response
            learn_loop.addData('key_instr_study.rt', key_instr_study.rt)
        learn_loop.addData('key_instr_study.started', key_instr_study.tStartRefresh)
        learn_loop.addData('key_instr_study.stopped', key_instr_study.tStopRefresh)
        # the Routine "instr_study" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # set up handler to look after randomisation of conditions etc
        study_loop = data.TrialHandler(nReps=active_cards_length, method='random', 
            extraInfo=expInfo, originPath=-1,
            trialList=[None],
            seed=None, name='study_loop')
        thisExp.addLoop(study_loop)  # add the loop to the experiment
        thisStudy_loop = study_loop.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisStudy_loop.rgb)
        if thisStudy_loop != None:
            for paramName in thisStudy_loop:
                exec('{} = thisStudy_loop[paramName]'.format(paramName))
        
        for thisStudy_loop in study_loop:
            currentLoop = study_loop
            # abbreviate parameter names if possible (e.g. rgb = thisStudy_loop.rgb)
            if thisStudy_loop != None:
                for paramName in thisStudy_loop:
                    exec('{} = thisStudy_loop[paramName]'.format(paramName))
            
            # ------Prepare to start Routine "studying"-------
            continueRoutine = True
            # update component parameters for each repeat
            if learn_method != "study" or len(study)==0:
                study_loop.finished = True
                continueRoutine = False
            else:
                card_index = randint(len(active_cards))
                card_to_show = str(study[active_cards[card_index]][0]+
                " - "+study[active_cards[card_index]][1])
                thisExp.addData("card_to_show",card_to_show)
                active_cards.pop(card_index)
            studycard_text.setText(card_to_show)
            next_study.keys = []
            next_study.rt = []
            _next_study_allKeys = []
            # keep track of which components have finished
            studyingComponents = [studycard, studycard_text, next_study, study_instr]
            for thisComponent in studyingComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            studyingClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
            frameN = -1
            
            # -------Run Routine "studying"-------
            while continueRoutine:
                # get current time
                t = studyingClock.getTime()
                tThisFlip = win.getFutureFlipTime(clock=studyingClock)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *studycard* updates
                if studycard.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    studycard.frameNStart = frameN  # exact frame index
                    studycard.tStart = t  # local t and not account for scr refresh
                    studycard.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(studycard, 'tStartRefresh')  # time at next scr refresh
                    studycard.setAutoDraw(True)
                
                # *studycard_text* updates
                if studycard_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    studycard_text.frameNStart = frameN  # exact frame index
                    studycard_text.tStart = t  # local t and not account for scr refresh
                    studycard_text.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(studycard_text, 'tStartRefresh')  # time at next scr refresh
                    studycard_text.setAutoDraw(True)
                
                # *next_study* updates
                waitOnFlip = False
                if next_study.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    next_study.frameNStart = frameN  # exact frame index
                    next_study.tStart = t  # local t and not account for scr refresh
                    next_study.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(next_study, 'tStartRefresh')  # time at next scr refresh
                    next_study.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(next_study.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(next_study.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if next_study.status == STARTED and not waitOnFlip:
                    theseKeys = next_study.getKeys(keyList=['return'], waitRelease=False)
                    _next_study_allKeys.extend(theseKeys)
                    if len(_next_study_allKeys):
                        next_study.keys = _next_study_allKeys[-1].name  # just the last key pressed
                        next_study.rt = _next_study_allKeys[-1].rt
                        # a response ends the routine
                        continueRoutine = False
                
                # *study_instr* updates
                if study_instr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    study_instr.frameNStart = frameN  # exact frame index
                    study_instr.tStart = t  # local t and not account for scr refresh
                    study_instr.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(study_instr, 'tStartRefresh')  # time at next scr refresh
                    study_instr.setAutoDraw(True)
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in studyingComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # -------Ending Routine "studying"-------
            for thisComponent in studyingComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            study_loop.addData('studycard.started', studycard.tStartRefresh)
            study_loop.addData('studycard.stopped', studycard.tStopRefresh)
            study_loop.addData('studycard_text.started', studycard_text.tStartRefresh)
            study_loop.addData('studycard_text.stopped', studycard_text.tStopRefresh)
            # check responses
            if next_study.keys in ['', [], None]:  # No response was made
                next_study.keys = None
            study_loop.addData('next_study.keys',next_study.keys)
            if next_study.keys != None:  # we had a response
                study_loop.addData('next_study.rt', next_study.rt)
            study_loop.addData('next_study.started', next_study.tStartRefresh)
            study_loop.addData('next_study.stopped', next_study.tStopRefresh)
            study_loop.addData('study_instr.started', study_instr.tStartRefresh)
            study_loop.addData('study_instr.stopped', study_instr.tStopRefresh)
            # the Routine "studying" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            thisExp.nextEntry()
            
        # completed active_cards_length repeats of 'study_loop'
        
        
        # ------Prepare to start Routine "instr_test"-------
        continueRoutine = True
        # update component parameters for each repeat
        active_cards_length = len(active_cards)
        if learn_method != "test" or len(test)==0:
            continueRoutine = False
        key_instr_test.keys = []
        key_instr_test.rt = []
        _key_instr_test_allKeys = []
        # keep track of which components have finished
        instr_testComponents = [instr_test_text, key_instr_test]
        for thisComponent in instr_testComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        instr_testClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "instr_test"-------
        while continueRoutine:
            # get current time
            t = instr_testClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=instr_testClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *instr_test_text* updates
            if instr_test_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                instr_test_text.frameNStart = frameN  # exact frame index
                instr_test_text.tStart = t  # local t and not account for scr refresh
                instr_test_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(instr_test_text, 'tStartRefresh')  # time at next scr refresh
                instr_test_text.setAutoDraw(True)
            
            # *key_instr_test* updates
            waitOnFlip = False
            if key_instr_test.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                key_instr_test.frameNStart = frameN  # exact frame index
                key_instr_test.tStart = t  # local t and not account for scr refresh
                key_instr_test.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_instr_test, 'tStartRefresh')  # time at next scr refresh
                key_instr_test.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_instr_test.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_instr_test.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_instr_test.status == STARTED and not waitOnFlip:
                theseKeys = key_instr_test.getKeys(keyList=['return'], waitRelease=False)
                _key_instr_test_allKeys.extend(theseKeys)
                if len(_key_instr_test_allKeys):
                    key_instr_test.keys = _key_instr_test_allKeys[-1].name  # just the last key pressed
                    key_instr_test.rt = _key_instr_test_allKeys[-1].rt
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in instr_testComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "instr_test"-------
        for thisComponent in instr_testComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        learn_loop.addData('instr_test_text.started', instr_test_text.tStartRefresh)
        learn_loop.addData('instr_test_text.stopped', instr_test_text.tStopRefresh)
        # check responses
        if key_instr_test.keys in ['', [], None]:  # No response was made
            key_instr_test.keys = None
        learn_loop.addData('key_instr_test.keys',key_instr_test.keys)
        if key_instr_test.keys != None:  # we had a response
            learn_loop.addData('key_instr_test.rt', key_instr_test.rt)
        learn_loop.addData('key_instr_test.started', key_instr_test.tStartRefresh)
        learn_loop.addData('key_instr_test.stopped', key_instr_test.tStopRefresh)
        # the Routine "instr_test" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # set up handler to look after randomisation of conditions etc
        test_loop = data.TrialHandler(nReps=active_cards_length, method='random', 
            extraInfo=expInfo, originPath=-1,
            trialList=[None],
            seed=None, name='test_loop')
        thisExp.addLoop(test_loop)  # add the loop to the experiment
        thisTest_loop = test_loop.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisTest_loop.rgb)
        if thisTest_loop != None:
            for paramName in thisTest_loop:
                exec('{} = thisTest_loop[paramName]'.format(paramName))
        
        for thisTest_loop in test_loop:
            currentLoop = test_loop
            # abbreviate parameter names if possible (e.g. rgb = thisTest_loop.rgb)
            if thisTest_loop != None:
                for paramName in thisTest_loop:
                    exec('{} = thisTest_loop[paramName]'.format(paramName))
            
            # ------Prepare to start Routine "testing"-------
            continueRoutine = True
            # update component parameters for each repeat
            if learn_method != "test" or len(test)==0:
                test_loop.finished = True
                continueRoutine = False
            else:
                card_index = randint(len(active_cards))
                card_to_show = test[active_cards[card_index]][0]
            event.clearEvents("keyboard")
            userinput = ""
            testcard_text.setText(card_to_show)
            duration_start=core.getTime()
            # keep track of which components have finished
            testingComponents = [testcard, text_box, testcard_text, input_text]
            for thisComponent in testingComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            testingClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
            frameN = -1
            
            # -------Run Routine "testing"-------
            while continueRoutine:
                # get current time
                t = testingClock.getTime()
                tThisFlip = win.getFutureFlipTime(clock=testingClock)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                keys = event.getKeys()
                if keys:
                    if keys[0].isalpha() and len(keys[0])==1:
                        userinput+=keys[0].upper()
                    elif keys[0] == "backspace":
                        userinput=userinput[0:-1]
                    elif keys[0] == "escape":
                        win.close()
                        core.quit()
                    elif keys[0] == "return" and \
                        core.getTime() - duration_start > 0.25 and \
                        len(userinput)>0:
                        continueRoutine=False
                
                # *testcard* updates
                if testcard.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    testcard.frameNStart = frameN  # exact frame index
                    testcard.tStart = t  # local t and not account for scr refresh
                    testcard.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(testcard, 'tStartRefresh')  # time at next scr refresh
                    testcard.setAutoDraw(True)
                
                # *text_box* updates
                if text_box.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    text_box.frameNStart = frameN  # exact frame index
                    text_box.tStart = t  # local t and not account for scr refresh
                    text_box.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(text_box, 'tStartRefresh')  # time at next scr refresh
                    text_box.setAutoDraw(True)
                
                # *testcard_text* updates
                if testcard_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    testcard_text.frameNStart = frameN  # exact frame index
                    testcard_text.tStart = t  # local t and not account for scr refresh
                    testcard_text.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(testcard_text, 'tStartRefresh')  # time at next scr refresh
                    testcard_text.setAutoDraw(True)
                
                # *input_text* updates
                if input_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    input_text.frameNStart = frameN  # exact frame index
                    input_text.tStart = t  # local t and not account for scr refresh
                    input_text.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(input_text, 'tStartRefresh')  # time at next scr refresh
                    input_text.setAutoDraw(True)
                if input_text.status == STARTED:  # only update if drawing
                    input_text.setText(userinput, log=False)
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in testingComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # -------Ending Routine "testing"-------
            for thisComponent in testingComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            test_loop.addData('testcard.started', testcard.tStartRefresh)
            test_loop.addData('testcard.stopped', testcard.tStopRefresh)
            test_loop.addData('text_box.started', text_box.tStartRefresh)
            test_loop.addData('text_box.stopped', text_box.tStopRefresh)
            test_loop.addData('testcard_text.started', testcard_text.tStartRefresh)
            test_loop.addData('testcard_text.stopped', testcard_text.tStopRefresh)
            test_loop.addData('input_text.started', input_text.tStartRefresh)
            test_loop.addData('input_text.stopped', input_text.tStopRefresh)
            thisExp.addData("duration",core.getTime()-duration_start)
            # the Routine "testing" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # ------Prepare to start Routine "show_answer_prompt"-------
            continueRoutine = True
            # update component parameters for each repeat
            if learn_method != "test" or len(test)==0:
                continueRoutine = False
            # setup some python lists for storing info about the yes_or_no
            yes_or_no.x = []
            yes_or_no.y = []
            yes_or_no.leftButton = []
            yes_or_no.midButton = []
            yes_or_no.rightButton = []
            yes_or_no.time = []
            yes_or_no.clicked_name = []
            gotValidClick = False  # until a click is received
            # keep track of which components have finished
            show_answer_promptComponents = [no, yes, would_you_like, yes_or_no, no_text, yes_text]
            for thisComponent in show_answer_promptComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            show_answer_promptClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
            frameN = -1
            
            # -------Run Routine "show_answer_prompt"-------
            while continueRoutine:
                # get current time
                t = show_answer_promptClock.getTime()
                tThisFlip = win.getFutureFlipTime(clock=show_answer_promptClock)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *no* updates
                if no.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    no.frameNStart = frameN  # exact frame index
                    no.tStart = t  # local t and not account for scr refresh
                    no.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(no, 'tStartRefresh')  # time at next scr refresh
                    no.setAutoDraw(True)
                
                # *yes* updates
                if yes.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    yes.frameNStart = frameN  # exact frame index
                    yes.tStart = t  # local t and not account for scr refresh
                    yes.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(yes, 'tStartRefresh')  # time at next scr refresh
                    yes.setAutoDraw(True)
                
                # *would_you_like* updates
                if would_you_like.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    would_you_like.frameNStart = frameN  # exact frame index
                    would_you_like.tStart = t  # local t and not account for scr refresh
                    would_you_like.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(would_you_like, 'tStartRefresh')  # time at next scr refresh
                    would_you_like.setAutoDraw(True)
                # *yes_or_no* updates
                if yes_or_no.status == NOT_STARTED and t >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    yes_or_no.frameNStart = frameN  # exact frame index
                    yes_or_no.tStart = t  # local t and not account for scr refresh
                    yes_or_no.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(yes_or_no, 'tStartRefresh')  # time at next scr refresh
                    yes_or_no.status = STARTED
                    yes_or_no.mouseClock.reset()
                    prevButtonState = yes_or_no.getPressed()  # if button is down already this ISN'T a new click
                if yes_or_no.status == STARTED:  # only update if started and not finished!
                    buttons = yes_or_no.getPressed()
                    if buttons != prevButtonState:  # button state changed?
                        prevButtonState = buttons
                        if sum(buttons) > 0:  # state changed to a new click
                            # check if the mouse was inside our 'clickable' objects
                            gotValidClick = False
                            for obj in [no,yes]:
                                if obj.contains(yes_or_no):
                                    gotValidClick = True
                                    yes_or_no.clicked_name.append(obj.name)
                            x, y = yes_or_no.getPos()
                            yes_or_no.x.append(x)
                            yes_or_no.y.append(y)
                            buttons = yes_or_no.getPressed()
                            yes_or_no.leftButton.append(buttons[0])
                            yes_or_no.midButton.append(buttons[1])
                            yes_or_no.rightButton.append(buttons[2])
                            yes_or_no.time.append(yes_or_no.mouseClock.getTime())
                            if gotValidClick:  # abort routine on response
                                continueRoutine = False
                
                # *no_text* updates
                if no_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    no_text.frameNStart = frameN  # exact frame index
                    no_text.tStart = t  # local t and not account for scr refresh
                    no_text.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(no_text, 'tStartRefresh')  # time at next scr refresh
                    no_text.setAutoDraw(True)
                
                # *yes_text* updates
                if yes_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    yes_text.frameNStart = frameN  # exact frame index
                    yes_text.tStart = t  # local t and not account for scr refresh
                    yes_text.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(yes_text, 'tStartRefresh')  # time at next scr refresh
                    yes_text.setAutoDraw(True)
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in show_answer_promptComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # -------Ending Routine "show_answer_prompt"-------
            for thisComponent in show_answer_promptComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            test_loop.addData('no.started', no.tStartRefresh)
            test_loop.addData('no.stopped', no.tStopRefresh)
            test_loop.addData('yes.started', yes.tStartRefresh)
            test_loop.addData('yes.stopped', yes.tStopRefresh)
            test_loop.addData('would_you_like.started', would_you_like.tStartRefresh)
            test_loop.addData('would_you_like.stopped', would_you_like.tStopRefresh)
            # store data for test_loop (TrialHandler)
            if len(yes_or_no.x): test_loop.addData('yes_or_no.x', yes_or_no.x[0])
            if len(yes_or_no.y): test_loop.addData('yes_or_no.y', yes_or_no.y[0])
            if len(yes_or_no.leftButton): test_loop.addData('yes_or_no.leftButton', yes_or_no.leftButton[0])
            if len(yes_or_no.midButton): test_loop.addData('yes_or_no.midButton', yes_or_no.midButton[0])
            if len(yes_or_no.rightButton): test_loop.addData('yes_or_no.rightButton', yes_or_no.rightButton[0])
            if len(yes_or_no.time): test_loop.addData('yes_or_no.time', yes_or_no.time[0])
            if len(yes_or_no.clicked_name): test_loop.addData('yes_or_no.clicked_name', yes_or_no.clicked_name[0])
            test_loop.addData('yes_or_no.started', yes_or_no.tStart)
            test_loop.addData('yes_or_no.stopped', yes_or_no.tStop)
            test_loop.addData('no_text.started', no_text.tStartRefresh)
            test_loop.addData('no_text.stopped', no_text.tStopRefresh)
            test_loop.addData('yes_text.started', yes_text.tStartRefresh)
            test_loop.addData('yes_text.stopped', yes_text.tStopRefresh)
            # the Routine "show_answer_prompt" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # ------Prepare to start Routine "show_answer"-------
            continueRoutine = True
            routineTimer.add(2.000000)
            # update component parameters for each repeat
            if learn_method != "test" or len(test)==0:
                continueRoutine = False
            else:
                #store data on correctness of userinput
                thisExp.addData("test_response.stim",card_to_show)
                thisExp.addData("test_response.resp",userinput)
                if userinput == test[active_cards[card_index]][1]:
                    thisExp.addData("test_response.eval","correct")
                else:
                    thisExp.addData("test_response.eval","incorrect")
            
                #set correct text
                card_to_show = str(test[active_cards[card_index]][0]+
                    " - "+test[active_cards[card_index]][1])
            
                #remove this card from active cards
                active_cards.pop(card_index)
            
                #if the user didn't want to see the answer skip that part
                if no.contains(yes_or_no.getPos()):
                    continueRoutine=False
            
            
            correct_text.setText(card_to_show)
            user_text.setText(("your answer: "+userinput))
            # keep track of which components have finished
            show_answerComponents = [correct_text, user_text]
            for thisComponent in show_answerComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            show_answerClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
            frameN = -1
            
            # -------Run Routine "show_answer"-------
            while continueRoutine and routineTimer.getTime() > 0:
                # get current time
                t = show_answerClock.getTime()
                tThisFlip = win.getFutureFlipTime(clock=show_answerClock)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *correct_text* updates
                if correct_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    correct_text.frameNStart = frameN  # exact frame index
                    correct_text.tStart = t  # local t and not account for scr refresh
                    correct_text.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(correct_text, 'tStartRefresh')  # time at next scr refresh
                    correct_text.setAutoDraw(True)
                if correct_text.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > correct_text.tStartRefresh + 2-frameTolerance:
                        # keep track of stop time/frame for later
                        correct_text.tStop = t  # not accounting for scr refresh
                        correct_text.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(correct_text, 'tStopRefresh')  # time at next scr refresh
                        correct_text.setAutoDraw(False)
                
                # *user_text* updates
                if user_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    user_text.frameNStart = frameN  # exact frame index
                    user_text.tStart = t  # local t and not account for scr refresh
                    user_text.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(user_text, 'tStartRefresh')  # time at next scr refresh
                    user_text.setAutoDraw(True)
                if user_text.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > user_text.tStartRefresh + 2-frameTolerance:
                        # keep track of stop time/frame for later
                        user_text.tStop = t  # not accounting for scr refresh
                        user_text.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(user_text, 'tStopRefresh')  # time at next scr refresh
                        user_text.setAutoDraw(False)
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in show_answerComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # -------Ending Routine "show_answer"-------
            for thisComponent in show_answerComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            test_loop.addData('correct_text.started', correct_text.tStartRefresh)
            test_loop.addData('correct_text.stopped', correct_text.tStopRefresh)
            test_loop.addData('user_text.started', user_text.tStartRefresh)
            test_loop.addData('user_text.stopped', user_text.tStopRefresh)
            thisExp.nextEntry()
            
        # completed active_cards_length repeats of 'test_loop'
        
        
        # ------Prepare to start Routine "change_method"-------
        continueRoutine = True
        # update component parameters for each repeat
        if learn_method == "study":
            learn_method = "test"
        elif learn_method == "test":
            learn_method = "study"
        # keep track of which components have finished
        change_methodComponents = []
        for thisComponent in change_methodComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        change_methodClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "change_method"-------
        while continueRoutine:
            # get current time
            t = change_methodClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=change_methodClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in change_methodComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "change_method"-------
        for thisComponent in change_methodComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # the Routine "change_method" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 2 repeats of 'learn_loop'
    
    thisExp.nextEntry()
    
# completed 1000 repeats of 'trials'


# ------Prepare to start Routine "filler_instr"-------
continueRoutine = True
# update component parameters for each repeat
key_filler.keys = []
key_filler.rt = []
_key_filler_allKeys = []
start = datetime.now()
# keep track of which components have finished
filler_instrComponents = [key_filler, filler_text]
for thisComponent in filler_instrComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
filler_instrClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "filler_instr"-------
while continueRoutine:
    # get current time
    t = filler_instrClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=filler_instrClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *key_filler* updates
    waitOnFlip = False
    if key_filler.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_filler.frameNStart = frameN  # exact frame index
        key_filler.tStart = t  # local t and not account for scr refresh
        key_filler.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_filler, 'tStartRefresh')  # time at next scr refresh
        key_filler.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_filler.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_filler.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_filler.status == STARTED and not waitOnFlip:
        theseKeys = key_filler.getKeys(keyList=['return'], waitRelease=False)
        _key_filler_allKeys.extend(theseKeys)
        if len(_key_filler_allKeys):
            key_filler.keys = _key_filler_allKeys[-1].name  # just the last key pressed
            key_filler.rt = _key_filler_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # *filler_text* updates
    if filler_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        filler_text.frameNStart = frameN  # exact frame index
        filler_text.tStart = t  # local t and not account for scr refresh
        filler_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(filler_text, 'tStartRefresh')  # time at next scr refresh
        filler_text.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in filler_instrComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "filler_instr"-------
for thisComponent in filler_instrComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_filler.keys in ['', [], None]:  # No response was made
    key_filler.keys = None
thisExp.addData('key_filler.keys',key_filler.keys)
if key_filler.keys != None:  # we had a response
    thisExp.addData('key_filler.rt', key_filler.rt)
thisExp.addData('key_filler.started', key_filler.tStartRefresh)
thisExp.addData('key_filler.stopped', key_filler.tStopRefresh)
thisExp.nextEntry()
thisExp.addData('filler_text.started', filler_text.tStartRefresh)
thisExp.addData('filler_text.stopped', filler_text.tStopRefresh)
# the Routine "filler_instr" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "timer"-------
continueRoutine = True
# update component parameters for each repeat
# keep track of which components have finished
timerComponents = [countdown]
for thisComponent in timerComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
timerClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "timer"-------
while continueRoutine:
    # get current time
    t = timerClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=timerClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *countdown* updates
    if countdown.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        countdown.frameNStart = frameN  # exact frame index
        countdown.tStart = t  # local t and not account for scr refresh
        countdown.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(countdown, 'tStartRefresh')  # time at next scr refresh
        countdown.setAutoDraw(True)
    if countdown.status == STARTED:
        if bool((timer_length-(datetime.now()-start).seconds)<0):
            # keep track of stop time/frame for later
            countdown.tStop = t  # not accounting for scr refresh
            countdown.frameNStop = frameN  # exact frame index
            win.timeOnFlip(countdown, 'tStopRefresh')  # time at next scr refresh
            countdown.setAutoDraw(False)
    if countdown.status == STARTED:  # only update if drawing
        countdown.setText(timer_text, log=False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in timerComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "timer"-------
for thisComponent in timerComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('countdown.started', countdown.tStartRefresh)
thisExp.addData('countdown.stopped', countdown.tStopRefresh)
# the Routine "timer" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "ready"-------
continueRoutine = True
# update component parameters for each repeat
return_to_exp.keys = []
return_to_exp.rt = []
_return_to_exp_allKeys = []
beep.setSound('A', secs=0.5, hamming=True)
beep.setVolume(1, log=False)
# keep track of which components have finished
readyComponents = [ready_to_continue, return_to_exp, beep]
for thisComponent in readyComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
readyClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "ready"-------
while continueRoutine:
    # get current time
    t = readyClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=readyClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *ready_to_continue* updates
    if ready_to_continue.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        ready_to_continue.frameNStart = frameN  # exact frame index
        ready_to_continue.tStart = t  # local t and not account for scr refresh
        ready_to_continue.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(ready_to_continue, 'tStartRefresh')  # time at next scr refresh
        ready_to_continue.setAutoDraw(True)
    
    # *return_to_exp* updates
    waitOnFlip = False
    if return_to_exp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        return_to_exp.frameNStart = frameN  # exact frame index
        return_to_exp.tStart = t  # local t and not account for scr refresh
        return_to_exp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(return_to_exp, 'tStartRefresh')  # time at next scr refresh
        return_to_exp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(return_to_exp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(return_to_exp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if return_to_exp.status == STARTED and not waitOnFlip:
        theseKeys = return_to_exp.getKeys(keyList=['return'], waitRelease=False)
        _return_to_exp_allKeys.extend(theseKeys)
        if len(_return_to_exp_allKeys):
            return_to_exp.keys = _return_to_exp_allKeys[-1].name  # just the last key pressed
            return_to_exp.rt = _return_to_exp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    # start/stop beep
    if beep.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        beep.frameNStart = frameN  # exact frame index
        beep.tStart = t  # local t and not account for scr refresh
        beep.tStartRefresh = tThisFlipGlobal  # on global time
        beep.play(when=win)  # sync with win flip
    if beep.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > beep.tStartRefresh + 0.5-frameTolerance:
            # keep track of stop time/frame for later
            beep.tStop = t  # not accounting for scr refresh
            beep.frameNStop = frameN  # exact frame index
            win.timeOnFlip(beep, 'tStopRefresh')  # time at next scr refresh
            beep.stop()
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in readyComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "ready"-------
for thisComponent in readyComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('ready_to_continue.started', ready_to_continue.tStartRefresh)
thisExp.addData('ready_to_continue.stopped', ready_to_continue.tStopRefresh)
# check responses
if return_to_exp.keys in ['', [], None]:  # No response was made
    return_to_exp.keys = None
thisExp.addData('return_to_exp.keys',return_to_exp.keys)
if return_to_exp.keys != None:  # we had a response
    thisExp.addData('return_to_exp.rt', return_to_exp.rt)
thisExp.addData('return_to_exp.started', return_to_exp.tStartRefresh)
thisExp.addData('return_to_exp.stopped', return_to_exp.tStopRefresh)
thisExp.nextEntry()
beep.stop()  # ensure sound has stopped at end of routine
thisExp.addData('beep.started', beep.tStartRefresh)
thisExp.addData('beep.stopped', beep.tStopRefresh)
# the Routine "ready" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "instr_assess"-------
continueRoutine = True
# update component parameters for each repeat
instr_assess_key.keys = []
instr_assess_key.rt = []
_instr_assess_key_allKeys = []
# keep track of which components have finished
instr_assessComponents = [instr_assess_text, instr_assess_key]
for thisComponent in instr_assessComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instr_assessClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instr_assess"-------
while continueRoutine:
    # get current time
    t = instr_assessClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instr_assessClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instr_assess_text* updates
    if instr_assess_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instr_assess_text.frameNStart = frameN  # exact frame index
        instr_assess_text.tStart = t  # local t and not account for scr refresh
        instr_assess_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instr_assess_text, 'tStartRefresh')  # time at next scr refresh
        instr_assess_text.setAutoDraw(True)
    
    # *instr_assess_key* updates
    waitOnFlip = False
    if instr_assess_key.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instr_assess_key.frameNStart = frameN  # exact frame index
        instr_assess_key.tStart = t  # local t and not account for scr refresh
        instr_assess_key.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instr_assess_key, 'tStartRefresh')  # time at next scr refresh
        instr_assess_key.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(instr_assess_key.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(instr_assess_key.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if instr_assess_key.status == STARTED and not waitOnFlip:
        theseKeys = instr_assess_key.getKeys(keyList=['return'], waitRelease=False)
        _instr_assess_key_allKeys.extend(theseKeys)
        if len(_instr_assess_key_allKeys):
            instr_assess_key.keys = _instr_assess_key_allKeys[-1].name  # just the last key pressed
            instr_assess_key.rt = _instr_assess_key_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instr_assessComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instr_assess"-------
for thisComponent in instr_assessComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('instr_assess_text.started', instr_assess_text.tStartRefresh)
thisExp.addData('instr_assess_text.stopped', instr_assess_text.tStopRefresh)
# check responses
if instr_assess_key.keys in ['', [], None]:  # No response was made
    instr_assess_key.keys = None
thisExp.addData('instr_assess_key.keys',instr_assess_key.keys)
if instr_assess_key.keys != None:  # we had a response
    thisExp.addData('instr_assess_key.rt', instr_assess_key.rt)
thisExp.addData('instr_assess_key.started', instr_assess_key.tStartRefresh)
thisExp.addData('instr_assess_key.stopped', instr_assess_key.tStopRefresh)
thisExp.nextEntry()
# the Routine "instr_assess" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
assess_loop = data.TrialHandler(nReps=1, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('cards.xlsx'),
    seed=None, name='assess_loop')
thisExp.addLoop(assess_loop)  # add the loop to the experiment
thisAssess_loop = assess_loop.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisAssess_loop.rgb)
if thisAssess_loop != None:
    for paramName in thisAssess_loop:
        exec('{} = thisAssess_loop[paramName]'.format(paramName))

for thisAssess_loop in assess_loop:
    currentLoop = assess_loop
    # abbreviate parameter names if possible (e.g. rgb = thisAssess_loop.rgb)
    if thisAssess_loop != None:
        for paramName in thisAssess_loop:
            exec('{} = thisAssess_loop[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "assess"-------
    continueRoutine = True
    # update component parameters for each repeat
    event.clearEvents("keyboard")
    userinput = ""
    assess_card_text.setText(swa)
    duration_start=core.getTime()
    # keep track of which components have finished
    assessComponents = [assess_card, assess_text_box, assess_card_text, assess_input_text]
    for thisComponent in assessComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    assessClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "assess"-------
    while continueRoutine:
        # get current time
        t = assessClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=assessClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        keys = event.getKeys()
        if keys:
            if keys[0].isalpha() and len(keys[0])==1:
                userinput+=keys[0].upper()
            elif keys[0] == "backspace":
                userinput=userinput[0:-1]
            elif keys[0] == "escape":
                win.close()
                core.quit()
            elif keys[0] == "return" and \
                core.getTime() - duration_start > 0.25 and \
                len(userinput)>0:
                continueRoutine=False
        
        # *assess_card* updates
        if assess_card.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            assess_card.frameNStart = frameN  # exact frame index
            assess_card.tStart = t  # local t and not account for scr refresh
            assess_card.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(assess_card, 'tStartRefresh')  # time at next scr refresh
            assess_card.setAutoDraw(True)
        
        # *assess_text_box* updates
        if assess_text_box.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            assess_text_box.frameNStart = frameN  # exact frame index
            assess_text_box.tStart = t  # local t and not account for scr refresh
            assess_text_box.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(assess_text_box, 'tStartRefresh')  # time at next scr refresh
            assess_text_box.setAutoDraw(True)
        
        # *assess_card_text* updates
        if assess_card_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            assess_card_text.frameNStart = frameN  # exact frame index
            assess_card_text.tStart = t  # local t and not account for scr refresh
            assess_card_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(assess_card_text, 'tStartRefresh')  # time at next scr refresh
            assess_card_text.setAutoDraw(True)
        
        # *assess_input_text* updates
        if assess_input_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            assess_input_text.frameNStart = frameN  # exact frame index
            assess_input_text.tStart = t  # local t and not account for scr refresh
            assess_input_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(assess_input_text, 'tStartRefresh')  # time at next scr refresh
            assess_input_text.setAutoDraw(True)
        if assess_input_text.status == STARTED:  # only update if drawing
            assess_input_text.setText(userinput, log=False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in assessComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "assess"-------
    for thisComponent in assessComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    #store data on correctness of userinput
    thisExp.addData("test_response.resp",userinput)
    if userinput == eng:
        thisExp.addData("test_response.eval","correct")
    else:
        thisExp.addData("test_response.eval","incorrect")
    assess_loop.addData('assess_card.started', assess_card.tStartRefresh)
    assess_loop.addData('assess_card.stopped', assess_card.tStopRefresh)
    assess_loop.addData('assess_text_box.started', assess_text_box.tStartRefresh)
    assess_loop.addData('assess_text_box.stopped', assess_text_box.tStopRefresh)
    assess_loop.addData('assess_card_text.started', assess_card_text.tStartRefresh)
    assess_loop.addData('assess_card_text.stopped', assess_card_text.tStopRefresh)
    assess_loop.addData('assess_input_text.started', assess_input_text.tStartRefresh)
    assess_loop.addData('assess_input_text.stopped', assess_input_text.tStopRefresh)
    thisExp.addData("duration",core.getTime()-duration_start)
    # the Routine "assess" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1 repeats of 'assess_loop'


# set up handler to look after randomisation of conditions etc
ans_gen_loop = data.TrialHandler(nReps=1, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('transfer.xlsx'),
    seed=None, name='ans_gen_loop')
thisExp.addLoop(ans_gen_loop)  # add the loop to the experiment
thisAns_gen_loop = ans_gen_loop.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisAns_gen_loop.rgb)
if thisAns_gen_loop != None:
    for paramName in thisAns_gen_loop:
        exec('{} = thisAns_gen_loop[paramName]'.format(paramName))

for thisAns_gen_loop in ans_gen_loop:
    currentLoop = ans_gen_loop
    # abbreviate parameter names if possible (e.g. rgb = thisAns_gen_loop.rgb)
    if thisAns_gen_loop != None:
        for paramName in thisAns_gen_loop:
            exec('{} = thisAns_gen_loop[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "ans_gen"-------
    continueRoutine = True
    # update component parameters for each repeat
    answers.append(ans)
    # keep track of which components have finished
    ans_genComponents = []
    for thisComponent in ans_genComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    ans_genClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "ans_gen"-------
    while continueRoutine:
        # get current time
        t = ans_genClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=ans_genClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in ans_genComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "ans_gen"-------
    for thisComponent in ans_genComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "ans_gen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
# completed 1 repeats of 'ans_gen_loop'


# ------Prepare to start Routine "inst_transfer"-------
continueRoutine = True
# update component parameters for each repeat
instr_transfer_key.keys = []
instr_transfer_key.rt = []
_instr_transfer_key_allKeys = []
# keep track of which components have finished
inst_transferComponents = [instr_transfer_text, instr_transfer_key]
for thisComponent in inst_transferComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
inst_transferClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "inst_transfer"-------
while continueRoutine:
    # get current time
    t = inst_transferClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=inst_transferClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instr_transfer_text* updates
    if instr_transfer_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instr_transfer_text.frameNStart = frameN  # exact frame index
        instr_transfer_text.tStart = t  # local t and not account for scr refresh
        instr_transfer_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instr_transfer_text, 'tStartRefresh')  # time at next scr refresh
        instr_transfer_text.setAutoDraw(True)
    
    # *instr_transfer_key* updates
    waitOnFlip = False
    if instr_transfer_key.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instr_transfer_key.frameNStart = frameN  # exact frame index
        instr_transfer_key.tStart = t  # local t and not account for scr refresh
        instr_transfer_key.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instr_transfer_key, 'tStartRefresh')  # time at next scr refresh
        instr_transfer_key.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(instr_transfer_key.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(instr_transfer_key.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if instr_transfer_key.status == STARTED and not waitOnFlip:
        theseKeys = instr_transfer_key.getKeys(keyList=['return'], waitRelease=False)
        _instr_transfer_key_allKeys.extend(theseKeys)
        if len(_instr_transfer_key_allKeys):
            instr_transfer_key.keys = _instr_transfer_key_allKeys[-1].name  # just the last key pressed
            instr_transfer_key.rt = _instr_transfer_key_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in inst_transferComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "inst_transfer"-------
for thisComponent in inst_transferComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('instr_transfer_text.started', instr_transfer_text.tStartRefresh)
thisExp.addData('instr_transfer_text.stopped', instr_transfer_text.tStopRefresh)
# check responses
if instr_transfer_key.keys in ['', [], None]:  # No response was made
    instr_transfer_key.keys = None
thisExp.addData('instr_transfer_key.keys',instr_transfer_key.keys)
if instr_transfer_key.keys != None:  # we had a response
    thisExp.addData('instr_transfer_key.rt', instr_transfer_key.rt)
thisExp.addData('instr_transfer_key.started', instr_transfer_key.tStartRefresh)
thisExp.addData('instr_transfer_key.stopped', instr_transfer_key.tStopRefresh)
thisExp.nextEntry()
# the Routine "inst_transfer" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
transfers = data.TrialHandler(nReps=1, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('transfer.xlsx'),
    seed=None, name='transfers')
thisExp.addLoop(transfers)  # add the loop to the experiment
thisTransfer = transfers.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTransfer.rgb)
if thisTransfer != None:
    for paramName in thisTransfer:
        exec('{} = thisTransfer[paramName]'.format(paramName))

for thisTransfer in transfers:
    currentLoop = transfers
    # abbreviate parameter names if possible (e.g. rgb = thisTransfer.rgb)
    if thisTransfer != None:
        for paramName in thisTransfer:
            exec('{} = thisTransfer[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "transfer"-------
    continueRoutine = True
    # update component parameters for each repeat
    correct = randint(3)  # Set routine start values for correct
    def getOther(taken):
        while True:
            possible = answers[randint(len(answers))]
            for answer in taken:
                if possible == answer:
                    possible = ""
            if possible != "":
                return possible
    
    if correct == 0:
        a_text.setText(ans)
        b_text.setText(getOther([a_text.text]))
        c_text.setText(getOther([a_text.text,b_text.text]))
    elif correct == 1:
        b_text.setText(ans)
        a_text.setText(getOther([b_text.text]))
        c_text.setText(getOther([b_text.text,a_text.text]))
    elif correct == 2:
        c_text.setText(ans)
        a_text.setText(getOther([c_text.text]))
        b_text.setText(getOther([c_text.text,a_text.text]))
    sentence.setText(sen)
    # setup some python lists for storing info about the select_word
    select_word.x = []
    select_word.y = []
    select_word.leftButton = []
    select_word.midButton = []
    select_word.rightButton = []
    select_word.time = []
    select_word.clicked_name = []
    gotValidClick = False  # until a click is received
    # keep track of which components have finished
    transferComponents = [a, b, c, a_text, b_text, c_text, sentence, instr_transfer, select_word]
    for thisComponent in transferComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    transferClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "transfer"-------
    while continueRoutine:
        # get current time
        t = transferClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=transferClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *a* updates
        if a.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            a.frameNStart = frameN  # exact frame index
            a.tStart = t  # local t and not account for scr refresh
            a.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(a, 'tStartRefresh')  # time at next scr refresh
            a.setAutoDraw(True)
        
        # *b* updates
        if b.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            b.frameNStart = frameN  # exact frame index
            b.tStart = t  # local t and not account for scr refresh
            b.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(b, 'tStartRefresh')  # time at next scr refresh
            b.setAutoDraw(True)
        
        # *c* updates
        if c.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            c.frameNStart = frameN  # exact frame index
            c.tStart = t  # local t and not account for scr refresh
            c.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(c, 'tStartRefresh')  # time at next scr refresh
            c.setAutoDraw(True)
        
        # *a_text* updates
        if a_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            a_text.frameNStart = frameN  # exact frame index
            a_text.tStart = t  # local t and not account for scr refresh
            a_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(a_text, 'tStartRefresh')  # time at next scr refresh
            a_text.setAutoDraw(True)
        
        # *b_text* updates
        if b_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            b_text.frameNStart = frameN  # exact frame index
            b_text.tStart = t  # local t and not account for scr refresh
            b_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(b_text, 'tStartRefresh')  # time at next scr refresh
            b_text.setAutoDraw(True)
        
        # *c_text* updates
        if c_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            c_text.frameNStart = frameN  # exact frame index
            c_text.tStart = t  # local t and not account for scr refresh
            c_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(c_text, 'tStartRefresh')  # time at next scr refresh
            c_text.setAutoDraw(True)
        
        # *sentence* updates
        if sentence.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            sentence.frameNStart = frameN  # exact frame index
            sentence.tStart = t  # local t and not account for scr refresh
            sentence.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(sentence, 'tStartRefresh')  # time at next scr refresh
            sentence.setAutoDraw(True)
        
        # *instr_transfer* updates
        if instr_transfer.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instr_transfer.frameNStart = frameN  # exact frame index
            instr_transfer.tStart = t  # local t and not account for scr refresh
            instr_transfer.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instr_transfer, 'tStartRefresh')  # time at next scr refresh
            instr_transfer.setAutoDraw(True)
        # *select_word* updates
        if select_word.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            select_word.frameNStart = frameN  # exact frame index
            select_word.tStart = t  # local t and not account for scr refresh
            select_word.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(select_word, 'tStartRefresh')  # time at next scr refresh
            select_word.status = STARTED
            select_word.mouseClock.reset()
            prevButtonState = select_word.getPressed()  # if button is down already this ISN'T a new click
        if select_word.status == STARTED:  # only update if started and not finished!
            buttons = select_word.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    for obj in [a,b,c]:
                        if obj.contains(select_word):
                            gotValidClick = True
                            select_word.clicked_name.append(obj.name)
                    x, y = select_word.getPos()
                    select_word.x.append(x)
                    select_word.y.append(y)
                    buttons = select_word.getPressed()
                    select_word.leftButton.append(buttons[0])
                    select_word.midButton.append(buttons[1])
                    select_word.rightButton.append(buttons[2])
                    select_word.time.append(select_word.mouseClock.getTime())
                    if gotValidClick:  # abort routine on response
                        continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in transferComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "transfer"-------
    for thisComponent in transferComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('correct.routineEndVal', correct)  # Save end routine value
    if a.contains(select_word.getPos()):
        picked=a_text
    elif b.contains(select_word.getPos()):
        picked=b_text
    else:
        picked=c_text
    
    thisExp.addData("transfer_response.resp",picked.text)
    if (correct == 0 and picked==a_text) or (correct == 1 and picked==b_text) or (correct == 2 and picked==c_text):
        thisExp.addData("transfer_response.eval","correct")
    else:
        thisExp.addData("transfer_response.eval","incorrect")
    transfers.addData('a.started', a.tStartRefresh)
    transfers.addData('a.stopped', a.tStopRefresh)
    transfers.addData('b.started', b.tStartRefresh)
    transfers.addData('b.stopped', b.tStopRefresh)
    transfers.addData('c.started', c.tStartRefresh)
    transfers.addData('c.stopped', c.tStopRefresh)
    transfers.addData('a_text.started', a_text.tStartRefresh)
    transfers.addData('a_text.stopped', a_text.tStopRefresh)
    transfers.addData('b_text.started', b_text.tStartRefresh)
    transfers.addData('b_text.stopped', b_text.tStopRefresh)
    transfers.addData('c_text.started', c_text.tStartRefresh)
    transfers.addData('c_text.stopped', c_text.tStopRefresh)
    transfers.addData('sentence.started', sentence.tStartRefresh)
    transfers.addData('sentence.stopped', sentence.tStopRefresh)
    transfers.addData('instr_transfer.started', instr_transfer.tStartRefresh)
    transfers.addData('instr_transfer.stopped', instr_transfer.tStopRefresh)
    # store data for transfers (TrialHandler)
    if len(select_word.x): transfers.addData('select_word.x', select_word.x[0])
    if len(select_word.y): transfers.addData('select_word.y', select_word.y[0])
    if len(select_word.leftButton): transfers.addData('select_word.leftButton', select_word.leftButton[0])
    if len(select_word.midButton): transfers.addData('select_word.midButton', select_word.midButton[0])
    if len(select_word.rightButton): transfers.addData('select_word.rightButton', select_word.rightButton[0])
    if len(select_word.time): transfers.addData('select_word.time', select_word.time[0])
    if len(select_word.clicked_name): transfers.addData('select_word.clicked_name', select_word.clicked_name[0])
    transfers.addData('select_word.started', select_word.tStart)
    transfers.addData('select_word.stopped', select_word.tStop)
    # the Routine "transfer" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1 repeats of 'transfers'


# ------Prepare to start Routine "finish"-------
continueRoutine = True
# update component parameters for each repeat
# keep track of which components have finished
finishComponents = [finish_text]
for thisComponent in finishComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
finishClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "finish"-------
while continueRoutine:
    # get current time
    t = finishClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=finishClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *finish_text* updates
    if finish_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        finish_text.frameNStart = frameN  # exact frame index
        finish_text.tStart = t  # local t and not account for scr refresh
        finish_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(finish_text, 'tStartRefresh')  # time at next scr refresh
        finish_text.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in finishComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "finish"-------
for thisComponent in finishComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('finish_text.started', finish_text.tStartRefresh)
thisExp.addData('finish_text.stopped', finish_text.tStopRefresh)
# the Routine "finish" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
