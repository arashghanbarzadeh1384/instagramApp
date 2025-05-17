import { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function RecipeReviewCard({ userName }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:3001/postUser");
        setPosts(response.data);
      } catch (error) {
        console.error("خطا در دریافت پست‌ها:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="w-full flex flex-col items-center mt-8 gap-10">
      {posts.map((post, index) => (
        <Card
          key={index}
          className="w-full max-w-md shadow-md"
          sx={{ borderRadius: 2 }}
        >
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }}>
                {userName.charAt(0).toUpperCase()}
              </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title={userName}
          />
          <CardMedia
            component="img"
            height="400"
            image={post.image}
            alt={post.title}
            sx={{ objectFit: "cover" }}
          />
          <CardActions disableSpacing>
            <IconButton aria-label="like">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
          <CardContent>
            <Typography variant="subtitle1" fontWeight={600}>
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.caption}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
