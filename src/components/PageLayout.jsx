import React from "react"
import { Header } from "./header"
// import styles from "./PageLayout.module.css"
import { Divider, Grid, MuiThemeProvider, Typography } from "@material-ui/core"
import { theme } from "../theme"
// import { routes } from "../shared/configurable"
import makeStyles from "@material-ui/core/styles/makeStyles"

const routes = [
  { name: "DRINKS", path: "/drinks" },
  { name: "EATS", path: "/eats" },
  { name: "SHOP", path: "/shop" },
  { name: "ABOUT", path: "/about" },
]

export const PageLayout = ({ children }) => {
  const classes = useStyles()
  return (
    <MuiThemeProvider theme={theme}>
      <Grid container justify={"center"}>
        <Grid item xs={12}>
          {/*<Header routes={routes} />*/}
          <Header routes={routes} />
        </Grid>
        <Grid item xs={12} style={{ paddingTop: "20vh" }}>
          <Grid container justify={"center"}>
            <Grid item xs={12}>
              <main>{children}</main>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.footerContainer}>
          <Divider />
          <Grid container justify={"center"} className={classes.footer}>
            <footer>
              <Typography variant="caption">© Mukti Cafe</Typography>
            </footer>
          </Grid>
        </Grid>
      </Grid>
    </MuiThemeProvider>
  )
}

const useStyles = makeStyles(theme => ({
  footerContainer: {
    marginTop: theme.spacing(5),
  },
  footer: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}))
