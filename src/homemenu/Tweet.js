export default function Tweet(tweet) {
  return (
    <div className="mt-3 mx-3">
      <p className="mx-5" style={{ fontSize: 13, fontWeight: "600" }}>
        You might like!<span style={{ color: "blue" }}>See more</span>{" "}
      </p>
      <div className="d-flex">
        <img
          style={{ width: 50, height: 50, borderRadius: 50 }}
          src={require("../images/tweet.JPG")}
        />
        <div>
          <p>{tweet.authorName}</p>
          <p>{tweet.userName}</p>
          <p>{tweet.content}</p>
          <p>{tweet.replies}</p>
          <p>{tweet.retweets}</p>
          <p>{tweet.likes}</p>
        </div>
      </div>
    </div>
  );
}
