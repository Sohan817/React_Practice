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
    {
      source: { id: null, name: "SheKnows" },
      author: "Delilah Gray",
      title:
        "Kevin Costner’s Accountant Alleges Christine Baumgartner Pays a Jaw-Dropping Monthly Amount on Designer Clothes - Yahoo Entertainment",
      description:
        "Remember early on in Kevin Costner and Christine Baumgartner’s divorce proceedings that he alleged the huge sum she wanted in child support was to benefit...",
      url: "https://www.sheknows.com/entertainment/articles/2837577/kevin-costner-accountant-christine-baumgartner-monthly-amount-clothes/",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/aaIE93_5ojfd9yLiZ75L8g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD05MDA-/https://media.zenfs.com/en/sheknows_79/517f70c1245d35c549e7a9621fd8c6ec",
      publishedAt: "2023-09-03T19:18:00Z",
      content:
        "If you purchase an independently reviewed product or service through a link on our website, SheKnows may receive an affiliate commission. \r\nRemember early on in Kevin Costner and Christine Baumgartne… [+1742 chars]",
    },
    {
      source: { id: null, name: "PhoneArena" },
      author: "Alan Friedman",
      title:
        "Having opposed the EU rule originally, Apple will now gaslight you about USB-C for iPhone - PhoneArena",
      description:
        "Get ready to hear Apple spin positives about the iPhone 15's new USB-C port even though it didn't want to make the change at all.",
      url: "https://www.phonearena.com/news/apples-ubc-c-gaslighting_id150362",
      urlToImage:
        "https://m-cdn.phonearena.com/images/article/150362-wide-two_1200/Having-opposed-the-EU-rule-originally-Apple-will-now-gaslight-you-about-USB-C-for-iPhone.jpg",
      publishedAt: "2023-09-03T18:45:44Z",
      content:
        "Enjoy the hottest mobile tech storylines, delivered straight to your inbox.",
    },
    {
      source: { id: "abc-news", name: "ABC News" },
      author: "The Associated Press",
      title:
        "Minnesota prison on emergency lockdown after about 100 inmates 'refuse' to return to cells - ABC News",
      description:
        "A Minnesota prison has been placed on emergency lockdown after about 100 inmates in a housing unit facing dangerously high heat would not return to their cells",
      url: "https://abcnews.go.com/US/wireStory/minnesota-prison-emergency-lockdown-after-100-inmates-refuse-102895704",
      urlToImage:
        "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
      publishedAt: "2023-09-03T18:37:28Z",
      content:
        "STILLWATER, Minn. -- STILLWATER, Minn. (AP) \r\nA Minnesota prison has been placed on emergency lockdown after about 100 inmates in one housing unit facing dangerously high temperatures would not retur… [+2953 chars]",
    },
    {
      source: { id: null, name: "Neurosciencenews.com" },
      author: "Neuroscience News",
      title:
        "Top 5 Neuroscience Discoveries of the Week - September 3, 2023 - Neuroscience News",
      description:
        "This week in neuroscience, we've seen groundbreaking advancements ranging from a diet that can potentially extend lifespan without calorie restriction, to a new drug that could revolutionize obesity treatment.",
      url: "https://neurosciencenews.com/neuroscience-news-weekly-sep-3-2023/",
      urlToImage:
        "https://neurosciencenews.com/files/2023/09/nn-weekly-sept-3.jpg",
      publishedAt: "2023-09-03T18:36:46Z",
      content:
        "Summary: This week in neuroscience, we’ve seen groundbreaking advancements ranging from a diet that can potentially extend lifespan without calorie restriction, to a new drug that could revolutionize… [+2872 chars]",
    },
    {
      source: { id: "fox-news", name: "Fox News" },
      author: "Stephen Sorace",
      title: "Wisconsin deer farm infected with fatal brain disease - Fox News",
      description:
        "A 150-acre deer farm in Washburn County, Wisconsin, is under quarantine after officials confirmed a doe was infected with chronic wasting disease.",
      url: "https://www.foxnews.com/us/wisconsin-deer-farm-infected-fatal-brain-disease",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2023/09/Whitetail-deer-Getty.jpg",
      publishedAt: "2023-09-03T18:14:00Z",
      content:
        "A deer farm in Wisconsin is under quarantine after testing positive for chronic wasting disease (CWD), a highly contagious and fatal brain disease.\r\nScientists with the National Veterinary Services L… [+1661 chars]",
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
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title.slice(0, 45)}
                  description={element.description.slice(0, 88)}
                  imageUrl={element.urlToImage}
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
