import { ExternalLink } from 'lucide-react';

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
      title="SEO Checklist Gids"
      description="Laat je website sneller scoren met deze praktische SEO-tips. Ontworpen voor ondernemers, bloggers en marketeers die snel resultaat willen zonder diepgaande technische kennis."
    />
    <HeroDutch
      title={'SEO Checklist Gids'}
      subtitle={''}
      buttonText={'Ontvang Gratis Gids'}
      buttonIcon={<ExternalLink size={24} color="#ffffff" />}
      description="Laat je website sneller scoren met deze praktische SEO-checklist. Ontworpen voor ondernemers, bloggers en marketeers die snel resultaat willen zonder diepgaande technische kennis."
      imageUrl="/assets/images/seo-checklist-guide-dutch.png"
      imageWidth={450}
      imageHeight={600}
      listID="34"
      tag="seo_checklist_giveaway_nl"
    />
    <SponsorsDutch />
    <Section
      title="Verbeter je ranking met praktische SEO Quick Wins"
      description="Volg onze stapsgewijze checklist om de SEO-prestaties van je website te verbeteren — van on-page optimalisaties tot contentverbeteringen en slimme groeistrategieën. Of je nu nieuw bent met SEO of snelle resultaten wilt, deze gids helpt je meetbare stappen te zetten richting betere rankings."
    >
      <VerticalFeatureRow
        title="Optimaliseer je websitecontent voor betere zichtbaarheid"
        description="Net als een papier dat uit een laptop komt, moet de content van je website duidelijk communiceren wat je aanbiedt. Leer hoe je SEO-vriendelijke titels, meta descriptions en koppen schrijft die zowel gebruikers als zoekmachines aantrekken. Verbeter structuur, leesbaarheid en relevantie voor snelle rankingwinst."
        image="/assets/images/feature.svg"
        imageAlt="Papier uit laptop voor on-page SEO optimalisatie"
      />

      <VerticalFeatureRow
        title="Stimuleer SEO Groei"
        description="SEO-groei vraagt om consistente inspanning. Dit onderdeel helpt je focussen op meetbare verbeteringen zoals keyword ranking, verkeerstrends en conversiegroei. Ontdek hoe kleine optimalisaties kunnen leiden tot grote prestaties en omzetgroei."
        image="/assets/images/feature2.svg"
        imageAlt="Voortgangsgrafiek met vrouw en dollarteken voor SEO groei"
        reverse
      />

      <VerticalFeatureRow
        title="Versnel je succes en behoud SEO-consistentie"
        description="Consistentie is de sleutel tot SEO-succes. Leer hoe je groei vasthoudt door regelmatige updates, slimme linkbuilding en monitoring. Pas bewezen checklists toe om je website te laten presteren en je merk voorop te houden."
        image="/assets/images/feature3.svg"
        imageAlt="Boost icoon met beker voor SEO succes"
      />
    </Section>
    <BannerDutch />
    <FooterDutch />
  </div>
);

export default Base;
