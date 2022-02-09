import { BsListCheck } from 'react-icons/bs'
import { BiEditAlt } from 'react-icons/bi'
import styled from 'styled-components'

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  margin-right: 19px;
  gap: ${props => props.column ? 14 : 23}px;
  .column_header{
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    p{
      margin: 0px;
      font-weight: normal;
      font-size: 12px;
      line-height: 14px;
      color: #858A9D;
    }
  }
  .section_header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    h2{
      margin: 0px;
      font-weight: normal;
      font-size: 20px
      line-height: 23px;
      color: #343951;
    };
    div{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    };
    p{
      font-size: 12px;
      line-height: 14px;
      color: #343951;
    }
  };
  .section_content{
    display: flex;
    flex-direction: ${props => props.column ? 'column' : 'row'};
    gap: 14px;
  }
`;

function SectionBasic({ children, title, icons, column}){
  return(
    <SectionContainer column={column}>
      <div className='section_header'>
        <h2>{title}</h2>
        {icons ? 
          <div>
            <BsListCheck color='#858A9D'/>
            <BiEditAlt color='#858A9D'/>
          </div>:
          <p>View All</p>}
      </div>
      {column &&
       <div className='column_header'>
         <p>Name</p>
         <p>Members</p>
         <p>Last Modified</p>
      </div>}
      <div className='section_content'>
        {children}
      </div>
    </SectionContainer>
  )
}

export default SectionBasic