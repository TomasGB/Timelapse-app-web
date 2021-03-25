import Head from "next/head";
import styles from "../styles/Home.module.css";
import DownloadButton from "../components/downloadButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCamera,
    faMobileAlt,
    faVideo,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Automatic Timelapse Processor</title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="viewport"
                    content="width=device-width,
                initial-scale=1"></meta>
            </Head>

            <main className={styles.main}>
                <section>
                    <h1 className={styles.title}>
                        Automatic Timelapse Processor
                    </h1>
                    <div className={styles.image}>
                        <img
                            src="timelapseicono.png"
                            alt="timelapse-app-icon"
                            width="200"
                            height="200"
                        />
                    </div>
                    <p className={styles.description}>
                        This Automatic Timelapse Processor is able to completely
                        automate the process of making a timelapse, that
                        includes taking the photos, apply gamma correction and
                        histogram equalization to improve the quality of the
                        photos and finally export the timelapse as an mp4 file
                        with processing and another without.
                    </p>
                </section>
                <section className={styles.section}>
                    <h2 className={styles.subtitle}>User Interface</h2>
                    <p className={styles.text}>
                        Intuitive user interface to facilitate user experience
                    </p>
                    <div className={styles.image}>
                        <img
                            src="imgs/timelapseUI.gif"
                            alt="user-interface"
                            width="400px"
                            height="370px"
                            style={{
                                borderRadius: "5px",
                                maxWidth: "100%",
                                maxHeight: "100%",
                            }}
                        />
                    </div>
                    <h2 className={styles.subtitle}>
                        No need of a professional camera
                    </h2>
                    <p className={styles.text}>
                        This application is designed to be used with webcams so
                        you can use whatever device you have, so if you have a
                        professional camera you can use it as a webcam as well.
                    </p>
                    <div
                        style={{
                            width: "100%",
                            height: "300px",
                            marginBottom: "100px",
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
                </section>
                <DownloadButton />
            </main>

            <footer className={styles.footer}></footer>
        </div>
    );
}
