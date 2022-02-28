/******************************************************************************
 * Created Date: Sunday February 27th 2022                                    *
 * Author: Ariel S.                                                           *
 * -----                                                                      *
 * Last Modified: Sunday, 27th February 2022 8:40:31 pm                       * 
 * Modified By: Ariel S.                                                      * 
 * -----                                                                      *
 * File: /src/common/components/search/__tests__/SeachBar.spec.js             *
 ******************************************************************************/

import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { SnackbarProvider } from "notistack";
import SearchBar from "../SearchBar";

afterEach(cleanup);

/***
 * In order to test our SearchBar component, we wrap it in a function that mocks its parameters.
 * We must also separately wrap it in a SnackbarProvider (to utilize enqueueSnackbar) and a
 * BrowserRouter(to utilize useNavigate). We can then test state changes by typing and clicking buttons.
 ***/
describe("Search Bar Tests", () => {
  test("Confirm that the search bar rendered correctly", () => {
    function Temp({}) {
      const [searchTerm, setSearchTerm] = React.useState("123");
      const handleClear = () => {
        setSearchTerm("");
      };
      const handleSearch = () => {
        return;
      };
      return (
        <SnackbarProvider>
          <BrowserRouter>
            <Routes>
              <Route
                path="*"
                element={
                  <SearchBar
                    handleSearch={handleSearch}
                    handleClear={handleClear}
                    setSearchTerm={setSearchTerm}
                    searchTerm={searchTerm}
                  />
                }
              />
            </Routes>
          </BrowserRouter>
        </SnackbarProvider>
      );
    }
    const { queryByTestId } = render(<Temp />);
    const searchBar = queryByTestId("search-bar");
    expect(searchBar).not.toBeNull();
    const clearButton = queryByTestId("clear-button");
    expect(clearButton).not.toBeNull();
  });

  test("Confirm that the search bar is editable", () => {
    function Temp({}) {
      const [searchTerm, setSearchTerm] = React.useState("123");
      const handleClear = () => {
        setSearchTerm("");
      };
      const handleSearch = () => {
        return;
      };
      return (
        <SnackbarProvider>
          <BrowserRouter>
            <Routes>
              <Route
                path="*"
                element={
                  <SearchBar
                    handleSearch={handleSearch}
                    handleClear={handleClear}
                    setSearchTerm={setSearchTerm}
                    searchTerm={searchTerm}
                  />
                }
              />
            </Routes>
          </BrowserRouter>
        </SnackbarProvider>
      );
    }
    const { getByRole } = render(<Temp />);
    const searchBar = getByRole("textbox");
    userEvent.type(searchBar, "456");
    expect(searchBar.value).toBe("123456");
  });

  test("Confirm that the clear button functions as expected", () => {
    function Temp({}) {
      const [searchTerm, setSearchTerm] = React.useState("123");
      const handleClear = () => {
        setSearchTerm("");
      };
      const handleSearch = () => {
        return;
      };
      return (
        <SnackbarProvider>
          <BrowserRouter>
            <Routes>
              <Route
                path="*"
                element={
                  <SearchBar
                    handleSearch={handleSearch}
                    handleClear={handleClear}
                    setSearchTerm={setSearchTerm}
                    searchTerm={searchTerm}
                  />
                }
              />
            </Routes>
          </BrowserRouter>
        </SnackbarProvider>
      );
    }
    const { getByRole, queryByTestId } = render(<Temp />);
    const searchBar = getByRole("textbox");
    const clearButton = queryByTestId("clear-button");
    userEvent.click(clearButton);
    expect(searchBar.value).toBe("");
  });
});
