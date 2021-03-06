import { Helmet } from "react-helmet"
import * as React from "react"

const Seo = ({ title, description, lang = "en" }) => {
  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  )
}

export default Seo
