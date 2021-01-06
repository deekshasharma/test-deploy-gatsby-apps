import React from "react"
import { AppBar, Grid, IconButton, Toolbar } from "@material-ui/core"
import logo from "../images/logo.svg"

export const HeaderWithLogo = ({ route }) => {
  return (
    <div style={{ flexGrow: "1" }}>
      <AppBar
        position="fixed"
        style={{
          boxShadow: "0px 0px 0px 0px",
        }}
      >
        <Grid container justify="center">
          <IconButton disableFocusRipple={true}>
            <img
              src={logo}
              style={{ height: "12vh", width: "12vw" }}
              alt={"logo"}
            />
          </IconButton>
        </Grid>
      </AppBar>
    </div>
  )
}
