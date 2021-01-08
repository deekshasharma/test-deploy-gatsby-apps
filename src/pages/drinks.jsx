import React, { useState } from "react"
import { PageLayout } from "../components/shared/PageLayout"
import { MenuCards } from "../components/shared/MenuCards"

const allDrinks = [
  { name: "Drip Coffee", price: "2.30" },
  { name: "Iced Coffee", price: "3.75" },
  { name: "Americano", price: "2.70" },
  { name: "Caramel Latte", price: "6.00" },
  { name: "Mushroom Tea", price: "6.00" },
  { name: "Cappuccino", price: "4.00" },
  { name: "Black Tea", price: "4.75" },
  { name: "Latte", price: "4.50" },
  { name: "Hot Chocolate", price: "3.75" },
]

const drinksData = {
  heading: "Drinks",
  text: "Now available for delivery locally Mon-Fri from 8am-3pm",
}
const Drinks = () => {
  const [cartSize, setCartSize] = useState(localStorage.getItem("cartSize"))

  const onAddItem = item => {
    updateCartSize()
    if (!localStorage.getItem("cart")) {
      const cart = [item]
      localStorage.setItem("cart", JSON.stringify(cart))
    } else {
      const currentCart = localStorage.getItem("cart")
      const cartJSON = JSON.parse(currentCart)
      const newCart = [...cartJSON, item]
      localStorage.setItem("cart", JSON.stringify(newCart))
    }
  }

  /**
   * TODO: Since cartSize is initialized from localStorage why not use that instead of getting item
   */
  const updateCartSize = () => {
    const totalItems = localStorage.getItem("cartSize")
    if (!totalItems) {
      localStorage.setItem("cartSize", 1)
      setCartSize(1)
    } else {
      const newCartSize = parseInt(totalItems) + 1
      localStorage.setItem("cartSize", newCartSize)
      setCartSize(newCartSize)
    }
  }
  return (
    <PageLayout cartSize={cartSize}>
      <MenuCards
        heading={drinksData.heading}
        text={drinksData.text}
        items={allDrinks}
        onAddItem={onAddItem}
      />
    </PageLayout>
  )
}

export default Drinks
