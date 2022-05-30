import React from "react";
import NewsItems from "./NewsItems";

class NewsComp extends React.Component {
  artilcles = [
    {
      source: {
        id: "engadget",
        name: "Engadget",
      },
      author: "Valentina Palladino",
      title: "The best Memorial Day tech sales we could find",
      description:
        "Memorial Day is nearly here and, as usual, you can find a number of solid gadget deals across the web ahead of the holiday. A few Apple devices are on sale, including the latest AirPods for $150, and you can pick up a bunch of outdoor gear from the likes of S…",
      url: "https://www.engadget.com/best-memorial-day-2022-tech-sales-154542300.html",
      urlToImage:
        "https://s.yimg.com/os/creatr-uploaded-images/2021-10/3f4365a0-359a-11ec-bdaf-31d6f36d5be0",
      publishedAt: "2022-05-27T15:45:42Z",
      content:
        "Memorial Day is nearly here and, as usual, you can find a number of solid gadget deals across the web ahead of the holiday. A few Apple devices are on sale, including the latest AirPods for $150, and… [+9422 chars]",
    },
    {
        "source": {
        "id": "the-next-web",
        "name": "The Next Web"
        },
        "author": "The Conversation",
        "title": "Does it matter whose brain cells we use in gadgets of the future?",
        "description": "The year is 2030 and we are at the world’s largest tech conference, CES in Las Vegas. A crowd is gathered to watch a big tech company unveil its new smartphone. The CEO comes to the stage and announces the Nyooro, containing the most powerful processor ever s…",
        "url": "https://thenextweb.com/news/does-it-matter-whose-brain-cells-we-use-in-gadgets-of-the-future",
        "urlToImage": "https://img-cdn.tnwcdn.com/image/neural?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2022%2F05%2FCortical-Labs-Brainchip-II-hed.jpg&signature=0a12a7f90a97a34c31a37a2a5a21fd1e",
        "publishedAt": "2022-05-27T16:00:01Z",
        "content": "The year is 2030 and we are at the worlds largest tech conference, CES in Las Vegas. A crowd is gathered to watch a big tech company unveil its new smartphone. The CEO comes to the stage and announce… [+7412 chars]"
        },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "Russia opens cases against Google, other foreign tech over data storage - Reuters",
      description:
        'Russia\'s communications regulator Roskomnadzor said on Friday it had opened administrative cases against Alphabet Inc\'s <a href="https://www.reuters.com/companies/GOOGL.O" target="_blank">(GOOGL.O)</a> Google and six other foreign technology companies for all…',
      url: "https://www.reuters.com/technology/russia-opens-cases-against-google-other-foreign-tech-over-data-storage-2022-05-27/",
      urlToImage:
        "https://www.reuters.com/resizer/FVghqlTE02ZQ7o532Fg-HiIYu3E=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/XPE5V4XGYBIK3PCH6UAUCY5QGI.jpg",
      publishedAt: "2022-05-27T14:44:00Z",
      content:
        "May 27 (Reuters) - Russia's communications regulator Roskomnadzor said on Friday it had opened administrative cases against Alphabet Inc's (GOOGL.O) Google and six other foreign technology companies … [+1158 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.artilcles,
    };
  }
  render() {
    return (
      <>
        <div className="row mt-3 m-auto" style={{ width: "80%" }}>
          {this.state.articles.map((elements) => {
            return (
              <div className="col-md-4" key={elements.url}>
                <NewsItems
                  title={elements.content}
                  description={elements.description}
                  img={elements.urlToImage}
                  newsURl={elements.url}
                />
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
export default NewsComp;
