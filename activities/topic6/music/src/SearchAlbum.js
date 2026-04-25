import React from 'react';
import SearchForm from './SearchForm';
import AlbumList from './AlbumList';

const SearchAlbum = (props) => {
  return (
    <div>
      <div className="container">
        <SearchForm onSubmit={props.updateSearchResults} />
      </div>

      <AlbumList
        albumList={props.albumList}
        onClick={props.updateSingleAlbum}
      />
    </div>
  );
};

export default SearchAlbum;