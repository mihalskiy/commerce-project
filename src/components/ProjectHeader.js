import {LinkButton} from "./Button";
import React from "react";
import {ProjectHeaderInner, ProjectDetails, ProjectTitle,ProjectMeta, ProjectMetaItem, ProjectDescription, ProjectHeaderContainer} from "./Project";
import { tableAction } from '../redux/table/table.action';


const prerender = window.location.port === '45678';

/*const mapDispatchToProps = {
    tableAction: tableAction,
};*/

const ProjectHeader = ({ title, description, url, roles }) => (
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
                    <ProjectMetaItem onClick={tableAction} data-value={role} key={`role_${index}`}>{role}</ProjectMetaItem>
                ))}
            </ProjectMeta>
        </ProjectHeaderInner>
    </ProjectHeaderContainer>
);

export default ProjectHeader;
