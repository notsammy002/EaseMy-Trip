import React from "react";

import style from "./topflight.module.css";
const TopFlight = () => {
  return (
    <div className={style.main}>
      <h1></h1>
      <div className={style.first}>
        <div>
          <div className={style.innercard}>
            <p>Delhi to Mumbai(DEL-BOM)</p>
            <button>Search Flight</button>
          </div>
          <div className={style.innercard}>
            {" "}
            <p> Mumbai to Delhi (BOM-DEL)</p>
            <button>Search Flight</button>
          </div>
          <div className={style.innercard}>
            {" "}
            <p>Delhi to Goa(DEL-GOI)</p>
            <button>Search Flight</button>
          </div>
          <div className={style.innercard}>
            {" "}
            <p>Delhi to Banglore(DEL-BLR)</p>
            <button>Search Flight</button>
          </div>
          <div className={style.innercard}>
            {" "}
            <p>Mumbai to Goa(DEL-GOI)</p>
            <button>Search Flight</button>
          </div>
        </div>
        <hr />
        <div>
          <div className={style.innercard}>
            {" "}
            <p>Delhi to Patna(DEL-PAT)</p>
            <button>Search Flight</button>
          </div>
          <div className={style.innercard}>
            {" "}
            <p>Delhi to Kolkata(DEL-CCU)</p>
            <button>Search Flight</button>
          </div>
          <div className={style.innercard}>
            {" "}
            <p>Delhi to Pune(DEL-PNQ)</p>
            <button>Search Flight</button>
          </div>
          <div className={style.innercard}>
            {" "}
            <p> Kolkata to Delhi(CCU-DEL)</p>
            <button>Search Flight</button>
          </div>
          <div className={style.innercard}>
            {" "}
            <p>Mumbai to Banglore(BOM-BLR)</p>
            <button>Search Flight</button>
          </div>
        </div>
      </div>
      <div className={style.second}>
        <div className={style.news}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjj3iAze8IukiHvHfHkxho4jBy6EEcGMj_ag&usqp=CAU" alt="" />
          <div className={style.news_text}>
            <h5>India to resume international flights today after 2 years.</h5>
            <p>
              After two years hiatus of coronavirus pandemic, regular
              international flights
            </p>
          </div>
        </div>
        <div className={style.news}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjj3iAze8IukiHvHfHkxho4jBy6EEcGMj_ag&usqp=CAU" alt="" />
          <div className={style.news_text}>
            <h5>India to resume international flights today after 2 years.</h5>
            <p>
              After two years hiatus of coronavirus pandemic, regular
              international flights
            </p>
          </div>
        </div>
        <div className={style.news}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjj3iAze8IukiHvHfHkxho4jBy6EEcGMj_ag&usqp=CAU" alt="" />
          <div className={style.news_text}>
            <h5>Travel to Shimla, Dharamshala Manali on a Volvo from Chandigarh airport.</h5>
            <p>
            Under the UDAN scheme, Himachal Road Transport Corporation (HRTC) minister
            </p>
          </div>
        </div>
        <div className={style.news}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjj3iAze8IukiHvHfHkxho4jBy6EEcGMj_ag&usqp=CAU" alt="" />
          <div className={style.news_text}>
            <h5>Singapore to replace its COVID 19 rules.</h5>
            <p>
            From 1st April, fully vaccinated passengers will be permitted to enter Singapore
            </p>
          </div>
        </div>
        <div className={style.news}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjj3iAze8IukiHvHfHkxho4jBy6EEcGMj_ag&usqp=CAU" alt="" />
          <div className={style.news_text}>
            <h5>Domestic air travel to pick up pace.</h5>
            <p>
            Places like Goa, Srinagar, Daman, are the preferred destinations for this summer
            </p>
          </div>
        </div>
        <div className={style.news}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjj3iAze8IukiHvHfHkxho4jBy6EEcGMj_ag&usqp=CAU" alt="" />
          <div className={style.news_text}>
            <h5>Planning to fly to Spain: Rules explained</h5>
            <p>
            Many European countries have lifted their restrictions but Spain
            </p>
          </div>
        </div>
        <div className={style.news}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjj3iAze8IukiHvHfHkxho4jBy6EEcGMj_ag&usqp=CAU" alt="" />
          <div className={style.news_text}>
            <h5>If you are fully vaccinated then one can fly to these places with no quarantine restrictions</h5>
            <p>
            As the cases are decreased international travel is opening up.
            </p>
          </div>
        </div>
        <div className={style.news}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjj3iAze8IukiHvHfHkxho4jBy6EEcGMj_ag&usqp=CAU" alt="" />
          <div className={style.news_text}>
            <h5>Hong Kong to remove ban on international flights</h5>
            <p>
            From April 1, Hong Kong plans to restart international flights.
            </p>
          </div>
        </div>
        <div className={style.news}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjj3iAze8IukiHvHfHkxho4jBy6EEcGMj_ag&usqp=CAU" alt="" />
          <div className={style.news_text}>
            <h5>India to resume international flights today after 2 years.</h5>
            <p>
              After two years hiatus of coronavirus pandemic, regular
              international flights
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default TopFlight;
