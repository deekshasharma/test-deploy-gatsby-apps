import React from "react"
import { Button, Grid, TextField, Typography } from "@material-ui/core"
import { Link } from "gatsby"

export const UserInfo = ({
  onClickOrder,
  disableOrder,
  OnChangeName,
  OnChangePhone,
  fullName,
  phone,
}) => {
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
            onChange={e => OnChangeName(e.target.value)}
            value={fullName}
          />
          <TextField
            color="secondary"
            fullWidth
            id="phone-number"
            label="Phone Number"
            variant="filled"
            type="number"
            style={{ paddingBottom: "5vh" }}
            onChange={e => OnChangePhone(e.target.value)}
            value={phone}
          />
          <Button
            color="secondary"
            size="large"
            variant="contained"
            style={{ marginBottom: "5vh" }}
            onClick={onClickOrder}
            disabled={disableOrder}
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
