import React from "react"
import { Divider, Grid, Typography } from "@material-ui/core"
import { UserInfo } from "./UserInfo"

export const OrderSummary = ({ items }) => {
  return (
    <Grid
      container
      direction="column"
      style={{ padding: "40px", border: "0.5px solid gray", width: "80vw" }}
    >
      <Grid item>
        <Typography gutterBottom variant="h6" align="center">
          ORDER SUMMARY
        </Typography>
      </Grid>
      <Grid item>
        {items.map(item => {
          return (
            <Grid container justify="space-between">
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
      <Divider style={{ marginTop: "5vh", marginBottom: "5vh" }} />
      <Grid item>
        <Grid container justify="space-between">
          <Typography> ORDER TOTAL</Typography>
          <Typography> $45</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}
