import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
NewsItem;

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState(0);
  const capitalizedFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    //get url
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    //fetch the api
    let data = await fetch(url);
    props.setProgress(30);
    //Convert to json
    let parseData = await data.json();
    props.setProgress(70);
    //pass data to state article
    setArticles(parseData.articles);
    setTotalArticles(parseData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };
  useEffect(() => {
    document.title = `NewsMonkey-${capitalizedFirst(props.category)}`;
    updateNews();
    //eslint-disable-next-line
  }, []);

  // //Handle previous page
  // const handlePreviousClick = async () => {
  //   setPage(page - 1);
  //   updateNews();
  // };
  // //Handle next page
  // const handleNextClick = async () => {
  //   setPage(page - 1);
  //   updateNews();
  // };
  const fetchMoreData = async () => {
    //get url
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    //this.setState({ loading: true });
    //fetch the api
    let data = await fetch(url);
    //Convert to json
    let parseData = await data.json();
    //pass data to state article
    setArticles(articles.concat(parseData.articles));
    setTotalArticles(parseData.totalResults);
  };
  return (
    <>
      <h1 className="text-center" style={{ marginTop: "90px" }}>
        NewsMonkey-Top {capitalizedFirst(props.category)} Headlines
      </h1>
      {loading && <Spinner />}
      {/* Infinite scroll */}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalArticles}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
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
                    description={
                      // @ts-ignore
                      element.description ? element.description : ""
                    }
                    // @ts-ignore
                    imageUrl={element.urlToImage}
                    // @ts-ignore
                    newsUrl={element.url}
                    // @ts-ignore
                    author={element.author}
                    // @ts-ignore
                    date={element.publishedAt}
                    // @ts-ignore
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
      {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePreviousClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalArticles / props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>*/}
    </>
  );
};
News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
