import React from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";



const Sidebar = styled.div`
    position: fixed;
    background-color: black;
    height: 100vh;
    width: 350px;
`;

const ProjectTitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 25px auto 50px auto;
`;

const ProjectTitle = styled.div`
    font-size: 28px;
    color: white;
    font-weight: bold;
    display: inline-block;
`;

const SearchIcon = styled(AiOutlineSearch)`
    font-size: 30px;
    color: grey;
    margin-top: 3px;
`;

const UserProfileWrapper = styled.div`
    width: 100%;
    height: 125px;
    background-color: #333333;
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
    width: 50px;
    height: 50px;
    background: white;
    border-radius: 50%;
`;

const UserProfile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
        color: white;
        font-size: 18px;
        margin: 0;
        white-space: nowrap;
    }
    span {
        font-size: 15px;
        color: grey;
        
    }
`;

export default function TaskSidebar() {
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
                        <p>Emilee Simchenkosdfsdf</p>
                        <span>Product Owner </span>
                    </UserProfile>
                    <BsThreeDots/>
                </UserProfileContainer>
            </UserProfileWrapper>
       </Sidebar>
    )
}
