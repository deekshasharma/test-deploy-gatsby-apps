import React from "react"
import { Grid, makeStyles, Typography } from "@material-ui/core"
import footerLogo from "../images/footer-logo.svg"

const useStyles = makeStyles(theme => ({
  footerLogo: {
    height: "5vw",
    width: "5vw",
    [theme.breakpoints.down("sm")]: {
      height: "10vh",
      width: "10vw",
    },
  },
}))

export const AppFooter = () => {
  const classes = useStyles()
  return (
    <Grid container direction="column" alignItems={"center"} justify={"center"}>
      <Grid item xs={12}>
        <img
          src={footerLogo}
          alt={"footer-logo"}
          className={classes.footerLogo}
        />
      </Grid>
      <Grid item xs={8}>
        <Typography variant="body2" align={"center"} gutterBottom>
          2835 Cook Street Village, Victoria, British Columbia
        </Typography>
      </Grid>
    </Grid>
  )
}
