import React from "react"
import { navigate } from "gatsby"
import logo from "../../images/logo.svg"
import { IconButton, makeStyles } from "@material-ui/core"

export const MuktiLogo = () => {
  const classes = useStyles()
  return (
    <IconButton
      disableFocusRipple
      disableRipple
      className={classes.iconButton}
      onClick={() => navigate("/")}
    >
      <img src={logo} className={classes.logo} alt={"logo"} />
    </IconButton>
  )
}
const useStyles = makeStyles(theme => ({
  iconButton: {
    "&:hover": { backgroundColor: "transparent" },
  },
  logo: {
    height: "12vh",
    width: "12vw",
  },
}))
