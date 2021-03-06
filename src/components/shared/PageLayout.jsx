import React from "react"
import { HeaderWithMenu } from "../HeaderWithMenu"
import { Grid, makeStyles, MuiThemeProvider } from "@material-ui/core"
import { theme } from "../../theme"
import { AppFooter } from "../Footer"
import { SimpleHeader } from "../SimpleHeader"

const routes = [
  { name: "DRINKS & FOOD", path: "/menu" },
  { name: "ABOUT", path: "/about" },
]

export const PageLayout = ({ children, hideMenu, cartSize }) => {
  const classes = useStyles()
  return (
    <MuiThemeProvider theme={theme}>
      <Grid container justify={"center"}>
        <Grid item xs={12}>
          {!hideMenu && <HeaderWithMenu routes={routes} cartSize={cartSize} />}
          {hideMenu && <SimpleHeader />}
        </Grid>
        <Grid item xs={12} style={{ paddingTop: "20vh" }}>
          <Grid container justify={"center"}>
            <Grid item xs={12}>
              <div>{children}</div>
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
