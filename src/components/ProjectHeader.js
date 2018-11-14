import {LinkButton} from "./Button";
import React from "react";
import {ProjectHeaderInner, ProjectDetails, ProjectTitle,ProjectMeta, ProjectMetaItem, ProjectDescription, ProjectHeaderContainer} from "./Project";
import { getTable } from '../redux/table/table.action';
import { connect } from 'react-redux';



const prerender = window.location.port === '45678';

const mapDispatchToProps = {
    getTable: getTable,
};

let ProjectHeader = ({ title, description, url, roles, getTable }) => (
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
            <ProjectMeta entered={!prerender}>
                {roles && roles.map((role, index) => (
                    <ProjectMetaItem onClick={getTable} data-value={role} key={`role_${index}`}>{role}</ProjectMetaItem>
                ))}
            </ProjectMeta>
        </ProjectHeaderInner>
    </ProjectHeaderContainer>
);

ProjectHeader = connect(null,mapDispatchToProps)(ProjectHeader);


export default ProjectHeader;
