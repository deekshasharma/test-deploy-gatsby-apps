import React from "react"
import { AppBar, Grid, IconButton, makeStyles } from "@material-ui/core"
import logo from "../images/logo.svg"
import { navigate } from "gatsby"
const useStyles = makeStyles(theme => ({
  iconButton: {
    "&:hover": { backgroundColor: "transparent" },
  },
}))

export const SimpleHeader = ({ route }) => {
  const classes = useStyles()
  return (
    <div style={{ flexGrow: "1" }}>
      <AppBar
        position="fixed"
        style={{
          boxShadow: "0px 0px 0px 0px",
        }}
      >
        <Grid container justify="center">
          <IconButton
            disableFocusRipple={true}
            disableRipple
            className={classes.iconButton}
            onClick={() => navigate("/")}
          >
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
