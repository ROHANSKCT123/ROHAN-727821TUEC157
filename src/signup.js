import React from 'react';
import './signup.css'

function MyForm() {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="./style.css" />
        <title>CSS Form</title>
      </head>

      <body id="body">
        <div className="container">
          <form action="./index.html" method="POST" className="content">
            <h1 id="say-hello">Sign Up</h1>
            <div>
              <div className="first name">
                <label htmlFor="first name">First Name</label><br />
                <input className="fld" placeholder="Enter your first name" id="first name" />
              </div>

              <div className="last name">
                <label htmlFor="last name">Last Name</label><br />
                <input className="fld" placeholder="Enter your last name" id="Last name" />
              </div>

              <div className="email">
                <label htmlFor="email">Email</label><br />
                <input className="fld" placeholder="Enter your email address" id="email" />
              </div>

              <div className="password">
                <label htmlFor="password">Password</label><br />
                <input className="fld" placeholder="Enter your password" id="password" />
              </div>

              <div className="conform password">
                <label htmlFor="conform password">Conform Password</label><br />
                <input className="fld" placeholder="Reenter the password" id="password" />
              </div>
          <div>

          </div>

           

            
            </div>

            <button className="btn" type="submit">Submit &#129046;</button>
          </form>
        </div>
      </body>
    </html>
  );
}

export default MyForm;