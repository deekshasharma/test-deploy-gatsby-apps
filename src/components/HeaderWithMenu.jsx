import React from "react"
import {
  AppBar,
  Button,
  Grid,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core"
import cart from "../images/cart.svg"
import { Link } from "gatsby"
import { MuktiLogo } from "./shared/MuktiLogo"

const useStyles = makeStyles(theme => ({
  toolBar: {
    flexGrow: "1",
    display: "flex",
    justifyContent: "flex-end",
  },
  route: {
    textDecoration: "none",
    marginRight: "4vw",
  },
  routeButton: { color: theme.palette.secondary.main, borderRadius: "20px" },
  cartImg: { height: "4vh", width: "4vw", cursor: "pointer" },
}))

export const HeaderWithMenu = ({ routes, cartSize }) => {
  const classes = useStyles()
  return (
    <div style={{ flexGrow: "1" }}>
      <AppBar
        position="fixed"
        style={{
          boxShadow: "0px 0px 0px 0px",
        }}
      >
        <Grid container>
          <MuktiLogo />
          <Toolbar className={classes.toolBar}>
            {routes.map((route, key) => {
              return (
                <Link to={route.path} key={key} className={classes.route}>
                  <Button className={classes.routeButton}>{route.name}</Button>
                </Link>
              )
            })}
            <Link to={"/cart"} className={classes.route}>
              <Button className={classes.routeButton}>
                <img src={cart} className={classes.cartImg} alt={"cart"} />
                <Typography>{cartSize || ""}</Typography>
              </Button>
            </Link>
          </Toolbar>
        </Grid>
      </AppBar>
    </div>
  )
}
