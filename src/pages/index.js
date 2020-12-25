import * as React from "react"
import { PageLayout } from "../components/PageLayout"

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <PageLayout />
    </main>
  )
}

export default IndexPage
