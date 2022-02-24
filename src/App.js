import { useEffect, useState } from "react";
import SearchBar from "./common/components/SearchBar/SearchBar";
import ResultCard from "./common/components/ResultCard/ResultCard";
import Pagination from "@mui/material/Pagination";
import { search } from "./common/apis/githubAPI";

function App() {
  const pageCount = 30;
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const handlePage = (event, value) => {
    setPage(value);
  };

  const handleSearch = () => {
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
        console.log("Github Search API Finished");
      });
  };

  useEffect(() => {
    handleSearch();
  }, [page]);

  return (
    <div
      className="App"
      style={{
        height: "100vh",
        width: "100%",
        overflow: "auto",
      }}
    >
      <SearchBar
        handleSearch={handleSearch}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {results.map((result) => {
        return <ResultCard key={result.id} result={result} />;
      })}

      {results.length > 0 && (
        <Pagination
          count={Math.ceil(totalResults / pageCount)}
          page={page}
          onChange={handlePage}
        />
      )}
    </div>
  );
}

export default App;
