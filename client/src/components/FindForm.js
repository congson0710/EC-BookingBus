import React, { Component } from 'react';

class FindForm extends Component {
  render() {
    return (
      <div className="find">
        <div className="container">
          <h1 className="find_title text-center">Tìm vé xe</h1>
          <div className="find_form_container">
            <form className="find_form d-flex flex-md-row flex-column align-items-md-center align-items-start justify-content-md-between justify-content-start flex-wrap">
              <div className="find_item">
                <div className="text-left">Điểm đi</div>
                <input
                  type="text"
                  className="destination find_input"
                  required="required"
                  placeholder="Keyword here"
                />
              </div>
              <div className="find_item">
                <div className="text-left">Điểm đến</div>
                <input
                  type="text"
                  className="destination find_input"
                  required="required"
                  placeholder="Keyword here"
                />
              </div>
              <div className="find_item">
                <div className="text-left">Ngày đi</div>
                <input
                  type="date"
                  className="destination find_input unstyled"
                  required="required"
                  placeholder="Keyword here"
                />
              </div>
              <button className="button find_button">Tìm kiếm</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default FindForm;
