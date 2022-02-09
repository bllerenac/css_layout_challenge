import Button from '../Button'
import styled from "styled-components";
// React Icons
import { RiMoreFill, RiHome2Line, RiFolderUploadFill } from 'react-icons/ri';
import { SiFiles } from 'react-icons/si'
import { AiFillFileExclamation } from 'react-icons/ai'
import { BsFileCodeFill, BsCloudUpload } from 'react-icons/bs'
import { FaTrash, FaFileSignature, FaFolderPlus } from 'react-icons/fa'
import { GoPlus } from 'react-icons/go'

const SidebarSection = styled.nav`
  height: 100vh;
  width: 172px;
  display: flex;
  flex-direction: column;
  gap: 66px;
  background-color: #343951;
  .active{
    color: #FFFFFF;
  };
  .logo{
    width: 74px;
    min-height: 21px;
    background: linear-gradient(270deg, #689EF8 0%, #FF6860 56.25%, #FF9F00 100%);
    border-radius: 5px;
    margin-left: 32px;
    margin-top: 36px;
  };
  ul{
    display: flex;
    flex-direction: column;
    margin: 0px;
    padding: 0px 32px 29px 32px;
    list-style: none;
    gap: 33px;
    border-bottom: 1px solid #464C61;
    li{
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 19px;
      font-size: 10px;
      line-height: 12px;
      color: #858A9D;
    };
  };
  .nav_options{
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: end;
    margin-bottom: 27px;
    ul{
      position: relative;
      width: 116px;
      height: 111px;
      background: #464C61;
      border-radius: 9px;
      align-items: flex-start;
      justify-content: center;
      padding: 0px;
      gap: 5px;
      li{
        margin-left: 14px;
      };
      .arrow_border{
        position: absolute;
        left: 10px;
        bottom: -13px;
        border-left: 16px solid #464C61;
        transform: rotate(90deg);
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
      }
    }
  }
`;

function Sidebar (){
  return(
    <SidebarSection>
      <div className="logo" />
      <ul>
        <li className='active'>
          <RiHome2Line color='white'/>
          Home
        </li>
        <li>
          <SiFiles/>
          My Files</li>
        <li>
          <AiFillFileExclamation/>
          Recent Files</li>
        <li>
          <BsFileCodeFill/>
          Shared Filed</li>
        <li>
          <FaFileSignature/>
          File Request</li>
        <li>
          <FaTrash/>
          Trash</li>
      </ul>
      <div className='nav_options'>
        <ul>
          <li className='active'>
            <BsCloudUpload color='white'/>
            Upload Files
          </li>
          <li className='active'>
            <RiFolderUploadFill color='white'/>
            Upload Folder
          </li>
          <li className='active'>
            <FaFolderPlus color='white'/>
            New Folder
          </li>
          <li className='active'>
            <RiMoreFill color='white'/>
            More
          </li>
          <li className='arrow_border'/>
        </ul>
        <Button 
          content='Create New' 
          icon={<GoPlus color='white'/>}
          color='#FFFFFF'
          />
      </div>
    </SidebarSection>
  )
}

export default Sidebar