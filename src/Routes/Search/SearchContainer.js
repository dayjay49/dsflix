import { MoviesApi, TVApi } from "api";
import React from "react";
import SearchPresenter from "./SearchPresenter";

class SearchContainer extends React.Component{
    state = {
        movieResults: null,
        tvResults: null,
        searchTerm: "",
        loading: false,
        error: null
    }

    handleSubmit = event => {
        event.preventDefault();
        const {searchTerm} = this.state;
        if (searchTerm !== "") {
            this.searchByTerm();
        }
    };

    updateTerm = event => {
        const { 
            target: { value } 
        } = event;
        this.setState({
            searchTerm: value
        });
    };

    getMovieResults = (term) => MoviesApi.search(term);
    getTVResults = (term) => TVApi.search(term);

    searchByTerm = async () => {
        const {searchTerm} = this.state;
        this.setState({ loading: true });
        try {
            const {
                data: {results: movieResults}
            } = await this.getMovieResults(searchTerm);
            const {
                data: {results: tvResults}
            } = await this.getTVResults(searchTerm);
            this.setState({
                movieResults,
                tvResults
            });
        } catch {
            this.setState({
                error: "Can't find results."
            })
        } finally {
            this.setState({
                loading: false
            })
        }
    }

    render() {
        const { movieResults, tvResults, searchTerm, error, loading } = this.state;
        return (
            <SearchPresenter 
                movieResults={movieResults} 
                tvResults={tvResults} 
                searchTerm={searchTerm} 
                error={error}
                loading={loading}
                handleSubmit={this.handleSubmit}
                updateTerm={this.updateTerm}
            />
        );
    }
}
export default SearchContainer;