import styles from "../styles/DownloadBtn.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
const DownloadButton = () => {
    return (
        <div className={styles.DownloadBtn}>
            <FontAwesomeIcon icon={faDownload} className={styles.icon} />
            <a href="#" target="_blank" download>
                <p
                    style={{
                        display: "flex",
                        fontWeight: "500",
                    }}>
                    Download
                </p>
            </a>
        </div>
    );
};

export default DownloadButton;
