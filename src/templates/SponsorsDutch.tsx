import Image from 'next/image';

import { Section } from '@/layout/Section';

const SponsorsDutch = () => (
  <Section
    title="Onze Klanten"
    description="Enkele van de geweldige bedrijven die ons product gebruiken."
  >
    <table className="mx-auto border-collapse">
      <tbody>
        <tr className="h-56">
          <td className="border-2 border-gray-300 p-3">
            <Image
              src="/assets/images/client1.webp"
              alt="Clerk – Authentication & User Management for Next.js"
              width={260}
              height={224}
            />
          </td>
          <td className="border-2 border-gray-300 p-3">
            <Image
              src="/assets/images/client2.webp"
              alt="CodeRabbit"
              width={260}
              height={224}
            />
          </td>
          <td className="border-2 border-gray-300 p-3">
            <Image
              src="/assets/images/client3.webp"
              alt="Sentry"
              width={260}
              height={224}
            />
          </td>
        </tr>
        <tr className="h-56">
          <td className="border-2 border-gray-300 p-3">
            <Image
              src="/assets/images/client4.png"
              alt="Arcjet"
              width={260}
              height={224}
            />
          </td>
          <td className="border-2 border-gray-300 p-3">
            <Image
              src="/assets/images/client5.png"
              alt="Better Stack"
              width={260}
              height={224}
            />
          </td>
          <td className="border-2 border-gray-300 p-3">
            <Image
              src="/assets/images/client6.png"
              alt="Next.js Boilerplate SaaS"
              width={260}
              height={224}
            />
          </td>
        </tr>
      </tbody>
    </table>
  </Section>
);

export { SponsorsDutch };
