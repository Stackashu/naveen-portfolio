import React from 'react';
import styles from '../styles/Contact.module.css';

const Contact = ({ isActive }) => {
    const sendFeedback = (event) => {
        event.preventDefault();
        // Logic to be ported from index1.html
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        console.log('Feedback submitted:', data);
        alert('Thank you for your feedback! (Functionality being migrated)');
    };

    return (
        <div className={`${styles.contactPage} ${isActive ? 'page--current' : ''}`} id="contact">
            {/* Title Section */}
            <div className={styles.titleSection}>
                <h2>Get In <span>Touch</span></h2>
                <span className={styles.titleBg}>Contact</span>
            </div>

            {/* Scrollable Content */}
            <div className={styles.scrollContainer}>
                <div className={styles.container}>
                    {/* Left Column: Contact Info */}
                    <div className={styles.infoColumn}>
                        <h3 className={styles.infoTitle}>Don't be shy!</h3>
                        <p className={styles.infoDesc}>
                            Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>

                        <div className={styles.contactItem}>
                            <div className={styles.iconBox}>
                                <i className="fa fa-envelope-open"></i>
                            </div>
                            <div className={styles.contactText}>
                                <span className={styles.contactLabel}>mail me</span>
                                <a href="mailto:naveenyadavfbd@gmail.com" className={styles.contactLink}>
                                    naveenyadavfbd@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className={styles.contactItem}>
                            <div className={styles.iconBox}>
                                <i className="fa fa-phone-square"></i>
                            </div>
                            <div className={styles.contactText}>
                                <span className={styles.contactLabel}>call me</span>
                                <a href="tel:+919718884248" className={styles.contactLink}>
                                    +91 9718884248
                                </a>
                            </div>
                        </div>

                        <ul className={styles.socialList}>
                            <li>
                                <a href="#" title="Facebook"><i className="fa fa-facebook"></i></a>
                            </li>
                            <li>
                                <a href="#" title="Twitter"><i className="fa fa-twitter"></i></a>
                            </li>
                            <li>
                                <a href="#" title="Youtube"><i className="fa fa-youtube"></i></a>
                            </li>
                            <li>
                                <a href="#" title="Dribbble"><i className="fa fa-dribbble"></i></a>
                            </li>
                        </ul>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className={styles.formColumn}>
                        <form onSubmit={sendFeedback}>
                            <div className={styles.formGrid}>
                                <div className={styles.formGroup}>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="YOUR NAME"
                                        required
                                        className={styles.inputField}
                                        autoComplete="off"
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="YOUR EMAIL"
                                        required
                                        className={styles.inputField}
                                        autoComplete="off"
                                    />
                                </div>
                                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                    <textarea
                                        name="message"
                                        placeholder="YOUR MESSAGE"
                                        required
                                        className={styles.textareaField}
                                    ></textarea>
                                </div>
                                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                    <button type="submit" className={styles.submitBtn}>
                                        <span>Send Feedback</span>
                                        <i className="fa fa-send"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

