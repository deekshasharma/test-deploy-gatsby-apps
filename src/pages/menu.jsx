import React, { useState } from "react"
import { PageLayout } from "../components/shared/PageLayout"
import { MenuCards } from "../components/shared/MenuCards"
import { graphql } from "gatsby"

const Menu = ({ data }) => {
  const drinksData = data.allMenuDataJson.edges[0].node.drinks
  const eatsData = data.allMenuDataJson.edges[1].node.eats

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

export const query = graphql`
  {
    allMenuDataJson {
      edges {
        node {
          drinks {
            heading
            text
            allDrinks {
              name
              price
            }
          }
          eats {
            heading
            text
            allEats {
              name
              price
            }
          }
        }
      }
    }
  }
`

export default Menu
