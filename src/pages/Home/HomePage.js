/******************************************************************************
 * Created Date: Friday February 25th 2022                                    *
 * Author: Ariel S.                                                           *
 * -----                                                                      *
 * Last Modified: Friday, 25th February 2022 2:12:28 pm                       * 
 * Modified By: Ariel S.                                                      * 
 * -----                                                                      *
 * File: /src/pages/Home/HomePage.js                                          *
 ******************************************************************************/

import SearchBar from "../../pages/Search/components/SearchBar";
import { Typography } from "@material-ui/core";

function HomePage({
  handleSearch,
  handleClear,
  searchTerm,
  setSearchTerm,
  page,
}) {
  return (
    <div
      className="App"
      style={{
        height: "100vh",
        width: "90%",
        overflow: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "auto",
      }}
    >
      <Typography variant="h5" style={{ marginBottom: "3%" }}>
        {" "}
        Github Repository Search
      </Typography>
      <SearchBar
        handleSearch={handleSearch}
        handleClear={handleClear}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        page={page}
      />
    </div>
  );
}

export default HomePage;
