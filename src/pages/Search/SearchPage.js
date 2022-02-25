/******************************************************************************
 * Created Date: Thursday February 24th 2022                                  *
 * Author: Ariel S.                                                           *
 * -----                                                                      *
 * Last Modified: Friday, 25th February 2022 3:09:39 pm                       * 
 * Modified By: Ariel S.                                                      * 
 * -----                                                                      *
 * File: /src/pages/SearchPage.js                                              *
 ******************************************************************************/

import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import ResultCard from "../Result/components/ResultCard";
import Pagination from "@mui/material/Pagination";
import { Typography } from "@material-ui/core";
import SortMenu from "./components/SortMenu";

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
}) {
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
      <div
        style={{
          width: "90%",
          height: "10%",
          margin: "auto",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
          paddingTop: "5%",
        }}
      >
        <Typography variant="h5"> Github Repository Search</Typography>
        <div style={{ width: "75%" }}>
          <SearchBar
            handleSearch={handleSearch}
            handleClear={handleClear}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            page={page}
          />
        </div>
      </div>
      <div style={{ height: "90vh" }}>
        <div
          style={{
            height: "10%",
            width: "90%",
            margin: "auto",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography>
            {" "}
            We found{" "}
            <span style={{ color: "#7561CA", fontWeight: "bold" }}>
              {" "}
              {totalResults}
            </span>{" "}
            results!{" "}
          </Typography>
          <SortMenu />
        </div>
        {results.map((result) => {
          return <ResultCard key={result.id} result={result} />;
        })}
        <div
          style={{
            width: "30%",
            height: "10%",
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Pagination
            count={Math.ceil(totalResults / pageCount)}
            page={page}
            onChange={handlePage}
          />
        </div>
      </div>
      )
    </div>
  );
}

export default SearchPage;
