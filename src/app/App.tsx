import { useState } from 'react';
import Heading from '../components/heading/heading';
import SearchBar from '../components/searchBar/searchBar';
import SearchResults from '../components/searchResults/searchResults';

import Playlist from '../components/playlist/playlist';
import './app.css'
function App() {
  const [searchResults, setSearchResults] = useState([
    {id: 1, name: 'Song One', artist: 'Artist A', album: 'Album A'},
    {id: 2, name: 'Song One', artist: 'Artist B', album: 'Album B'},
    {id: 3, name: 'Song One', artist: 'Artist C', album: 'Album C'},
  ]);
  const [playlistName, setPlaylistName] = useState('New Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([
    {id: 4, name: 'Playlist Song', artist: 'Artist D', album: 'Album D'},
    {id: 5, name: 'Another Song', artist: 'Artist E', album: 'Album E'},
  ]);
  const addTrack = (track: { id: number; name: string; artist: string; album: string}) => {
    const alreadySaved = playlistTracks.some(savedTrack => savedTrack.id === track.id);
    if (alreadySaved) {
      return;
    }
    setPlaylistTracks([...playlistTracks, track]);
  };
  return (
    <div>
      <Heading />
      <SearchBar />
      <section className='playlistMakerSection'>
        <SearchResults tracks={searchResults} onAdd={addTrack}/> 
        <Playlist 
          playlistName={playlistName}
          playlistTracks={playlistTracks}
          onNameChange={setPlaylistName}
        />
      </section>
    </div>
  )
}

export default App
