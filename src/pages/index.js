import * as React from "react"
import { PageLayout } from "../components/shared/PageLayout"
import heroImage from "../images/hero-image.svg"
import { CafeLocation } from "../components/home/CafeLocation"
import CafeFoodImages from "../components/home/CafeFoodImages"
import { useEffect, useState } from "react"

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage = () => {
  const [cartSize, setCartSize] = useState(undefined)

  useEffect(() => {
    setCartSize(localStorage.getItem("cartSize"))
  }, [])

  return (
    <main style={pageStyles}>
      <PageLayout cartSize={cartSize}>
        <img src={heroImage} alt={"coffee"} style={{ width: "100%" }} />
        <CafeLocation />
        <CafeFoodImages />
      </PageLayout>
    </main>
  )
}

export default IndexPage
