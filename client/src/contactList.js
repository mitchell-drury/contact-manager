import { useSelector } from 'react-redux';
import ContactRow from './contactRow';

function ContactList() {
    const contacts = useSelector((state) => state.contacts.contacts);
    const rows = contacts.map((contact, index) => {
        if (!contact.hidden) {
            return <ContactRow contact={contact} index={index} key={String(contact.id)}/>    
        }
        return null;
    })
    return (
        <div>
            <table id='contactList'>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    )
}

export default ContactList;
