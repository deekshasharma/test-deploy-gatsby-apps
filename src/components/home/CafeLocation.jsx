import React from "react"
import { Grid, makeStyles, Typography } from "@material-ui/core"
import cafeLocation from "../../images/cafe-location-image.svg"

const useStyles = makeStyles(theme => ({
  cafeImg: {
    width: "40vw",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      marginBottom: theme.spacing(3),
    },
  },
  address: {
    width: "40%",
    [theme.breakpoints.down("sm")]: { width: "80%" },
  },
  typography: { paddingBottom: theme.spacing(4) },
}))

export const CafeLocation = () => {
  const classes = useStyles()
  return (
    <Grid container justify={"space-between"} alignItems={"center"}>
      <Grid item>
        <img
          src={cafeLocation}
          alt={"mukti-cafe-house"}
          className={classes.cafeImg}
        />
      </Grid>
      <Grid item className={classes.address}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems={"flex-start"}
        >
          <Typography variant="h6" gutterBottom>
            LOCATION
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            color="textSecondary"
            className={classes.typography}
          >
            2835 Cook Street Village, Victoria British Columbia
          </Typography>
          <Typography variant="h6" gutterBottom>
            HOURS
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            color="textSecondary"
            className={classes.typography}
          >
            SUN - SAT | 8:00AM - 5:00PM
          </Typography>
          <Typography variant="h6" gutterBottom>
            CONTACT
          </Typography>
          <Typography variant="subtitle1" gutterBottom color="textSecondary">
            250.585.7765
          </Typography>
          <Typography variant="subtitle1" gutterBottom color="textSecondary">
            mukticafeorder@gmail.com
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}
