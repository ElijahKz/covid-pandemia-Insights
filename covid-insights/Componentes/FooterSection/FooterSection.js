import styles from './css/FooterSection.module.css'
import Image from 'next/image'
import Link from 'next/link'
import githubImage from './img/github.svg'
import humhubImage from './img/humhub.svg'
import mediumImage from './img/medium.svg'

/* this component shows the information about*/
const FooterSection = () => {
    return (
        <footer>
            <div id={`mIdFooter`} className={`row d-flex justify-content-center ${styles.mixFooterSection}`}>
                <div className={`row d-flex justify-content-center ${styles.mixFooterLittleCont}`}>
                    <div className={`col col-lg-4 ${styles.mixFooterImage} `}></div>
                    <div className={`col col-lg-6 ${styles.mixFooterInformation}`}>
                        <h5 className={styles.mixFooterTitle}>Contact</h5>
                        <div className={`row ${styles.mixFooterDescription}`}>
                            <div className="row d-flex">
                                <div className={`col ${styles.mixRedName}`}>Email</div>
                                <div className={`col-8 ${styles.mixRedValue}`}>aliasElDEv@gmail.com</div>
                            </div>
                            <div className="row d-flex">
                                <div className={`col ${styles.mixRedName}`}>Github</div>
                                <div className={`col-8 ${styles.mixRedValue}`}>https://github.com/ElijahKz</div>
                            </div>
                            <div className="row d-flex">
                                <div className={`col ${styles.mixRedName}`}>Torre</div>
                                <div className={`col-8 ${styles.mixRedValue}`}>https://torre.co/milmaxduque</div>
                            </div>
                            <div className="row d-flex">
                                <div className={`col ${styles.mixRedName}`}>Medium</div>
                                <div className={`col-8 ${styles.mixRedValue}`}>https://medium.com/@El.DEv</div>
                            </div>
                        </div>
                    </div>
                    <div className={`row d-flex justify-content-end  ${styles.mixContactContainer}`}>
                        <div className={`row   ${styles.mixNetworks}`}>
                            <div className={`col d-flex justify-content-center ${styles.mixGithub}`}>
                                <Link href="https://github.com/ElijahKz" legacyBehavior>
                                    <a>
                                        <div className={`${styles.mixNetworkContainers}`}>
                                            <Image src={githubImage} alt="github" />
                                        </div>
                                    </a>
                                </Link>
                            </div>
                            <div className={`col d-flex justify-content-center ${styles.mixHumhub}`}>
                                <Link href="https://community.humhub.com/u/elijahkz/home" legacyBehavior>
                                    <a>
                                        <div className={`${styles.mixNetworkContainers}`}>
                                            <Image src={humhubImage} alt="humhub" />
                                        </div>
                                    </a>
                                </Link>
                            </div>
                            <div className={`col d-flex justify-content-center ${styles.mixMedium}`}>
                                <Link href="https://medium.com/@El.DEv" legacyBehavior>
                                    <a>
                                        <div className={`${styles.mixNetworkContainers}`}>
                                            <Image src={mediumImage} alt="network medium" />
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}
export default FooterSection;