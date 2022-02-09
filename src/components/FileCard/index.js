import { FiMoreVertical } from 'react-icons/fi'
import { RiMoreFill } from 'react-icons/ri'
import styled from 'styled-components'

const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap:${props => props.small ? 6 : 29}px;
  width: 159px;
  height: ${props => props.small ? '79px' : '133px'};
  background: #FFFFFF;
  box-shadow: 0px 4px 16px rgba(58, 58, 58, 0.07);
  border-radius: 12px;
  .file_options{
    display: ${props => props.small ? 'none' : 'flex'};
    position: absolute;
    right: 13px;
    top: 16px;
  }
  .file_graphic{
    display: flex;
    align-items: center;
    gap: 35px;
    margin-top: ${props => props.small ? 13 : 20}px;;
    margin-left: 12px;
    .square_shadow{
      position: relative;
      width: 30px;
      height: 26px;
      background: ${props => props.small ? '#FF9F00' : '#FFD999'};
      .square{
        position: absolute;
        top: -5px;
        right: -5px;
        width: 30px;
        height: 26px;
        background: ${props => props.small ? 'transparent' : '#FF9F00'};
      }
    };
    .file_changes{
      position: relative;
      width: 18px;
      height: 18px;
    }
  };
  .file_info{
    display: flex;
    flex-direction: column;
    margin-left: 12px;
    gap: ${props => props.small ? 2 : 10}px;;
    h2{
      font-weight: normal;
      font-size: 12px;
      line-height: 14px;
      color: #343951;
      margin: 0px;
    }
    p{
      font-size: 8px;
      line-height: 9px;
      letter-spacing: 0.05em;
      color: #858A9D;
      margin: 0px;
    }
  };
`;

const CircleInfo = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: ${props => props.index==1 ? 0 : (props.index-1)*-12}px;
  width: 18px;
  height: 18px;
  background: #FFFFFF;
  border: 1px solid ${props => props.color ? props.color : '#BEC0C8'};
  border-radius: 9px;
  z-index: ${props => props.index ? props.index : 1};
  p{
    font-weight: normal;
    font-size: 10px;
    line-height: 9px;
    color: #343951;
    margin: 0px;
  }
`

function FolderCard ({ files, created, size, title }){
  return(
    <CardContainer small={size}>
      <FiMoreVertical className='file_options' color='#C4C4C4'/>
      <div className='file_graphic'>
        <div className='square_shadow'>
          <div className='square'/>
        </div>
        <div className='file_changes'>
          {files.map( (file, index) => {
              if(index < 3){
                return(
                  <CircleInfo key={index} index={index} color={file.color}>
                    {(files.length>1 && index==2) && <p>+3</p>}
                  </CircleInfo>
                )
              }
            }
          )}
        </div>
      </div>
      <div className='file_info'>
        <h2>{title}</h2>
        <p>Created: {created}</p>
      </div>
    </CardContainer>
  )
}

const FileColumn = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  background-color: #FFFFFF;
  border-radius: 10px;
  padding: 11px 13px;
  gap:12px;
  .file_marked{
    min-width: 21px;
    height: 21px;
    background-color: ${props => props.color ? props.color : '#858A9D'};
    border-radius: 5px;
    margin-right: 12px;
  };
  h2{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0px;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #343951;
  };
  p{
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #858A9D;
  }
  .file_options{
    display: flex;
    align-items: center;
    justify-content: end;
  }
`;

function FileCardColumn ({ color, modification, members, title }){
  return(
    <FileColumn color={color}>
      <h2>
        <div className='file_marked'/>
        {title}
      </h2>
      <p>{members} members</p>
      <p>{modification}</p>
      <div className='file_options'>
        <RiMoreFill color='#C4C4C4'/>
      </div>
    </FileColumn>
  )
}

export { FolderCard, FileCardColumn }