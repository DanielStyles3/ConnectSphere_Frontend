import { useState, useEffect, useContext } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const {user}=useContext(AuthContext)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = username
          ? await axios.get("/posts/profile/" + username)
          : await axios.get("posts/timeline/64db7e740b9ed6615e99d631");
  
        setPosts(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };
  
    fetchPosts();
  }, [username]);
  

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {loading ? (
          <p>Loading...</p>
        ) : posts.length === 0 ? (
          <p>No posts to display.</p>
        ) : (
          posts.map((p) => <Post key={p._id} post={p} />)
        )}
      </div>
    </div>
  );
}
