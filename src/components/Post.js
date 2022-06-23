import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import { MoreVert, Favorite, Share, FavoriteBorder } from "@mui/icons-material";
import React from "react";

const Post = (props) => {
  return (
    <Card sx={{ marginTop: 2 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="John"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="20%"
        image={props.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" textAlign="justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          repellat quod reiciendis odio excepturi minus consequatur eligendi
          earum quis incidunt dolores temporibus inventore assumenda, illo
          quaerat iure deleniti exercitationem deserunt expedita sit! Nostrum
          laudantium similique laboriosam recusandae minima, perspiciatis
          repellendus.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
