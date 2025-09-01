"use client";

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
    title: "What is NEXUS COIN?",
    content:
      "NEXUS COIN is a revolutionary DeFi 3.0 protocol that combines artificial intelligence, quantum-resistant cryptography, and adaptive tokenomics. Built for the next generation of decentralized finance applications.",
  },
  {
    title: "How does the AI tokenomics work?",
    content:
      "Our neural network continuously analyzes market conditions, transaction patterns, and ecosystem health to automatically adjust token supply, staking rewards, and liquidity parameters for optimal performance.",
  },
  {
    title: "Is NEXUS COIN quantum-secure?",
    content:
      "Yes! NEXUS COIN implements post-quantum cryptographic algorithms that are resistant to attacks from quantum computers, ensuring your assets remain secure in the quantum computing era.",
  },
  {
    title: "What makes NEXUS different from other DeFi tokens?",
    content:
      "NEXUS features autonomous yield optimization, cross-chain interoperability, zero-knowledge privacy, and AI-powered risk management. We're building the infrastructure for Web3's next evolution.",
  },
  {
    title: "Where can I trade NEXUS COIN?",
    content:
      "NEXUS COIN is available on major DEXs including Uniswap V4, and our native cross-chain AMM. We're also integrated with leading CEXs. Always verify contract addresses through our official channels.",
  },
  {
    title: "What's the tokenomics model?",
    content:
      "Total supply: 100 million tokens with dynamic adjustment. 35% for ecosystem rewards, 25% for liquidity, 20% for development, 15% for strategic partnerships, 5% for team (3-year vesting). AI-controlled burn and mint mechanisms maintain optimal token velocity.",
  },
];

const footerColumns = [
  {
    title: "Protocol",
    items: [
      { label: "Governance", onClick: () => console.log("Governance clicked") },
      { label: "Staking", onClick: () => console.log("Staking clicked") },
      { label: "Analytics", onClick: () => console.log("Analytics clicked") },
      { label: "Bridge", onClick: () => console.log("Bridge clicked") },
    ],
  },
  {
    title: "Developers",
    items: [
      { label: "Documentation", onClick: () => console.log("Docs clicked") },
      { label: "API Reference", onClick: () => console.log("API clicked") },
      {
        label: "GitHub",
        onClick: () => window.open("https://github.com/nexuscoin"),
      },
      { label: "Bug Bounty", onClick: () => console.log("Bug Bounty clicked") },
    ],
  },
  {
    title: "Community",
    items: [
      {
        label: "Discord",
        onClick: () => window.open("https://discord.gg/nexuscoin"),
      },
      {
        label: "Twitter",
        onClick: () => window.open("https://twitter.com/nexuscoin"),
      },
      {
        label: "Medium",
        onClick: () => window.open("https://medium.com/@nexuscoin"),
      },
      {
        label: "Telegram",
        onClick: () => window.open("https://t.me/nexuscoin"),
      },
    ],
  },
];

export default function Home() {
  return (
    <ReactLenis root>
      <SiteThemeProvider
        theme={{
          styleVariant: "futuristicAndOutOfBox",
          colorTemplate: 1,
          textAnimation: "none",
        }}
      >
        <NavbarLayoutFloatingInline
          navItems={navItems}
          logoSrc="/images/logo.svg"
          logoWidth={120}
          logoHeight={40}
          buttonText="Enter Protocol"
          onButtonClick={() => {
            document
              .getElementById("howtobuy")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        />

        <section id="hero">
          <TokenBillboardHero
            title="NEXUS COIN - FUTURE OF DEFI"
            subtitle="Experience the next evolution of decentralized finance with quantum-secure blockchain technology and AI-powered tokenomics."
            contractAddress="0x1234567890abcdef1234567890abcdef12345678"
            copyButtonText="Copy Contract"
            copiedText="Copied!"
          />
        </section>

        <section id="about">
          <SocialsAbout
            title="ABOUT NEXUS COIN"
            descriptions={[
              "NEXUS COIN represents the convergence of artificial intelligence and blockchain technology. Built on a quantum-resistant protocol with advanced cryptographic security.",
              "Join the revolution of next-generation digital assets. Experience DeFi 3.0 with zero-knowledge proofs, cross-chain interoperability, and autonomous yield optimization.",
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
          copyrightText="© 2025 | NEXUS COIN - Next-Gen DeFi Protocol"
          onPrivacyClick={() => console.log("Privacy Policy clicked")}
        />
      </SiteThemeProvider>
    </ReactLenis>
  );
}
