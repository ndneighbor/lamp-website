import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import { jsx, ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";

// 3. Style items
// 4. Light mode when you click lamp, default dark, when lit you hear music

// PLaceholder theme provider for the dark mode
const theme = {
  colors: {
    primary: "hotpink",
  },
};

const SomeText = styled.div`
  color: ${(props) => props.theme.colors.primary};
`;

export const letterContainerVariants = {
  before: { transition: { staggerChildren: 0.015 } },
  after: { transition: { staggerChildren: 0.03 } },
};

// Variants for animating each letter
export const letterVariants = {
  before: {
    y: 20,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200,
    },
  },
  after: {
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200,
    },
  },
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
`;

const LampText = styled.div`
  justify-content: center;
  margin: 24px;
  display: flex;
  font-family: "Papyrus";
  font-size: 64px;
  margin: 24px;
`;

export default function Home() {
  return (
    <Container>
      <div>
        <motion.img
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

        <h2>Whitepaper</h2>
        <ThemeProvider theme={theme}>
          <SomeText>some text</SomeText>
        </ThemeProvider>
      </div>
    </Container>
  );
}
