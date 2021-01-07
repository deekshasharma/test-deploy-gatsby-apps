import React from "react"
import { PageLayout } from "../components/shared/PageLayout"
import { MenuCards } from "../components/shared/MenuCards"

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

const drinksData = {
  heading: "Drinks",
  text: "Now available for delivery locally Mon-Fri from 8am-3pm",
}
const Drinks = () => {
  return (
    <PageLayout>
      <MenuCards
        heading={drinksData.heading}
        text={drinksData.text}
        items={allDrinks}
      />
    </PageLayout>
  )
}

export default Drinks
