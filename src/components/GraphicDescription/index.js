import styled from 'styled-components'

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column:
  align-items: center;
  justify-content: center;
  ul{
    list-style: none;
    padding: 0px;
    margin: 0px;
    li{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items:center;
      gap: 7px;
      border-bottom: 1px solid #E0E7F1;
      padding-bottom: 6px;
      margin-bottom: 8px;
      .item_text{
        width: 110px;
        p:first-child{
          font-size: 10px;
          line-height: 12px;
          color: #343951;
        };
        p{
          font-size: 8px;
          line-height: 9px;
          color: #858A9D;
          margin: 0px 0px 2px 0px;
        };
      };
      .size_info{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 54px;
        height: 21px;
        background: #FFFFFF;
        border-radius: 4px;
        p{
          font-weight: 500;
          font-size: 8px;
          line-height: 9px;
          color: #343951;
        }
      };
    }
  };
`;
const ColorMaker = styled.div`
  width: 28px;
  height: 28px;
  background: ${props => props.backgroundColor || "#FF9F00"};;
  border-radius: 8px;
`

function GraphicDescription (){
  return(
    <DescriptionContainer>
      <ul>
        <li>
          <ColorMaker/>
          <div className='item_text'>
            <p>Documents</p>
            <p>720 files</p>
          </div>
          <div className='size_info'>
            <p>200 GB</p>
          </div>
        </li>
        <li>
          <ColorMaker backgroundColor='#689FF8'/>
          <div className='item_text'>
            <p>Documents</p>
            <p>720 files</p>
          </div>
          <div className='size_info'>
            <p>200 GB</p>
          </div>
        </li>
        <li>
          <ColorMaker backgroundColor='#4AC29D'/>
          <div className='item_text'>
            <p>Documents</p>
            <p>720 files</p>
          </div>
          <div className='size_info'>
            <p>200 GB</p>
          </div>
        </li>
        <li>
          <ColorMaker backgroundColor='#BCBECA'/>
          <div className='item_text'>
            <p>Documents</p>
            <p>720 files</p>
          </div>
          <div className='size_info'>
            <p>200 GB</p>
          </div>
        </li>
      </ul>
    </DescriptionContainer>
  )
}
export default GraphicDescription