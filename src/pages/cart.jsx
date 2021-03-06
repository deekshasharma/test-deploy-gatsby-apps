import React, { useEffect, useState } from "react"
import { OrderSummary } from "../components/checkout/OrderSummary"
import { PageLayout } from "../components/shared/PageLayout"
import { UserInfo } from "../components/checkout/UserInfo"
import { Grid } from "@material-ui/core"
import { DisplayMessage } from "../components/shared/DisplayMessage"
const thanksMessage =
  "Thanks for giving us the chance to serve you. We will send an SMS once the order is ready!"
const emptyCartMessage =
  "Hmm! 🤔 your cart is empty. Why don't you try our freshly prepared beverages or food?"

const Cart = () => {
  const [cart, setCart] = useState(undefined)
  const [cartEmpty, setCartEmpty] = useState(true)
  const [showThanks, setThanks] = useState(false)
  const [disableOrder, setDisableOrder] = useState(true)
  const [fullName, setFullName] = useState("")
  const [phone, setPhone] = useState("")

  useEffect(() => {
    const storedCart = localStorage.getItem("cart")
    const cartItems = JSON.parse(storedCart)
    setCart(cartItems)
    setCartEmpty(!cartItems || cartItems.length === 0)
  }, [])

  const onClickOrder = () => {
    setThanks(true)
    setCartEmpty(true)
    checkAndClearCache()
  }

  const checkAndClearCache = () =>
    typeof localStorage !== "undefined" && localStorage.clear()

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
          message={emptyCartMessage}
          linkCaption={"Try our menu"}
          linkTo={"/menu"}
        />
      )}
      {!cartEmpty && !showThanks && (
        <Grid container style={{ padding: "40px" }} justify="center">
          <OrderSummary items={cart} />
          <UserInfo
            onClickOrder={onClickOrder}
            disableOrder={disableOrder}
            onChangeName={onChangeName}
            onChangePhone={onChangePhone}
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
