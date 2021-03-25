import Head from "next/head";
import styles from "../styles/Home.module.css";
import DownloadButton from "../components/downloadButton";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Automatic Timelapse Processor</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <section>
                    <h1 className={styles.title}>
                        Automatic Timelapse Processor
                    </h1>
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
                        With an intuitive user interface to facilitate user
                        experience
                    </p>
                    <div className={styles.image}>
                        <img
                            src="imgs/timelapseUI.gif"
                            alt="user-interface"
                            width="400"
                            height="400"
                            style={{
                                borderRadius: "5px",
                            }}
                        />
                    </div>
                    <h2 className={styles.subtitle}>
                        No need of a professional camera
                    </h2>
                    <p className={styles.text}>
                        This application is designed to be used with webcams so
                        you can use whatever device you have,<br></br> of course
                        if you have a professional camera you can use it as a
                        webcam as well.
                    </p>
                    <div
                        style={{
                            width: "100%",
                            height: "300px",
                            backgroundColor: "red",
                            marginBottom: "50px",
                        }}>
                        cameras icons
                    </div>
                </section>
                <DownloadButton />
            </main>

            <footer className={styles.footer}></footer>
        </div>
    );
}
