/******************************************************************************
 * Created Date: Thursday February 24th 2022                                  *
 * Author: Ariel S.                                                           *
 * -----                                                                      *
 * Last Modified: Friday, 25th February 2022 2:08:59 pm                       * 
 * Modified By: Ariel S.                                                      * 
 * -----                                                                      *
 * File: /src/common/components/SearchBar/SearchBar.js                        *
 ******************************************************************************/

import { TextField } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

const StyledTextField = styled(TextField)(() => ({
  width: "100%",
  "& input": {
    paddingLeft: "30px",
    textIndent: 30,
  },
  "& fieldset": {
    borderRadius: "30px",
  },
}));

function SearchBar({
  handleSearch,
  handleClear,
  searchTerm,
  setSearchTerm,
  page,
}) {
  let navigate = useNavigate();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      navigate(`/search`);
      //navigate(`/search/:${searchTerm}/$:{page}`);
      handleSearch();
    }
  };

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <SearchIcon
        style={{
          position: "absolute",
          left: 20,
          width: 20,
          height: 20,
        }}
      />

      <StyledTextField
        id="styledtextfield"
        variant="outlined"
        autoFocus
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <IconButton
        onClick={handleClear}
        size="large"
        style={{
          position: "absolute",
          right: 20,
          width: 20,
          height: 20,
        }}
      >
        <CloseIcon />
      </IconButton>
    </div>
  );
}

export default SearchBar;
