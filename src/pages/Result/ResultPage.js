/******************************************************************************
 * Created Date: Thursday February 24th 2022                                  *
 * Author: Ariel S.                                                           *
 * -----                                                                      *
 * Last Modified: Tuesday, 1st March 2022 6:26:47 pm                          * 
 * Modified By: Ariel S.                                                      * 
 * -----                                                                      *
 * File: /src/pages/ResultPage.js                                             *
 ******************************************************************************/

import { useState, useEffect } from "react";
import { PieChart } from "../../common/components/graphs/PieChart";
import { useLocation } from "react-router-dom";
import { Typography, Divider } from "@material-ui/core";
import axios from "axios";
import { useStyles } from "./ResultPageStyle";
import { WaffleChart } from "../../common/components/graphs/WaffleChart";
import Header from "../../common/components/header/Header";

//Single result with expanded metadata (& charts!)
function ResultPage({
  handleSearch,
  handleClear,
  searchTerm,
  setSearchTerm,
  page,
  rateLimit,
  selectedLanguages,
  setSelectedLanguages,
}) {
  let location = useLocation();
  const { selected } = location.state;
  const [languageData, setLanguageData] = useState([]);
  const [watcherData, setWatcherData] = useState([]);
  const classes = useStyles();

  //This gets language data from github. Could be moved to githubAPI.js
  //Randomizes language color within Nivo theme. Could also use theme.js colors
  const getLanguageData = (url) => {
    let tmp = [];
    axios
      .get(url)
      .then((response) => {
        for (const language in response.data) {
          tmp.push({
            id: language,
            label: language,
            value: response.data[language],
            color: `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`,
          });
        }
        setLanguageData(tmp);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getWatcherData = () => {
    setWatcherData([
      { id: "watchers", label: "watchers", value: selected.watchers_count },
      { id: "forks", label: "forks", value: selected.forks_count },
      { id: "stars", label: "stars", value: selected.stargazers_count },
    ]);
  };

  useEffect(() => {
    getLanguageData(selected.languages_url);
    getWatcherData();
  }, [selected]);

  return (
    <div className={classes.root}>
      <Header
        handleSearch={handleSearch}
        handleClear={handleClear}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        page={page}
        rateLimit={rateLimit}
        selectedLanguages={selectedLanguages}
        setSelectedLanguages={setSelectedLanguages}
      />
      <div style={{ height: "80vh", width: "90%", margin: "auto" }}>
        <div className={classes.header}>
          <Typography variant="h5">
            {" "}
            Repository Name: {selected.name}{" "}
          </Typography>
          <Typography> License: {selected.license?.name} </Typography>
          <Typography> Author: {selected.owner?.login} </Typography>
          <Typography> Last Updated: {selected.updated_at} </Typography>
        </div>
        <Divider style={{ width: "100%", marginBottom: "2%" }} />
        <Typography className={classes.descriptionText}>
          {" "}
          Description: {selected.description}{" "}
        </Typography>
        <div className={classes.chartDiv}>
          <div className={classes.chart}>
            <Typography> Watchers/Stars/Forks </Typography>
            <WaffleChart
              data={watcherData}
              total={
                selected.watchers_count +
                selected.forks_count +
                selected.stargazers_count
              }
            />
          </div>
          <div className={classes.chart}>
            <Typography> Languages </Typography>
            <PieChart data={languageData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
