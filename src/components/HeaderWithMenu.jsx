import React from "react"
import { AppBar, Button, Grid, makeStyles, Toolbar } from "@material-ui/core"
import cart from "../images/cart.svg"
import { Link } from "gatsby"
import { MuktiLogo } from "./shared/MuktiLogo"

const useStyles = makeStyles(theme => ({
  iconButton: {
    "&:hover": { backgroundColor: "transparent" },
  },
}))

export const HeaderWithMenu = ({ routes }) => {
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
          <Toolbar
            style={{
              flexGrow: "1",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            {routes.map((route, key) => {
              return (
                <Link
                  to={route.path}
                  key={key}
                  style={{ textDecoration: "none", marginRight: "4vw" }}
                >
                  <Button style={{ color: "black", borderRadius: "20px" }}>
                    {route.name}
                  </Button>
                </Link>
              )
            })}
            <Link
              to={"/cart"}
              style={{ textDecoration: "none", marginRight: "4vw" }}
            >
              <Button style={{ borderRadius: "20px" }}>
                <img
                  src={cart}
                  style={{ height: "4vh", width: "4vw", cursor: "pointer" }}
                  alt={"cart"}
                />
              </Button>
            </Link>
          </Toolbar>
        </Grid>
      </AppBar>
    </div>
  )
}
