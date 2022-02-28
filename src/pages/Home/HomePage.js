/******************************************************************************
 * Created Date: Friday February 25th 2022                                    *
 * Author: Ariel S.                                                           *
 * -----                                                                      *
 * Last Modified: Saturday, 26th February 2022 5:57:34 pm                     * 
 * Modified By: Ariel S.                                                      * 
 * -----                                                                      *
 * File: /src/pages/Home/HomePage.js                                          *
 ******************************************************************************/

import SearchBar from "../../common/components/search/SearchBar";
import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import { useStyles } from "./HomepageStyles";

//Simple title and seach bar
function HomePage({
  handleSearch,
  handleClear,
  searchTerm,
  setSearchTerm,
  page,
}) {
  const classes = useStyles();

  return (
    <div className="App" className={classes.root}>
      <Typography variant="h5" className={classes.title}>
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

HomePage.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  handleClear: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};

export default HomePage;
