import * as React from "react"
import { PageLayout } from "../components/PageLayout"
import heroImage from "../images/hero-image.svg"

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <PageLayout>
        <img src={heroImage} alt={"coffee image"} style={{ width: "100%" }} />
      </PageLayout>
    </main>
  )
}

export default IndexPage
