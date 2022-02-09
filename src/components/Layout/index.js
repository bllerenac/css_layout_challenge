import Sidebar from "../Sidebar";
import styled from "styled-components"

const LayoutPage = styled.div`
  display: flex;
  flex-direction: row:
  width: 100vw;
  height: 100vh;
  .layout_content{
    flex-grow: 1;
  }
`;

function Layout({ children }){
  return(
    <LayoutPage>
      <Sidebar/>
      <div className="layout_content" >
        {children}
      </div>
    </LayoutPage>
  )
}

export default Layout