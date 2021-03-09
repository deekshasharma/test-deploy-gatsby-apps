import * as React from "react"
import { PageLayout } from "../components/shared/PageLayout"
import heroImage from "../images/hero-image.webp"
import { CafeLocation } from "../components/home/CafeLocation"
import CafeFoodImages from "../components/home/CafeFoodImages"
import { useEffect, useState } from "react"
import { makeStyles } from "@material-ui/core"
import Seo from "../components/seo"

const useStyles = makeStyles(theme => ({
  pageStyles: {
    color: "#232129",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
  },
  cafeImg: {
    width: "99vw",
    height: "90vh",
    [theme.breakpoints.down("sm")]: {
      width: "97vw",
      height: "40vh",
    },
  },
}))

const IndexPage = () => {
  const classes = useStyles()
  const [cartSize, setCartSize] = useState(0)

  useEffect(() => {
    setCartSize(localStorage.getItem("cartSize"))
  }, [])

  return (
    <>
      <Seo
        title={"Mukti Cafe"}
        description={"Best quality organic fair trade coffee"}
      />
      <main className={classes.pageStyles}>
        <PageLayout cartSize={cartSize}>
          <img
            src={heroImage}
            alt={"mukti-coffee"}
            className={classes.cafeImg}
          />
          <CafeLocation />
          <CafeFoodImages />
        </PageLayout>
      </main>
    </>
  )
}

export default IndexPage
