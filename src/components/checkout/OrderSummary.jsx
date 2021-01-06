import React from "react"
import { Divider, Grid, Typography } from "@material-ui/core"
import styles from "./OrderSummary.module.css"

export const OrderSummary = ({ items }) => {
  return (
    <Grid container direction="column" className={styles.summaryContainer}>
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
      <Grid item className={styles.summaryDivider}>
        <Divider />
      </Grid>
      <Grid item>
        <Grid container justify="space-between">
          <Typography> ORDER TOTAL</Typography>
          <Typography> $45</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}
