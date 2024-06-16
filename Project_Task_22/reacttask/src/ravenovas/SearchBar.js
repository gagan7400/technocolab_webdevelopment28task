import React, { Component } from 'react'
import './SearchBar.css';

export default class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            term: "",
             location: "",
              sortBy: "best_match"
        }
        this.sortByOptions = {
            "BestMatch": "best_match",
            "HighestRated": "rating",
            "MostReviewed": "review_count"
        }
    }
    getSortByClass(sortByOption) {
        if (this.state.sortBy = sortByOption) {
            return 'active'
        }
        return ''
    }
    handleSortByChange(sortByOption) {
        this.setState({
            sortBy: sortByOption
        })
    }

    handleTermChange(event) {
        this.setState({ term: event.target.value })
    }
    handleLocationChange(event) {
        this.setState({ location: event.target.value })
    }
    handleSearch(event) {
        this.props.searchYelp(this.term, this.location, this.sortBy);
        event.preventDefault();
    }
    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOption;
            return <li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)} onClick={() => { this.handleSortByChange(sortByOptionValue) }}>{sortByOption}</li>
        });
    }
    render() {
        return (
            <div class="SearchBar">
                <div class="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div class="SearchBar-fields">
                    <input placeholder="Search Businesses" onChange={(e) => { this.handleTermChange(e) }} />
                    <input placeholder="Where?" onChange={(e) => { this.handleLocationChange(e) }} />
                </div>
                <div class="SearchBar-submit">
                    <a onClick={(e) => { this.handleSearch(e) }}>Let's Go</a>
                </div>
            </div>
        )
    }
}
