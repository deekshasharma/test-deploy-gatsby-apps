import React from "react"
import { OrderSummary } from "../components/checkout/OrderSummary"
import { PageLayout } from "../components/shared/PageLayout"
import { UserInfo } from "../components/checkout/UserInfo"
import { Grid } from "@material-ui/core"
import { DisplayMessage } from "../components/shared/DisplayMessage"

const items = [
  { name: "Drip Coffee", price: "2.30" },
  { name: "Iced Coffee", price: "3.75" },
  { name: "Americano", price: "2.70" },
  { name: "Kombucha", price: "6.00" },
]
const Cart = () => {
  return (
    <PageLayout headerWithLogo={true}>
      {items.length === 0 && (
        <DisplayMessage
          message={
            "Your cart is empty. Please add our freshly prepared beverages or food!"
          }
          linkCaption={"Order Drinks"}
          linkTo={"/drinks"}
        />
      )}
      {items.length > 0 && (
        <Grid container style={{ padding: "40px" }} justify="center">
          <OrderSummary items={items} />
          <UserInfo />
        </Grid>
      )}
    </PageLayout>
  )
}

export default Cart
