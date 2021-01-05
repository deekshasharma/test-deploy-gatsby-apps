import React from "react"
import { Header } from "./header"
import { Divider, Grid, MuiThemeProvider } from "@material-ui/core"
import { theme } from "../theme"
import makeStyles from "@material-ui/core/styles/makeStyles"
import { AppFooter } from "./Footer"

const routes = [
  { name: "DRINKS", path: "/drinks" },
  { name: "EATS", path: "/eats" },
  { name: "ABOUT", path: "/about" },
]

export const PageLayout = ({ children }) => {
  const classes = useStyles()
  return (
    <MuiThemeProvider theme={theme}>
      <Grid container justify={"center"}>
        <Grid item xs={12}>
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
          {/*<Grid container justify={"center"} className={classes.footer}>*/}
          <AppFooter />
          {/*</Grid>*/}
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
