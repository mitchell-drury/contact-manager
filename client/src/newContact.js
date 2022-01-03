import { useDispatch } from 'react-redux';
import { addContact } from './contactsSlice';

function NewContact () {
    const dispatch = useDispatch();

    function addNewContact(event) {
        event.preventDefault();
        //validate
        if (!event.target.lastName.value) {
            return;
        } 

        let newContact = {
            'firstName': event.target.firstName.value, 
            'lastName': event.target.lastName.value, 
            'phoneNumber': event.target.phoneNumber.value
        }

        fetch('/contacts/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newContact)
        })
        .then((res) => res.json())
        .then((data) => {
            console.log('added: ', data);
            dispatch(addContact(data))
        });
        
       //clean up 
        event.target.firstName.value = '';
        event.target.lastName.value = '';
        event.target.phoneNumber.value = '';
    }

    return (
        <form onSubmit={addNewContact}>
            <div className='inputGroup'>
                <input type='text' name='firstName' placeholder='First'></input>
                <input type='text' name='lastName' placeholder='Last'></input>
                <input type='text' name='phoneNumber' placeholder='8881231234'></input>
            </div>
            <div>
                <input id='submit' type='submit' name='addContact' value='Add Contact'></input>
            </div>
        </form>
    )
}

export default NewContact;