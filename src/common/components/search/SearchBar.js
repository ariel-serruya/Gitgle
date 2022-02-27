/******************************************************************************
 * Created Date: Thursday February 24th 2022                                  *
 * Author: Ariel S.                                                           *
 * -----                                                                      *
 * Last Modified: Sunday, 27th February 2022 1:41:54 pm                       * 
 * Modified By: Ariel S.                                                      * 
 * -----                                                                      *
 * File: /src/common/components/SearchBar/SearchBar.js                        *
 ******************************************************************************/

import { TextField } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const StyledTextField = styled(TextField)(() => ({
  width: "100%",
  "& input": {
    paddingLeft: "30px",
    textIndent: 30,
  },
  "& fieldset": {
    borderRadius: "10px",
  },
}));

//Custmozied search bar used throughout application
function SearchBar({ handleSearch, handleClear, searchTerm, setSearchTerm }) {
  //React-router-dom function to navigate to specific route (once enter key is pressed)
  let navigate = useNavigate();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      navigate(`/search`);
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
        width: "80%",
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

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  handleClear: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
};

export default SearchBar;
