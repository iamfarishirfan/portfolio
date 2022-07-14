import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import EventBus from 'app/EventBus';

const HELP_TEXT = 'Click anywhere to begin';

export default function HelpPrompt(): JSX.Element {
    const [helpText, setHelpText] = useState('');
    const [visible, setVisible] = useState(true);
    const visRef = useRef(visible);

    function typeHelpText(i: number, curText: string) {
        if (i < HELP_TEXT.length && visRef.current) {
            setTimeout(() => {
                window.postMessage(
                    { type: 'keydown', key: `_AUTO_${HELP_TEXT[i]}` },
                    '*'
                );

                setHelpText(curText + HELP_TEXT[i]);
                typeHelpText(i + 1, curText + HELP_TEXT[i]);
            }, Math.random() * 120 + 50);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            typeHelpText(0, '');
        }, 500);

        document.addEventListener('mousedown', () => {
            setVisible(false);
        });

        EventBus.on('enterMonitor', () => {
            setVisible(false);
        });
    }, []);

    useEffect(() => {
        if (!visible) {
            window.postMessage({ type: 'keydown', key: `_AUTO_` }, '*');
        }

        visRef.current = visible;
    }, [visible]);

    return helpText.length > 0 ? (
        <motion.div
            variants={vars}
            animate={visible ? 'visible' : 'hide'}
            style={styles.container}
        >
            <p>{helpText}</p>
            <div style={styles.blinkingContainer}>
                <div className="blinking-cursor" />
            </div>
        </motion.div>
    ) : (
        <></>
    );
}

const vars = {
    visible: {
        opacity: 1
    },
    hide: {
        y: 12,
        opacity: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut'
        }
    }
};

const styles: StyleSheetCSS = {
    container: {
        position: 'absolute',
        bottom: 64,
        background: 'black',
        padding: 4,
        paddingLeft: 16,
        paddingRight: 16,
        textAlign: 'center',
        display: 'flex',
        alignItems: 'flex-end'
    },
    blinkingContainer: {
        // width: 100,
        // height: 100,
        marginLeft: 8,
        paddingBottom: 2,
        paddingRight: 4
    }
};
