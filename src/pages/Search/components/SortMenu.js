/******************************************************************************
 * Created Date: Friday February 25th 2022                                    *
 * Author: Ariel S.                                                           *
 * -----                                                                      *
 * Last Modified: Friday, 25th February 2022 2:19:47 pm                       * 
 * Modified By: Ariel S.                                                      * 
 * -----                                                                      *
 * File: /src/pages/Search/components/SortMenu/SortMenu.js                    *
 ******************************************************************************/

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";

function SortMenu() {
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
      <Select
        value={10}
        variant="standard"
        // onChange={handleChange}
      >
        <MenuItem value={10}>
          {" "}
          <span style={{ color: "#7561CA", fontWeight: "bold" }}>
            Best Match
          </span>
        </MenuItem>
        <MenuItem value={20}>Most Stars</MenuItem>
        <MenuItem value={30}>Fewest Stars</MenuItem>
        <MenuItem value={40}>Most Forks</MenuItem>
        <MenuItem value={50}>Fewest Forks</MenuItem>
        <MenuItem value={60}>Recently Updated</MenuItem>
        <MenuItem value={70}>Least Recently Updated</MenuItem>
      </Select>
    </FormControl>
  );
}

export default SortMenu;
