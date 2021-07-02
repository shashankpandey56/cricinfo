import React from "react";
import Mycard from "./Mycard";
import { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
const axios = require("axios");
export default function Api() {
  const API_KEY = "aKm0rKlARmgtqTOXDcDVONu5Ysu1";
  const [matches, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const url = `
            https://cricapi.com/api/matches/?apikey=${API_KEY}`;
      const res = await axios.get(url);
      setData(res.data.matches);
    }
    getData();
  }, []);

  return (
    <>
      <Grid container>
        <Grid sm="3"></Grid>
        <Grid sm="6">
          {matches.map((match) => {
            if (match.type == "Twenty20") {
              return <Mycard key={match.unique_id} match={match} />;
            }
          })}
        </Grid>
      </Grid>
    </>
  );
}
