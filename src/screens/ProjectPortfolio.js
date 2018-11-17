import React from 'react';
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet';
import ScrollToTop from '../utils/ScrollToTop';
import Footer from '../components/Footer';
import NavPortfolio from '../screens/NavPortfolio';
import {
    ProjectContainer, ProjectSection, ProjectSectionContent, ProjectBackground, ProjectPriceTable} from '../components/Project';
import ProjectHeader from '../components/ProjectHeader'
import backgroundSpr from '../assets/sky.jpg';
import backgroundSprLarge from '../assets/sky.jpg';
import backgroundSprPlaceholder from '../assets/sky.jpg';
const prerender = window.location.port === '45678';


const title = 'АКТУАЛЬНЫЕ ЦЕНЫ';
const description = 'Наши цены — адекватные и умеренные. Все оплаты мы разбиваем на 3 этапа, это удобно и доступно. Вы можете получить очень качественный сайт на основе готового решения, с уникальным дизайном по цене от 13000 грн.';
const roles = [
    'Простой',
    'Стандарт',
    'Лучший',
];

let ProjectPortfolio = ({ status, table = {} }) => (
    <React.Fragment>
        <ScrollToTop status={status} />
        <Helmet>
            <title>{`Projects | ${title}`}</title>
            <meta name="description" content={description} />
        </Helmet>
        <ProjectContainer>
            <ProjectBackground
                srcSet={`${backgroundSpr} 1000w, ${backgroundSprLarge} 1920w`}
                placeholder={backgroundSprPlaceholder}
                entered={!prerender}
            />
            <NavPortfolio
                title={title}
                description={description}
                url="/contact"
                src={backgroundSprPlaceholder}
            />
            <ProjectSection>
                <ProjectSectionContent>
                    <ProjectPriceTable
                        name={table.name|| 'выберете тариф'}
                        currency={table.currency}
                        price={table.price}
                        cent={table.cent}
                        title={'sdgfsdg'}
                        fields={roles}
                    />
                </ProjectSectionContent>
            </ProjectSection>
            <ProjectSection>
                {/*<ProjectSectionHeading>Full project coming soon...</ProjectSectionHeading>*/}
            </ProjectSection>
        </ProjectContainer>
        <Footer />
    </React.Fragment>
);

const mapStateToProps = function (state) {
    return {
        table: state,
    }
}

ProjectPortfolio = connect(mapStateToProps,null)(ProjectPortfolio)


export default ProjectPortfolio;
