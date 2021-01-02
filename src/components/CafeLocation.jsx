import React from "react"
import { Grid, Typography } from "@material-ui/core"
import cafeLocation from "../images/cafe-location-image.svg"

export const CafeLocation = () => {
  return (
    <Grid container justify={"space-between"} alignItems={"center"}>
      <Grid item>
        <img src={cafeLocation} alt={"Mukti Cafe"} style={{ width: "40vw" }} />
      </Grid>
      <Grid item style={{ paddingRight: "10vw" }}>
        <Grid container direction="column">
          <Typography variant="h6" gutterBottom>
            LOCATION
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            style={{ paddingBottom: "5vh" }}
          >
            2835 Cook Street Village, Victoria British Columbia
          </Typography>
          <Typography variant="h6" gutterBottom>
            HOURS
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            style={{ paddingBottom: "5vh" }}
          >
            SUN - SAT | 8:00AM - 5:00PM
          </Typography>
          <Typography variant="h6" gutterBottom>
            CONTACT
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            250.585.7765
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            mukticafeorder@gmail.com
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}
