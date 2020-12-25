import React from "react"
import { AppBar, Grid, IconButton, Toolbar, Button } from "@material-ui/core"
import logo from "../images/logo.svg"
import cart from "../images/cart.svg"
import { Link } from "gatsby"

export const Header = ({ routes }) => {
  return (
    <div style={{ flexGrow: "1" }}>
      <AppBar
        position="fixed"
        style={{
          boxShadow: "0px 0px 0px 0px",
          marginTop: "5vh",
        }}
      >
        <Grid container>
          <IconButton disableFocusRipple={true}>
            <img
              src={logo}
              style={{ height: "12vh", width: "12vw" }}
              alt={"logo"}
            />
          </IconButton>
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
            <Button style={{ borderRadius: "20px" }}>
              <img
                src={cart}
                style={{ height: "4vh", width: "4vw", cursor: "pointer" }}
                alt={"cart"}
              />
            </Button>
          </Toolbar>
        </Grid>
      </AppBar>
    </div>
  )
}
