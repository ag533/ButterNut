import React, { useEffect, useState } from 'react';
import "./App.css";
import PhoneLogo from './assets/images/mobile-icon.svg';
import ValidationLogo from './assets/images/green-checkmark.svg';
import ErrorLogo from './assets/images/red-cross.svg';
import InfoLogo from './assets/images/icon-info.svg';


 
function ValidatedForm() {
    // State for storing the number
    const [number, setNumber] = useState("");
    // State to store if the number is valid or not.
    const [isPhoneValid, setIsPhoneValid] = useState(false);
    // State to store if the input field is focused to not.
    const [inputFocused, setInputFocused] = useState(false);
    // State to check is input field is empty or not.
    const [isEmpty, setIsEmpty] = useState(true);
    // State to store response status code from the API.
    const [response, setResponse] = useState(0);

    // Function to handle submit button.
    const handleSubmit = () => {
        if (isPhoneValid) {
            verify();
            if (response === 200) {
                alert('Number Verified')
            }
        }
    }

    // When response changes check for the status code and display appropriate alert.
    useEffect(() => {
        if (response === 200) {
            alert('Number Verified')
        } else if (response === 403) {
            alert('Incorrect Number')
        }
    }, [response]);

    // Appropriate API call to the server.
    const verify = () => {
        fetch('http://127.0.0.1:8000/verify/' + number, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            mode: 'cors'})
            .then(response => setResponse(response.status));
    }

    // Function to change state when input field is selected or in focus.
    const onFocus = () => {
        setInputFocused(true);
    }

    // Function to change state of focus and enpty when input field is not selected.
    const onBlur = () => {
        setInputFocused(false);
        const inputFeilds = document.querySelectorAll("input");
        const validInputs = Array.from(inputFeilds).filter( input => input.value !== "");
        if (validInputs.length > 0) {
            if (validInputs[0].type === "text") {
                setIsEmpty(false);
            }
        } else {
            setIsEmpty(true);
        }
    }

    // Function to check for number validation on each click
    const handleChange = (e: any) => {
        const regex1 = new RegExp(/^(07[\d]{8,12})$/);
        const regex2 = new RegExp(/^(447[\d]{7,11})$/);
        const removed_data = e.target.value.replace('+','')
        if (regex1.test(e.target.value) && e.target.value.length === 11) {
            setIsPhoneValid(true);
            setIsEmpty(false);
            setNumber(e.target.value);
        } else if (regex2.test(removed_data) && removed_data.length === 12) {
            setIsPhoneValid(true);
            setIsEmpty(false);
            setNumber(e.target.value);
        } else {
            setIsPhoneValid(false);
            setIsEmpty(false);
        }
    }

    return (
        <div className="wrapper">
            <div className="form-wrapper">
                <h1> Mobile Verification </h1>
                {/* If condition in the div 'outer-form' to change border and background color depending on the following scenerio:
                    Empty : light blue border and white background
                    Not empty and valid : regular blue and white background
                    Not empty and invalid : red and pink background */}
                <div className="outer-form" style={
                        isEmpty ? {border: '2.5px solid #5d92b8', background: '#FFFFFF'} : isPhoneValid ?
                        {border: '2.5px solid #1e5d84', background: '#FFFFFF'} : 
                        {border: '2.5px solid #d2322e', background: '#f2c4c4'}
                        }>
                    <div className="phone-img-div">
                        <img className="phone-img" src={PhoneLogo} alt="React Logo" />
                    </div>
                    <div className="form">
                        {/* If condition in the input to change background color depending on the following scenerio:
                            Empty : white background and dark blue text
                            Not empty and valid : regular blue color and white background
                            Not empty and invalid : red color and pink background */}
                        <input type="text" name="name" 
                                required autoComplete="off" onFocus={onFocus} 
                                onBlur={onBlur} onChange={handleChange} style={ isEmpty ? {background: '#FFFFFF', color: '#1e5d84'} : isPhoneValid ? {background: '#FFFFFF', color: '#1e5d84'} : {background: '#f2c4c4', color: '#d2322e'}}/>
                        {/* animation for the label are done in the css */}
                        <label htmlFor="name" className="label-name">
                            <span className="content-name" style={
                                    (inputFocused && !isEmpty) || (!inputFocused && !isEmpty) ? isPhoneValid ?
                                    {color: '#5d92b8'} : 
                                    {color: '#d2322e'} : {color: '#5d92b8'}}>
                                Your mobile number
                            </span>
                        </label>
                    </div>
                    {/* This div will only appear if phone number is valid */}
                    { isPhoneValid && <div className="validation-image-div">
                        <img className="validation-img" src={ValidationLogo} alt="React Logo" />
                    </div>}
                </div>
                {/* This div will only appear if phone number is invalid and not empty */}
                { !isPhoneValid && !isEmpty && <div className="error-div">
                    <div className="error-image-div">
                        <img className="error-img" src={ErrorLogo} alt="React Logo" />
                    </div>
                    <span className="error-content">
                        Please enter a valid UK mobile number.
                    </span>
                </div>}
                <div className="info-div">
                    <div className="info-image-div">
                        <img className="info-img" src={InfoLogo} alt="React Logo" />
                    </div>
                    <span className="info-content">
                        Your courier will text you on the day with a delivery time slot. This is optional.
                    </span>
                </div>
                <div className="submit-button-div">
                    <button className="submit-button" onClick={handleSubmit}>SUBMIT PHONE NUMBER</button>
                </div>
            </div>
        </div>
    );
}
 
export default ValidatedForm;