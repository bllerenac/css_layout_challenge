import styled from 'styled-components'

const GraphInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 115px;
  height: 115px;
  border-radius: 57.5px;
  background-color: #FFFFFF;
  margin: 0px auto;
  p{
    font-size: 24px;
    line-height: 28px;
    color: #343951;
    margin: 0px;
  }
  .status{
    font-size: 14px;
    line-height: 16px;
    color: #858A9D;
    text-transform: capitalize;
  }
`;

function GraphicPreview ({ value, status}) {
  return(
    <GraphInfo>
      <p>{value}%</p>
      <p className='status'>{status}</p>
    </GraphInfo>
  )
}

export default GraphicPreview