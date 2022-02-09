import Banner from '../../components/Banner'
import { FolderCard, FileCardColumn } from '../../components/FileCard';
import GraphicPreview from '../../components/GraphicPreview';
import GraphicDescription from '../../components/GraphicDescription'
import Layout from '../../components/Layout'
import SearchBar from '../../components/SearchBar'
import SectionBasic from '../../components/Section'
import UserInfo from '../../components/UserInfo';
import styled from 'styled-components'

const HomeContent = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  width: 100%;
  height: 100%;
  .home_dashboard{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: #F5F6FC;
    margin: 0px 22px;
    gap: 38px;
  };
  .home_preview{
    display: flex;
    flex-direction: column;
    min-width: 252px;
    height: 100%;
    background-color: #F5F6FC;
  };
  .preview_title{
    font-size: 20px;
    font-weight: normal;
    line-height: 23px;
    color: #343951;
    margin-left: 24px;
  }
  .preview_description{
    width: 99px;
    height: 13px;
    font-weight: normal;
    font-size: 8px;
    line-height: 9px;
    letter-spacing: 0.05em;
    color: #858A9D;
    margin: 20px auto;
  }
`;

function Home (){
  return(
    <Layout>
      <HomeContent>
        <div className='home_dashboard'>
          <SearchBar placeholder='Search'/>
          <SectionBasic title='Recently Used' icons>
            <FolderCard
              created='20.02.2020'
              files={[{id: 1}, {id: 2}]}
              title='App Project'/>
            <FolderCard
              created='28.02.2020'
              files={[{id: 1}, {id: 2}]}
              title='Project: fitbit'/>
            <FolderCard
              created='4.03.2020'
              files={[{id: 1}, {id: 2}, {id: 3},{id: 4},{id: 5},{id: 6}]}
              title='Client Documents'/>
          </SectionBasic>
          <SectionBasic title='Recent Files' column>
            <FileCardColumn color='#FF9F00' members={5} modification='Mar 8, 2020' title='Travel Landing Page'/>
            <FileCardColumn color='#4AC29D' members={12} modification='Mar 8, 2020' title='True Photos'/>
            <FileCardColumn color='#FF6860' members={10} modification='Mar 9, 2020' title='Dashboard Structure'/>
            <FileCardColumn color='#FF9F00' members={3} modification='Mar 10, 2020' title='Character Illustration'/>
          </SectionBasic>
          <SectionBasic title='Share with me'>
            <FolderCard
              created='20.02.2020'
              files={[{id: 1, color: '#4AC29D'}, {id: 2, color: '#FF6860'}]}
              title='Landing Page'
              size='small'/>
            <FolderCard
              created='20.02.2020'
              files={[{id: 1, color: '#4AC29D'}, {id: 2, color: '#FF6860'}, {id: 3, color: '#FF9F00'}]}
              title='Illustration Pack'
              size='small'/>
            <FolderCard
              created='20.02.2020'
              files={[{id: 1, color: '#4AC29D'}, {id: 2, color: '#FF9F00'}]}
              title='CV Design'
              size='small'/>
          </SectionBasic>
        </div>
        <div className='home_preview'>
          <UserInfo name='Ryu' />
          <div>
            <h3 className='preview_title'>Storage</h3>
            <GraphicPreview value='85' status='used' />
            <h4 className='preview_description'>420.2 GB of 500 GB used</h4>
            <GraphicDescription/>
          </div>
          <Banner />
        </div>
      </HomeContent>
    </Layout>
  )
}

export default Home