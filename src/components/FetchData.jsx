import { CircularProgress, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setLoading(false);
        setPosts(data?.data);
        console.log(data);
      } catch (error) {
        setLoading(false);
        console.log(error.message);
      }
    };
    getData();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }
  return (
    <div>
      {posts.map((item) => {
        return (
          <Typography
            key={posts.id}
            variant='h5'
            sx={{ border: "2px solid white" }}
          >
            {item.title}
          </Typography>
        );
      })}
    </div>
  );
};

export default FetchData;
