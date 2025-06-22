import PageNav from "../components/PageNav";
import {useRef, useEffect} from 'react'
import styles from './HomePage.module.css'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function HomePage(){

const heroPageTextRef = useRef(null)

useEffect(()=>{
    const timer = setTimeout(()=> {
        if (heroPageTextRef.current) {
            heroPageTextRef.current.classList.add(styles.active);
        }
    }, 400)

    return ()=> clearTimeout(timer)
}, [])



    const handleButtonClick = () => {
        document.getElementById('intro').scrollIntoView({ behavior: 'smooth' });
      };
    return(
     
        <section className={styles.sectionOne}>
        <header>
            <PageNav/>
        </header>
<div className={styles.heroSection}>
        <div className={styles.heroPage}>
            <h2 ref={heroPageTextRef}>Ascend to new heights with bespoke <span className={styles.code}>code</span> and <span className={styles.design}>design</span>, tailored to elevate your online presence</h2>
       <p>Hello, I'm Oksana Dotsenko, a front-end developer</p>
<button className={styles.homePageButton} onClick={handleButtonClick}>Find Out More</button>

        </div>
        </div>
        
        <div id="intro" className={styles.skills}>

        <h3>
            ABOUT ME.
        </h3>

        <p className={styles.intro}>
        My journey as a front-end developer began a year ago when I decided to learn coding to complement my graphic design projects. Since then, I haven't stopped coding and acquiring skills in web development, <span style={{fontStyle: 'italic', fontWeight: '400'}}>such as</span>:
        </p>
        <h3>
            SKILLS.
        </h3>

<div>
  
<p className={styles.develop}>HTML / CSS / JavaScript  / React / Typescript / Tailwind / MySQL / GitHub / Git / VSCode </p>
<br></br>
        <p className={styles.dsgn}>UI/UX Design / Responsive Web Design / Logo Design / Visual Identity Design</p>
</div>
  
        <h3>PAST PROJECTS.</h3>
        <p className={styles.intro}>My passion for front-end development is fuelled by the endless opportunities for growth and learning, as well as the ability to create a blueprint for businesses. </p>
        <p className={styles.intro}>This drive has led me to work on diverse <span > <a href="/projects" className={styles.highlight}>projects.</a></span></p>


        
    
            </div>
            <Contact/>
            <Footer/>
        </section>
        
    )
}

export default HomePage