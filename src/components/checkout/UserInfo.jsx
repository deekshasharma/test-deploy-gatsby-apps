import React from "react"
import { Button, Grid, TextField, Typography } from "@material-ui/core"
import { Link, navigate } from "gatsby"

export const UserInfo = () => {
  const onClickOrderNow = () => {
    localStorage.clear()
    navigate("/final-order")
  }
  return (
    <Grid
      container
      justify="center"
      style={{
        marginTop: "10vh",
        border: "0.5px solid gray",
        padding: "40px",
        width: "80vw",
      }}
    >
      <Grid item xs={12} md={5}>
        <Grid container direction="column" justify="center" alignItems="center">
          <TextField
            color="secondary"
            fullWidth
            id="full-name"
            label="Full Name"
            variant="filled"
            style={{ paddingBottom: "5vh" }}
          />
          <TextField
            color="secondary"
            fullWidth
            id="phone-number"
            label="Phone Number"
            variant="filled"
            type="number"
            style={{ paddingBottom: "5vh" }}
          />
          <Button
            color="secondary"
            size="large"
            variant="contained"
            style={{ marginBottom: "5vh" }}
            onClick={onClickOrderNow}
          >
            ORDER NOW
          </Button>
          <Link to={"/menu"} style={{ color: "black" }}>
            <Typography variant="subtitle2">Continue Shopping</Typography>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  )
}
