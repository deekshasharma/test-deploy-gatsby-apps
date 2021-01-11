import React, { useState } from "react"
import { OrderSummary } from "../components/checkout/OrderSummary"
import { PageLayout } from "../components/shared/PageLayout"
import { UserInfo } from "../components/checkout/UserInfo"
import { Grid } from "@material-ui/core"
import { DisplayMessage } from "../components/shared/DisplayMessage"

const Cart = () => {
  const thanksMessage =
    "Thanks for giving us the chance to serve you. We will send an SMS once the order is ready!"
  const cart = localStorage.getItem("cart")
  const cartItems = JSON.parse(cart)
  const cartEmpty = !cartItems || cartItems.length === 0
  const [showThanks, setThanks] = useState(false)
  const [disableOrder, setDisableOrder] = useState(true)
  const [fullName, setFullName] = useState("")
  const [phone, setPhone] = useState("")

  const onClickOrder = () => {
    localStorage.clear()
    setThanks(true)
  }

  const onChangeName = name => {
    setFullName(name)
    if (fullName && phone) setDisableOrder(false)
  }
  const onChangePhone = phone => {
    setPhone(phone)
    if (fullName && phone) setDisableOrder(false)
  }

  return (
    <PageLayout hideMenu={true}>
      {cartEmpty && !showThanks && (
        <DisplayMessage
          message={
            "Hmm! 🤔 your cart is empty. Why don't you try our freshly prepared beverages or food?"
          }
          linkCaption={"Try our menu"}
          linkTo={"/menu"}
        />
      )}
      {!cartEmpty && !showThanks && (
        <Grid container style={{ padding: "40px" }} justify="center">
          <OrderSummary items={cartItems} />
          <UserInfo
            onClickOrder={onClickOrder}
            disableOrder={disableOrder}
            onChangeName={onChangeName}
            onChangePhone={onChangePhone}
            fullName={fullName}
            phone={phone}
          />
        </Grid>
      )}
      {cartEmpty && showThanks && (
        <DisplayMessage
          message={thanksMessage}
          linkCaption={"Buy Again"}
          linkTo={"/menu"}
        />
      )}
    </PageLayout>
  )
}

export default Cart
