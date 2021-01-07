import React from "react"
import { Grid, Typography } from "@material-ui/core"
import { Link } from "gatsby"

export const DisplayMessage = ({ message, linkCaption, linkTo }) => {
  return (
    <Grid container justify="center" direction="column" alignItems="center">
      <Grid
        item
        xs={12}
        md={6}
        style={{
          border: "0.5px solid gray",
          padding: "40px",
          marginBottom: "10vh",
          marginTop: "10vh",
        }}
      >
        <Typography gutterBottom align="center" variant="subtitle1">
          {message}
        </Typography>
        <Grid item>
          <Link to={linkTo} style={{ color: "black" }}>
            <Typography align="center" variant="subtitle2">
              {linkCaption}
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  )
}
