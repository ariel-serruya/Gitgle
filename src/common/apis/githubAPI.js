/******************************************************************************
 * Created Date: Thursday February 24th 2022                                  *
 * Author: Ariel S.                                                           *
 * -----                                                                      *
 * Last Modified: Thursday, 24th February 2022 6:01:10 pm                     * 
 * Modified By: Ariel S.                                                      * 
 * -----                                                                      *
 * File: /src/common/apis/githubAPI.js                                        *
 ******************************************************************************/

const axios = require("axios").default;

// Github handles timeouts themselves, but I'm including it to show best practices:
//(https://developer.github.com/changes/2014-04-07-understanding-search-results-and-potential-timeouts/)
const defaultTimeout = 30000;

const instance = axios.create({
  baseURL: "https://api.github.com/",
  timeout: defaultTimeout,
  headers: {},
});

export const search = (
  searchKey,
  pageCount = 30,
  pageNumber = 1,
  sortType,
  orderType = "desc"
) => {
  return instance.get("/search/repositories", {
    params: {
      q: searchKey,
      sort: sortType,
      order: orderType,
      per_page: pageCount,
      page: pageNumber,
    },
    timeout: defaultTimeout,
  });
};
