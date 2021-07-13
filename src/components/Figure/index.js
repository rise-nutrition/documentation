import React from "react";
import styles from "./index.module.css";

/**
 * Show a nice picture / SVG in a frame with a caption
 */
export default function Figure({ src, caption, alt="no alt", backgroundColor="white", style={}, imgProps={} }) {
    return (
        <figure className={styles.figure} style={{ backgroundColor, ...style }}>
            {
                (typeof src === 'string' || src instanceof String) ? (
                    <img {...imgProps} className={styles.img} src={src} alt={alt} />
                ) : src
            }
            { caption && <figcaption className={styles.caption}>{caption}</figcaption>}
            
        </figure>
    );
}