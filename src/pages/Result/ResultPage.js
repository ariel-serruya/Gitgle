/******************************************************************************
 * Created Date: Thursday February 24th 2022                                  *
 * Author: Ariel S.                                                           *
 * -----                                                                      *
 * Last Modified: Friday, 25th February 2022 3:09:39 pm                       * 
 * Modified By: Ariel S.                                                      * 
 * -----                                                                      *
 * File: /src/pages/ResultPage.js                                             *
 ******************************************************************************/

import { useState, useEffect } from "react";
import { PieChart } from "../../common/components/graphs/PieChart";
import { useLocation } from "react-router-dom";
import { Typography } from "@material-ui/core";
import axios from "axios";

function ResultPage({}) {
  let location = useLocation();
  const { selected } = location.state;
  const [languageData, setLanguageData] = useState([]);

  const getLanguageData = (url) => {
    let tmp = [];
    axios.get(url).then((response) => {
      for (const language in response.data) {
        tmp.push({
          id: language,
          label: language,
          value: response.data[language],
          color: `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`,
        });
      }
    });
    setLanguageData(tmp);
  };

  useEffect(() => {
    getLanguageData(selected.languages_url);
  }, [selected]);

  return (
    <div
      className="App"
      style={{
        height: "100vh",
        width: "100%",
        overflow: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <PieChart data={languageData} />
      <Typography> {selected.name} </Typography>
    </div>
  );
}

export default ResultPage;
