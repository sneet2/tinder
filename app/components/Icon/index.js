import React from 'react';

const iconMapping = {
  like: (<g id="like" transform="translate(1.000000, 1.000000)" stroke="#FBFBFB" strokeWidth={2} fill="#FBFBFB">
<path d="M50,15.6196552 C50,15.6196552 44.271,0 27.252,0 C10.245,0 0,16.7731034 0,30.597931 C0,53.7662069 50,89.0772414 50,89.0772414 C50,89.0772414 100,53.7744828 100,30.602069 C100,16.7731034 89.76,0 72.748,0 C55.736,0 50,15.6196552 50,15.6196552 Z" id="Shape"></path>
</g>),
  pass: (<g id="pass" transform="translate(-0.137931, 0.000000)" stroke="#FBFBFB" fill="#FBFBFB">
<path d="M56.18032,43.54739 L84.81787,14.90984 C85.6619802,14.0660612 86.1362242,12.9214527 86.1362242,11.727935 C86.1362242,10.5344173 85.6619802,9.38980877 84.81787,8.54603 L78.45406,2.18168 C76.696718,0.424421372 73.847592,0.424421372 72.09025,2.18168 L43.45225,30.81968 L14.8147,2.18168 C13.057358,0.424421372 10.208232,0.424421372 8.45089,2.18168 L2.0869,8.54603 C0.329641372,10.303372 0.329641372,13.152498 2.0869,14.90984 L30.724,43.54739 L2.086,72.18539 C0.328741372,73.942732 0.328741372,76.791858 2.086,78.5492 L8.45071,84.9131 C10.208052,86.6703586 13.057178,86.6703586 14.81452,84.9131 L43.45252,56.2751 L72.09007,84.9131 C72.9338488,85.7572102 74.0784573,86.2314542 75.271975,86.2314542 C76.4654927,86.2314542 77.6101012,85.7572102 78.45388,84.9131 L84.81769,78.54929 C85.6618002,77.7055112 86.1360442,76.5609027 86.1360442,75.367385 C86.1360442,74.1738673 85.6618002,73.0292588 84.81769,72.18548 L56.18032,43.54739 Z" id="Shape"></path>
</g>),
  superlike: (<g id="superlike" style={{ marginBottom: 5 }} transform="translate(3.000000, 3.000000)" strokeWidth="2" stroke="#FBFBFB" fill="#FBFBFB">
<polygon id="Shape" points="47.0809914 0.456634183 58.1748491 34.4841229 94.108125 34.4841229 65.0356034 55.5218816 76.1394828 89.5433658 47.0809914 68.5256222 17.9824138 89.5433658 29.1283836 55.5218816 0.0298060345 34.4841229 35.9911422 34.4841229"></polygon>
</g>
),
};



export default function Icon(props){
  return (
    <svg style={{ height: 25, width: 25, ...props.style }} viewBox="0 0 102 92">
    <g fill="none" fillRule="evenodd" style={{ flex: 1}}>
      {iconMapping[props.type]}
    </g>
  </svg>);
}
