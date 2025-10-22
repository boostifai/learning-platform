import { Download } from 'lucide-react';

import { VerticalFeatureRow } from '@/feature/VerticalFeatureRow';
import { MetaDutch } from '@/layout/MetaDutch';
import { Section } from '@/layout/Section';
import { BannerDutch } from '@/templates/BannerDutch';
import { FooterDutch } from '@/templates/FooterDutch';
import { HeroDutch } from '@/templates/HeroDutch';
import { SponsorsDutch } from '@/templates/SponsorsDutch';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <MetaDutch
      title="Chatgpt Prompt voor SEO"
      description="Laat je website sneller scoren met praktische SEO-tips. Ontworpen voor ondernemers, bloggers en marketeers die snel resultaat willen zonder diepgaande technische kennis."
    />
    <HeroDutch
      title={'Chatgpt Prompt voor SEO'}
      subtitle={'Boost je SEO met bewezen ChatGPT-workflows'}
      buttonText={'Download Gratis Eboek'}
      buttonIcon={<Download size={24} color="#ffffff" />}
      description="Leer stapsgewijze workflows om je SEO-contentcreatie te versnellen met AI, van zoekwoordonderzoek tot contentoptimalisatie en rapportage."
      imageUrl="/assets/images/chatgpt-prompt-seo-dutch.png"
      imageWidth={450}
      imageHeight={600}
      listID="35"
      tag="chatgpt_prompt_seo_giveaway"
    />
    <SponsorsDutch />
    <Section
      title="Versnel je SEO met AI-workflows"
      description="Deze gids neemt je mee door bewezen ChatGPT-gestuurde SEO-processen, zodat je tijd bespaart, je ranking verbetert en content maakt die converteert."
    >
      <VerticalFeatureRow
        title="Genereer SEO-content moeiteloos"
        description="Gebruik kant-en-klare ChatGPT-prompts om in minuten hoogwaardige SEO-content te maken en bespaar tijd en moeite."
        image="/assets/images/feature.svg"
        imageAlt="Papier uit laptop voor on-page SEO optimalisatie"
      />

      <VerticalFeatureRow
        title="Verhoog je ranking"
        description="Gebruik prompts die zijn ontworpen om je content te optimaliseren voor zoekmachines en verbeteringen in verkeer en betrokkenheid te volgen."
        image="/assets/images/feature2.svg"
        imageAlt="Voortgangsgrafiek met vrouw en dollarteken voor SEO groei"
        reverse
      />

      <VerticalFeatureRow
        title="Behaal sneller SEO-succes"
        description="Ontgrendel het volledige potentieel van AI-ondersteunde SEO met bewezen prompts die resultaten opleveren en je een voorsprong geven."
        image="/assets/images/feature3.svg"
        imageAlt="Boost icoon met beker voor SEO succes"
      />
    </Section>
    <BannerDutch />
    <FooterDutch />
  </div>
);

export default Base;
