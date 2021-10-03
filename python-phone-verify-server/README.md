# Python Flask server for validating the number.

## Setup

1. Install flask and flask-cors - pip install flask flask-cors
2. Start the server - python app.py
3. Server will start at http://127.0.0.1:8000 as default.
4. To change port make the necessary chnages in app.py.

## Testing

1. Install pytest - pip install pytest
2. Run pytest from termianl - pytest
    This will automatically pick all the tests from test_app.py

## Few Testing Scenerios

1. Test 1 - passing a valid UK number with country code +44.
2. Test 2 - passing a valid UK number without country code.
3. Test 3 - passing a valid UK number with country code 44.
4. Test 4 - passing a valid UK number with different country code 34.
5. Test 5 - passing a invalid UK number with different country code 34.
6. Test 6 - passing a invalid UK number with country code 44.
7. Test 7 - passing a invalid UK number without country code.
8. Test 8 - passing a invalid UK number without country code and zero.

## Thought Process

1. Single api endpoint to verify the number.
2. Logic to verify UK phone number with all the scenerios, 07, +447, 447.
3. Return a success message or 200 status code or error message or 403 status  code to the app.
4. Writing tests for all the edge cases.