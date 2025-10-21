import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const BannerDutch = () => (
  <Section>
    <CTABanner
      title="Laat Boostifai je helpen de AI-zoekgame te winnen"
      subtitle="Begin je gratis proefperiode."
      button={
        <Link href="https://www.boostifai.com/get-started-now/">
          <Button>Start gratis proefperiode</Button>
        </Link>
      }
    />
  </Section>
);

export { BannerDutch };
