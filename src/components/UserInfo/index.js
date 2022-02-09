import { BiShareAlt, BiEditAlt } from 'react-icons/bi'
import styled from 'styled-components'

const UserDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 79px;
  border-bottom: 1px solid #E0E7F1;
  div{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .user_options{
    width: 50%;
    padding-left: 25px;
    gap: 15px;
  };
  .user_icon{
    width: 50%;
    justify-content: end;
    padding-right: 25px;
    gap: 5px;
    p{
      text-transform: capitalize;
      font-weight: bold;
    }
    img{
      width: 31px;
      height: 31px;
      border-radius: 15.5px;
    }
  }
`;

function UserInfo ({ name }){
  return(
    <UserDiv>
      <div className='user_options'>
        <BiEditAlt/>
        <BiShareAlt/>
      </div>
      <div className='user_icon'>
        <p>{name}</p>
        <img src='https://res.cloudinary.com/dzifwhokp/image/upload/v1644350108/Persona_5_Confidant_Guides_Icon__Magician__-_Morgana_ourgap.png' alt='avatar_img.png' />
      </div>
    </UserDiv>
  )
}

export default UserInfo