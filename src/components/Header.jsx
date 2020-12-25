import React from "react"
import { AppBar, Grid, Tab, Tabs, Toolbar } from "@material-ui/core"
import logo from "../images/logo.svg"
import cart from "../images/cart.svg"

export const Header = ({ tabValue }) => {
  const handleClick = (event, newValue) => console.log("hello")

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
          <img
            src={logo}
            style={{ height: "12vh", width: "12vw" }}
            alt={"logo"}
          />
          <Toolbar
            style={{
              flexGrow: "1",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Tabs
              value={tabValue}
              onChange={handleClick}
              textColor={"textSecondary"}
            >
              <Tab label="DRINKS" />
              <Tab label="EATS" />
              <Tab label="SHOP" />
              <Tab label="ABOUT" />
            </Tabs>
            <img
              src={cart}
              style={{ height: "5vh", width: "5vw", cursor: "pointer" }}
              alt={"cart"}
            />
          </Toolbar>
        </Grid>
      </AppBar>
    </div>
  )
}
