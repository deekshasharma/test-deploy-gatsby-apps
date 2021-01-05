import React from "react"
import { Card, Grid, Typography } from "@material-ui/core"
import addButton from "../../images/add-button.svg"

export const MenuCard = ({ name, price }) => {
  return (
    <Card style={{ padding: "10px" }}>
      <Grid container justify="space-between" spacing={5} direction="column">
        <Grid item>
          <Typography variant={"subtitle2"}>{name}</Typography>
        </Grid>
        <Grid item>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <Typography variant="body2">{price}</Typography>
            </Grid>
            <Grid item>
              <img
                src={addButton}
                alt={"add-item"}
                style={{ width: "6vw", height: "6vh" }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  )
}
