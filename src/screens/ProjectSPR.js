import React from 'react';
import { Helmet } from 'react-helmet';
import ProgressiveImage from '../components/ProgressiveImage';
import ScrollToTop from '../utils/ScrollToTop';
import Footer from '../components/Footer';
import {
  ProjectContainer, ProjectSection, ProjectSectionContent, ProjectImage,
  ProjectSectionHeading, ProjectSectionText, ProjectBackground, ProjectHeader
} from '../components/Project';
import { Media } from '../utils/StyleUtils';
import backgroundSpr from '../assets/spr-background.jpg';
import backgroundSprLarge from '../assets/spr-background-large.jpg';
import backgroundSprPlaceholder from '../assets/spr-background-placeholder.jpg';
import imageSprBuilder from '../assets/spr-builder.png';
import imageSprBuilderLarge from '../assets/spr-builder-large.png';
import imageSprBuilderPlaceholder from '../assets/spr-builder-placeholder.png';
import './price.css';

const prerender = window.location.port === '45678';

const title = 'АКТУАЛЬНЫЕ ЦЕНЫ';
const description = 'Наши цены — адекватные и умеренные. Все оплаты мы разбиваем на 3 этапа, это удобно и доступно. Вы можете получить очень качественный сайт на основе готового решения, с уникальным дизайном по цене от 13000 грн.';
const roles = [
  'Simple',
  'Standard',
  'Ultimate',
];

const ProjectSPR = ({ status }) => (
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
      <ProjectHeader
        title={title}
        description={description}
        url="/contact"
        roles={roles}
      />
      <ProjectSection>
        <ProjectSectionContent>
           <div className='price'>
              <div id="container">
                  <div className="whole">
                      <div className="type">
                          <p>Simple</p>
                      </div>
                      <div className="plan">

                          <div className="header">
                              <span>$</span>29<sup>99</sup>
                              <p className="month">per month</p>
                          </div>
                          <div className="content">
                              <ul>
                                  <li>15 Email Accounts</li>
                                  <li>100GB Space</li>
                                  <li>1 Domain Name</li>
                                  <li>500GB Bandwidth</li>
                              </ul>

                          </div>
                      </div>
                  </div>
                  <div className="whole">
                      <div className="type standard">
                          <p>Standard</p>
                      </div>
                      <div className="plan">

                          <div className="header">
                              <span>$</span>49<sup>99</sup>
                              <p className="month">per month</p>
                          </div>
                          <div className="content">
                              <ul>
                                  <li>15 Email Accounts</li>
                                  <li>100GB Space</li>
                                  <li>1 Domain Name</li>
                                  <li>500GB Bandwidth</li>
                              </ul>
                          </div>
                      </div>
                  </div>

                <div className="whole ">
                    <div className="type ultimate">
                        <p>Ultimate</p>
                    </div>
                    <div className="plan">

                        <div className="header">
                            <span>$</span>79<sup>99</sup>
                            <p className="month">per month</p>
                        </div>
                        <div className="content">
                            <ul>
                                <li>15 Email Accounts</li>
                                <li>100GB Space</li>
                                <li>1 Domain Name</li>
                                <li>500GB Bandwidth</li>
                            </ul>
                        </div>
                    </div>
                </div>
          </div>
          </div>
        </ProjectSectionContent>
      </ProjectSection>
      <ProjectSection>
        {/*<ProjectSectionHeading>Full project coming soon...</ProjectSectionHeading>*/}
      </ProjectSection>
    </ProjectContainer>
    <Footer />
  </React.Fragment>
);

export default ProjectSPR;
