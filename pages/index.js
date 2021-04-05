import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import DownloadButton from "../components/downloadButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCamera,
    faMobileAlt,
    faVideo,
    faCheckCircle,
    faCode,
} from "@fortawesome/free-solid-svg-icons";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Timelapsing!</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="theme-color" content="#f3e8db" />
                <meta charSet="UTF-8" />
                <meta
                    name="description"
                    content="Automatic timelapse processor app"
                />
                <meta
                    name="keywords"
                    content="Timelapse, Automatic, App, Application, Tomas Gomez Bermudez"
                />
                <meta name="author" content="Tomas Gomez Bermudez" />
                <meta
                    name="viewport"
                    content="width=device-width,
                initial-scale=1"
                />
            </Head>

            <main className={styles.main}>
                <section>
                    <h1 className={styles.title}>Timelapsing!</h1>
                    <div className={styles.image}>
                        <img
                            src="timelapseicono.png"
                            alt="timelapse-app-icon"
                            width="200"
                            height="200"
                        />
                    </div>
                    <p className={styles.description}>
                        Timelapsing! is an automatic timelapse processor able to
                        completely automate the process of making a timelapse,
                        that includes taking the photos, apply gamma correction
                        and histogram equalization to improve the quality of the
                        photos and finally export the timelapse as an mp4 file
                        with processing and another without.
                    </p>
                </section>
                <section className={styles.section}>
                    <h2 className={styles.subtitle}>User Interface</h2>
                    <p className={styles.text}>
                        Intuitive user interface to facilitate user experience.
                    </p>
                    <div className={styles.UI}>
                        <img
                            src="imgs/timelapseUI.gif"
                            alt="user-interface"
                            width="250px"
                            height="380px"
                        />
                    </div>
                    <h2 className={styles.subtitle}>
                        No need of professional cameras
                    </h2>
                    <p className={styles.text}>
                        This application is designed to be used with webcams so
                        you can use whatever device you have, so if you have a
                        professional camera you can use it as a webcam as well.
                    </p>
                    <div
                        style={{
                            width: "100%",
                            height: "fit-content",
                        }}>
                        <ul className={styles.list}>
                            <li>
                                <FontAwesomeIcon
                                    icon={faCamera}
                                    className={styles.icon}
                                />
                            </li>
                            <li>
                                <FontAwesomeIcon
                                    icon={faMobileAlt}
                                    className={styles.icon}
                                />
                            </li>
                            <li>
                                <FontAwesomeIcon
                                    icon={faVideo}
                                    className={styles.icon}
                                />
                            </li>
                        </ul>
                    </div>
                    <h2 className={styles.subtitle}>Ready to use</h2>
                    <p className={styles.text}>
                        No installation needed, download it and start using it.
                    </p>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                        }}>
                        <FontAwesomeIcon
                            icon={faCheckCircle}
                            className={styles.icon}
                        />
                    </div>
                    <h2 className={styles.subtitle}>Support the project</h2>
                    <p className={styles.text}>
                        If you like the app and want to help to keep improving
                        it, you can make a donation through PayPal.
                    </p>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignSelf: "center",
                        }}>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                marginBottom: "50px",
                            }}>
                            <FontAwesomeIcon
                                icon={faPaypal}
                                className={styles.icon}
                            />
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}>
                            <div className={styles.Btn}>
                                <a
                                    href="https://www.paypal.com/donate?hosted_button_id=8AF6RDATNJDZU"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <p
                                        style={{
                                            display: "flex",
                                            fontWeight: "500",
                                        }}>
                                        Donate
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <h2 className={styles.subtitle}>Demos</h2>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            justifyContent: "space-evenly",
                            marginTop: "70px",
                            marginBottom: "100px",
                        }}>
                        <img
                            src="imgs/timelapse_github.gif"
                            alt="timelapse-demo-1"
                            width="400px"
                            height="250px"
                            className={styles.demos}
                        />
                        <img
                            src="imgs/timelapse_github3.gif"
                            alt="timelapse-demo-1"
                            width="400px"
                            height="250px"
                            className={styles.demos}
                        />
                    </div>
                </section>
                <DownloadButton />
            </main>
            <footer className={styles.footer}>
                <span className={styles.footerSpan}>
                    <FontAwesomeIcon
                        icon={faCode}
                        className={styles.iconFooter}
                    />
                    <p className={styles.footerText}>
                        Developed by <strong>Tomas Gomez Bermudez</strong>
                        {/*<Link href="https://github.com/TomasGB">
                            <a
                                style={{ fontWeight: "500" }}
                                target="_blank"
                                rel="noopener noreferrer">
                                Tomas Gomez Bermudez
                            </a>
                    </Link>*/}
                    </p>
                </span>
            </footer>
        </div>
    );
}
