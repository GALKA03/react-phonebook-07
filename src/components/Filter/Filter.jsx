import { Label, Input } from './Filter.style';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/filter/filterSelector';
import { addFilter } from 'redux/filter/filterSlice';

export const Filter = () => {
   const filter = useSelector(selectFilter)

  const dispatch = useDispatch()
  
    return (
         <Label>{''}
        Find contacts by name
          <Input  type="text"
            onChange={(e)=>dispatch(addFilter(e.target.value))} 
            name="filter"
          placeholder="enter name"
          /> 
        </Label>  
    )
}

