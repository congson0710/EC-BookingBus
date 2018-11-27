import React, { Component } from 'react';

import Top_1 from '../images/top_1.jpg';
import Top_2 from '../images/top_2.jpg';
import Top_3 from '../images/top_3.jpg';
import Top_4 from '../images/top_4.jpg';

class TopDestination extends Component {
  render() {
    return (
      <div className="top">
        <div className="container">
          <div className="section_title text-center">
            <h2>Top destinations in Europe</h2>
            <div>take a look at these offers</div>
          </div>
          <div className="row top_content">
            <div className="col-lg-3 col-md-6 top_col">
              <div className="top_item">
                <a href="/">
                  <div className="top_item_image">
                    <img src={Top_1} alt="" />
                  </div>
                  <div className="top_item_content">
                    <div className="top_item_price">From $890</div>
                    <div className="top_item_text">Paris, France</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 top_col">
              <div className="top_item">
                <a href="/">
                  <div className="top_item_image">
                    <img src={Top_2} alt="" />
                  </div>
                  <div className="top_item_content">
                    <div className="top_item_price">From $890</div>
                    <div className="top_item_text">Italian Riviera</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 top_col">
              <div className="top_item">
                <a href="/">
                  <div className="top_item_image">
                    <img src={Top_3} alt="" />
                  </div>
                  <div className="top_item_content">
                    <div className="top_item_price">From $890</div>
                    <div className="top_item_text">Cinque Terre</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 top_col">
              <div className="top_item">
                <a href="/">
                  <div className="top_item_image">
                    <img src={Top_4} alt="" />
                  </div>
                  <div className="top_item_content">
                    <div className="top_item_price">From $890</div>
                    <div className="top_item_text">Santorini, Greece</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopDestination;
