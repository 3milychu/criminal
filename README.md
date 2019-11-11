# Criminal - Under development

"Criminal" is an audiovisual composition that calls out how often the COMPAS algorithm correctly identifies reoffenders, and how often it premptively labels reoffenders based on race.

The sounds heard in each second represent information recorded for one inmate:

- Baseline tom: lowest number of priors (1st bin)
- Midi note based on register: the higher the register, the higher number of priors (2nd to 5th bin)
- Ratchet beat: Commitment of a felony
- Triangle noises: If the inmate is female
- "Criminal": If the algorithm was correct in identifying a reoffender
- "What?": If the algorithm incorrectly predicted a black reoffender
- "Unfair": If the algorithm incorrectly predicted a caucasian reoffender
- "Ke wu": If the algorithm incorrectly predicted an asian reoffender
- "Pobre": If the algorithm incorrectly predicted a hispanic reoffender


# Data

https://inclass.kaggle.com/danofer/compass

propublica_data_for_fairml.csv

Data contains variables used by the COMPAS algorithm in scoring defendants, along with their outcomes within 2 years of the decision, for over 10,000 criminal defendants in Broward County, Florida. 
