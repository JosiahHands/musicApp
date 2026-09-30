import TrackList from '../trackList/tracklist';
import './playlist.css';


function Playlist(props: {
    playlistName: string;
    playlistTracks: { id: number; name: string; artist: string; album: string}[];
    onNameChange: (name: string) => void;
}) {
    function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        props.onNameChange(event.target.value)
    }
    return (
        <div className='playlist' >
            <h3>playlist</h3>
            <div>
                <input value={props.playlistName} onChange={handleNameChange}/>
                <TrackList tracks={props.playlistTracks}/>
                <button>save to spotify</button>
            </div>
        </div>
    )
}


export default Playlist;