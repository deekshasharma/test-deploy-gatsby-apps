import React, { useEffect, useState } from "react"
import { PageLayout } from "../components/shared/PageLayout"
import { MenuCards } from "../components/shared/MenuCards"
import { graphql } from "gatsby"
import Seo from "../components/seo"

const Menu = ({ data }) => {
  const drinksData = data.allMenuDataJson.edges[0].node.drinks
  const eatsData = data.allMenuDataJson.edges[1].node.eats

  const [cartSize, setCartSize] = useState(0)

  useEffect(() => {
    const size = parseInt(localStorage.getItem("cartSize"))
    setCartSize(size)
  }, [])

  const getCartFromCache = () => {
    if (typeof localStorage !== "undefined") return localStorage.getItem("cart")
  }

  const saveCartToCache = cart => {
    if (typeof localStorage !== "undefined")
      localStorage.setItem("cart", JSON.stringify(cart))
  }

  const onAddItem = item => {
    updateCartSize()
    if (!getCartFromCache()) {
      saveCartToCache([item])
    } else {
      const currentCart = getCartFromCache()
      const cartJSON = JSON.parse(currentCart)
      const newCart = [...cartJSON, item]
      saveCartToCache(newCart)
    }
  }

  const updateCartSize = () => {
    if (!cartSize) {
      setCartSize(1)
      typeof localStorage !== "undefined" &&
        localStorage.setItem("cartSize", "1")
    } else {
      const newCartSize = cartSize + 1
      setCartSize(newCartSize)
      typeof localStorage !== "undefined" &&
        localStorage.setItem("cartSize", newCartSize.toString())
    }
  }
  return (
    <>
      <Seo
        title={"Mukti Menu"}
        description={"Collection of our home grown fresh food with coffee"}
      />
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
    </>
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
