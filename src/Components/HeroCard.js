import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const HeroCard = ({hero}) => {
  return (
    <Card sx={{ width: "15rem", height: "30rem" }}>
      <CardMedia
        component="img"
        height="140"
        image={hero.pictureURL}
        alt="Hero Picture"
        sx={{ height: "25rem"}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {hero.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {hero.universe}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HeroCard;
