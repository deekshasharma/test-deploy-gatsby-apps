import React from "react"
import { Grid, Typography } from "@material-ui/core"
import { MenuCard } from "./MenuCard"

export const MenuCards = ({ heading, text, items }) => {
  return (
    <div style={{ padding: "40px" }}>
      <Grid container direction="column" justify="center" alignItems="center">
        <Typography variant="h3">{heading}</Typography>
        <Typography variant="subtitle1" align="center">
          {text}
        </Typography>
      </Grid>
      <Grid container spacing={9} style={{ marginTop: "10vh" }}>
        {items.map((eat, key) => {
          return (
            <Grid key={key} item xs={12} md={4}>
              <MenuCard name={eat.name} price={eat.price} />
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}
