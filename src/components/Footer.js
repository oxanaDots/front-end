import styles from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'; 
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons'; 



function Footer(){
    return(
        <section>
<footer className={styles.footer}>
    <p>Copyright © 2024 Oxana Dotsenko</p>
    <div className={styles.iconCont}>

        <a target="_blank" href='https://github.com/oxanaDots'>    <FontAwesomeIcon icon={faSquareGithub} style={{color: "var(--pale-green"}} size="2x"  className={styles.gitHubIcon}/>
</a>
<a>
{/* <FontAwesomeIcon icon={faSquareInstagram} style={{color: "var(--pale-green"}} size="2x"  className={styles.gitHubIcon}/> */}

</a>
    </div>
    </footer>
</section>
    )
}

export default Footer