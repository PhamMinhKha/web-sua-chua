import React from "react";
export default function timeline(child) {
    
  return (
    <div>
    
      <body>
        <div className="container">
          {child}
          <ul>
            <li>
              <span></span>
              <div>
                <div className="title">Codify</div>
                <div className="info">Let&apos;s make coolest things in css</div>
                <div className="type">Presentation</div>
              </div>{" "}
              <span className="number">
                <span>10:00</span> <span>12:00</span>
              </span>
            </li>
            <li>
              <div>
                <span></span>
                <div className="title">Codify</div>
                <div className="info">
                  Let&apos;s make coolest things in javascript
                </div>
                <div className="type">Presentation</div>
              </div>{" "}
              <span className="number">
                <span>13:00</span> <span>14:00</span>
              </span>
            </li>
            <li>
              <div>
                <span></span>
                <div className="title">Codify</div>
                <div className="info">Let&apos;s make coolest things in css</div>
                <div className="type">Review</div>
              </div>{" "}
              <span className="number">
                <span>15:00</span> <span>17:45</span>
              </span>
            </li>
          </ul>
        </div>
      </body>
      <style jsx>{`
  @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700");
  body {
    height: 100vh;
    font-family: "Open Sans", sans-serif;
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#bea2e7+0,86b7e7+100 */
    background: #bea2e7;
    /* Old browsers */
    background: -moz-linear-gradient(top, #bea2e7 0%, #86b7e7 100%);
    /* FF3.6-15 */
    background: -webkit-linear-gradient(top, #bea2e7 0%, #86b7e7 100%);
    /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, #bea2e7 0%, #86b7e7 100%);
    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#bea2e7', endColorstr='#86b7e7',GradientType=0 );
    /* IE6-9 */
  }

  .container ul {
    margin: 0;
    margin-top: 100px;
    list-style: none;
    position: relative;
    padding: 1px 100px;
    color: #fff;
    font-size: 13px;
  }
  .container ul:before {
    content: "";
    width: 1px;
    height: 100%;
    position: absolute;
    border-left: 2px dashed #fff;
  }
  .container ul li {
    position: relative;
    margin-left: 30px;
    background-color: rgba(255, 255, 255, 0.2);
    padding: 14px;
    border-radius: 6px;
    width: 250px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.08);
  }
  .container ul li:not(:first-child) {
    margin-top: 60px;
  }
  .container ul li > span {
    width: 2px;
    height: 100%;
    background: #fff;
    left: -30px;
    top: 0;
    position: absolute;
  }
  .container ul li > span:before,
  .container ul li > span:after {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 2px solid #fff;
    position: absolute;
    background: #86b7e7;
    left: -5px;
    top: 0;
  }
  .container ul li span:after {
    top: 100%;
  }
  .container ul li > div {
    margin-left: 10px;
  }
  .container div .title,
  .container div .type {
    font-weight: 600;
    font-size: 12px;
  }
  .container div .info {
    font-weight: 300;
  }
  .container div > div {
    margin-top: 5px;
  }
  .container span.number {
    height: 100%;
  }
  .container span.number span {
    position: absolute;
    font-size: 10px;
    left: -35px;
    font-weight: bold;
  }
  .container span.number span:first-child {
    top: 0;
  }
  .container span.number span:last-child {
    top: 100%;
  }
`}</style>
      </div>
  );
}


