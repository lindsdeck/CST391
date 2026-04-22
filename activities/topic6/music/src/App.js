import React, { useState, useEffect } from 'react';
import Card from './Card';
import SearchForm from './SearchForm';
import './app.css';
// import albums from './albums.json';
import dataSource from './dataSource';

const App = (props) => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [albumList, setAlbumList] = useState([]);

  let refresh = false;

  const updateSearchResults = (phrase) => {
    console.log('phrase is ' + phrase);
    setSearchPhrase(phrase);
  };

  useEffect(() => {
    loadAlbums();
  }, [refresh]);

  const loadAlbums = async () => {
    const response = await dataSource.get('/albums');
    setAlbumList(response.data);
  };

  const renderedList = () => {
    return albumList
      .filter((album) =>
        album.description.toLowerCase().includes(searchPhrase.toLowerCase()) ||
        searchPhrase === ''
      )
      .map((album) => {
        return (
          <Card
            key={album.albumId || album.id}
            albumTitle={album.title}
            albumDescription={album.description}
            imgURL={album.image}
            buttonText="OK"
          />
        );
      });
  };

  return (
    <div>
      <div className="container">
        <SearchForm onSubmit={updateSearchResults} />
      </div>

      <div className="container">
        {renderedList()}
      </div>
    </div>
  );
};

export default App;