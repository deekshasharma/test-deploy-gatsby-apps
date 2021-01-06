import React from "react"
import { Header } from "../Header"
import { Grid, MuiThemeProvider } from "@material-ui/core"
import { theme } from "../../theme"
import makeStyles from "@material-ui/core/styles/makeStyles"
import { AppFooter } from "../Footer"
import { HeaderWithLogo } from "../HeaderWithLogo"

const routes = [
  { name: "DRINKS", path: "/drinks" },
  { name: "EATS", path: "/eats" },
  { name: "ABOUT", path: "/about" },
]

export const PageLayout = ({ children, headerWithLogo }) => {
  const classes = useStyles()
  return (
    <MuiThemeProvider theme={theme}>
      <Grid container justify={"center"}>
        <Grid item xs={12}>
          {!headerWithLogo && <Header routes={routes} />}
          {headerWithLogo && <HeaderWithLogo />}
        </Grid>
        <Grid item xs={12} style={{ paddingTop: "20vh" }}>
          <Grid container justify={"center"}>
            <Grid item xs={12}>
              <main>{children}</main>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.footerContainer}>
          <AppFooter />
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
