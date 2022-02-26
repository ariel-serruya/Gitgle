/******************************************************************************
 * Created Date: Saturday February 26th 2022                                  *
 * Author: Ariel S.                                                           *
 * -----                                                                      *
 * Last Modified: Saturday, 26th February 2022 5:58:52 pm                     * 
 * Modified By: Ariel S.                                                      * 
 * -----                                                                      *
 * File: /src/common/components/header/Header.js                              *
 ******************************************************************************/

import { useStyles } from "./HeaderStyle";
import { Typography } from "@mui/material";
import SearchBar from "../search/SearchBar";

function Header({
  handleSearch,
  handleClear,
  searchTerm,
  setSearchTerm,
  page,
  rateLimit,
}) {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <div>
        <Typography variant="h5"> Github Repository Search</Typography>
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
  );
}

export default Header;
