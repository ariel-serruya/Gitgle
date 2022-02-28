/******************************************************************************
 * Created Date: Thursday February 24th 2022                                  *
 * Author: Ariel S.                                                           *
 * -----                                                                      *
 * Last Modified: Saturday, 26th February 2022 2:44:23 pm                     * 
 * Modified By: Ariel S.                                                      * 
 * -----                                                                      *
 * File: /src/common/components/ResultCard/ResultCard.js                      *
 ******************************************************************************/

import { useState } from "react";
import { Typography, Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { theme } from "../../../common/utils/theme";
import PropTypes from "prop-types";
import { useStyles } from "./ResultCardStyle";

//Styled result card with requested information
function ResultCard({ result }) {
  //Hovered state for conditional borders
  const [hovered, setHovered] = useState("");
  const classes = useStyles();

  return (
    <Link to={`/result`} state={{ selected: result }} className={classes.link}>
      <div
        className={classes.root}
        style={{
          border: hovered ? "3px solid #7561CA" : "1px solid lightgrey",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className={classes.avatarDiv}>
          <Avatar src={result.owner?.avatar_url} />

          <div style={{ width: "100%", height: "100%" }}>
            <div className={classes.metadataDiv}>
              <Typography variant="h5" noWrap>
                {result.name}
              </Typography>
              <Typography variant="body1" noWrap>
                {result.owner?.login}
              </Typography>
              <div className={classes.languageTag}>
                <span
                  style={{
                    color:
                      theme.languages.find(
                        (lang) => lang.name === result.language
                      )?.color ?? "#7561CA",
                    margin: "auto",
                  }}
                >
                  {result.language}
                </span>
              </div>
            </div>

            <Typography variant="subtitle2" className={classes.description}>
              {result.description}
            </Typography>
          </div>
        </div>
        <div className={classes.secondaryMetadata}>
          <Typography variant="subtitle2">
            {result.stargazers_count} stars
          </Typography>
          <Typography variant="subtitle2">
            Last Updated: {result.updated_at}
          </Typography>
        </div>
      </div>
    </Link>
  );
}

ResultCard.propTypes = {
  result: PropTypes.object.isRequired,
};

export default ResultCard;
