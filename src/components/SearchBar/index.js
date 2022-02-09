import { AiOutlineSearch } from 'react-icons/ai'
import styled from 'styled-components'

const SeachBarContainer = styled.div`
  display: flex;
  background: #FFFFFF;
  border-radius: 5px;
  margin: 25px 19px 0px 16px;
  padding: 7px 12px;
  gap: 7px;
  input{
    width: 100%;
    border: none;
    outline: none;
  };
  input::placeholder{
    font-size: 10px;
    line-height: 12px;
    color: #BCBECA;
  }
  &:focus-within{
    .search_icon{
      display: none;
    }
  }
`;

function SearchBar ({ placeholder }){
  return(
    <SeachBarContainer>
      <AiOutlineSearch color='#BCBECA' className='search_icon'/>
      <input name='search' placeholder={ placeholder } type='text' />
    </SeachBarContainer>
  )
}

export default SearchBar