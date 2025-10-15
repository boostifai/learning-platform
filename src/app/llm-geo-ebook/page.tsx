import { Download } from 'lucide-react';

import { VerticalFeatureRow } from '@/feature/VerticalFeatureRow';
import { Meta } from '@/layout/Meta';
import { Section } from '@/layout/Section';
import { Banner } from '@/templates/Banner';
import { Footer } from '@/templates/Footer';
import { Hero } from '@/templates/Hero';
import { Sponsors } from '@/templates/Sponsors';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta
      title="LLM GEO Ebook"
      description="Get your free LLM GEO Ebook and learn how to optimize your content for AI."
    />
    <Hero
      title={'Future Proof Your SEO'}
      subtitle={'with LLM GEO Playbook'}
      description={`Learn how to make your content AI-friendly.`}
      buttonText={'Download Your Free Ebook'}
      buttonIcon={<Download size={24} color="#ffffff" />}
      imageUrl="/assets/images/llm-geo-ebook.png"
      imageWidth={372}
      imageHeight={660}
      listID="32"
      tag="llm_geo_ebook_giveaway"
    />

    <Sponsors />
    <Section
      title="Unlock the Future of SEO with the LLM GEO Playbook"
      description="Generative AI is reshaping how people discover information. Learn how to prepare your content for AI-driven search and ensure your brand gets cited, summarized, and recommended by top AI models."
    >
      <VerticalFeatureRow
        title="Make Your Content Understandable for AI Models"
        description="Traditional SEO targets human searches. LLM GEO ensures AI models can read, summarize, and cite your content. Learn how to structure your content, add schema markup, and make your pages AI-friendly — so your brand gets recognized across generative platforms."
        image="/assets/images/feature.svg"
        imageAlt="First feature alt text"
      />
      <VerticalFeatureRow
        title="Measure AI Citations & Brand Authority"
        description="LLM GEO isn’t just about content — it’s about earning trust and citations in the AI ecosystem. Discover how to monitor AI mentions, leverage trusted platforms, and benchmark your brand against competitors to maximize your influence."
        image="/assets/images/feature2.svg"
        imageAlt="Second feature alt text"
        reverse
      />
      <VerticalFeatureRow
        title="Stay Ahead in the AI Search Revolution"
        description="While others focus on Google, LLM GEO prepares your brand for ChatGPT, Gemini, Claude, and other generative engines. Discover actionable strategies to align your content, entity layer, and structured data — giving your brand a winning edge in AI-driven discovery."
        image="/assets/images/feature3.svg"
        imageAlt="Third feature alt text"
      />
    </Section>
    <Banner />
    <Footer />
  </div>
);

export default Base;
