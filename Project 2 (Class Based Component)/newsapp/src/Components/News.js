import React, { Component } from "react";
import NewsItem from "./NewsItem";
NewsItem;
export default class News extends Component {
  articles = [
    {
      source: { id: null, name: "CBS Sports" },
      author: "",
      title:
        "College football rankings: Notre Dame, Alabama, Colorado ascend as Ohio State, TCU drop in top 25 polls - CBS Sports",
      description:
        "New blood should rise up the top 25 polls when the college football rankings are released later this week",
      url: "https://www.cbssports.com/college-football/news/college-football-rankings-notre-dame-alabama-colorado-ascend-as-ohio-state-tcu-drop-in-top-25-polls/",
      urlToImage:
        "https://sportshub.cbsistatic.com/i/r/2023/09/03/9f43b5c6-87c2-4c65-ac21-48687cfcbb2c/thumbnail/1200x675/a6ba3e2e53097d1e98f280eb781d2b8d/graphic-w1movers.png",
      publishedAt: "2023-09-03T03:48:00Z",
      content:
        "The first regular-season 2023 college football rankings won't be released on Sunday like usual even though Week 1 has already provided enough thrills to know there will be some shake-ups coming in th… [+2053 chars]",
    },
  ];
  constructor() {
    // @ts-ignore
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h1>NewsMonkey-Top Headlines</h1>
        <div className="row">
          <div className="col-md-4">
            <NewsItem
              title="My title"
              description="medesc"
              imageUrl="https://sportshub.cbsistatic.com/i/r/2023/09/03/9f43b5c6-87c2-4c65-ac21-48687cfcbb2c/thumbnail/1200x675/a6ba3e2e53097d1e98f280eb781d2b8d/graphic-w1movers.png"
              newsUrl="Todo"
            />
          </div>
          <div className="col-md-4">
            <NewsItem title="My title" description="medesc" />
          </div>
          <div className="col-md-4">
            <NewsItem title="My title" description="medesc" />
          </div>
        </div>
      </div>
    );
  }
}
