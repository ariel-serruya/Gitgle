/******************************************************************************
 * Created Date: Friday February 25th 2022                                    *
 * Author: Ariel S.                                                           *
 * -----                                                                      *
 * Last Modified: Saturday, 26th February 2022 2:29:34 pm                     * 
 * Modified By: Ariel S.                                                      * 
 * -----                                                                      *
 * File: /src/pages/Search/components/SortMenu/SortMenu.js                    *
 ******************************************************************************/

import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

function SortMenu({ sortType, setSortType, setOrderType }) {
  //TODO: this variable will fail if the default is NOT best-match
  const [sort, setSort] = useState(sortType);

  //Added sort options as seen on github.com, as well as help-wanted filters
  const handleSortChange = (e) => {
    switch (e.target.value) {
      case "best-match":
        setSortType("best-match");
        setOrderType("desc");
        break;
      case "most-stars":
        setSortType("stars");
        setOrderType("desc");
        break;
      case "fewest-stars":
        setSortType("stars");
        setOrderType("asc");
        break;
      case "most-forks":
        setSortType("forks");
        setOrderType("desc");
        break;
      case "fewest-forks":
        setSortType("forks");
        setOrderType("asc");
        break;
      case "recently-updated":
        setSortType("updated");
        setOrderType("desc");
        break;
      case "least-recently-updated":
        setSortType("updated");
        setOrderType("asc");
        break;
      case "most-help-needed":
        setSortType("help-wanted-issues");
        setOrderType("desc");
        break;
      case "least-help-needed":
        setSortType("help-wanted-issues");
        setOrderType("asc");
        break;
    }
    setSort(e.target.value);
  };

  return (
    <FormControl
      sx={{
        m: 1,
        minWidth: 120,
        width: "20%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography> Sort By: </Typography>
      <Select value={sort} variant="standard" onChange={handleSortChange}>
        <MenuItem value={"best-match"}>
          {" "}
          <span style={{ color: "#7561CA", fontWeight: "bold" }}>
            Best Match
          </span>
        </MenuItem>
        <MenuItem value={"most-stars"}>Most Stars</MenuItem>
        <MenuItem value={"fewest-stars"}>Fewest Stars</MenuItem>
        <MenuItem value={"most-forks"}>Most Forks</MenuItem>
        <MenuItem value={"fewest-forks"}>Fewest Forks</MenuItem>
        <MenuItem value={"recently-updated"}>Recently Updated</MenuItem>
        <MenuItem value={"least-recently-updated"}>
          Least Recently Updated
        </MenuItem>
        <MenuItem value={"most-help-needed"}>Most Help Needed</MenuItem>
        <MenuItem value={"least-help-needed"}>Least Help Needed</MenuItem>
      </Select>
    </FormControl>
  );
}

SortMenu.propTypes = {
  sortType: PropTypes.string.isRequired,
  setSortType: PropTypes.func.isRequired,
  setOrderType: PropTypes.func.isRequired,
};

export default SortMenu;
