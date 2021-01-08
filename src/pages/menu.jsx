import React, { useState } from "react"
import { PageLayout } from "../components/shared/PageLayout"
import { MenuCards } from "../components/shared/MenuCards"

const drinksData = {
  heading: "Drinks",
  text: "Now available for delivery locally Mon-Fri from 8am-3pm",
  allDrinks: [
    { name: "Drip Coffee", price: "2.30" },
    { name: "Iced Coffee", price: "3.75" },
    { name: "Americano", price: "2.70" },
    { name: "Caramel Latte", price: "6.00" },
    { name: "Mushroom Tea", price: "6.00" },
    { name: "Cappuccino", price: "4.00" },
    { name: "Black Tea", price: "4.75" },
    { name: "Latte", price: "4.50" },
    { name: "Hot Chocolate", price: "3.75" },
  ],
}

const eatsData = {
  heading: "Eats",
  text:
    "Whilst we generally flaunt a much more extensive food menu, we are\n" +
    "            just getting back into the swing of things and will progressively\n" +
    "            add food items to our cafe as they become available!",
  allEats: [
    { name: "Breakfast Sandwich", price: "5.30" },
    { name: "Sandwich", price: "9.75" },
    { name: "Pint of Gelato", price: "12.70" },
    { name: "Salad", price: "16.00" },
    { name: "Avocado Toast", price: "8.00" },
    { name: "Dessert Bars", price: "4.00" },
    { name: "Cookie", price: "3.75" },
    { name: "Biscotti", price: "3.50" },
    { name: "Chips", price: "3.75" },
  ],
}

const Menu = () => {
  const [cartSize, setCartSize] = useState(
    parseInt(localStorage.getItem("cartSize"))
  )

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

  const updateCartSize = () => {
    if (!cartSize) {
      setCartSize(1)
      localStorage.setItem("cartSize", 1)
    } else {
      const newCartSize = cartSize + 1
      setCartSize(newCartSize)
      localStorage.setItem("cartSize", newCartSize.toString())
    }
  }
  return (
    <PageLayout cartSize={cartSize}>
      <MenuCards
        heading={drinksData.heading}
        text={drinksData.text}
        items={drinksData.allDrinks}
        onAddItem={onAddItem}
      />
      <MenuCards
        heading={eatsData.heading}
        text={eatsData.text}
        items={eatsData.allEats}
        onAddItem={onAddItem}
      />
    </PageLayout>
  )
}

export default Menu
