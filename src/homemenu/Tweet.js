import { Comment } from "../icons/index.js";
import { Repost } from "../icons/index.js";
import { Like } from "../icons/index.js";
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
        <div className="midC">
          <div className="d-flex" style={{ gap: 10 }}>
            <p className="authorname">{tweet.authorName}</p>
            <p className="username">{tweet.userName}</p>
          </div>
          <p className="content">{tweet.content}</p>
          <div className="botM">
            <p className="botDetails">
              <Comment className="iconM" />
              {tweet.replies}
            </p>
            <p className="botDetails">
              <Repost className="iconM"  />
              {tweet.retweets}
            </p>
            <p className="botDetails">
              <Like className="iconM"  /> {tweet.likes}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
