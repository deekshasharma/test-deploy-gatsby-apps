import React from "react"
import { Grid, makeStyles, Typography } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"

const text =
  "Proudly serving local and organic fresh food, juices and smoothies!"

const useStyles = makeStyles(theme => ({
  foodOptionsContainer: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    width: "100%",
    backgroundColor: theme.palette.secondary[200],
  },
  imagesContainer: {},
  image: {
    width: "20vw",
    height: "80vh",
    [theme.breakpoints.down("sm")]: {
      width: "40vw",
      height: "50vh",
    },
  },
}))

const CafeFoodImages = () => {
  const classes = useStyles()
  const data = useStaticQuery(query)
  const foodImages = data.allFile.edges
  return (
    <>
      <Grid container>
        <Grid item xs={12} className={classes.foodOptionsContainer}>
          <Grid container justify="center" alignItems="center">
            <Typography align={"center"} variant="subtitle2">
              {text}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify={"space-evenly"}>
            {foodImages.map((image, key) => {
              return (
                <img
                  key={key}
                  src={image.node.publicURL}
                  alt={image.node.name}
                  className={classes.image}
                />
              )
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export const query = graphql`
  {
    allFile(filter: { dir: { regex: "/food-images/" } }) {
      edges {
        node {
          name
          publicURL
        }
      }
    }
  }
`

export default CafeFoodImages
