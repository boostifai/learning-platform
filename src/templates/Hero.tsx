'use client';

import Link from 'next/link';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import NameEmailDialog from './Dialog';
import { Logo } from './Logo';

const Hero = ({
  title,
  subtitle,
  description,
  buttonText,
  buttonIcon,
  imageUrl,
  imageWidth,
  imageHeight,
  listID,
  tag,
}: {
  title: string;
  subtitle: string;
  description?: string;
  buttonText: string;
  buttonIcon?: React.ReactNode;
  imageUrl?: string;
  imageWidth?: number;
  imageHeight?: number;
  listID?: string;
  tag?: string;
}) => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://www.boostifai.com/get-started-now/">
            <button className="btn-primary px-3 py-1 text-sm">
              Get Free Trial
            </button>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <div className="flex flex-col gap-0 text-left text-5xl">
            <div>{title}</div>
            <span className="text-primary-500">{subtitle}</span>
          </div>
        }
        description={description ?? ''}
        imageUrl={imageUrl}
        imageWidth={imageWidth}
        imageHeight={imageHeight}
        button={
          <NameEmailDialog
            trigger={
              <button className="btn-primary btn-lg btn flex items-center gap-2 px-6 py-3 text-lg">
                <div className="flex items-center gap-2">
                  {buttonIcon}
                  {buttonText || 'Download Your Free Ebook'}
                </div>
              </button>
            }
            listID={listID}
            tag={tag}
          />
        }
      />
    </Section>
  </Background>
);

export { Hero };
