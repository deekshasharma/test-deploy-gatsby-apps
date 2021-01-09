import React from "react"
import { Grid, makeStyles, Typography } from "@material-ui/core"
import food1 from "../../images/food1.svg"
import food2 from "../../images/food2.svg"
import food3 from "../../images/food3.svg"
import food5 from "../../images/food5.svg"

const text =
  "Proudly serving local and organic fresh food, juices and smoothies!"

const useStyles = makeStyles(theme => ({
  foodOptionsContainer: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    width: "100%",
    backgroundColor: theme.palette.secondary[200],
  },
  imagesContainer: { width: "100%" },
  image: { width: "20vw" },
}))
export const CafeFoodImages = () => {
  const classes = useStyles()
  return (
    <>
      <Grid container>
        <Grid item xs={12} className={classes.foodOptionsContainer}>
          <Grid container justify="center" alignItems="center">
            <Typography align={"center"} variant="subtitle2">
              {text}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            alignItems="stretch"
            justify={"space-evenly"}
            className={classes.imagesContainer}
          >
            <img src={food1} alt={"shakes"} className={classes.image} />
            <img src={food2} alt={"food"} className={classes.image} />
            <img src={food3} alt={"smoothie"} className={classes.image} />
            <img src={food5} alt={"coffee"} className={classes.image} />
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
