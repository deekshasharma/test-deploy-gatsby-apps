import React from "react"
import { AppBar, Grid } from "@material-ui/core"
import { MuktiLogo } from "./shared/MuktiLogo"

export const SimpleHeader = () => {
  return (
    <div data-cy={"without-menu"} style={{ flexGrow: "1" }}>
      <AppBar position="fixed" style={{ boxShadow: "0px 0px 0px 0px" }}>
        <Grid container justify="center">
          <MuktiLogo />
        </Grid>
      </AppBar>
    </div>
  )
}
