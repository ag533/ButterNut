# test_app.py
from app import app
from flask import json

def test_valid_phone_number_with_country_code():        
    response = app.test_client().post(
        '/verify/+447492537941',
        content_type='application/json',
    )

    data = json.loads(response.get_data(as_text=True))

    assert response.status_code == 200
    assert data['number'] == "Success"

def test_valid_phone_number_without_country_code():        
    response = app.test_client().post(
        '/verify/07492537941',
        content_type='application/json',
    )

    data = json.loads(response.get_data(as_text=True))

    assert response.status_code == 200
    assert data['number'] == "Success"

def test_valid_phone_number_with_country_code_wihout_plus():        
    response = app.test_client().post(
        '/verify/447492537941',
        content_type='application/json',
    )

    data = json.loads(response.get_data(as_text=True))

    assert response.status_code == 200
    assert data['number'] == "Success"


def test_valid_phone_number_with_invalid_country_code():        
    response = app.test_client().post(
        '/verify/347492537941',
        content_type='application/json',
    )

    data = json.loads(response.get_data(as_text=True))

    assert response.status_code == 403
    assert data['error'] == "Incorrect phone number"


def test_invalid_phone_number_with_invalid_country_code():        
    response = app.test_client().post(
        '/verify/+348492537941',
        content_type='application/json',
    )

    data = json.loads(response.get_data(as_text=True))

    assert response.status_code == 403
    assert data['error'] == "Incorrect phone number"


def test_invalid_phone_number_with_valid_country_code():        
    response = app.test_client().post(
        '/verify/+448492537941',
        content_type='application/json',
    )

    data = json.loads(response.get_data(as_text=True))

    assert response.status_code == 403
    assert data['error'] == "Incorrect phone number"


def test_invalid_phone_number_without_country_code():        
    response = app.test_client().post(
        '/verify/08492537941',
        content_type='application/json',
    )

    data = json.loads(response.get_data(as_text=True))

    assert response.status_code == 403
    assert data['error'] == "Incorrect phone number"


def test_invalid_phone_number_without_country_code_and_zero():        
    response = app.test_client().post(
        '/verify/8492537941',
        data=json.dumps({'number': ''}),
        content_type='application/json',
    )

    data = json.loads(response.get_data(as_text=True))

    assert response.status_code == 403
    assert data['error'] == "Incorrect phone number"

def test_valid_phone_number_without_country_code_and_zero():        
    response = app.test_client().post(
        '/verify/7492537941',
        content_type='application/json',
    )

    data = json.loads(response.get_data(as_text=True))

    assert response.status_code == 403
    assert data['error'] == "Incorrect phone number"

def test_invalid_phone_number():        
    response = app.test_client().post(
        '/verify/92537941',
        content_type='application/json',
    )

    data = json.loads(response.get_data(as_text=True))

    assert response.status_code == 403
    assert data['error'] == "Incorrect phone number"

def test_invalid_phone_number_as_anunymous_string_1():        
    response = app.test_client().post(
        '/verify/wefgdnjyrthbf',
        content_type='application/json',
    )

    data = json.loads(response.get_data(as_text=True))

    assert response.status_code == 403
    assert data['error'] == "Incorrect phone number"

def test_invalid_phone_number_as_anunymous_string_2():        
    response = app.test_client().post(
        '/verify/++++++££££££',
        content_type='application/json',
    )

    data = json.loads(response.get_data(as_text=True))

    assert response.status_code == 403
    assert data['error'] == "Incorrect phone number"

def test_invalid_phone_number_as_anunymous_string_3():        
    response = app.test_client().post(
        '/verify/+x',
        content_type='application/json',
    )

    data = json.loads(response.get_data(as_text=True))

    assert response.status_code == 403
    assert data['error'] == "Incorrect phone number"

def test_invalid_phone_number_as_anunymous_string_4():        
    response = app.test_client().post(
        '/verify/+44749253794a',
        content_type='application/json',
    )

    data = json.loads(response.get_data(as_text=True))

    assert response.status_code == 403
    assert data['error'] == "Incorrect phone number"

def test_invalid_phone_number_as_anunymous_string_5():        
    response = app.test_client().post(
        '/verify/+44749253794.',
        content_type='application/json',
    )

    data = json.loads(response.get_data(as_text=True))

    assert response.status_code == 403
    assert data['error'] == "Incorrect phone number"

def test_invalid_phone_number_as_anunymous_string_6():        
    response = app.test_client().post(
        '/verify/+44749253794223',
        content_type='application/json',
    )

    data = json.loads(response.get_data(as_text=True))

    assert response.status_code == 403
    assert data['error'] == "Incorrect phone number"

def test_valid_phone_number_with_get_call():        
    response = app.test_client().get(
        '/verify/+447492537941',
        content_type='application/json',
    )
    assert response.status_code == 405