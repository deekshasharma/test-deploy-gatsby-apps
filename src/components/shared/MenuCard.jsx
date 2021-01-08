import React from "react"
import {
  Card,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core"
import addButton from "../../images/add-button.svg"

export const MenuCard = ({ item, onAddItem }) => {
  const classes = useStyles()
  return (
    <Card style={{ padding: "10px" }}>
      <Grid container justify="space-between" spacing={5} direction="column">
        <Grid item>
          <Typography variant={"subtitle2"}>{item.name}</Typography>
        </Grid>
        <Grid item>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <Typography variant="body2">{item.price}</Typography>
            </Grid>
            <Grid item>
              <IconButton
                component="span"
                size="small"
                className={classes.iconButton}
                onClick={() => onAddItem(item)}
              >
                <img
                  src={addButton}
                  alt={"add-item"}
                  style={{ width: "6vw", height: "6vh" }}
                />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  )
}

const useStyles = makeStyles(theme => ({
  iconButton: {
    "&:hover": { backgroundColor: "transparent" },
  },
}))
