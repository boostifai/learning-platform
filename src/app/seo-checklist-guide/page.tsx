import { ExternalLink } from 'lucide-react';

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
      title="SEO Checklist Guide"
      description="Get your website ranking faster with these actionable SEO tips. Designed for business owners, bloggers, and marketers who want quick improvements without deep technical expertise."
    />
    <Hero
      title={'SEO Checklist Guide'}
      subtitle={''}
      buttonText={'Get Your Free Guide'}
      buttonIcon={<ExternalLink size={24} color="#ffffff" />}
      description="Get your website ranking faster with these actionable SEO checklist. Designed for business owners, bloggers, and marketers who want quick improvements without deep technical expertise."
      imageUrl="/assets/images/seo-checklist-guide.png"
      imageWidth={450}
      imageHeight={600}
      listID="34"
      tag="seo_checklist_giveaway"
    />
    <Sponsors />
    <Section
      title="Boost Your Rankings with Actionable SEO Quick Wins"
      description="Follow our step-by-step checklist to improve your website’s SEO performance — from on-page tweaks to content improvements and smart growth strategies. Whether you’re new to SEO or want quick wins, this guide helps you take measurable steps toward better rankings."
    >
      <VerticalFeatureRow
        title="Optimize Your Website Content for Better Visibility"
        description="Just like a paper coming out of a laptop, your website’s content should clearly communicate what you offer. Learn how to write SEO-friendly titles, meta descriptions, and headings that attract both users and search engines. Improve structure, readability, and relevance for quick ranking gains."
        image="/assets/images/feature.svg"
        imageAlt="Paper coming out of laptop representing on-page SEO optimization"
      />

      <VerticalFeatureRow
        title="Drive SEO Growth"
        description="SEO growth takes steady effort. This section helps you focus on measurable improvements such as keyword ranking, traffic trends, and conversion growth. Discover how small optimizations can translate into big performance and revenue gains."
        image="/assets/images/feature2.svg"
        imageAlt="Progress chart with woman stepping up and dollar sign symbolizing SEO growth"
        reverse
      />

      <VerticalFeatureRow
        title="Accelerate Your Success and Maintain SEO Consistency"
        description="Consistency is the key to winning the SEO race. Learn how to sustain your growth through regular updates, smart link building, and monitoring. Apply proven checklists to keep your website performing and your brand ahead of competitors."
        image="/assets/images/feature3.svg"
        imageAlt="Boost icon with winning cup representing SEO success"
      />
    </Section>
    <Banner />
    <Footer />
  </div>
);

export default Base;
