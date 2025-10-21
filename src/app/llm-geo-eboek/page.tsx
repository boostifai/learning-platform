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
      title="LLM GEO Eboek"
      description="Ontvang gratis het LLM GEO Eboek en leer hoe je je content optimaliseert voor AI."
    />
    <HeroDutch
      title={'Maak je SEO toekomstbestendig'}
      subtitle={'met LLM GEO Playbook'}
      description={`Leer hoe je je content AI-vriendelijk maakt.`}
      buttonText={'Download Gratis Eboek'}
      buttonIcon={<Download size={24} color="#ffffff" />}
      imageUrl="/assets/images/llm-geo-ebook-dutch.png"
      imageWidth={372}
      imageHeight={660}
      listID="32"
      tag="llm_geo_ebook_giveaway"
    />

    <SponsorsDutch />
    <Section
      title="Ontgrendel de toekomst van SEO met het LLM GEO Playbook"
      description="Generatieve AI verandert hoe mensen informatie vinden. Leer hoe je je content voorbereidt op AI-gestuurde zoekopdrachten en zorg dat jouw merk wordt geciteerd, samengevat en aanbevolen door top AI-modellen."
    >
      <VerticalFeatureRow
        title="Maak je content begrijpelijk voor AI-modellen"
        description="Traditionele SEO richt zich op menselijke zoekopdrachten. LLM GEO zorgt ervoor dat AI-modellen je content kunnen lezen, samenvatten en citeren. Leer hoe je je content structureert, schema markup toevoegt en je pagina's AI-vriendelijk maakt — zodat jouw merk wordt herkend op generatieve platforms."
        image="/assets/images/feature.svg"
        imageAlt="Eerste feature alt tekst"
      />
      <VerticalFeatureRow
        title="Meet AI-citaties & merkauthoriteit"
        description="LLM GEO draait niet alleen om content — het gaat om het verdienen van vertrouwen en citaties in het AI-ecosysteem. Ontdek hoe je AI-vermeldingen monitort, betrouwbare platforms benut en je merk vergelijkt met concurrenten om je invloed te maximaliseren."
        image="/assets/images/feature2.svg"
        imageAlt="Tweede feature alt tekst"
        reverse
      />
      <VerticalFeatureRow
        title="Blijf voorop in de AI-zoekrevolutie"
        description="Terwijl anderen zich richten op Google, bereidt LLM GEO jouw merk voor op ChatGPT, Gemini, Claude en andere generatieve engines. Ontdek praktische strategieën om je content, entiteitlaag en gestructureerde data af te stemmen — zodat jouw merk een voorsprong heeft in AI-gestuurde vindbaarheid."
        image="/assets/images/feature3.svg"
        imageAlt="Derde feature alt tekst"
      />
    </Section>
    <BannerDutch />
    <FooterDutch />
  </div>
);

export default Base;
