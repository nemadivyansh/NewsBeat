import React, { Component } from "react";
import NewsItem from "./NewsItem";

import PropTypes from "prop-types";

export class News extends Component {
  //   articles = [
  //     {
  //       source: { id: null, name: "Moneycontrol" },
  //       author: "Moneycontrol News",
  //       title:
  //         "ITC Q1 profit jumps 33% to Rs 4,462 crore; revenue rises 39% - Moneycontrol",
  //       description:
  //         "Revenue from operations stood at Rs 19,831.27 crore, up 39.25 percent from Rs 14,240.76 crore logged in the same quarter last year.",
  //       url: "https://www.moneycontrol.com/news/business/earnings/itc-q1-profit-jumps-33-to-rs-4462-crore-revenue-rises-39-8931441.html",
  //       urlToImage:
  //         "https://images.moneycontrol.com/static-mcnews/2022/06/ITC-770x433.png",
  //       publishedAt: "2022-08-01T11:54:45Z",
  //       content:
  //         "Diversified conglomerate ITC on August 1 said its net profit on a consolidated basis for the quarter ended June 2022 (Q1FY23) came in at Rs 4,462.25 crore, up 33.46 percent against Rs 3,343.44 crore … [+1031 chars]",
  //     },
  //     {
  //       source: { id: "the-times-of-india", name: "The Times of India" },
  //       author: "TIMESOFINDIA.COM",
  //       title:
  //         "Nothing Phone (1) latest software update: How it changes phone’s UI and more - Times of India",
  //       description:
  //         "Carl Pei's Nothing unveiled its first smartphone – Nothing Phone (1) – to the world last month. Since then, it has received a few updates addressing s",
  //       url: "https://timesofindia.indiatimes.com/gadgets-news/nothing-phone-1-latest-software-update-how-it-changes-phones-ui-and-more/articleshow/93275244.cms",
  //       urlToImage:
  //         "https://static.toiimg.com/thumb/msid-93275215,width-1070,height-580,imgsize-25426,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
  //       publishedAt: "2022-08-01T11:53:00Z",
  //       content: "",
  //     },
  //     {
  //       source: { id: null, name: "News18" },
  //       author: "News Desk",
  //       title:
  //         "Sanjay Raut Arrest LIVE: Court Remands Sena MP to ED Custody Till Aug 4; Home-made Food, Meeting With Lawye - News18",
  //       description:
  //         "Sanjay Raut Arrest LIVE Updates: Sanjay Raut, 60, was arrested after over six hours of questioning at the ED's zonal office in south Mumbai's Ballard Estate",
  //       url: "https://www.news18.com/news/politics/sanjay-raut-arrest-live-updates-shiv-sena-ed-patra-chawl-land-scam-case-uddhav-thacakeray-eknath-shinde-maharashtra-bjp-livenews-5662753.html",
  //       urlToImage:
  //         "https://images.news18.com/ibnlive/uploads/2022/08/shiv-sena-11-sanjay-raut-165934891616x9.jpg",
  //       publishedAt: "2022-08-01T11:46:24Z",
  //       content:
  //         "Aug 01, 2022 18:19 ISTED Action Against Sanjay Raut Based on Evidence: Fadnavis\r\nMaharashtra Deputy Chief Minister Devendra Fadnavis said the Enforcement Directorate’s action against Shiv Sena leader… [+7562 chars]",
  //     },
  //     {
  //       source: { id: "the-times-of-india", name: "The Times of India" },
  //       author: "TIMESOFINDIA.COM",
  //       title:
  //         "Madhya Pradesh: 8 dead as fire breaks out at private hospital in Jabalpur - Times of India",
  //       description:
  //         "At least eight people were killed after a massive fire broke out at a private hospital in Madhya Pradesh's Jabalpur. The incident took place at around",
  //       url: "https://timesofindia.indiatimes.com/city/bhopal/madhya-pradesh-4-dead-as-fire-breaks-out-at-private-hospital-in-jabalpur/articleshow/93274269.cms",
  //       urlToImage:
  //         "https://static.toiimg.com/thumb/msid-93274594,width-1070,height-580,imgsize-28104,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
  //       publishedAt: "2022-08-01T11:21:00Z",
  //       content:
  //         "Madhya Pradesh: At least 8 dead as fire breaks out at private hospital in Jabalpur https://t.co/uBzHiIlXMS https://t.co/qq8njTsJtA\r\n— The Times Of India (@timesofindia) 1659354846000",
  //     },
  //     {
  //       source: { id: null, name: "NDTV News" },
  //       author: null,
  //       title:
  //         "Kerala Man Who Died Tested Positive For Monkeypox: Minister - NDTV",
  //       description:
  //         "A Kerala man, recently back from the UAE, who died on Saturday had tested positive for monkeypox, said the state Health Minister.",
  //       url: "https://www.ndtv.com/india-news/kerala-man-who-died-tested-positive-for-monkeypox-minister-3213600",
  //       urlToImage:
  //         "https://c.ndtvimg.com/2022-07/pousd8n_monkeypox-india-afp-650_625x300_26_July_22.jpg",
  //       publishedAt: "2022-08-01T11:10:00Z",
  //       content:
  //         "New Delhi: A Kerala man, recently back from the UAE, who died on Saturday had tested positive for monkeypox, said the state Health Minister.\r\nThe patient was young, did not suffer from any other illn… [+1668 chars]",
  //     },
  //     {
  //       source: { id: null, name: "Firstpost" },
  //       author: "FP Sports",
  //       title:
  //         "CWG 2022 India Day 4 complete schedule, time in IST: Indian men's TT team plays in semis, boxers in action - Sports News , Firstpost - Firstpost",
  //       description:
  //         "CWG 2022 India Day 4 complete schedule, time in IST: Check full schedule from Day 4 as the Indian men's table tennis team plays its quarter-final match and boxer Amit Panghal begins his campaign.",
  //       url: "https://www.firstpost.com/sports/cwg-2022-india-day-4-complete-schedule-time-in-ist-indian-mens-table-tennis-team-play-in-semis-boxers-in-action-10989361.html",
  //       urlToImage:
  //         "https://images.firstpost.com/wp-content/uploads/2022/07/Commonwealth-Games-2022-India-Day-4-schedule.jpg",
  //       publishedAt: "2022-08-01T11:06:03Z",
  //       content:
  //         "CWG 2022 India Day 4 complete schedule, time in IST: Check full schedule from Day 4 as the Indian men's table tennis team plays its quarter-final match and boxer Amit Panghal begins his campaign.\r\n I… [+2759 chars]",
  //     },
  //     {
  //       source: { id: "google-news", name: "Google News" },
  //       author: null,
  //       title:
  //         "Belated ITR filing for AY 2022-23: Last Date, Penalty and other details you should know - The Financial Express",
  //       description: null,
  //       url: "https://news.google.com/__i/rss/rd/articles/CBMifGh0dHBzOi8vd3d3LmZpbmFuY2lhbGV4cHJlc3MuY29tL21vbmV5L2luY29tZS10YXgvYmVsYXRlZC1pdHItZmlsaW5nLWF5LTIwMjItMjMtbGFzdC1kYXRlLXBlbmFsdHktZGV0YWlscy1leHBsYWluZWQvMjYxMzM3NS_SAYEBaHR0cHM6Ly93d3cuZmluYW5jaWFsZXhwcmVzcy5jb20vbW9uZXkvaW5jb21lLXRheC9iZWxhdGVkLWl0ci1maWxpbmctYXktMjAyMi0yMy1sYXN0LWRhdGUtcGVuYWx0eS1kZXRhaWxzLWV4cGxhaW5lZC8yNjEzMzc1L2xpdGUv?oc=5",
  //       urlToImage: null,
  //       publishedAt: "2022-08-01T10:56:37Z",
  //       content: null,
  //     },
  //     {
  //       source: { id: null, name: "Hindustan Times" },
  //       author: "HT Entertainment Desk",
  //       title:
  //         "Sidharth Malhotra, Kiara Advani spotted together in Dubai, fans share pics - Hindustan Times",
  //       description:
  //         "Sidharth Malhotra and Kiara Advani's fans from Dubai have shared photos with them on social media.",
  //       url: "https://www.hindustantimes.com/entertainment/bollywood/sidharth-malhotra-kiara-advani-spotted-together-in-dubai-fans-share-pics-101659343406837.html",
  //       urlToImage:
  //         "https://images.hindustantimes.com/img/2022/08/01/1600x900/Untitled_design_(26)_1659345596812_1659345618180_1659345618180.png",
  //       publishedAt: "2022-08-01T10:33:37Z",
  //       content:
  //         "Photos of Kiara Advani and her rumoured boyfriend Sidharth Malhotra have been shared online. The photos are from Dubai, and fans are now speculating if the couple went their to celebrate Kiara's 30th… [+2092 chars]",
  //     },
  //     {
  //       source: { id: null, name: "Hindustan Times" },
  //       author: "HT Tech",
  //       title:
  //         "ALERT! Hackers spying on emails in the US via malicious Gmail, Microsoft Edge extensions on Google Chrome - HT Tech",
  //       description:
  //         "Hackers are now using malicious Gmail, Microsoft Edge extensions to spy on your emails. Here is all you need to know.",
  //       url: "https://tech.hindustantimes.com/tech/news/alert-hackers-spying-on-emails-in-the-us-via-malicious-gmail-microsoft-edge-extensions-on-google-chrome-71659348589458.html",
  //       urlToImage:
  //         "https://images.hindustantimes.com/tech/img/2022/08/01/1600x900/hacker_1648905691870_1659348699580_1659348699580.webp",
  //       publishedAt: "2022-08-01T10:13:21Z",
  //       content:
  //         "Almost everyone has a Gmail account. A Gmail account is not only used for official purposes, but also for private ones. In effect, Gmail has almost all of your private and professional details stored… [+1907 chars]",
  //     },
  //     {
  //       source: { id: null, name: "NDTV News" },
  //       author: null,
  //       title:
  //         "World Lung Cancer Day 2022: 10 Superfoods To Improve Lung Health - NDTV",
  //       description:
  //         "World Lung Cancer Day 2022: Here are beneficial superfoods you need to add to your diet if you want to improve your lung health.",
  //       url: "https://www.ndtv.com/health/world-lung-cancer-day-2022-10-superfoods-to-improve-lung-health-3213092",
  //       urlToImage:
  //         "https://c.ndtvimg.com/2022-05/im7fnujo_tomato-face-mask_625x300_23_May_22.jpg",
  //       publishedAt: "2022-08-01T10:07:22Z",
  //       content:
  //         "World Lung Cancer Day 2022: Tomatoes help heal lung damage caused by smoking\r\nAs World Lung Cancer Day is here, we must take this day to spread awareness of the importance of good lung health. Many f… [+3537 chars]",
  //     },
  //     {
  //       source: { id: null, name: "Hindustan Times" },
  //       author: "PTI",
  //       title:
  //         "Maruti Suzuki India reports jump in sales to 1.75 lakh units in July - Hindustan Times",
  //       description:
  //         "India's largest automobile manufacturer had reported 8% lower sales in the same month last year when the sales were struck low by Covid-19.",
  //       url: "https://www.hindustantimes.com/business/maruti-suzuki-india-reports-jump-in-sales-to-1-75-lakh-units-in-july-101659346793244.html",
  //       urlToImage:
  //         "https://images.hindustantimes.com/img/2022/08/01/1600x900/maruti_suzuki_india_reported_growth_in_sales_1659347477518_1659347477730_1659347477730.JPG",
  //       publishedAt: "2022-08-01T09:56:35Z",
  //       content:
  //         "Maruti Suzuki India Ltd on Monday reported an 8.28 per cent increase in total sales to 1,75,916 units in July 2022.\r\nThe company had sold a total of 1,62,462 units in the same month last year, Maruti… [+1207 chars]",
  //     },
  //     {
  //       source: { id: null, name: "News18" },
  //       author: "Aparna Deb",
  //       title:
  //         "Sensex, Nifty Climb Nearly 9% in July; Will The Rally Continue in August? - News18",
  //       description:
  //         "As bulls made a smart comeback on Dalal Street, the benchmark equity indices BSE Sensex and NSE Nifty rose over 8 per cent each in the last one month. Will the rally continue in August?",
  //       url: "https://www.news18.com/news/business/markets/sensex-nifty-climb-nearly-9-in-july-will-the-rally-continue-in-august-5665627.html",
  //       urlToImage:
  //         "https://images.news18.com/ibnlive/uploads/2022/06/sensex4-1-1-165604249116x9.jpg",
  //       publishedAt: "2022-08-01T09:56:00Z",
  //       content:
  //         "As bulls made a smart comeback on Dalal Street, the benchmark equity indices BSE Sensex and NSE Nifty rose over 8 per cent each in the last one month. Gains in the mid-and small-caps have been sharpe… [+2975 chars]",
  //     },
  //     {
  //       source: { id: null, name: "The Statesman" },
  //       author: "SNS",
  //       title:
  //         "Users report problems with Nothing smartphone, company clarifies - The Statesman",
  //       description:
  //         "Carl Pei- led Nothing's first cell phone went under the scanner as certain users saw a green color on the display of their handsets.",
  //       url: "https://www.thestatesman.com/technology/users-report-problems-nothing-smartphone-company-clarifies-1503095670.html",
  //       urlToImage:
  //         "https://www.thestatesman.com/wp-content/uploads/2022/08/nothing-phone.jpg",
  //       publishedAt: "2022-08-01T09:53:45Z",
  //       content:
  //         "After some Nothing Phone (1) users  took to social media platforms  to gripe about getting teeth issues with the display alongside shipping delays, , London-based consumer electronics said on  Monday… [+2022 chars]",
  //     },
  //     {
  //       source: { id: null, name: "NDTV News" },
  //       author: null,
  //       title:
  //         "Aamir Khan On \"Boycott Laal Singh Chaddha\" Twitter Trend: They Think I Don't Like India But It's Untrue - NDTV Movies",
  //       description:
  //         '"It is rather unfortunate that some people feel that way," said Aamir Khan',
  //       url: "https://www.ndtv.com/entertainment/aamir-khan-on-boycott-laal-singh-chaddha-twitter-trend-they-think-i-dont-like-india-but-its-untrue-3212930",
  //       urlToImage:
  //         "https://c.ndtvimg.com/2022-08/8vrfv4r8_aamir-khan_625x300_01_August_22.jpg",
  //       publishedAt: "2022-08-01T09:50:00Z",
  //       content:
  //         "Aamir Khan in Laal Singh Chaddha. (courtesy: YouTube)\r\nNew Delhi: Just a few days before its theatrical release, Aamir Khan's upcoming projectLaal Singh Chaddha became the unwilling centre of controv… [+1886 chars]",
  //     },
  //     {
  //       source: { id: null, name: "LatestLY" },
  //       author: "Agencies",
  //       title:
  //         "All You Need To Know About Hepatitis: Overview by Ziqitza Healthcare Ltd - LatestLY",
  //       description:
  //         "Liver has an amazing healing capacity. However, hepatitis which becomes chronic can cause life threatening conditions such as cirrhosis, liver failure and liver cancer. Viral infections and alcohol are the commonest cause of Hepatitis, further explained by Dr…",
  //       url: "https://www.latestly.com/lifestyle/health-wellness/all-you-need-to-know-about-hepatitis-overview-by-ziqitza-healthcare-ltd-4024577.html",
  //       urlToImage:
  //         "https://st1.latestly.com/wp-content/uploads/2022/08/Healthcare-784x441.jpg",
  //       publishedAt: "2022-08-01T09:44:45Z",
  //       content:
  //         "World Hepatitis Day is observed on 28th July every year by World Health Organization. The WHO theme of the World Hepatitis Day 2021 is Hepatitis cants wait. With a person dying every 30 seconds from … [+6655 chars]",
  //     },
  //     {
  //       source: { id: "the-times-of-india", name: "The Times of India" },
  //       author: "ET Spotlight Special",
  //       title:
  //         "NASA warns of more dangerous solar flares that can hit mobile and power on Earth - Economic Times",
  //       description:
  //         "Solar flares are dangerous for Earth, as the radiation it releases can interfere with our radio communications. These storms impact every electronic and communication system, from the internet to power, and are also capable of destroying satellites.",
  //       url: "https://economictimes.indiatimes.com/news/new-updates/nasa-warns-of-more-dangerous-solar-flares-that-can-hit-mobile-and-power-on-earth/articleshow/93269215.cms",
  //       urlToImage:
  //         "https://img.etimg.com/thumb/msid-93271313,width-1070,height-580,imgsize-20830,overlay-economictimes/photo.jpg",
  //       publishedAt: "2022-08-01T09:26:00Z",
  //       content:
  //         "US space agency NASA has warned that the Sun is expected to release more frequent horrific solar flares in the near future as it nears the peak of its 11-year cycle called the solar maximum. \r\nSolar … [+1684 chars]",
  //     },
  //     {
  //       source: { id: "the-times-of-india", name: "The Times of India" },
  //       author: "Faiz Siddiqui",
  //       title:
  //         "Kanpur: School makes students recite 'kalma' during morning assembly; parents protest - Times of India",
  //       description:
  //         "Scores of parents created ruckus at a school in Kanpur accusing the management of teaching Islamic 'kalma' to their children. The incident was reporte",
  //       url: "https://timesofindia.indiatimes.com/city/kanpur/kanpur-school-makes-students-recite-kalma-during-morning-assembly-parents-protest/articleshow/93271058.cms",
  //       urlToImage:
  //         "https://static.toiimg.com/thumb/msid-93271105,width-1070,height-580,imgsize-35558,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
  //       publishedAt: "2022-08-01T09:21:00Z",
  //       content: "",
  //     },
  //     {
  //       source: { id: null, name: "PlanetF1" },
  //       author: "Michelle Foster",
  //       title:
  //         "Aston Martin on the qualities Fernando Alonso will bring in 2023 - PlanetF1",
  //       description:
  //         'Mike Krack believes Fernando Alonso has the "calibre and experience" needed to drive Aston Martin forward.',
  //       url: "https://www.planetf1.com/news/aston-martin-qualities-fernando-alonso-2023/",
  //       urlToImage:
  //         "https://d3cm515ijfiu6w.cloudfront.net/wp-content/uploads/2022/06/18190115/fernando-alonso-staring-planetf1.jpg",
  //       publishedAt: "2022-08-01T09:15:10Z",
  //       content:
  //         "Mike Krack has lauded Fernando Alonso’s “calibre and experience”, believing Aston Martin’s new signing could be the key towards the team becoming race winners.\r\nLast Wednesday Aston Martin learnt tha… [+2424 chars]",
  //     },
  //     {
  //       source: { id: null, name: "The Indian Express" },
  //       author: "Express Web Desk",
  //       title:
  //         "Parliament session Live: House adjourned till 2 pm; Union Ministers hit out at Opp over disruptions - The Indian Express",
  //       description:
  //         "Parliament monsoon session Live Updates: Before withdrawing the suspension, Speaker Om Birla took assurance from the Opposition members that they won't bring placards into the House.",
  //       url: "https://indianexpress.com/article/india/parliament-monsoon-session-live-updates-lok-sabha-rajya-sabha-8063180/",
  //       urlToImage:
  //         "https://images.indianexpress.com/2022/08/PTI07_29_2022_000140B.jpg",
  //       publishedAt: "2022-08-01T08:27:38Z",
  //       content:
  //         "Congress MP P. Chidambaram with opposition MPs Dola Sen, Shanta Chhetri, Sanjay Singh and others protesting against the Union Government, near the statue of Mahatma Gandhi at Parliament House complex… [+910 chars]",
  //     },
  //     {
  //       source: { id: null, name: "YouTube" },
  //       author: null,
  //       title:
  //         "Earth completes its rotation faster than 24 hours, breaks previous record | Oneindia News *News - Oneindia News",
  //       description: null,
  //       url: "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DBdk59HMl3HA",
  //       urlToImage: null,
  //       publishedAt: "2022-08-01T08:22:10Z",
  //       content:
  //         "Your browser isn't supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later",
  //     },
  //   ];

  static propTypes = {
    pageSize: PropTypes.number,
  };
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
        pageSize : this.props.pageSize
    };
    console.log(this.props.pageSize);
  }

  // Neccessary functions

  async componentDidMount() {
    var url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=fcff724d07784aa2a5150583bad7cbb8&pageSize=${this.props.pageSize}`;
    var data = await fetch(url);
    var ParsedData = await data.json();
    // var pageNeed = Math.ceil(ParsedData.totalResults/this.props.pageSize);

    this.setState({
      articles: ParsedData.articles,
      pageSize : this.props.pageSize

    });
    console.log(ParsedData.totalResults);
  }

  handlePvsClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=fcff724d07784aa2a5150583bad7cbb8&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.ParsedData = await data.json();
    this.setState({
      articles: this.ParsedData.articles,
      page: this.state.page - 1,
      pageSize : this.props.pageSize

    });
  };
  handleNxtClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=fcff724d07784aa2a5150583bad7cbb8&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.ParsedData = await data.json();
    this.setState({
      articles: this.ParsedData.articles,
      page: this.state.page + 1,
      pageSize : this.props.pageSize

    });
  };
  render() {
    var noImgUrl =
      "https://thumbs.dreamstime.com/b/magnified-word-news-16135816.jpg";
    return (
      <div className="row">
        {this.state.articles.map((element) => {
          return (
            <div className="col-md-4 my-3" key={element.url}>
              <NewsItem
                title={
                  element.title
                    ? element.title.slice(0, 55) + " ..."
                    : "No title available"
                }
                description={
                  element.description
                    ? element.description.slice(0, 100) + " ..."
                    : "No description available"
                }
                newsUrl={element.url}
                imageUrl={element.urlToImage ? element.urlToImage : noImgUrl}
              />
            </div>
          );
        })}
        <div className="container d-flex justify-content-between my-5">
          <button
            disabled={this.state.page <= 1}
            className="btn-success btn btn-primary"
            onClick={this.handlePvsClick}
          >
            &larr; Previous
          </button>
          <button
            className="btn-success btn btn-primary"
            onClick={this.handleNxtClick}
            disabled={this.pageNeed < this.state.page + 1}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News