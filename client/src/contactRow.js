import { useDispatch } from 'react-redux';
import { updateContact } from './contactsSlice';
import { useRef } from 'react';
import { useState } from 'react';

function ContactRow(props) {
    const dispatch = useDispatch();
    const [disabled, setDisabled] = useState(true);
    let editSave = disabled === true ? 'Edit' : 'Save';

    const firstName = useRef();
    const lastName = useRef();
    const phoneNumber = useRef();

    function handleEditSave() {
        if (disabled) {
            setDisabled(false);
        }else {
            let updatedContact = {
                'firstName': firstName.current.value,
                'lastName': lastName.current.value,
                'phoneNumber': phoneNumber.current.value,
                'id': props.contact.id
            }
            fetch('/contacts/update', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedContact)
            })
            .then((res) => {
                if (res.status === 200) {
                    return res.json()
                } else {
                    throw new Error('Contact not updated');
                }
            })
            .then((data) => {
                console.log(data)
                dispatch(updateContact({
                    'contact': updatedContact,
                    index: props.index
                }));
                setDisabled(true);
            })
        }
    }

    return (
        <tr>
            <td><input ref={firstName} disabled={disabled} defaultValue={props.contact.firstName}></input></td>
            <td><input ref={lastName} disabled={disabled} defaultValue={props.contact.lastName}></input></td>
            <td><input ref={phoneNumber} disabled={disabled} defaultValue={props.contact.phoneNumber}></input></td>
            <td className='editContact' onClick={handleEditSave}>{editSave}</td>
        </tr>
    );
}

export default ContactRow;