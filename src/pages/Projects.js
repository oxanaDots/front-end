import PageNav from "../components/PageNav"
import styles from './Projects.module.css'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Project from "../components/Project"
import { useEffect, useState } from "react"


function Projects(){



    return(
        <>
        <section className={styles.sectionOne}>
            <PageNav/>
            <div className={styles.projectsCont}>
            <h2>A Glimpse into My Early Projects</h2>
            <p>As a budding front-end developer, I am continually expanding my skills and portfolio. While I am still at the beginning of my journey, I am proud to showcase the projects I have completed so far.</p>
    


    <Project link='https://oxanadotsenkophotography.co.uk'
    imagePath='/images/screely-1719931745079.png'
    programmingLngs={['Javascript', 'HTML', 'CSS', 'PHP']}
    />

<Project link='https://amd-ceramics.vercel.app'
    imagePath='/images/screely-1719937657626.png'
    programmingLngs={['React', 'CSS', "Javascript"]}
    />

<Project

    link='https://photo-services-sage.vercel.app/'
    imagePath='/images/screely-1722032009527.png'
    programmingLngs={['React', 'Tailwind', 'Express.js', "MySql", "Typescript"]}
    statusOfProject='Work in progress...'
    />




            </div>

           <Contact/>
        </section>
           <Footer/>
        </>
    )
}

export default Projects