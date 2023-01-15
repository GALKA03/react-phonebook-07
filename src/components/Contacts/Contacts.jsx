//import Notiflix from 'notiflix';
import { ContactsConteiner, Item, Btn,Contact,Span, Img } from 'components/Contacts/Contacts.style'
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operations';
import { selectContacts } from 'redux/contacts/contactsSelector';
import { selectFilter } from 'redux/filter/filterSelector';

export const Contacts = () => {   
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
   console.log('contacts', contacts)
     console.log('filter', filter)
  
  const visibleContacts = () => {
     if (filter) {
			const normalizeFilter = filter.toLowerCase();
			if (contacts.length !== 0) {
				return contacts.filter(contact =>
					contact.name.toLowerCase().includes(normalizeFilter)
				);
			}
		}
	 return contacts;
  };
  const addVisible =visibleContacts()
  return ( 
    <ContactsConteiner>
           {addVisible &&   
            addVisible.map(({ name, number, id, avatar, children }) => {
                  return (
                    <Item key={id}>   
                      <Img src={avatar} alt="avatar" />
                       <Contact >  <Span>{name}:</Span>{number} </Contact>
                           <Btn onClick={() => {dispatch(deleteContact(id)) }}>X</Btn>
      {children}
       </Item>)} 
     )}
    </ContactsConteiner>
           

    )
}



// ContactsItem.prototype = {
//     name: PropTypes.string.isRequired,
//     number: PropTypes.number.isRequired,
//     onRemove: PropTypes.func,
//  id:PropTypes.func
// }
// Contacts.prototype = {
//     contacts: PropTypes.func,
//     onRemove:PropTypes.func
// }