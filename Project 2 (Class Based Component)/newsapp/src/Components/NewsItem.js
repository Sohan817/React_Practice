import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://sportshub.cbsistatic.com/i/r/2023/09/03/9f43b5c6-87c2-4c65-ac21-48687cfcbb2c/thumbnail/1200x675/a6ba3e2e53097d1e98f280eb781d2b8d/graphic-w1movers.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/newsdetail" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}
