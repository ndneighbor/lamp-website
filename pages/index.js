import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import { jsx, ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";

// 4. Light mode when you click lamp, default dark, when lit you hear music
// 5. Add the audio stuff into

// PLaceholder theme provider for the dark mode
const themeLight = {
  colors: {
    primary: "black",
    secondary: "white",
  },
};

const themeDark = {
  colors: {
    primary: "white",
    secondary: "black",
  },
};

const SomeText = styled.div`
  display: flex;
  justify-content: center;
  font-size: 24px;
`;

const Container = styled.div`
  color: ${(props) => props.theme.colors.primary};
  background: ${(props) => props.theme.colors.secondary};
  display: flex;
  justify-content: center;
  align-self: center;
  font-family: "Papyrus";
`;

const LampText = styled.div`
  justify-content: center;
  margin: 24px;
  display: flex;
  font-size: 64px;
  margin: 24px;
`;

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  function handleImageClick() {
    setDarkMode(!darkMode);
    console.log(darkMode);
  }

  return (
    <ThemeProvider theme={darkMode ? themeDark : themeLight}>
      <Container>
        <div>
          <motion.img
            onClick={handleImageClick}
            animate={{
              translateY: [-10, 10, -10, 10, -10],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              loop: Infinity,
            }}
            src="/TransparentBG.png"
            alt="Logo of the Lamp Project"
            width={500}
            height={500}
          ></motion.img>

          {/* No copy at all. */}
          {/* Need to add the wave effect into an animated */}
          <LampText>
            <motion.div
              animate={{
                translateY: [-10, 10, -10, 10, -10],
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                loop: Infinity,
              }}
            >
              L
            </motion.div>
            <motion.div
              animate={{
                translateY: [-10, 10, -10, 10, -10],
              }}
              transition={{
                duration: 2.9,
                ease: "easeInOut",
                loop: Infinity,
              }}
            >
              A
            </motion.div>
            <motion.div
              animate={{
                translateY: [-10, 10, -10, 10, -10],
              }}
              transition={{
                duration: 2.8,
                ease: "easeInOut",
                loop: Infinity,
              }}
            >
              M
            </motion.div>
            <motion.div
              animate={{
                translateY: [-10, 10, -10, 10, -10],
              }}
              transition={{
                duration: 2.7,
                ease: "easeInOut",
                loop: Infinity,
              }}
            >
              P
            </motion.div>
          </LampText>
          <SomeText>Whitepaper</SomeText>
        </div>
      </Container>
    </ThemeProvider>
  );
}
