import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import "./userCard.css";
import "../App.css";
import { CardActionArea } from "@mui/material";


const UserCard = (props) => {
  const { bio } = props;

  return (
    <div className="mainDiv">
      <Card
        sx={{
          maxWidth: 345,
          ":hover": {
            boxShadow: "5px 5px 5px black",
          },
        }}
        className="cardStyle"
      >
        <CardActionArea style={{position:"relative !important"}}>
          <CardMedia
            component="img"
            height="140"
            image={bio.avatar_url}
            alt="avatar"
            style={{ height: "38vw" }}
          />
          <CardContent className="cardContentStyle">
            <div className="nameAndIconDiv">
              <div className="nameDiv">
                <Typography
                  variant="h4"
                  component="div"
                  className="whiteColor julius-sans-one-regular textZoom"
                  style={{fontSmooth:"10px"}}
                >
                  {bio.name}
                </Typography>
              </div>
              <div className="iconDiv">
                <InstagramIcon className="face whiteColor" />
                <FacebookIcon className="face whiteColor" />
              </div>
            </div>
            {/* <hr
              style={{ width: "330px", backgroundColor: "white",borderColor:"white", margin: "0 0 10px 0" }}
            /> */}
            <Typography
              variant="body2"
              className="oxanium-Light whiteColor"
            >
              {bio.biography}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default UserCard;
