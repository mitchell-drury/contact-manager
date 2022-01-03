import { useDispatch } from 'react-redux';
import { searchContacts } from './contactsSlice';

function SearchContacts() {
    const dispatch = useDispatch();

    function handleChange(event) {
        dispatch(searchContacts(event.target.value));
    }

    return (
        <div>
            <input id='searchContactBox' type='text' onChange={handleChange}></input>
            <input className='submit' type='submit' value='Search'></input>
        </div>
    )
}

export default SearchContacts;