import styles from "../styles/DownloadBtn.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
const DownloadButton = () => {
    return (
        <div className={styles.DownloadBtn}>
            <FontAwesomeIcon icon={faDownload} className={styles.icon} />
            <a
                href="Proyecto Final PCI-Tomas Gomez Bermudez-Primer Cuatrimestre 2020 (correcion).rar"
                target="_blank"
                download>
                <p
                    style={{
                        display: "flex",
                        fontSize: "16px",
                        fontWeight: "500",
                    }}>
                    Download here
                </p>
            </a>
        </div>
    );
};

export default DownloadButton;
