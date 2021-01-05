import React from "react"
import { Divider, Grid, Typography } from "@material-ui/core"

export const OrderSummary = ({ items }) => {
  return (
    <Grid
      container
      direction="column"
      spacing={3}
      style={{ padding: "40px", border: "0.5px solid gray" }}
    >
      <Grid item>
        <Typography variant="h6" align="center">
          ORDER SUMMARY
        </Typography>
      </Grid>
      <Grid item>
        {items.map(item => {
          return (
            <Grid container justify="space-between">
              <Typography variant="body1"> {item.name}</Typography>
              <Typography variant="body1"> {item.price}</Typography>
            </Grid>
          )
        })}
      </Grid>
      <Divider style={{ marginTop: "10vh", marginBottom: "5vh" }} />
      <Grid item>
        <Grid container justify="space-between">
          <Typography> ORDER TOTAL</Typography>
          <Typography> $45</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}
