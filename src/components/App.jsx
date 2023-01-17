import { Conteiner } from './App.styles';
import { Filter } from './Filter/Filter';
import Form from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { selectIsLoading, selectError } from 'redux/contacts/contactsSelector';
import { Loader } from './Loading/Loader';

export function App() {
  const [isListShown, setIsListShown] = useState(false);
  const [contacts, useContacts] = useState([])
  const dispatch = useDispatch();
   const isLoading = useSelector(selectIsLoading)
  const error = useSelector(selectError)


  const showUsersList = () => {
    setIsListShown(true);
    
  };
  // const isError = () => {
  //   if (error) {
  //   return alert('ERROR')
  // }
//}

useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])
// const =useParams()
//     useEffect(() => {
//         fetchMoviesById(moviesId).then(setMovies)
//     }, [moviesId])
//     return movies;
  return (
    <Conteiner>
      <div>
      <h2
        style={{
          textAlign: 'center',
          color: 'rgb(30, 149, 86)',
          bacgroundColor: 'green',
        }}
      >
        Phonebook
        </h2>
        <Form />
      </div>
      <div>
      <h2
        style={{
          textAlign: 'center',
          color: 'rgb(30, 149, 86)',
        }}
      >
        Contacts
      </h2>
      <Filter />
      {isLoading && <Loader/>}
       <Contacts showUsersList={showUsersList} />
        {error && <p>{error.massage}</p>}
      </div>
    </Conteiner>
  );
}
