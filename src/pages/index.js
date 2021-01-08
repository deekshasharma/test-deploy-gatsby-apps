import * as React from "react"
import { PageLayout } from "../components/shared/PageLayout"
import heroImage from "../images/hero-image.svg"
import { CafeLocation } from "../components/CafeLocation"
import { CafeFoodImages } from "../components/CafeFoodImages"

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <PageLayout cartSize={localStorage.getItem("cartSize")}>
        <img src={heroImage} alt={"coffee"} style={{ width: "100%" }} />
        <CafeLocation />
        <CafeFoodImages />
      </PageLayout>
    </main>
  )
}

export default IndexPage
