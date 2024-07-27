import styles from './Contact.module.css'


function Contact (){
    const recipientEmail = 'oksanadotsenko967@gmail.com';
    const handleClick = () => {
        window.location.href = `mailto:${recipientEmail}`;
      };

    return(

        <section className={styles.contactMe}>
<h3>
Let's Connect and Collaborate!
</h3>
<p>
Get in contact to explore how my skills can benefit your business.
</p>
<button onClick={handleClick}>Connect with Me Now</button>
        </section>
    )
}

export default Contact 