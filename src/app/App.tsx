import { useState } from 'react';
import Heading from '../components/heading/heading';
import SearchBar from '../components/searchBar/searchBar';
import SearchResults from '../components/searchResults/searchResults';

import Playlist from '../components/playlist/playlist';
import './app.css'
function App() {
  const [searchResults, setSearchResults] = useState([
    {id: 1, name: 'Song One', artist: 'Artist A', album: 'Album A', uri: 'uri1'},
    {id: 2, name: 'Song One', artist: 'Artist B', album: 'Album B', uri: 'uri2'},
    {id: 3, name: 'Song One', artist: 'Artist C', album: 'Album C', uri: 'uri3'},
  ]);
  const [playlistName, setPlaylistName] = useState('New Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([
    {id: 4, name: 'Playlist Song', artist: 'Artist D', album: 'Album D', uri: 'uri4'},
    {id: 5, name: 'Another Song', artist: 'Artist E', album: 'Album E', uri: 'uri5'},
  ]);
  const addTrack = (track: { id: number; name: string; artist: string; album: string; uri: string}) => {
    const alreadySaved = playlistTracks.some(savedTrack => savedTrack.id === track.id);
    if (alreadySaved) {
      return;
    }
    setPlaylistTracks([...playlistTracks, track]);
  };
  const removeTrack = (track: { id: number; name: string; artist: string; album: string; uri: string}) => {
    setPlaylistTracks(playlistTracks.filter(savedTrack => savedTrack.id !== track.id));
  };
  const resetPlaylist = () => {
    setPlaylistName('New Playlist');
    setPlaylistTracks([]);
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
          onRemove={removeTrack}
          onReset={resetPlaylist}
        />
      </section>
    </div>
  )
}

export default App
