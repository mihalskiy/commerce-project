import {LinkButton} from "../components/Button";
import React from "react";
import {ProjectHeaderInner, ProjectDetails, ProjectTitle,ProjectMeta, ProjectMetaItem, ProjectDescription, ProjectHeaderContainer} from "../components/Project";
import { getTable } from '../redux/table/table.action';
import { connect } from 'react-redux';
import styled from "styled-components";



const prerender = window.location.port === '45678';

const mapDispatchToProps = {
    getTable: getTable
};

let NavPortfolio = ({ title, description, url, src, getTable }) => (
    <ProjectHeaderContainer>
        <ProjectHeaderInner>
            <ProjectDetails entered={!prerender}>
                <ProjectTitle>{title}</ProjectTitle>
                <ProjectDescription>{description}</ProjectDescription>
                <LinkButton
                    secondary
                    style={{ paddingLeft: '3px' }}
                    icon="chevronRight"
                    href={url}
                    rel="noopener noreferrer"
                >
                    Заказать
                </LinkButton>
            </ProjectDetails>
            <ProjectImage src={src} alt={url} />
        </ProjectHeaderInner>
    </ProjectHeaderContainer>
);


export const ProjectImage = styled.img`
width: 100%;
display: flex;

`

export default NavPortfolio;
