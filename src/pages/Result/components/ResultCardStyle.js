/******************************************************************************
 * Created Date: Saturday February 26th 2022                                  *
 * Author: Ariel S.                                                           *
 * -----                                                                      *
 * Last Modified: Saturday, 26th February 2022 2:43:55 pm                     * 
 * Modified By: Ariel S.                                                      * 
 * -----                                                                      *
 * File: /src/pages/Result/components/ResultCardStyle.js                      *
 ******************************************************************************/
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  link: {
    textDecoration: "none",
    color: "black",
  },
  root: {
    width: "90%",
    height: "15%",
    borderRadius: 10,
    margin: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "2%",
    boxShadow: "1px 3px 1px lightgrey",
  },
  avatarDiv: {
    display: "flex",
    flexDirection: "row",
    width: "55%",
    height: "100%",
    alignItems: "Center",
    marginLeft: "3%",
  },
  metadataDiv: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
    height: "50%",
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  languageTag: {
    border: "1px solid grey",
    borderRadius: 5,
    width: "25%",
    display: "flex",
    justifyContent: "center",
  },
  description: {
    height: "50%",
    overflow: "auto",
    marginLeft: "5%",
  },
  secondaryMetadata: {
    width: "35%",
    marginRight: "3%",
    display: "flex",
    alignItems: "flex-end",
    flexDirection: "Column",
  },
});
