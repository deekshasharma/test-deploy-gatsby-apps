import React from "react"
import { PageLayout } from "../components/shared/PageLayout"
import { Grid, Typography } from "@material-ui/core"
import { DisplayMessage } from "../components/shared/DisplayMessage"

const thanksMessage =
  "Thanks for giving us the chance to serve you. We will send an SMS once the order is ready!"
const FinalOrder = () => {
  return (
    <PageLayout headerWithLogo={true}>
      <DisplayMessage
        message={thanksMessage}
        linkCaption={"Buy Again"}
        linkTo={"/drinks"}
      />
    </PageLayout>
  )
}

export default FinalOrder
