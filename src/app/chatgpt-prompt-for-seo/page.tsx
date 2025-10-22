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
      title="Chatgpt Prompt for SEO"
      description="Get your website ranking faster with practical SEO tips. Designed for business owners, bloggers, and marketers who want quick results without deep technical expertise."
    />
    <Hero
      title={'Chatgpt Prompt for SEO'}
      subtitle={'Boost Your SEO with Proven ChatGPT Workflows'}
      buttonText={'Download Your Free Ebook'}
      buttonIcon={<Download size={24} color="#ffffff" />}
      description="Learn step-by-step workflows to supercharge your SEO content creation using AI, from keyword research to content optimization and client reporting."
      imageUrl="/assets/images/chatgpt-prompt-seo.png"
      imageWidth={450}
      imageHeight={600}
      listID="35"
      tag="chatgpt_prompt_seo_giveaway"
    />
    <Sponsors />
    <Section
      title="Supercharge Your SEO with AI Workflows"
      description="This guide walks you through proven ChatGPT-powered SEO processes, helping you save time, improve rankings, and create content that converts."
    >
      <VerticalFeatureRow
        title="Generate SEO Content Effortlessly"
        description="Use ready-to-go ChatGPT prompts to create high-quality SEO content in minutes, saving time and effort."
        image="/assets/images/feature.svg"
        imageAlt="Paper coming out of laptop representing on-page SEO optimization"
      />

      <VerticalFeatureRow
        title="Boost Your Rankings"
        description="Leverage prompts designed to optimize your content for search engines and track improvements in traffic and engagement."
        image="/assets/images/feature2.svg"
        imageAlt="Progress chart with woman stepping up and dollar sign symbolizing SEO growth"
        reverse
      />

      <VerticalFeatureRow
        title="Achieve SEO Success Faster"
        description="Unlock the full potential of AI-assisted SEO with proven prompts that drive results and give you a competitive edge."
        image="/assets/images/feature3.svg"
        imageAlt="Boost icon with winning cup representing SEO success"
      />
    </Section>
    <Banner />
    <Footer />
  </div>
);

export default Base;
