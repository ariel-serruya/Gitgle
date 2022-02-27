/******************************************************************************
 * Created Date: Saturday February 26th 2022                                  *
 * Author: Ariel S.                                                           *
 * -----                                                                      *
 * Last Modified: Sunday, 27th February 2022 1:43:06 pm                       * 
 * Modified By: Ariel S.                                                      * 
 * -----                                                                      *
 * File: /src/common/components/header/Header.js                              *
 ******************************************************************************/

import { useStyles } from "./HeaderStyle";
import { Typography } from "@mui/material";
import SearchBar from "../search/SearchBar";
import FilterMenu from "../../../pages/Search/components/FilterMenu";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import { useNavigate } from "react-router-dom";

function Header({
  handleSearch,
  handleClear,
  searchTerm,
  setSearchTerm,
  page,
  rateLimit,
  selectedLanguages,
  setSelectedLanguages,
}) {
  const classes = useStyles();
  let navigate = useNavigate();

  return (
    <div className={classes.header}>
      <div className={classes.title}>
        <Typography variant="h5" onClick={() => navigate(`/`)}>
          {" "}
          Github Repository Search
        </Typography>
        {rateLimit && (
          <>
            <Typography variant="subtitle2">
              {" "}
              Remaining Search Requests: {rateLimit.resources.search.remaining}/
              {rateLimit.resources.search.limit}
            </Typography>
            <Typography variant="subtitle2">
              {" "}
              Resets:{" "}
              {new Date(rateLimit.resources.search.reset * 1000).toString()}
            </Typography>
          </>
        )}
      </div>
      <div className={classes.search}>
        <SearchBar
          handleSearch={handleSearch}
          handleClear={handleClear}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          page={page}
        />
        <FilterMenu
          selectedLanguages={selectedLanguages}
          setSelectedLanguages={setSelectedLanguages}
        />
      </div>
      <div style={{ width: "100%" }}>
        {selectedLanguages.map((language) => (
          <Chip
            key={language}
            label={language}
            variant="outlined"
            onDelete={() =>
              setSelectedLanguages(
                selectedLanguages.filter((lang) => lang !== language)
              )
            }
          />
        ))}
        {selectedLanguages.length > 0 && (
          <Button variant="text" onClick={() => setSelectedLanguages([])}>
            clear all
          </Button>
        )}
      </div>
    </div>
  );
}

export default Header;
