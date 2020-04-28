import React from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import {TiPlus} from "react-icons/ti";


const Sidebar = styled.div`
    position: fixed;
    background-color: black;
    height: 100vh;
    width: 300px;
`;

const ProjectTitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 25px auto 30px auto;
`;

const ProjectTitle = styled.div`
    font-size: 20px;
    color: white;
    font-weight: bold;
    display: inline-block;
`;

const SearchIcon = styled(AiOutlineSearch)`
    font-size: 25px;
    color: grey;
    margin-top: 3px;
`;

const UserProfileWrapper = styled.div`
    width: 100%;
    height: 90px;
    background-color: #333333;
    margin-bottom: 75px;
`;

const UserProfileContainer = styled.div`
    display: flex;
    height: inherit;
    width: 80%;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    svg {
        color: white;
        font-size: 25px;
    }
`;

const UserProfileImg = styled.div`
    width: 4vw;
    height: 3vw;
    background: white;
    border-radius: 50%;
    margin-right: 8px;
`;

const UserProfile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    word-break: break-word; 
    overflow-wrap: break-word;
    word-wrap: break-word;
    width: 200px;
    padding-left: 5px;
    p {
        color: white;
        font-size: 16px;
        margin: 0;
        margin-bottom: 5px;
    }
    span {
        font-size: 15px;
        color: grey;
    }
`;

const ThreeDots = styled(BsThreeDots)`
    margin-left: 5px;
`;

const SidebarSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 120px;
    margin: 25px auto 25px auto;
    overflow-y: auto;
`;

const SidebarHeading = styled.h2`
    font-size: 14px;
    color: grey;
    margin-bottom:10px;
    padding-left: 30px;
`;

const LinkItem = styled.li`
    list-style-type: none;
    cursor: pointer;
    min-height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.15s ease-in;
    position: relative;
    &::before {
        content: " ";
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 3px;
        height: 0px;
        background: #FFC200;
        transition: height 0.25s ease-in-out;
        
    }
    
    &:hover {
        background: #333333;
        &::before {
            height: 100%;
    }
`;

const LinkText = styled.p`
    color: white;
    font-size: 11px;
    font-weight: bold;
    padding-left: 30px;
`;

const Add = styled.div`
    color: #FFC200;
    font-size: 11px;
    font-weight: bold;
    padding: 10px 0px 10px 30px;
    margin-top: -20px;
    cursor: pointer;

    &:hover {
        background: #333333;
    }
`;

const PlusButton = styled(TiPlus)`
`;



export default function TaskSidebar() {
    const [sidebarItems, setSidebarItems ] = React.useState({
        'PROJECTS': ['Dashboard UI kit','CRM System','Web Design'],
        'TEAMS': []
    }); 
  
    const addProject = (project) => {
        let state = {...sidebarItems};
        state['PROJECTS'].push(project);
        setSidebarItems(state);
    };
    return (
        <Sidebar>
            <ProjectTitleWrapper>   
                <ProjectTitle> PROJECTS</ProjectTitle>
                <SearchIcon/>  
            </ProjectTitleWrapper>
            <UserProfileWrapper>
                <UserProfileContainer>
                    <UserProfileImg/>
                    <UserProfile>
                        <p>Emilee Simchenkos</p>
                        <span>Product Owner </span>
                    </UserProfile>
                    <ThreeDots/>
                </UserProfileContainer>   
            </UserProfileWrapper>
            <SidebarSection>
                    <SidebarHeading>MENU</SidebarHeading>
                    {renderItems('Home')}
                    {renderItems('My Tasks')}
                    {renderItems('Notifications')}
            </SidebarSection>
                <SidebarHeading>PROJECTS</SidebarHeading>
            <SidebarSection>
                    {sidebarItems['PROJECTS'].map(items => renderItems(items))} 
            </SidebarSection>
                <Add onClick={() => addProject('hello')}>
                    <PlusButton/> Add a Project
                </Add>
            <SidebarSection>
                <SidebarHeading>TEAMS</SidebarHeading>
                {renderItems('Designers')}
                {renderItems('Backend')}
                {renderItems('Frontend')}
            </SidebarSection>
                <Add>
                    <PlusButton/> Add a Team
                </Add>
       </Sidebar>
    )
}

const renderItems = (name) => {
    return (
        <LinkItem key={`id-${name}`}>
            <LinkText>{name}</LinkText>
        </LinkItem>
    )
};
// const renderLinkItem = (match, text, iconType, path) => {
//     const isImplemented = !!path;
  
//     const linkItemProps = isImplemented
//       ? { as: NavLink, exact: true, to: `${match.path}${path}` }
//       : { as: 'div' };
  
//     return (
//       <LinkItem {...linkItemProps}>
//         <Icon type={iconType} />
//         <LinkText>{text}</LinkText>
//         {!isImplemented && <NotImplemented>Not implemented</NotImplemented>}
//       </LinkItem>
//     );
//   };