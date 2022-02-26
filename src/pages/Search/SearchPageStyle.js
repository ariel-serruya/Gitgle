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
  root: {
    height: "100vh",
    width: "100%",
    overflow: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  header: {
    width: "90%",
    height: "10%",
    margin: "auto",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: "5%",
  },
  subHeader: {
    height: "10%",
    width: "90%",
    margin: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  placeholders: {
    height: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pagination: {
    width: "30%",
    height: "10%",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
