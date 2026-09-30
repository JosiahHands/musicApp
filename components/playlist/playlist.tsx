import './playlist.css';


function Playlist() {
    return (
        <div className='playlist' >
            <h3>playlist</h3>
            <div>
                <input value="new Playlist"/>
                <button>save to spotify</button>
            </div>
        </div>
    )
}


export default Playlist;