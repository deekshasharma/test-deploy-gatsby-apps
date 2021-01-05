import React from "react"
import { OrderSummary } from "../components/checkout/OrderSummary"
import { PageLayout } from "../components/shared/PageLayout"

const items = [
  { name: "Drip Coffee", price: "$2.30" },
  { name: "Iced Coffee", price: "$3.75" },
  { name: "Americano", price: "$2.70" },
  { name: "Iced Caramel Macchiato", price: "$6.00" },
]
const Cart = () => {
  return (
    <PageLayout>
      <div style={{ padding: "40px" }}>
        <OrderSummary items={items} />
      </div>
    </PageLayout>
  )
}

export default Cart
