import React from "react"
import { PageLayout } from "../components/shared/PageLayout"
import { Grid, Typography } from "@material-ui/core"

const thanksMessage =
  "Thanks for giving us the chance to serve you. We will send an SMS once the order is ready!"
const FinalOrder = () => {
  return (
    <PageLayout headerWithLogo={true}>
      <Grid container justify="center" alignItems="flex-start">
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
          <Typography align="center" variant="subtitle1">
            {thanksMessage}
          </Typography>
        </Grid>
      </Grid>
    </PageLayout>
  )
}

export default FinalOrder
