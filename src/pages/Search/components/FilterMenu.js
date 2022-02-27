/******************************************************************************
 * Created Date: Sunday February 27th 2022                                    *
 * Author: Ariel S.                                                           *
 * -----                                                                      *
 * Last Modified: Sunday, 27th February 2022 1:42:27 pm                       * 
 * Modified By: Ariel S.                                                      * 
 * -----                                                                      *
 * File: /src/pages/Search/components/FilterMenu.js                           *
 ******************************************************************************/

import PropTypes from "prop-types";
import { Languages } from "../../../common/utils/languages";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function FilterMenu({ selectedLanguages, setSelectedLanguages }) {
  const handleChange = (event, newValue) => {
    let tmp = [...selectedLanguages];
    if (newValue && !selectedLanguages.includes(newValue)) {
      tmp.push(newValue);
    }
    setSelectedLanguages(tmp);
  };

  return (
    <Autocomplete
      disablePortal
      options={Object.keys(Languages)}
      sx={{ width: "18%" }}
      onChange={handleChange}
      renderInput={(params) => <TextField {...params} label="Filter" />}
    />
  );
}

FilterMenu.propTypes = {
  selectedLanguages: PropTypes.array.isRequired,
  setSelectedLanguages: PropTypes.func.isRequired,
};

export default FilterMenu;
