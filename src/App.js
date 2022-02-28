/******************************************************************************
 * Created Date: Thursday February 24th 2022                                  *
 * Author: Ariel S.                                                           *
 * -----                                                                      *
 * Last Modified: Sunday, 27th February 2022 4:14:55 pm                       * 
 * Modified By: Ariel S.                                                      * 
 * -----                                                                      *
 * File: /src/App.js                                                          *
 ******************************************************************************/

//TODO: filte rby language, tests
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/Search/SearchPage";
import ResultPage from "./pages/Result/ResultPage";
import HomePage from "./pages/Home/HomePage";
import { search, getRateLimit } from "./common/apis/githubAPI";
import { useSnackbar } from "notistack";

//App routes to three separate pages and passes them their corresponding props.
//Pages: Home, Search (several results), and Result (single result)
function App() {
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [rateLimit, setRateLimit] = useState();
  const [results, setResults] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  //API Params:
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [sortType, setSortType] = useState("best-match");
  const [orderType, setOrderType] = useState("desc");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const pageCount = 30;

  const handlePage = (event, value) => {
    setPage(value);
  };

  const handleClear = () => {
    setSearchTerm("");
    setResults([]);
    setTotalResults(0);
    setPage(1);
  };

  const handleSearch = () => {
    setIsLoading(true);
    search(searchTerm, pageCount, page, sortType, orderType, selectedLanguages)
      .then((response) => {
        setResults(response.data.items);
        setTotalResults(response.data.total_count);
        console.log("Github Search API Success:", response);
      })
      .catch((error) => {
        enqueueSnackbar(error.toString(), {
          variant: "warning",
        });
      })
      .finally(() => {
        setIsLoading(false);
        console.log("Github Search API Finished");
      });
  };

  //Get new results if any of the search parameters change:
  useEffect(() => {
    if (searchTerm) {
      handleSearch();
    }
  }, [page, sortType, orderType, selectedLanguages]);

  //Added Github rate limit check so the user knows if they've exceeded their
  //allotted API calls:
  useEffect(() => {
    getRateLimit()
      .then((response) => {
        setRateLimit(response.data);
        console.log("Github Rate Limit API Success:", response);
      })
      .catch((error) => {
        enqueueSnackbar(error.toString(), {
          variant: "warning",
        });
      })
      .finally(() => {
        console.log("Github Rate Limit API Finished");
      });
  }, [results]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="search"
          element={
            <SearchPage
              pageCount={pageCount}
              results={results}
              page={page}
              totalResults={totalResults}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              handleSearch={handleSearch}
              handleClear={handleClear}
              handlePage={handlePage}
              setSortType={setSortType}
              setOrderType={setOrderType}
              sortType={sortType}
              isLoading={isLoading}
              rateLimit={rateLimit}
              selectedLanguages={selectedLanguages}
              setSelectedLanguages={setSelectedLanguages}
            />
          }
        />
        <Route
          path="result"
          element={
            <ResultPage
              handleSearch={handleSearch}
              handleClear={handleClear}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              page={page}
              rateLimit={rateLimit}
              selectedLanguages={selectedLanguages}
              setSelectedLanguages={setSelectedLanguages}
            />
          }
        />
        <Route
          path="/"
          element={
            <HomePage
              handleSearch={handleSearch}
              handleClear={handleClear}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              page={page}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
