import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
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
);

export { VerticalFeatures };
