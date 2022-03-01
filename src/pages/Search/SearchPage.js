/******************************************************************************
 * Created Date: Thursday February 24th 2022                                  *
 * Author: Ariel S.                                                           *
 * -----                                                                      *
 * Last Modified: Tuesday, 1st March 2022 6:44:24 pm                          * 
 * Modified By: Ariel S.                                                      * 
 * -----                                                                      *
 * File: /src/pages/SearchPage.js                                              *
 ******************************************************************************/

import { useEffect, useState } from "react";
import SearchBar from "../../common/components/search/SearchBar";
import ResultCard from "../Result/components/ResultCard";
import Pagination from "@mui/material/Pagination";
import { Typography } from "@material-ui/core";
import SortMenu from "./components/SortMenu";
import { getRateLimit } from "../../common/apis/githubAPI";
import Skeleton from "@mui/material/Skeleton";
import PropTypes from "prop-types";
import { useStyles } from "./SearchPageStyle";
import { useSnackbar } from "notistack";
import Header from "../../common/components/header/Header";

function SearchPage({
  pageCount,
  results,
  page,
  totalResults,
  searchTerm,
  setSearchTerm,
  handleSearch,
  handleClear,
  handlePage,
  setSortType,
  setOrderType,
  sortType,
  isLoading,
  rateLimit,
  selectedLanguages,
  setSelectedLanguages,
}) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

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
      <div style={{ height: "80vh", width: "100%" }}>
        <div className={classes.subHeader}>
          <Typography>
            {" "}
            We found{" "}
            <span style={{ color: "#7561CA", fontWeight: "bold" }}>
              {" "}
              {totalResults}
            </span>{" "}
            results!{" "}
          </Typography>
          <SortMenu
            sortType={sortType}
            setSortType={setSortType}
            setOrderType={setOrderType}
          />
        </div>
        {isLoading && (
          <div className={classes.placeholders}>
            <Skeleton variant="rectangular" width={"80%"} height={118} />
            <Skeleton variant="rectangular" width={"80%"} height={118} />
            <Skeleton variant="rectangular" width={"80%"} height={118} />
            <Skeleton variant="rectangular" width={"80%"} height={118} />
          </div>
        )}
        {results.map((result) => {
          return <ResultCard key={result.id} result={result} />;
        })}
        <div className={classes.pagination}>
          <Pagination
            count={Math.ceil(totalResults / pageCount)}
            page={page}
            onChange={handlePage}
          />
        </div>
      </div>
    </div>
  );
}

//Good runtime typechecking tool:
SearchPage.propTypes = {
  pageCount: PropTypes.number.isRequired,
  results: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  totalResults: PropTypes.number.isRequired,
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleClear: PropTypes.func.isRequired,
  handlePage: PropTypes.func.isRequired,
  setSortType: PropTypes.func.isRequired,
  setOrderType: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default SearchPage;
