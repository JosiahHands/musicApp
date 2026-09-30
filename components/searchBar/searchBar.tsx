import {useCallback, useState} from 'react';
import './searchBar.css';
function SearchBar(props: any) {
    const [term, setTerm] = useState("");

    const handleTermChange = useCallback((event: any) => {
        setTerm(event.target.value)
    }, []);

    const search = useCallback(() => {
        props.onSearch(term);
    }, [props.onSearch, term]);

    return (
        <div className='searchBar'>
            <h3>Wanna find some music? :D</h3>
            <input placeholder='Enter a song title' onChange={handleTermChange}/>
            <button className='searchButton' onClick={search}>search</button>
        </div>
    ); 
}
export default SearchBar;