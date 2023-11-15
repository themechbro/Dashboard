import * as React from "react";
import Avatar from "@mui/joy/Avatar";
import AvatarGroup from "@mui/joy/AvatarGroup";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";

export default function BottomActionsCard() {
  return (
    <Card
      variant="outlined"
      sx={{
        width: 320,
        // to make the card resizable
        overflow: "auto",
        resize: "horizontal"
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Avatar
          src="https://riaindia.co.in/wp-content/uploads/2016/01/tutor-8.jpg"
          size="lg"
        />
        <AvatarGroup size="sm" sx={{ "--Avatar-size": "28px" }}>
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq8YaMplhcl8yr8SAm1D-lhBkPuhkDIDuAwmomq4hT4qlU6HdPo38kqdEGWN_Hl5S9-bA&usqp=CAU" />
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtJcfgOAc8USRCIZQS-Bo-5eldLn6s5x8h8nY6oQuaeB6KL2hbTC-bSgNd0TTvIJaN-nY&usqp=CAU" />
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXwIw4TUNNyavGpNgbeUnWcXS5ixK5Y9wBLo5gIBKqWRtERGay34gjqE-8MvVXhkPV9JA&usqp=CAU" />
          <Avatar>+4K</Avatar>
        </AvatarGroup>
      </Box>
      <CardContent>
        <Typography level="title-lg">NYC Coders</Typography>
        <Typography level="body-sm">
          We are a community of developers prepping for coding interviews,
          participate, chat with others and get better at interviewing.
        </Typography>
      </CardContent>
      <CardActions buttonFlex="0 1 120px">
        <IconButton variant="outlined" color="neutral" sx={{ mr: "auto" }}>
          <FavoriteBorder />
        </IconButton>
        <Button variant="outlined" color="neutral">
          View
        </Button>
        <Button variant="solid" color="primary">
          Join
        </Button>
      </CardActions>
    </Card>
  );
}
