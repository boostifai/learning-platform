import Image from 'next/image';
import type { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
      <Image
        src="/assets/images/llm-geo-ebook.png"
        alt="Hero Image"
        width={372}
        height={581}
      />
      <div className="relative -top-10">
        <h1 className="whitespace-pre-line text-5xl font-bold leading-hero text-gray-900">
          {props.title}
        </h1>
        <div className="mb-8 mt-4 text-left text-2xl">{props.description}</div>
        {props.button}
      </div>
    </div>
  </header>
);

export { HeroOneButton };
