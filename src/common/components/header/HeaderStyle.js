/******************************************************************************
 * Created Date: Saturday February 26th 2022                                  *
 * Author: Ariel S.                                                           *
 * -----                                                                      *
 * Last Modified: Sunday, 27th February 2022 1:39:12 pm                       * 
 * Modified By: Ariel S.                                                      * 
 * -----                                                                      *
 * File: /src/common/components/header/HeaderStyle.js                         *
 ******************************************************************************/
/******************************************************************************
 * Created Date: Saturday February 26th 2022                                  *
 * Author: Ariel S.                                                           *
 * -----                                                                      *
 * Last Modified: Saturday, 26th February 2022 2:48:52 pm                     *
 * Modified By: Ariel S.                                                      *
 * -----                                                                      *
 * File: /src/pages/Search/SearchPageStyle.js                                 *
 ******************************************************************************/
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  header: {
    width: "90%",
    height: "20vh",
    marginTop: "50px",
  },
  title: {
    width: "100%",
    margin: "auto",
    height: "30%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  search: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "1%",
  },
});
