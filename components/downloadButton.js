import styles from "../styles/DownloadBtn.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
const DownloadButton = () => {
    const CurrentVersion = "1.2.0";
    return (
        <div className={styles.DownloadBtn}>
            <FontAwesomeIcon icon={faDownload} className={styles.icon} />
            <a href="Timelapsing v1.2.0.rar" target="_blank" download>
                <p
                    style={{
                        display: "flex",
                        fontWeight: "500",
                    }}>
                    Download v{CurrentVersion}
                </p>
            </a>
        </div>
    );
};

export default DownloadButton;
