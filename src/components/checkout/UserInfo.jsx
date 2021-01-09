import React from "react"
import { Button, Grid, TextField, Typography } from "@material-ui/core"
import { Link } from "gatsby"
import makeStyles from "@material-ui/core/styles/makeStyles"

const useStyles = makeStyles(theme => ({
  infoContainer: {
    marginTop: "10vh",
    border: "0.5px solid gray",
    padding: theme.spacing(5),
    width: "80vw",
  },
  textField: {
    paddingBottom: theme.spacing(5),
  },
  button: {
    marginBottom: theme.spacing(4),
  },
}))
export const UserInfo = ({
  onClickOrder,
  disableOrder,
  OnChangeName,
  OnChangePhone,
  fullName,
  phone,
}) => {
  const classes = useStyles()
  return (
    <Grid container justify="center" className={classes.infoContainer}>
      <Grid item xs={12} md={5}>
        <Grid container direction="column" justify="center" alignItems="center">
          <TextField
            color="secondary"
            fullWidth
            id="full-name"
            label="Full Name"
            variant="filled"
            className={classes.textField}
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
            className={classes.textField}
            onChange={e => OnChangePhone(e.target.value)}
            value={phone}
          />
          <Button
            color="secondary"
            size="large"
            variant="contained"
            className={classes.button}
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
