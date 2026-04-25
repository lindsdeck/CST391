import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.css';

import dataSource from './dataSource';
import NavBar from './NavBar';
import SearchAlbum from './SearchAlbum';
import NewAlbum from './NewAlbum';
import OneAlbum from './OneAlbum';

const App = (props) => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [albumList, setAlbumList] = useState([]);
  const [currentlySelectedAlbumId, setCurrentlySelectedAlbumId] = useState(0);

  let refresh = false;

  const loadAlbums = async () => {
    const response = await dataSource.get('/albums');
    setAlbumList(response.data);
  };

  useEffect(() => {
    loadAlbums();
  }, [refresh]);

  const updateSearchResults = (phrase) => {
    console.log('phrase is ' + phrase);
    setSearchPhrase(phrase);
  };

  const updateSingleAlbum = (id, navigate) => {
    console.log('Update Single Album = ', id);
    console.log('Update Single Album navigate = ', navigate);

    let indexNumber = 0;

    for (let i = 0; i < albumList.length; ++i) {
      if (albumList[i].albumId === id || albumList[i].id === id) {
        indexNumber = i;
      }
    }

    setCurrentlySelectedAlbumId(indexNumber);
    console.log('Update path: /show/' + indexNumber);
    navigate('/show/' + indexNumber);
  };

  console.log('albumList', albumList);

  const renderedList = albumList.filter((album) => {
    if (
      album.description.toLowerCase().includes(searchPhrase.toLowerCase()) ||
      searchPhrase === ''
    ) {
      return true;
    }

    return false;
  });

  console.log('renderedList', renderedList);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <SearchAlbum
              updateSearchResults={updateSearchResults}
              albumList={renderedList}
              updateSingleAlbum={updateSingleAlbum}
            />
          }
        />

        <Route exact path="/new" element={<NewAlbum />} />

        <Route
          exact
          path="/show/:albumId"
          element={
            <OneAlbum album={albumList[currentlySelectedAlbumId]} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;