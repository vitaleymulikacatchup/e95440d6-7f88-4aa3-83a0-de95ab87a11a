"use client";
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <NavbarLayoutFloatingInline
        navItems={[{ name: 'Hero', id: 'hero' }, { name: 'About', id: 'about' }, { name: 'How to Buy', id: 'how-to-buy' }, { name: 'Tokenomics', id: 'tokenomics' }, { name: 'FAQ', id: 'faq' }, { name: 'Footer', id: 'footer' }]}
        logoSrc="/images/logo.svg"
        logoAlt="MoonMeme Logo"
        buttonText="Buy MoonMeme"
        onButtonClick={() => {/* Handle click */}}
        className="navbar"
        buttonClassName="cta-button"
      />
      <TokenBillboardHero
        title="Welcome to MoonMeme"
        subtitle="Join the meme revolution with our unique token."
        contractAddress="0xYourTokenAddress"
        copyButtonText="Copy"
        copiedText="Copied!"
      />
      <SplitAbout
        description="MoonMeme is the memecoin that’s out of this world! Join us as we explore the universe of memes and cryptocurrencies."
      />
      <HowToBuy2D
        variant="simple"
      />
      <BigNumberTokenomics
        title="MoonMeme Tokenomics"
        description="Discover the economics behind MoonMeme."
        kpiItems={[{ value: "1M", description: "Total Supply", longDescription: "Total number of tokens in circulation.", icon: null }, { value: "$100K", description: "Market Cap", longDescription: "The total market value of all tokens currently in circulation.", icon: null }, { value: "50%", description: "Liquidity", longDescription: "Percentage of total supply allocated to liquidity.", icon: null }]}
      />
      <CentralFAQ
        items={[{ title: "What is MoonMeme?", content: "MoonMeme is a playful memecoin designed for fun and community engagement." }, { title: "How can I buy it?", content: "You can purchase MoonMeme through various exchanges." }, { title: "Is there a roadmap?", content: "Yes! Our roadmap outlines the future developments for the token." }]}
      />
      <FooterLogoEmphasis
        logoSrc="/images/logo.svg"
        logoAlt="MoonMeme Logo"
        columns={[{ items: [{ label: "Privacy Policy", onClick: () => {} }, { label: "Terms of Service", onClick: () => {} }, { label: "Contact Us", onClick: () => {} }] } ]}
        logoText="MoonMeme"
        copyrightText="© 2023 MoonMeme. All rights reserved."
        onPrivacyClick={() => { /* Handle Privacy Click */ }}
      />
    </SiteThemeProvider>
  );
}