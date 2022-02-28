/******************************************************************************
 * Created Date: Thursday February 24th 2022                                  *
 * Author: Ariel S.                                                           *
 * -----                                                                      *
 * Last Modified: Sunday, 27th February 2022 1:17:29 pm                       * 
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

//This function will search for repositories based on the provided filters
export const search = (
  searchKey,
  pageCount = 30,
  pageNumber = 1,
  sortType,
  orderType = "desc",
  languages
) => {
  //construct query based on selected languages
  const query =
    searchKey +
    "+" +
    languages.map((language) => `language:${language} `).join("");

  return instance.get("/search/repositories", {
    params: {
      q: query,
      sort: sortType,
      order: orderType,
      per_page: pageCount,
      page: pageNumber,
    },
    timeout: defaultTimeout,
  });
};

//This request exists to check your Github API rate limit. If you exceed the maximum number of
//allowed (unauthenticated) calls, you will receive an error. As per Github documentation:
//"For unauthenticated requests, the rate limit allows for up to 60 requests per hour.
//Unauthenticated requests are associated with the originating IP address,
//and not the person making requests."
export const getRateLimit = () => {
  return instance.get("/rate_limit", {
    timeout: defaultTimeout,
  });
};
