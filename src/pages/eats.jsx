import React from "react"
import { PageLayout } from "../components/shared/PageLayout"
import { MenuCards } from "../components/shared/MenuCards"

const allEats = [
  { name: "Breakfast Sandwich", price: "5.30" },
  { name: "Sandwich", price: "9.75" },
  { name: "Pint of Gelato", price: "12.70" },
  { name: "Salad", price: "16.00" },
  { name: "Avocado Toast", price: "8.00" },
  { name: "Dessert Bars", price: "4.00" },
  { name: "Cookie", price: "3.75" },
  { name: "Biscotti", price: "3.50" },
  { name: "Chips", price: "3.75" },
]
const eatsData = {
  heading: "Eats",
  text:
    "Whilst we generally flaunt a much more extensive food menu, we are\n" +
    "            just getting back into the swing of things and will progressively\n" +
    "            add food items to our cafe as they become available!",
}
const onAddItem = item => {
  const cartSize = localStorage.getItem("cartSize")
  if (!cartSize) {
    localStorage.setItem("cartSize", 1)
  } else {
    const newCartSize = parseInt(cartSize) + 1
    localStorage.setItem("cartSize", newCartSize)
  }
}
const Eats = () => {
  return (
    <PageLayout>
      <MenuCards
        heading={eatsData.heading}
        text={eatsData.text}
        items={allEats}
        onAddItem={onAddItem}
      />
    </PageLayout>
  )
}

export default Eats
