import React from "react"
import { Divider, Grid, Typography } from "@material-ui/core"
import makeStyles from "@material-ui/core/styles/makeStyles"

const useStyles = makeStyles(theme => ({
  summaryContainer: {
    padding: "40px",
    border: "0.5px solid gray",
    maxWidth: "80vw",
  },
  summaryDivider: {
    marginTop: "5vh",
    marginBottom: "5vh",
  },
}))

export const OrderSummary = ({ items }) => {
  const classes = useStyles()
  const getTotal = () => {
    return items.reduce((acc, item) => acc + parseFloat(item.price), 0)
  }

  return (
    <Grid container direction="column" className={classes.summaryContainer}>
      <Grid item>
        <Typography gutterBottom variant="h6" align="center">
          ORDER SUMMARY
        </Typography>
      </Grid>
      <Grid item>
        {items.map((item, key) => {
          return (
            <Grid key={key} container justify="space-between">
              <Typography gutterBottom variant="body1">
                {item.name}
              </Typography>
              <Typography gutterBottom variant="body1">
                {item.price}
              </Typography>
            </Grid>
          )
        })}
      </Grid>
      <Divider className={classes.summaryDivider} />
      <Grid item>
        <Grid container justify="space-between">
          <Typography> ORDER TOTAL</Typography>
          <Typography> ${getTotal().toFixed(2)}</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}
