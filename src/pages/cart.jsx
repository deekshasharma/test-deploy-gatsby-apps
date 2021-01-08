import React from "react"
import { OrderSummary } from "../components/checkout/OrderSummary"
import { PageLayout } from "../components/shared/PageLayout"
import { UserInfo } from "../components/checkout/UserInfo"
import { Grid } from "@material-ui/core"
import { DisplayMessage } from "../components/shared/DisplayMessage"

const Cart = () => {
  const cart = localStorage.getItem("cart")
  const cartItems = JSON.parse(cart)
  const cartEmpty = !cartItems || cartItems.length === 0

  return (
    <PageLayout hideMenu={true}>
      {cartEmpty && (
        <DisplayMessage
          message={
            "Your cart is empty. Please add our freshly prepared beverages or food!"
          }
          linkCaption={"Try our menu"}
          linkTo={"/menu"}
        />
      )}
      {!cartEmpty && (
        <Grid container style={{ padding: "40px" }} justify="center">
          <OrderSummary items={cartItems} />
          <UserInfo />
        </Grid>
      )}
    </PageLayout>
  )
}

export default Cart
