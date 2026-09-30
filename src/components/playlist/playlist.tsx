import TrackList from '../trackList/tracklist';
import './playlist.css';
import Spotify from '../../util/spotify';

function Playlist(props: {
    playlistName: string;
    playlistTracks: { id: number; name: string; artist: string; album: string; uri: string}[];
    onNameChange: (name: string) => void;
    onRemove?: (track: { id: number; name: string; artist: string; album: string }) => void;
}) {
    function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        props.onNameChange(event.target.value)
    }
    const savePlaylist = () => {
        const trackURIs = props.playlistTracks.map(track => track.uri);
        Spotify.savePlaylist(props.playlistName, trackURIs);
    }
    return (
        <div className='playlist' >
            <h3>playlist</h3>
            <div>
                <input value={props.playlistName} onChange={handleNameChange}/>
                <TrackList tracks={props.playlistTracks} onRemove={props.onRemove}/>
                <button onClick={savePlaylist}>save to spotify</button>
            </div>
        </div>
    )
}


export default Playlist;