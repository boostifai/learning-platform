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
      title="Nano Banana Blog Image Guide"
      description="Learn how to create stunning blog images with our comprehensive guide."
    />
    <Hero
      title={'Nano Banana Blog Image Guide'}
      subtitle={''}
      buttonText={'Get Your Free Guide'}
      buttonIcon={<ExternalLink size={24} color="#ffffff" />}
      description="Discover the secrets to crafting captivating blog images that enhance your content and attract readers."
      imageUrl="/assets/images/nano-banana-image-blog-guide.png"
      imageWidth={450}
      imageHeight={336}
      listID="33"
      tag="nano_banana_blog_image_giveaway"
    />
    <Sponsors />
    <Section
      title="Create Stunning Blog Visuals with Nano Banana"
      description="Transform your ideas into AI-generated visuals that engage, inform, and inspire. Learn how to craft powerful prompts that make your blog posts more attractive, consistent, and share-worthy — all with the Nano Banana Guide."
    >
      <VerticalFeatureRow
        title="Create Blog Images That Practically Design Themselves"
        description="Your ideas deserve visuals that stand out. Nano Banana helps you turn any topic into clear, AI-ready prompts that generate professional blog images in seconds. Follow simple formulas to get relevant, engaging visuals that align perfectly with your content."
        image="/assets/images/feature.svg"
        imageAlt="First feature alt text"
      />
      <VerticalFeatureRow
        title="Boost Engagement & Grow Your Content Value"
        description="Well-crafted visuals attract more clicks, shares, and conversions. Learn how to write prompts that enhance your blog’s storytelling — from headers to infographics — and watch your content performance climb."
        image="/assets/images/feature2.svg"
        imageAlt="Second feature alt text"
        reverse
      />
      <VerticalFeatureRow
        title="Win the Visual Game With AI-Driven Consistency"
        description="Keep your brand visuals consistent and memorable across every post. Use Nano Banana’s structured prompt templates and style guides to create a cohesive look that stands out — faster than ever."
        image="/assets/images/feature3.svg"
        imageAlt="Third feature alt text"
      />
    </Section>
    <Banner />
    <Footer />
  </div>
);

export default Base;
