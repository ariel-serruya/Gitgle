/******************************************************************************
 * Created Date: Saturday February 26th 2022                                  *
 * Author: Ariel S.                                                           *
 * -----                                                                      *
 * Last Modified: Sunday, 27th February 2022 11:50:27 am                      * 
 * Modified By: Ariel S.                                                      * 
 * -----                                                                      *
 * File: /src/pages/Result/ResultPageStyle.js                                 *
 ******************************************************************************/
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    height: "100vh",
    width: "100%",
    overflow: "auto",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    width: "90%",
    margin: "auto",
    height: "10%",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  descriptionText: {
    width: "80%",
    margin: "auto",
  },
  chartDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "50vh",
    width: "90%",
    margin: "auto",
    marginTop: "3%",
  },
  chart: {
    height: "100%",
    width: "40%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});
