import React from "react"
import { OrderSummary } from "../components/checkout/OrderSummary"
import { PageLayout } from "../components/shared/PageLayout"
import { UserInfo } from "../components/checkout/UserInfo"
import { Grid } from "@material-ui/core"
import { DisplayMessage } from "../components/shared/DisplayMessage"

const Cart = () => {
  const cart = localStorage.getItem("cart")
  const cartItems = JSON.parse(cart)

  return (
    <PageLayout hideMenu={true}>
      {cartItems.length === 0 && (
        <DisplayMessage
          message={
            "Your cart is empty. Please add our freshly prepared beverages or food!"
          }
          linkCaption={"Order Drinks"}
          linkTo={"/drinks"}
        />
      )}
      {cartItems.length > 0 && (
        <Grid container style={{ padding: "40px" }} justify="center">
          <OrderSummary items={cartItems} />
          <UserInfo />
        </Grid>
      )}
    </PageLayout>
  )
}

export default Cart
