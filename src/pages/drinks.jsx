import React from "react"
import { PageLayout } from "../components/PageLayout"
import { Grid, Typography } from "@material-ui/core"
import { MenuCard } from "../components/shared/MenuCard"

const allDrinks = [
  { name: "Drip Coffee", price: "$2.30" },
  { name: "Iced Coffee", price: "$3.75" },
  { name: "Americano", price: "$2.70" },
  { name: "Iced Caramel Macchiato", price: "$6.00" },
  { name: "Organic Mushroom Tea", price: "$6.00" },
  { name: "Cappuccino", price: "$4.00" },
  { name: "Iced Black Tea", price: "$4.75" },
  { name: "Latte", price: "$4.50" },
  { name: "Hot Chocolate", price: "$3.75" },
]
const Drinks = () => {
  return (
    <PageLayout>
      <div style={{ padding: "40px" }}>
        <Grid container direction="column" justify="center" alignItems="center">
          <Typography variant="h3">Drinks</Typography>
          <Typography variant="subtitle1" align="center">
            Now available for delivery locally Mon-Fri from 8am-3pm
          </Typography>
        </Grid>
        <Grid container spacing={9} style={{ marginTop: "10vh" }}>
          {allDrinks.map(drink => {
            return (
              <Grid item xs={12} md={4}>
                <MenuCard name={drink.name} price={drink.price} />
              </Grid>
            )
          })}
        </Grid>
      </div>
    </PageLayout>
  )
}

export default Drinks
