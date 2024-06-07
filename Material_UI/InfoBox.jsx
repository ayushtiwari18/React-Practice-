import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CloudIcon from "@mui/icons-material/Cloud";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { Thunderstorm } from "@mui/icons-material";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1566996694954-90b052c413c4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const HOT_URL =
    "https://media.istockphoto.com/id/1312596921/photo/summer-noon-sun.jpg?s=1024x1024&w=is&k=20&c=6VIN3G56kXUaUPMNjv_JH_PasEiY2s4CRx3mmiy-t5Y=";
  const COLD_URL =
    "https://media.istockphoto.com/id/1127448496/photo/winter-storm-warning-sign-with-snowfall-and-stormy-background.jpg?s=1024x1024&w=is&k=20&c=MYY2GNH0GKzN1-dc9yN78tUogkX-Qic3r8O20vePqaE=";
  const RAIN_URL =
    "https://media.istockphoto.com/id/512218646/photo/storm-sky-rain.jpg?s=1024x1024&w=is&k=20&c=SwSETHzfFGjeoHxLk0Af4GnQn_WrDyR7f95kCOXxZzY=";
  const CLOUD_URL =
    "https://media.istockphoto.com/id/1200224188/photo/white-clouds-and-sun-in-blue-sky.jpg?s=1024x1024&w=is&k=20&c=vmBSXr0dXbn6ghlLDfToW5DwjR4_FrLqZ6pTY3jFUMI=";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 30
                ? HOT_URL
                : info.temp < 10
                ? COLD_URL
                : CLOUD_URL
            }
            title="weather image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
              {info.humidity > 80 ? (
                <Thunderstorm />
              ) : info.temp > 30 ? (
                <WbSunnyIcon />
              ) : info.temp < 10 ? (
                <AcUnitIcon />
              ) : (
                <CloudIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <div>Temperature ={info.temp}&deg;C</div>
              <dir>Weather: {info.weather}</dir>
              <dir>Humidity: {info.humidity}%</dir>
              <dir>
                The weather can be described as<i> {info.weather}</i> Feels
                Like:
                {info.feelslike}°C
              </dir>
              <dir>Min Temp: {info.tempMin}°C</dir>
              <dir>Max Temp: {info.tempMax}°C</dir>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
