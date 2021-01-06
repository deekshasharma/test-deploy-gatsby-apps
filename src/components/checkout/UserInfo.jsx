import React from "react"
import { Button, Grid, TextField, Typography } from "@material-ui/core"

export const UserInfo = () => {
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
            id="filled-basic"
            label="Full Name"
            variant="filled"
            style={{ paddingBottom: "5vh" }}
          />
          <TextField
            color="secondary"
            fullWidth
            id="filled-basic"
            label="Phone Number"
            variant="filled"
            style={{ paddingBottom: "5vh" }}
          />
          <Button
            color="secondary"
            size="large"
            variant="contained"
            style={{ marginBottom: "5vh" }}
          >
            ORDER NOW
          </Button>
          <Typography variant="subtitle2">Continue Shopping</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}
