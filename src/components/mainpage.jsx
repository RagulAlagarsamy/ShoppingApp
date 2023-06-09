import React, { Component, useState, useEffect } from "react";
import axios, { Axios } from "axios";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import StarRating from "./starrating";

export default function MainPage({ categories }) {
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      let temp = [];
      temp = res.data.products;
      setItem(temp);
    });
  }, []);

  useEffect(() => {
    if (categories) {
      axios
        .get(`https://dummyjson.com/products/category/${categories}`)
        .then((res) => {
          let temp = [];
          temp = res.data.products;
          setItem(temp);
        });
    }
  }, [categories]);

  const classes = makeStyles({
    root: {
      maxWidth: 345,
      border: "none",
      boxShadow: "none",
    },
    media: {
      height: "300px",
      border: "none",
      boxShadow: "none",
    },
  });

  return (
    <div>
      {/* <div>{item}</div> */}
      <div className="container mt-5" style={{ textAlign: "left" }}>
        {/* {Array.from({ length: 4 }).map((_, idx) => ( */}
        <div className="row">
          {item.map((el) => (
            <div className="col-lg-3" style={{ marginTop: "20px" }}>
              <div className="cards">
                <Card
                  className={classes.root}
                  style={{
                    borderRadius: "10px",
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      style={{ height: "270px", weigth: "500px" }}
                      image={el.thumbnail}
                      title={el.title}
                    />
                    <CardContent
                      style={{
                        backgroundColor: "white",
                        color: "black",
                        padding: "10px",
                        fontFamily: "Oswald,sans-serif",
                      }}
                    >
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="h3"
                        style={{ fontFamily: "Oswald,sans-serif" }}
                      >
                        {el.title.length > 20
                          ? el.title.substring(0, 20) + "..."
                          : el.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        style={{
                          backgroundColor: "white",
                          color: "grey",
                          lineHeight: "26px",
                        }}
                      >
                        {el.description.length > 50
                          ? el.description.substring(0, 50) + "..."
                          : el.description}
                      </Typography>
                      {el.description.length < 45 ? <br /> : ""}
                      <br />
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        style={{
                          backgroundColor: "white",
                          color: "black",
                          lineHeight: "26px",
                          fontSize: "20px",
                        }}
                      >
                        ${el.price}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        style={{
                          backgroundColor: "white",
                          color: "grey",
                          lineHeight: "26px",
                        }}
                      >
                        <StarRating rating={el.rating} />
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            </div>
          ))}
        </div>
        {/* ))} */}
      </div>
    </div>
  );
}
