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
      title="Nano Banaan Blog Afbeelding Gids"
      description="Leer hoe je verbluffende blogafbeeldingen maakt met onze uitgebreide gids."
    />
    <HeroDutch
      title={'Nano Banaan Blog Afbeelding Gids'}
      subtitle={''}
      buttonText={'Ontvang Gratis Gids'}
      buttonIcon={<ExternalLink size={24} color="#ffffff" />}
      description="Ontdek de geheimen van het maken van boeiende blogafbeeldingen die je content versterken en lezers aantrekken."
      imageUrl="/assets/images/nano-banana-image-blog-guide-dutch.png"
      imageWidth={450}
      imageHeight={336}
      listID="33"
      tag="nano_banana_blog_image_giveaway"
    />
    <SponsorsDutch />
    <Section
      title="Maak Verbluffende Blogvisuals met Nano Banaan"
      description="Transformeer je ideeën in AI-gegenereerde visuals die boeien, informeren en inspireren. Leer hoe je krachtige prompts maakt die je blogposts aantrekkelijker, consistenter en deelbaar maken — allemaal met de Nano Banaan Gids."
    >
      <VerticalFeatureRow
        title="Maak Blogafbeeldingen Die Zichzelf Ontwerpen"
        description="Je ideeën verdienen visuals die opvallen. Nano Banaan helpt je om elk onderwerp om te zetten in duidelijke, AI-klare prompts die professionele blogafbeeldingen in seconden genereren. Volg eenvoudige formules om relevante, boeiende visuals te krijgen die perfect aansluiten bij je content."
        image="/assets/images/feature.svg"
        imageAlt="Eerste feature alt tekst"
      />
      <VerticalFeatureRow
        title="Verhoog Betrokkenheid & Vergroot Je Contentwaarde"
        description="Goed gemaakte visuals zorgen voor meer klikken, shares en conversies. Leer hoe je prompts schrijft die het verhaal van je blog versterken — van headers tot infographics — en zie hoe je contentprestaties stijgen."
        image="/assets/images/feature2.svg"
        imageAlt="Tweede feature alt tekst"
        reverse
      />
      <VerticalFeatureRow
        title="Win het Visuele Spel Met AI-gedreven Consistentie"
        description="Houd je merkvisuals consistent en memorabel in elke post. Gebruik Nano Banaan’s gestructureerde prompttemplates en stijlgidsen om een samenhangende look te creëren die opvalt — sneller dan ooit."
        image="/assets/images/feature3.svg"
        imageAlt="Derde feature alt tekst"
      />
    </Section>
    <BannerDutch />
    <FooterDutch />
  </div>
);

export default Base;
