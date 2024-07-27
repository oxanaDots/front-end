import React from 'react';
import styles from '..//pages/Projects.module.css'

const Project = ({link, imagePath, programmingLngs}) => {
  return (
    <div className={styles.projectCont}>
      
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