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
      page: 1,
    };
  }
  async componentDidMount() {
    //get url
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=fcf7501f86ec459bb99f51f6ccb8a492&pageSize=18";
    //fetch the api
    let data = await fetch(url);
    //Convert to json
    let parseData = await data.json();
    //pass data to state article
    this.setState({
      articles: parseData.articles,
      totalArticles: parseData.totalResults,
    });
  }
  handlePreviousClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=fcf7501f86ec459bb99f51f6ccb8a492&page=${
      this.state.page - 1
    } &pageSize=18`;
    //fetch the api
    let data = await fetch(url);
    //Convert to json
    let parseData = await data.json();
    console.log(parseData);
    //pass data to state article
    this.setState({ page: this.state.page - 1, articles: parseData.articles });
  };
  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalArticles / 18)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=fcf7501f86ec459bb99f51f6ccb8a492&page=${
        this.state.page + 1
      }&pageSize=18`;
      //fetch the api
      let data = await fetch(url);
      //Convert to json
      let parseData = await data.json();
      console.log(parseData);
      //pass data to state article
      this.setState({
        page: this.state.page + 1,
        articles: parseData.articles,
      });
    }
  };
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
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePreviousClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
