import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";

const Feed = () => {
  return (
    <Box flex={3} p={2}>
      <Box ml={-2}>
        <Post image="https://upload.wikimedia.org/wikipedia/commons/d/da/Wonderful_Nature_Beauty.jpg" />
        <Post image="https://upload.wikimedia.org/wikipedia/commons/b/b3/Nature_.jpg" />
        <Post image="https://upload.wikimedia.org/wikipedia/commons/e/ef/Great_nature_landscape_Pakistan.jpg" />
        <Post image="https://www.publicdomainpictures.net/pictures/30000/nahled/beauty-of-nature-3.jpg" />
        <Post image="https://upload.wikimedia.org/wikipedia/commons/a/a3/Nature-View.jpg" />
      </Box>
    </Box>
  );
};

export default Feed;
