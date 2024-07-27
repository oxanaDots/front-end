import React from 'react';

const Project = ({link, imagePath, programmingLngs}) => {
  return (
    <div style={{display: "flex"}}>
      
      <a href={link} target="_blank">
    <figure >
<img  src={imagePath}/>    
<figcaption>
    <ul>
       {programmingLngs.map(language=> <li>{language}</li>)}
    </ul>
</figcaption>
</figure> 
    </a>
    </div>
  );
};

export default Project;