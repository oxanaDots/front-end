import React from 'react';
import styles from '..//pages/Projects.module.css'

const Project = ({link, imagePath, programmingLngs, statusOfProject}) => {

  const isWorkInProgress = statusOfProject === 'Work in progress...';

  return (
    <div className={styles.projectCont}>
      <a href={link} target="_blank">

      <div  className= {` ${isWorkInProgress ? styles.inProgress : styles.imgCont }`}>
      <h3 className={styles.status}>{statusOfProject}</h3>
     <img   src={imagePath}/>   
</div>
     <ul>{programmingLngs.map(language=> <li>{language}</li>)}</ul>

    </a>

    </div>
  );
};

export default Project;