import React from "react";
import styled from "styled-components";


let ProjectCircle = ({}) => (
    <ProjectCircleContainer>
        <div className="progress-circle p10">
            <span>55%</span>
            <div className="left-half-clipper">
                <div className="first50-bar"></div>
                <div className="value-bar"></div>
            </div>
        </div>
    </ProjectCircleContainer>
);


const ProjectCircleContainer = styled.div`
  .progress-circle {
   font-size: 20px;
   margin: 20px;
   position: relative; /* so that children can be absolutely positioned */
   padding: 0;
   width: 5em;
   height: 5em;
   background-color: #F2E9E1; 
   border-radius: 50%;
   line-height: 5em;
   
   &:after  {
    border: none;
    position: absolute;
    top: 0.35em;
    left: 0.35em;
    text-align: center;
    display: block;
    border-radius: 50%;
    width: 4.3em;
    height: 4.3em;
    background-color: white;
    content: " ";
  }
  
      span {
        position: absolute;
        line-height: 5em;
        width: 5em;
        text-align: center;
        display: block;
        color: #53777A;
        z-index: 2;
    }
    .left-half-clipper { 
   /* a round circle */
   border-radius: 50%;
   width: 5em;
   height: 5em;
   position: absolute; /* needed for clipping */
   clip: rect(0, 5em, 5em, 2.5em); /* clips the whole left half*/ 
}
.over50 .left-half-clipper {
   clip: rect(auto,auto,auto,auto);
}
.value-bar {
   /*This is an overlayed square, that is made round with the border radius,
   then it is cut to display only the left half, then rotated clockwise
   to escape the outer clipping path.*/ 
   position: absolute; /*needed for clipping*/
   clip: rect(0, 2.5em, 5em, 0);
   width: 5em;
   height: 5em;
   border-radius: 50%;
   border: 0.45em solid #53777A; /*The border is 0.35 but making it larger removes visual artifacts */
   /*background-color: #4D642D;*/ /* for debug */
   box-sizing: border-box;
  
}
.over50 .first50-bar {
   /*Progress bar for the first 50%, filling the whole right half*/
   position: absolute; /*needed for clipping*/
   clip: rect(0, 5em, 5em, 2.5em);
   background-color: #53777A;
   border-radius: 50%;
   width: 5em;
   height: 5em;
}

&:not(.over50) .first50-bar{ display: none; }
}
.value-bar { transform: rotate(180deg);
 }
`

export default ProjectCircle;
