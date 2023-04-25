import Tweet from "./Tweet";
export default function Tweetslist() {
  const tweets = [
    {
      authorName: 'erke',
      userName: '@shadow',
      content: 'Hello everyone!',
      replies: 200,
      likes: 1000,
      retweets: 1000,
    },
  ];
  return tweets.map((tweet, index) => <Tweet {...tweet} key={index} />);
}
