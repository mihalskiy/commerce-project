import {LinkButton} from "./Button";
import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {ProjectHeaderInner, ProjectDetails, ProjectTitle,ProjectMeta, ProjectMetaItem, ProjectDescription, ProjectHeaderContainer} from "./Project";
import {getTable} from '../redux/table/table.action';
import { connect } from 'react-redux';



const prerender = window.location.port === '45678';

const mapDispatchToProps = dispatch => bindActionCreators({
    getTable,
}, dispatch);

class ProjectHeader extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        this.getTable(e.currentTarget.dataset.value);
    }


    render () {
        return(
            <ProjectHeaderContainer>
                <ProjectHeaderInner>
                    <ProjectDetails entered={!prerender}>
                        <ProjectTitle>{this.props.title}</ProjectTitle>
                        <ProjectDescription>{this.props.description}</ProjectDescription>
                        <LinkButton
                            secondary
                            style={{paddingLeft: '3px'}}
                            icon="chevronRight"
                            href={this.props.url}
                            rel="noopener noreferrer"
                        >
                            Заказать
                        </LinkButton>
                    </ProjectDetails>
                    <ProjectMeta entered={!prerender}>
                        {this.props.roles && this.props.roles.map((role, index) => (
                            <ProjectMetaItem onClick={this.handleClick} data-value={role} key={`role_${index}`}>{role}</ProjectMetaItem>
                        ))}
                    </ProjectMeta>
                </ProjectHeaderInner>
            </ProjectHeaderContainer>
        )
    }

};

export default connect(null, mapDispatchToProps)(ProjectHeader);
