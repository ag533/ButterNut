# React App for validating the number and calling Python server.

## Setup

1. Install all dependencies - npm install
2. Start the app - npm start
3. App will start at http://127.0.0.1:3000 as default.

## Functoinalities

1. Number validation according to UK number format.
2. Will not accept if number not starting with 07 or 447 or +447
3. Will not accept string.


## Thought Process

1. Single page application to verify the number.
2. Logic to verify UK phone number with all the scenerios, 07, +447, 447.
3. Only call the api if and only if number is valid.
4. UI steps
    1.  Basic layout - input, label, texts, button.
    2.  Styling for divs and texts and colors.
    3.  Declaring states for valid, storing number, on focus, etc.
    4.  Making transition for label to shift up when in focus.
    5.  Marking correct and incorrect with validation check.
    6.  Enabling submit only when valid number is entered.

## Work not done due to time constraint

1. Formating the number with spacing - This can be done by simply using regex expression to match and call a function to add spacing whenever a number is added in the input field.
