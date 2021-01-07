import React from "react"
import { Grid, Typography } from "@material-ui/core"
import food1 from "../images/food1.svg"
import food2 from "../images/food2.svg"
import food3 from "../images/food3.svg"
import food5 from "../images/food5.svg"

const text =
  "Proudly serving local and organic fresh food, juices and smoothies!"

export const CafeFoodImages = () => {
  return (
    <div>
      <Grid container>
        <Grid
          item
          style={{
            paddingTop: "7vh",
            paddingBottom: "7vh",
            width: "100%",
            backgroundColor: "#FBF9F9",
          }}
        >
          <Grid container justify="center" alignItems="flex-end">
            <Typography variant="subtitle2">{text}</Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            alignItems="stretch"
            justify={"space-evenly"}
            style={{ width: "100%" }}
          >
            <img src={food1} alt={"shakes"} style={{ width: "20vw" }} />
            <img src={food2} alt={"food"} style={{ width: "20vw" }} />
            <img src={food3} alt={"smoothie"} style={{ width: "20vw" }} />
            <img src={food5} alt={"coffee"} style={{ width: "20vw" }} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
