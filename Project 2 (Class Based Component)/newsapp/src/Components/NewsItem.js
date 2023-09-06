import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{ zIndex: "1", left: "90%" }}
          >
            {source}
          </span>
          <img
            src={
              !imageUrl
                ? "https://english.cdn.zeenews.com/sites/default/files/2023/09/03/1274061-live-score.png"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date)
                  // @ts-ignore
                  .toGMTString()}
              </small>
            </p>
            <a href={newsUrl} className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
