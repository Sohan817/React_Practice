import React, { Component } from "react";
import NewsItem from "./NewsItem";
NewsItem;
export default class News extends Component {
  render() {
    return (
      <div>
        This is a news components
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>
    );
  }
}
