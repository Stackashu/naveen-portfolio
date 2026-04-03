import React, { useState } from 'react';
import styles from '../styles/Blog.module.css';

const blogItems = [
    { title: "Windows 95", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjvgmPAX3eiP4dD2LqUa9hMmCWBrJ_ZdoufiR5AeMZdD1YM7M3m0fnSgVN-cIZkWY0Z0lXVWIJlDwQlAXPl6_KoLy82KMCIRcOrk35YIwyQDK84xSwmzLzfyOR4IiUyIOMx5EhQZZxXYtp7jsWU-VBJcj1G4FXK4OMqkxOXo2csoB1WqXGZ4sRUpaIXG8Ww/s1600/Windows-95.jpg" },
    { title: "Windows 98", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjTSzr7AqiGeEHUQeefYfOYnBrMHGWJvTadaKcEAWX51IFNP6-r_nl-0qAFq6HgUg7uzPA_yEATVbiQpg0YdJzQwppSak-XEfl-4tF2EuYRg91vzk431_hVqi106CJOgu_DC8d9hMc1oeP7YfBQy_-yRHhnG5CmqetH9lAqxjpErSn0MTtxrCI3tePAQ-lo/s1600/Windows-98.jpg" },
    { title: "Windows 2000", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiy7GBCrpMNGNvIDxjXPLjdSwOjrDNuO_N2fSk0JLGwOTmmzWruDlzLggGr7KL64IeB3-fAh66TpGSXCi6ByG9igEsNrql7z_61ZOHPKGyphvS3apyydHNo_AhdMyR2JCNrQd1h5i1rmGInxQjw48BwmtA8KZT4vOTl0ZCHd2m-aU1BdUzu6XrbgiRqagJg/s1600/Windows-2000.jpg" },
    { title: "Windows ME", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGaDVjUNZy6zI75SuoKkvRGVidKbGO15FZiqOfg7h8ijtHIjFeeh50vphinzhZDZu9_pCsUGV3OlF6WQtvMMIouR_oBp2NBe0zHAX_VV8pzlamAmdOOk_Xr3vCW8SdrKLBvez5haI5QsmwSZI93Ctr6bV5DK2H2BnwxHa1w3hL4uwHtcbSfVRSmUmtCLia/s1600/Windows-me.jpg" },
    { title: "Windows XP", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgMiA0u2pSnfdlOkM9mKlao1OP6vDxBh0dfdUJJQOASGlCb2dRH4omZ9mk0Z3hosyXienDPJFB3L9OqOwzh4R1CZZTDQzHX6ao5JZHk3WZuMeXYo08GO4TrceTpAQyjV9nBcohS23J3izG9AgOYANiP8c7RKoxI8P-mJihOWMPbLmQGL8UvW-OVZpBofexI/s1600/Windows%20Xp.jpg" },
    { title: "Windows Vista Ultimate", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgrayTd5qkAtYXYZQS40tXuMQdklpng2awlgDThL-uOh4p5ah0iYZET7JkI4waJjo6UMkElM7Z43aWdy82c7nD-VV9WcCDYjQTcBIi9hftz51WEESTE8t-mSBCI93ef2PZj2ul4nmZa6wRB6SctxqGceLDTO27aNh7d4SOrvLu-NP9NN4F61de9owyk7JUV/s1600/Windows-vista-ultimate.jpg" },
    { title: "Windows 7", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhtdGXFGfYqtdtxvzYz4ldYxSSmQKI_spJZVCJDCKv1AsZ1QveVwn9GmcQ_Fw5rZCjBpRJx8Hh6MnFdtxy76FpIGaJfr8buHhXx2UoCkqkWbTZ7MO4Ib8HGttrtA2q_mF1DhuG0timcMG0gsxtUjJkNvFToOH-HmYObg8ymGlwHp6gfzppalekXQpDY7l6-/s1600/Windows-7.jpg" },
    { title: "Windows 8", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjiCHIHCsOr0tKTE1zjvFPSx78xizHZ9qv8bO1F7ZzdYnPra7TE8gcK1IFK6N_XXxi1VM_RFvOUVlcW910qkqWT4zBBn093ZokwxA1fh0tPirmaqsW_eQFEVvI73_e8t5NdHN49q69VYTYTV9D6bO7QvheycsKlP1q1B70O2GFkRqjTAgj0TBHxKq-0eVbF/s1600/Windows-8.jpg" },
    { title: "Windows 10", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgMfQF9dFPPNg7HLZpWGvfhFQXX0F7ljnoXOeEY2MChZ1kIa55UFsIEEoX82EYZs2w8oy2fZAMC1MLo5bdHZ-F44qca8urWHRKXYEhHh5a1vG0-ulK_U9RDe0daTV1aHxXAfuffPq4ICmGLlBa937YbtJbXBxnFshirB0q-X4JhUpvQ8eMqeq-VRlN7mPwv/s1600/Windows-10.jpg" },
    { title: "Windows 11", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhfR9SzI3p9rhARKxNllNL7hCUcSslyK96kKUKgDBJ2HYmguVPnYYRyw_UoGPnoxYRNlIzunJ3yAAl_Xh9D6ab1jkj-PbcPIq-buFIZr0jo9tqqpkn_1TPzH0iC1FpaCbmPaX9s_WgGg4maI5BCgJoRWwGCAhsJoveTo7LrG5Y2-604jXMebfhd9KpC3IM/s1600/Windows-11.jpg" },

    // Removing duplicate XP entries for cleaner UI
];

const BlogItem = ({ title, img }) => {
    const [selectedOS, setSelectedOS] = useState("https://download.microsoft.com/download/8/1/d/81d1f546-f951-45c5-964d-56bdbd758ba4/w2k3sp2_3959_usa_x64fre_spcd.iso");

    const downloadFile = () => {
        const a = document.createElement('a');
        a.href = selectedOS;
        a.download = selectedOS;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
        <article className={styles.card}>
            <div className={styles.postThumb}>
                <a href="#">
                    <img src={img} alt={title} />
                </a>
            </div>
            <div className={styles.postContent}>
                <div className={styles.entryHeader}>
                    <h3>
                        <a href="#" className={styles.postTitle}>{title}</a>
                    </h3>
                </div>
                <div className={styles.entryDetails}>
                    <label className={styles.selectLabel}>Select Version</label>
                    <select
                        className={styles.osSelect}
                        value={selectedOS}
                        onChange={(e) => setSelectedOS(e.target.value)}
                    >
                        <option value="https://download.microsoft.com/download/8/1/d/81d1f546-f951-45c5-964d-56bdbd758ba4/w2k3sp2_3959_usa_x64fre_spcd.iso">
                            Genuine
                        </option>
                        <option value="#">Black Addition Pre Activated X64</option>
                        <option value="#">Black Addition Pre Activated X86</option>
                    </select>
                    <button
                        onClick={downloadFile}
                        className={styles.downloadBtn}
                    >
                        Download
                    </button>
                </div>
            </div>
        </article>
    );
};

const Blog = ({ isActive }) => {
    return (
        <div className={`${styles.blogPage} ${isActive ? 'page--current' : ''}`} id="blog">
            {/* Page Title Starts */}
            <div className={styles.titleSection}>
                <h2>Windows <span>Software</span></h2>
                <span className={styles.titleBg}>Download</span>
            </div>
            {/* Page Title Ends */}

            {/* Main Content Starts */}
            <div className={styles.gridContainer}>
                {blogItems.map((item, index) => (
                    <BlogItem key={index} title={item.title} img={item.img} />
                ))}
            </div>
        </div>
    );
};

export default Blog;

