/******************************************************************************
 * Created Date: Thursday February 24th 2022                                  *
 * Author: Ariel S.                                                           *
 * -----                                                                      *
 * Last Modified: Friday, 25th February 2022 3:29:16 pm                       * 
 * Modified By: Ariel S.                                                      * 
 * -----                                                                      *
 * File: /src/common/components/ResultCard/ResultCard.js                      *
 ******************************************************************************/

import { useEffect, useState } from "react";
import { Typography, Avatar } from "@material-ui/core";
import axios from "axios";
import { Link } from "react-router-dom";

function ResultCard({ result }) {
  const [hovered, setHovered] = useState("");

  return (
    <Link
      to={`/result`}
      state={{ selected: result }}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div
        style={{
          width: "90%",
          height: "15%",
          border: "1px solid grey",
          borderRadius: 10,
          margin: "auto",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "2%",
          border: hovered ? "3px solid #7561CA" : "1px solid grey",
          boxShadow: "1px 3px 1px lightgrey",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "55%",
            height: "100%",
            alignItems: "Center",
            marginLeft: "3%",
          }}
        >
          <Avatar src={result.owner?.avatar_url} />

          <div style={{ width: "100%", height: "100%" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "80%",
                height: "50%",
                justifyContent: "space-around",
                alignItems: "flex-end",
              }}
            >
              <Typography variant="h5" noWrap>
                {result.name}
              </Typography>
              <Typography variant="body1" noWrap>
                {result.owner?.login}
              </Typography>
              <div
                style={{
                  backgroundColor: "#F3E8F8",
                  borderRadius: 5,
                  width: "25%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <span style={{ color: "#7561CA", margin: "auto" }}>
                  {result.language}
                </span>
              </div>
            </div>

            <Typography
              variant="subtitle2"
              style={{ height: "50%", overflow: "auto", marginLeft: "5%" }}
            >
              {result.description}
            </Typography>
          </div>
        </div>
        <div
          style={{
            width: "35%",
            marginRight: "3%",
            display: "flex",
            alignItems: "flex-end",
            flexDirection: "Column",
          }}
        >
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

export default ResultCard;
