"use client";

import React from "react";
import { ReactLenis } from "lenis/react";
import { SiteThemeProvider } from "@/components/sections/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navigation/NavbarLayoutFloatingInline";
import TokenBillboardHero from "@/components/sections/layouts/hero/TokenBillboardHero";
import SocialsAbout from "@/components/sections/layouts/about/SocialsAbout";
import HowToBuy2D from "@/components/sections/layouts/howtobuy/2DHTB";
import CentralFAQ from "@/components/sections/layouts/faq/CentralFAQ";
import BaseFooter from "@/components/sections/layouts/footer/BaseFooter";
import { NavItem } from "@/types/navigation";

const navItems: NavItem[] = [
  { name: "Home", id: "hero" },
  { name: "About", id: "about" },
  { name: "How to Buy", id: "howtobuy" },
  { name: "FAQ", id: "faq" },
];

const faqItems = [
  {
    title: "What is $MEMEDOG?",
    content:
      "$MEMEDOG is the next generation memecoin that combines fun, community, and utility. Built on cutting-edge blockchain technology with a deflationary tokenomics model designed to reward early supporters and create sustainable value growth.",
  },
  {
    title: "How do I buy $MEMEDOG?",
    content:
      "Buying $MEMEDOG is simple! Create a crypto wallet like MetaMask, purchase ETH from any exchange, transfer it to your wallet, then connect to Uniswap to swap ETH for $MEMEDOG tokens. Our step-by-step guide above walks you through the entire process.",
  },
  {
    title: "Is $MEMEDOG safe?",
    content:
      "Yes! $MEMEDOG has been audited by leading blockchain security firms. Our smart contract is verified, liquidity is locked, and the team tokens are vested. We're committed to transparency and building a trustworthy ecosystem for our community.",
  },
  {
    title: "What makes $MEMEDOG different?",
    content:
      "Unlike other memecoins, $MEMEDOG features real utility including NFT staking, governance voting, exclusive merchandise, and partnerships with major brands. We're building a comprehensive ecosystem that goes beyond just being a meme.",
  },
  {
    title: "Where can I trade $MEMEDOG?",
    content:
      "$MEMEDOG is available on major decentralized exchanges like Uniswap and PancakeSwap. We're also working on listings with centralized exchanges. Always trade on official platforms and beware of scam tokens with similar names.",
  },
  {
    title: "What's the tokenomics?",
    content:
      "Total supply: 1 billion tokens. 40% for community rewards, 25% locked liquidity, 20% for development, 10% for partnerships, and 5% for the team (fully vested). We have a 2% burn mechanism on every transaction to create deflationary pressure.",
  },
];

const footerColumns = [
  {
    title: "Community",
    items: [
      { label: "Telegram", onClick: () => window.open("https://t.me/memedog") },
      {
        label: "Discord",
        onClick: () => window.open("https://discord.gg/memedog"),
      },
      {
        label: "Twitter",
        onClick: () => window.open("https://twitter.com/memedog"),
      },
      {
        label: "Reddit",
        onClick: () => window.open("https://reddit.com/r/memedog"),
      },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Whitepaper", onClick: () => console.log("Whitepaper clicked") },
      { label: "Tokenomics", onClick: () => console.log("Tokenomics clicked") },
      { label: "Roadmap", onClick: () => console.log("Roadmap clicked") },
      { label: "Audit", onClick: () => console.log("Audit clicked") },
    ],
  },
  {
    title: "Support",
    items: [
      {
        label: "Help Center",
        onClick: () => console.log("Help Center clicked"),
      },
      { label: "Contact", onClick: () => console.log("Contact clicked") },
      {
        label: "Bug Reports",
        onClick: () => console.log("Bug Reports clicked"),
      },
      { label: "Security", onClick: () => console.log("Security clicked") },
    ],
  },
];

export default function Home() {
  return (
    <ReactLenis root>
      <SiteThemeProvider
        theme={{
          styleVariant: "funAndTrendy",
          colorTemplate: 1,
          textAnimation: "slide",
        }}
      >
        <NavbarLayoutFloatingInline
          navItems={navItems}
          logoSrc="/images/logo.svg"
          logoWidth={120}
          logoHeight={40}
          buttonText="Buy Now"
          onButtonClick={() => {
            document
              .getElementById("howtobuy")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        />

        <section id="hero">
          <TokenBillboardHero
            title="$MEMEDOG TO THE MOON! 🚀"
            subtitle="The ultimate memecoin for the next generation. Join the pack and ride the wave to financial freedom!"
            contractAddress="0x1234567890abcdef1234567890abcdef12345678"
            copyButtonText="Copy Contract"
            copiedText="Copied!"
          />
        </section>

        <section id="about">
          <SocialsAbout
            title="ABOUT $MEMEDOG"
            descriptions={[
              "$MEMEDOG is more than just a memecoin - it's a movement. Born from the community's love for dogs and memes, we're building the most entertaining and rewarding cryptocurrency experience.",
              "With our deflationary tokenomics, exclusive NFT collections, and strong community-first approach, $MEMEDOG is designed to create long-term value while keeping the fun alive.",
              "Join thousands of holders who believe in the power of memes, community, and the next evolution of cryptocurrency. Every holder is part of our pack! 🐕",
            ]}
          />
        </section>

        <section id="howtobuy">
          <HowToBuy2D variant="simple" />
        </section>

        <section id="faq">
          <CentralFAQ items={faqItems} />
        </section>

        <BaseFooter
          columns={footerColumns}
          copyrightText="© 2025 | $MEMEDOG - The Ultimate Memecoin"
          onPrivacyClick={() => console.log("Privacy Policy clicked")}
        />
      </SiteThemeProvider>
    </ReactLenis>
  );
}
