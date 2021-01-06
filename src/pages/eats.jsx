import React from "react"
import { PageLayout } from "../components/shared/PageLayout"
import { Grid, Typography } from "@material-ui/core"
import { MenuCard } from "../components/shared/MenuCard"
const allEats = [
  { name: "Breakfast Sandwich", price: "$5.30" },
  { name: "Sandwich", price: "$9.75" },
  { name: "Pint of Gelato", price: "$12.70" },
  { name: "Salad", price: "$16.00" },
  { name: "Avocado Toast", price: "$8.00" },
  { name: "Dessert Bars", price: "$4.00" },
  { name: "Cookie", price: "$3.75" },
  { name: "Biscotti", price: "$3.50" },
  { name: "Chips", price: "$3.75" },
]
const Eats = () => {
  return (
    <PageLayout>
      <div style={{ padding: "40px" }}>
        <Grid container direction="column" justify="center" alignItems="center">
          <Typography variant="h3">Eats</Typography>
          <Typography variant="subtitle1" align="center">
            Whilst we generally flaunt a much more extensive food menu, we are
            just getting back into the swing of things and will progressively
            add food items to our cafe as they become available!
          </Typography>
        </Grid>
        <Grid container spacing={9} style={{ marginTop: "10vh" }}>
          {allEats.map(drink => {
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

export default Eats
