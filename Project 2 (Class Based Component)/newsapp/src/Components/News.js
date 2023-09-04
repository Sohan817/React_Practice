import React, { Component } from "react";
import NewsItem from "./NewsItem";
NewsItem;
export default class News extends Component {
  constructor() {
    // @ts-ignore
    super();
    this.state = {
      articles: [],
      loading: true,
    };
  }
  async componentDidMount() {
    //get url
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=fcf7501f86ec459bb99f51f6ccb8a492";
    //fetch the api
    let data = await fetch(url);
    //Convert to json
    let parseData = await data.json();
    console.log(parseData);
    //pass data to state article
    this.setState({ articles: parseData.articles });
  }
  render() {
    return (
      <div className="container my-3">
        <h1>NewsMonkey-Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div
                className="col-md-4"
                key={
                  // @ts-ignore
                  element.url
                }
              >
                <NewsItem
                  // @ts-ignore
                  title={element.title ? element.title : ""}
                  // @ts-ignore
                  description={element.description ? element.description : ""}
                  // @ts-ignore
                  imageUrl={element.urlToImage}
                  // @ts-ignore
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
