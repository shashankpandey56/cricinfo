import { Card, CardActions, Grid, Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import React from "react";
import img from "../img/versus.png";
import showDetails from "./showDetails";

export default function Mycard({ match }) {
  const Display = (id) => {
    showDetails(id)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
    console.log(id);
  };
  return (
    <Card style={{ marginTop: 30, height: 250 }}>
      <CardContent>
        <Grid container justify="center" alignItems="center" spacing={4}>
          <Grid item>
            <Typography>{match["team-1"]}</Typography>
          </Grid>
          <Grid item>
            <img style={{ height: 100, width: 85 }} src={img} alt="" />
          </Grid>
          <Grid item>
            <Typography>{match["team-2"]}</Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions style={{ marginTop: 40 }}>
        <Grid container justify="center" alignItems="center">
          <Button
            onClick={() => {
              Display(match.unique_id);
            }}
            variant="contained"
            color="primary"
          >
            Show Details
          </Button>
          <Button style={{ marginLeft: 5 }} variant="contained" color="primary">
            Start Time {new Date(match.dateTimeGMT).toLocaleString()}
          </Button>
        </Grid>
      </CardActions>
    </Card>
  );
}
