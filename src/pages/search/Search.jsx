import React, { useEffect, useState, Suspense, useContext } from "react";
import "./search.css";
import NavBar from "../../components/nav-bar/NavBar";
import { fetchSearchValue } from "../../data/fetchSearchValue";
import { StyledBoundry, StyledContainer } from "../../styles";
import { UserContext } from "../../data/UserContext";
import SearchMovieComponent from "./components/SearchMovieComponent";
import { StyledNextBtn } from "../../styles";
import Footer from "../../components/footer/Footer";

const Search = ({ search, setSearch }) => {
  const [searchData, setSearchData] = useState({});
  const [pageNumber, setPageNumber] = useState(1);
  const { searchSubmit } = useContext(UserContext);

  useEffect(() => {
    fetchSearchValue(search, setSearchData, pageNumber);
    console.log(searchData);
  }, [searchSubmit, pageNumber]);

  return (
    <StyledBoundry>
      <NavBar search={search} setSearch={setSearch} />
      <StyledContainer className="search__page">
        <section>
          <div>
            <h6>Search results: {searchData.total_results}</h6>
            <h4>{search}</h4>
          </div>
        </section>
        <SearchMovieComponent searchData={searchData} />
        {searchData.total_results == 0 ? (
          <></>
        ) : (
          <section className="search__page-number-counter">
            <StyledNextBtn
              onClick={() =>
                setPageNumber(
                  pageNumber < 2 ? searchData.total_pages : pageNumber - 1
                )
              }
            >
              {"<"}
            </StyledNextBtn>
            <h4>{pageNumber}</h4>
            <StyledNextBtn
              onClick={() =>
                setPageNumber(
                  pageNumber > searchData.total_pages - 1 ? 1 : pageNumber + 1
                )
              }
            >
              {">"}
            </StyledNextBtn>
            <h4>{searchData.total_pages}</h4>
          </section>
        )}
      </StyledContainer>
      <Footer />
    </StyledBoundry>
  );
};

export default Search;
