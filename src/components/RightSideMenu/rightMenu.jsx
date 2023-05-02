import "../RightSideMenu/rightside.css";
export default function RightMenu() {
  const news = [
    { main: "Apple started create new Iphone!!!",
      countrs: "USA",
      twtimes: '222 tweets'           },
      {
        main: "Moscow Putin blablabla!!!",
      countrs: "Russia",
      twtimes: '325 tweets'   
      },
      {
        main: "Kazahstan is the biggest country is Asia!!!",
      countrs: "Kazahstan",
      twtimes: '2233 tweets'   
      },
      {
        main: "Putin started war!!!",
      countrs: "Russia",
      twtimes: '45454 tweets'   
      },
      {
        main: "National team Germany LOST!!!",
      countrs: "Germany",
      twtimes: '2323 tweets'   
      },
      {
        main: "Mbappe is player of Marselle!!!",
      countrs: "French",
      twtimes: '23232 tweets'   
      }

   
  ];
  return (
    <div>
        {news.map((item,index) =>(
            <div className="news">
            <p>{item.main}</p>
            <b>{item.countrs}</b>
            <p>{item.twtimes}</p>
          </div>
        ))}
      
    </div>
  );
}
