import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';

class App extends React.Component {
  state = { images: [] };

  onFormSubmit = async (term) => {
    const response = await unsplash.get(`/search/photos`, {
      params: {
        query: term,
      },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div>
        {' '}
        <SearchBar onFormSubmition={this.onFormSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
