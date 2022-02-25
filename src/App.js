import { useState, useEffect } from "react";
import SearchPage from "./pages/Search/SearchPage";
import ResultPage from "./pages/Result/ResultPage";
import HomePage from "./pages/Home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { search } from "./common/apis/githubAPI";

function App() {
  const pageCount = 30;
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedResult, setSelectedResult] = useState();

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
    search(searchTerm, pageCount, page)
      .then((response) => {
        setResults(response.data.items);
        setTotalResults(response.data.total_count);
        console.log("Github Search API Success:", response);
      })
      .catch((error) => {
        console.log("Github Search API Failed:", error);
      })
      .finally(() => {
        setIsLoading(false);
        console.log("Github Search API Finished");
      });
  };

  useEffect(() => {
    handleSearch();
  }, [page]);

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
            />
          }
        />
        <Route path="result" element={<ResultPage result={selectedResult} />} />
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
