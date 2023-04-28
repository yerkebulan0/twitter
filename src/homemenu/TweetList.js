import Tweet from "./Tweet";

export default function TweetsList() {
  const tweets = [
    {
      authorName: "erke",
      userName: "@shadow",
      img: require('../icons/accet/one.jpg'),
      content: "Hello DDDDDDDeveryone!,My name if Erkebulan, i am from kazahstan, i live in astana,i am married, i have notebook",
      replies: 200,
      likes: 1000,
      retweets: 1000,
    },
    {
      authorName: "erke",
      userName: "@shadow",
      img: require('../icons/accet/two.jpg'),
      content: "Hello everyone!,My name if Erkebulan, i am from kazahstan, i live in astana,i am married, i have notebook",
      replies: 200,
      likes: 1000,
      retweets: 1000,
    },
    {
      authorName: "erke",
      userName: "@shadow",
      img: require('../icons/accet/three.jpg'),
      content: "Hello everyone!,My name if Erkebulan, i am from kazahstan, i live in astana,i am married, i have notebook",
      replies: 200,
      likes: 1000,
      retweets: 1000,
    },
    {
      authorName: "erke",
      userName: "@shadow",
      img: require('../icons/accet/four.jpg'),
      content: "Hello everyone!,My name if Erkebulan, i am from kazahstan, i live in astana,i am married, i have notebook",
      replies: 200,
      likes: 1000,
      retweets: 1000,
    },
    {
      authorName: "erke",
      userName: "@shadow",
      img: require('../icons/accet/five.jpg'),
      content: "Hello everyone!,My name if Erkebulan, i am from kazahstan, i live in astana,i am married, i have notebook",
      replies: 200,
      likes: 1000,
      retweets: 1000,
    },
    {
      authorName: "erke",
      userName: "@shadow",
      img: require('../icons/accet/one.jpg'),
      content: "Hello everyone!,My name if Erkebulan, i am from kazahstan, i live in astana,i am married, i have notebook",
      replies: 200,
      likes: 1000,
      retweets: 1000,
    },
  ];
  return tweets.map((tweet, index) =><Tweet {...tweet} key={index} />);
}
