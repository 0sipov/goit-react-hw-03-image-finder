import React, { Component } from 'react';
import styles from './Searchbar.module.css';

class SearchBar extends Component {
  state = {
    query: '',
  };

  handleQuery = e => {
    this.setState({ query: e.target.value });
  };

  render() {
    const { handleQuery } = this;
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            onChange={handleQuery}
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
