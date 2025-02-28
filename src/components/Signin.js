// src/components/SignInPage.js

import React from 'react';
import './Signin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SignInPage() {
  return (
    <div className="signin-container">
      <div className="signin-form-container">
        <form className="signin-form">
          <a href="/">
            <img className="signin-logo" src="data:image/png;base64,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" alt="darkLogo" />
          </a>
          <div className="signin-form-box">
            <h2 className="signin-heading">Sign in</h2>
            <div className="signin-input-group">
              <div className="signin-input-item">
                <p className="signin-label">Email or mobile phone number</p>
                <input
                  className="signin-input"
                  type="email"
                 
                />
                <p className="signin-error">Invalid Email</p>
              </div>
              <div className="signin-input-item">
                <p className="signin-label">Password</p>
                <input
                  className="signin-input"
                  type="password"
                
                />
              </div>
              <button className="signin-button">Continue</button>
            </div>
            <p className="signin-terms">
              By Continuing, you agree to Amazon's{' '}
              <span className="signin-link">Conditions of Use</span> and{' '}
              <span className="signin-link">Privacy Notice</span>.
            </p>
            <p className="signin-help">
          
            <FontAwesomeIcon icon="fa-solid fa-caret-right" />
              <span className="signin-help-text">Need help?</span>
            </p>
          </div>
          <p className="signin-new-user">
            <span className="signin-divider"></span>
            <span className="signin-new-text">New to Amazon?</span>
            <span className="signin-divider"></span>
          </p>
          <a className="signin-create-account" href="/registration">
            <button className="signin-create-button">Create your Amazon account</button>
          </a>
        </form>
      </div>
      <div className="signin-footer">
        <div className="signin-footer-links">
          <p className="signin-footer-link">Conditions of Use</p>
          <p className="signin-footer-link">Privacy Notice</p>
        </div>
        <p className="signin-footer-text">
          © 1996-2023, ReactBd.com, Inc. or its affiliates
        </p>
      </div>
    </div>
  );
}

export default SignInPage;
