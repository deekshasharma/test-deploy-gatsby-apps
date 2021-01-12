import React, { useEffect, useState } from "react"
import { PageLayout } from "../components/shared/PageLayout"
import { Grid, makeStyles, Typography } from "@material-ui/core"
import aboutCoffee from "../images/about-coffee.svg"

const aboutText =
  "Founded in the pristine soil of Vancouver Island, British Columbia, Mukti cafe aspires to offer the most delightful and sustainable coffee and to share our passion with those who care as deeply as we do.  With mindfulness and transparency as our values, we buy ethical beans from the farmers and follow fair trade practices.\n" +
  "\n" +
  "With an extensive collection of flavors, each cup of coffee is made with love by our very own creative and relentless baristas on site.  Our goal is to preserve the rich taste of our high-quality specialty coffee beans with the right amount of careful roasting to unlock every bean's full potential.\n" +
  "\n"

const conclusionText =
  "We proudly curate our coffees into three different combinations (Black, Red, and Blue) based on their roasting profiles; we urge you to explore and discover this vibrant spectrum of taste experiences with valuable advice intended to help you get the most out of your daily routine. Flavour is a journey that matters only in the context of you and your satisfaction with the coffee cup in your hands. It is our privilege to help illuminate some light into the world of possibilities that coffee presents."

const useStyles = makeStyles(theme => ({
  aboutContainer: {
    padding: "20px",
  },
  aboutImg: {
    width: "50vw",
    marginBottom: "10vh",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
    },
  },
}))

const About = () => {
  const classes = useStyles()
  const [cartSize, setCartSize] = useState(undefined)

  useEffect(() => {
    setCartSize(localStorage.getItem("cartSize"))
  }, [])

  return (
    <PageLayout cartSize={cartSize}>
      <Grid container justify="center" className={classes.aboutContainer}>
        <Grid item>
          <img
            src={aboutCoffee}
            alt="about-mukti-cafe"
            className={classes.aboutImg}
          />
        </Grid>

        <Grid item>
          <Typography gutterBottom variant="subtitle1">
            {aboutText}
          </Typography>
        </Grid>

        <Grid item>
          <Typography variant="subtitle1">{conclusionText}</Typography>
        </Grid>
      </Grid>
    </PageLayout>
  )
}
export default About
