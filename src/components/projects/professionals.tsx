import React from "react";

const Professionals = () => {

    return (
        <div>
          <h1>Engineers/Technical Professionals</h1>
          <div className="yellow-line"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </p>
          
          <style>
            {`
              h1 {
                font-family: "Arial", sans-serif;
                font-size: 25px;
                font-weight: normal;
                padding-left: 15px;
                display: inline-block;
              }
    
              .yellow-line {
                display: inline-block;
                width: 115px;
                height: 2px;
                background-color: #ffb81c;
                margin-left: 5px;
                vertical-align: text-top;
                margin-top: 5px;
              }
    
              p {
                font-family: "Arial", sans-serif;
                font-size: 10.5px;
                line-height: 1.4;
                width: 33%;
                margin-left: left;
                margin-right: left;
                padding: 2px;
                padding-left: 18px;
                text-align: left;
                word-wrap: break-word;
              }
            `}
          </style>
        </div>
      );
    };
    
    export default Professionals;