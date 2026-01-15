import React from 'react';
import styles from '../styles/Contact.module.css';

const Contact = () => {
    const sendFeedback = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        console.log('Feedback submitted:', data);
        alert('Thank you for your feedback! (Functionality being migrated)');
    };

    return (
        <div className={styles.page}>
            <div className={styles.contact}>
                <div className={styles.titleSection}>
                    <h2>
                        Get In <span className={styles.highlight}>Touch</span>
                    </h2>
                    <span className={styles.titleBg}>contact</span>
                </div>
                <div className={styles.mainContent}>
                    <div className={styles.container}>
                        <div className={styles.row}>
                            {/* Left Side Starts */}
                            <div className={styles.left}>
                                <h3 className={styles.title}>Don't be shy !</h3>
                                <p className={styles.desc}>
                                    Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                                </p>
                                <p className={styles.contactDetail}>
                                    <i className={styles.iconEmail}></i>
                                    <span className={styles.contactLabel}>mail me</span>
                                    <a className={styles.contactLink} href="mailto:naveenyadavfbd@gmail.com">naveenyadavfbd@gmail.com</a>
                                </p>
                                <p className={styles.contactDetail}>
                                    <i className={styles.iconPhone}></i>
                                    <span className={styles.contactLabel}>call me</span>
                                    <a className={styles.contactLink} href="tel:+919718884248">+91 9718884248</a>
                                </p>
                                <ul className={styles.socialList}>
                                    <li className={styles.socialItem}>
                                        <a className={styles.socialLink} href="#"><i className={styles.socialIconFacebook}></i></a>
                                    </li>
                                    <li className={styles.socialItem}>
                                        <a className={styles.socialLink} href="#"><i className={styles.socialIconTwitter}></i></a>
                                    </li>
                                    <li className={styles.socialItem}>
                                        <a className={styles.socialLink} href="#"><i className={styles.socialIconYoutube}></i></a>
                                    </li>
                                    <li className={styles.socialItem}>
                                        <a className={styles.socialLink} href="#"><i className={styles.socialIconDribbble}></i></a>
                                    </li>
                                </ul>
                            </div>
                            {/* Left Side Ends */}
                            {/* Contact Form Starts */}
                            <div className={styles.right}>
                                <form className={styles.contactForm} onSubmit={sendFeedback}>
                                    <div className={styles.formInner}>
                                        <div className={styles.formRow}>
                                            <div className={styles.formCol}>
                                                <input className={styles.input} type="text" name="name" placeholder="YOUR NAME" />
                                            </div>
                                            <div className={styles.formCol}>
                                                <input className={styles.input} type="email" name="email" placeholder="YOUR EMAIL" />
                                            </div>
                                            <div className={styles.formColFull}>
                                                <textarea className={styles.textarea} name="message" placeholder="YOUR MESSAGE"></textarea>
                                                <button className={styles.button} type="submit">
                                                    <span>Send Feedback</span>
                                                    <span className={styles.sendIcon}></span>
                                                </button>
                                            </div>
                                            <div className={styles.message}>
                                                <span className={styles.outputMessage}></span>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/* Contact Form Ends */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
