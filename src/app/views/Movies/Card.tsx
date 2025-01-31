import React from "react";
import { Card as MuiCard, CardMedia, CardContent, Typography, Box, } from "@mui/material";

// Define the type for movie props
interface MovieProps {
  movie: {
    title: string;
    poster_path: string;
    vote_average: number;
    overview: string;
  };
}

const Card: React.FC<MovieProps> = ({ movie }) => {
  console.log("dd",movie)
  const img_path = "https://image.tmdb.org/t/p/w500";

  return (
    
      <MuiCard sx={{ width: 300, margin: "16px",height:500 }}>
      <CardMedia
        component="img"
        height="400"
        image={img_path + movie.poster_path}
        alt={movie.title}
      />
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="h2">
            {movie.title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {movie.vote_average}
          </Typography>
        </Box>
        <Typography variant="body2" color="textSecondary" sx={{ marginTop: "8px" }}>
          <strong>Overview:</strong>
        </Typography>
        <Typography variant="body2" sx={{ marginTop: "4px" }}>
          {/* {movie.overview} */}
        </Typography>
      </CardContent>
    </MuiCard>
 
  );
};

export default Card;
