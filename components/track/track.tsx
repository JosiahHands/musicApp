import './track.css';

function Track(props: { track: { id: number; name: string; artist: string; album: string;} }) {
    return (
        <div className='track'>
            <h3>{props.track.name}</h3>
            <p>{props.track.artist} | {props.track.album}</p>
        </div>
    );
};

export default Track;