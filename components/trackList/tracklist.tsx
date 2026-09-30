import Track from '../track/track'
import './trackList.css';

function TrackList(props: { tracks: { id: number; name: string; artist: string; album: string;}[] }) {
    return (
        <div className='trackList'>
            {props.tracks.map(track => (
                <Track key={track.id} track={track} />
            ))}
        </div>
    );
};
export default TrackList;