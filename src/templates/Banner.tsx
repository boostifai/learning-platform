import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Let Boostifai Help You Win the AI Search Game"
      subtitle="Start your Free Trial."
      button={
        <Link href="https://www.boostifai.com/get-started-now/">
          <Button>Start free trial</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
