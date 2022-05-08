import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../src/SearchBar.css'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: null,
        }
        this.handleSearchInput = this.handleSearchInput.bind(this);
    }
    updateCityName(e) {
        this.setState({ cityName: e.target.value })
    }

    handleSearchInput() {
        this.props.searchCity(this.state.cityName);
    }
    render() {
        return (
            <div
                style={{ textAlign: 'center' }}>
                <input
                    placeholder="Enter City Name..."
                    value={this.state.cityName}
                    className='search'
                    onChange={e => this.updateCityName(e)}
                />
                <button
                    onClick={this.handleSearchInput}
                    className='searchbtn'
                >Search</button>
            </div>
        );
    }
}
SearchBar.propTypes = {
    searchCity: PropTypes.func
};
export default SearchBar;
