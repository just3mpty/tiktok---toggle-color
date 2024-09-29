"use client";
import React, { useState } from "react";
import styles from "./toggle.module.scss";
import Image from "next/image";
import gsap from "gsap";

const Toggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMode = () => {
        const tl = gsap.timeline();

        if (!isDarkMode) {
            tl.to(`.${styles.screen}`, {
                y: "-100%",
                duration: 1,
                ease: "power3.inOut",
            })
                .to(
                    `.${styles.toggleCircle}`,
                    {
                        x: 56,
                        duration: 0.5,
                        ease: "bounce.out",
                    },
                    "-=0.8"
                )
                .to(
                    `.${styles.dark}`,
                    {
                        y: -50,
                        opacity: 0,
                        ease: "elastic.out",
                    },
                    0
                )
                .to(
                    `.${styles.light}`,
                    {
                        y: -37,
                        opacity: 1,
                        ease: "elastic.out",
                    },
                    0
                );
        } else {
            tl.to(`.${styles.screen}`, {
                y: "100%",
                duration: 1,
                ease: "power3.inOut",
            })
                .to(
                    `.${styles.toggleCircle}`,
                    {
                        x: 0,
                        duration: 0.5,
                        ease: "bounce.out",
                    },
                    "-=0.8"
                )
                .to(
                    `.${styles.dark}`,
                    {
                        y: -2,
                        opacity: 1,
                        ease: "elastic.out",
                    },
                    0
                )
                .to(
                    `.${styles.light}`,
                    {
                        y: 50,
                        opacity: 0,
                        ease: "elastic.out",
                    },
                    0
                );
        }
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={styles.toggleContainer}>
            <div className={styles.screen} />
            <h1>{isDarkMode ? "Dark" : "Light"}.</h1>
            <div className={styles.toggle}>
                <div className={styles.toggleCircle} onClick={toggleMode}>
                    <Image
                        src={"/dark.svg"}
                        alt="Icon"
                        width={30}
                        height={30}
                        className={styles.dark}
                    />
                    <Image
                        src={"/light.svg"}
                        alt="Icon"
                        width={30}
                        height={30}
                        className={styles.light}
                    />
                </div>
            </div>
        </div>
    );
};

export default Toggle;
