import React from 'react'

import {useState, useEffect} from 'react'

import {NavLink} from 'react-router-dom';

import styles from './PageNav.module.css'


function PageNav(){

    const [hoveredLink, setHoveredLink] = useState(null);

    const [mobilemenu, setMobileMenu] = useState (false)

    function showMobilemenu(){
        setMobileMenu(!mobilemenu )
    }

    const links = [
        { path: '/', label: 'Home' },
        // { path: '/aboutMe', label: 'About' },
        { path: '/projects', label: 'Projects' },
        // { path: '/contact', label: 'Contact' }
    ];

    return(
    <div className={styles.header}>
        <div onClick={showMobilemenu} className={`${styles.menuToggle} ${mobilemenu? styles.isActive : ''} ` } id="mobile-menu">
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
        </div>
          
        <nav className={!mobilemenu ? styles.nav : styles.mobileNav}>
        <ul className={!mobilemenu ? styles.show : ''}>
              {links.map((link, index)=> 
               <li>
                <NavLink key={index} className={ hoveredLink ? null : styles.active} style={{transition: 'opacity 0.2s', opacity: hoveredLink && hoveredLink !== link.label ? '0.6' : '1'}}
                onMouseEnter={()=> setHoveredLink(link.label)}
                onMouseLeave={()=> setHoveredLink(null)}
                 to={link.path}>{link.label}</NavLink>
              </li>)}
            </ul>
        </nav>
        </div>
    )
}

export default PageNav


