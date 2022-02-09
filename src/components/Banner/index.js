import Button from '../Button';
import styled from 'styled-components'

const BannerContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  height: 100%;
  div{
    display: flex;
    flex-direction: column;
  };
  .banner{
    align-items: center;
    justify-content: space-around;
    width: 194px;
    height: 202px;
    background-color: #FFFFFF;
    margin-bottom: 20px;
    .banner_logo{
      width: 119px;
      height: 73px;
      background: linear-gradient(270.15deg, #689FF8 0.15%, #FF6860 54.7%, #FF9F00 99.9%);
      border-radius: 11px;
    };
    .banner_text{
      align-items: center;
      gap: 3px;
      p:first-child{
        font-size: 12px;
        line-height: 14px;
        color: #343951;
        margin: 0px;
      };
      p{
        margin: 0px;
        font-size: 8px;
        line-height: 9px;
        letter-spacing: 0.05em;
        color: #858A9D;
      };
    };
  }
`;

function Banner(){
  return(
    <BannerContainer>
      <div className='banner'>
        <div className='banner_logo' />
        <div className='banner_text'>
          <p>Buy more space now!</p>
          <p>Upgrade to cloud premium</p>
        </div>
        <Button content='Upgrade Account!' />
      </div>
    </BannerContainer>
  )
}
export default Banner