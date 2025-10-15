import Image from 'next/image';
import type { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  imageUrl?: string;
  imageWidth?: number;
  imageHeight?: number;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  // <header className="text-center">
  //   <div className="grid grid-cols-2 items-center justify-center gap-10 md:flex-row">
  //     <Image
  //       src={props.imageUrl ?? '/placeholder.png'}
  //       alt="Hero Image"
  //       width={props.imageWidth ?? 372}
  //       height={props.imageHeight ?? 581}
  //     />
  //     <div className="relative -top-10">
  //       <h1 className="whitespace-pre-line text-5xl font-bold leading-hero text-gray-900">
  //         {props.title}
  //       </h1>
  //       <div className="mb-8 mt-4 text-left text-2xl">{props.description}</div>
  //       {props.button}
  //     </div>
  //   </div>
  // </header>
  <header className="text-center">
    <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-16">
      <div className="w-full max-w-xs shrink-0 md:max-w-sm lg:max-w-md">
        <Image
          src={props.imageUrl ?? '/placeholder.png'}
          alt="Hero Image"
          width={props.imageWidth ?? 372}
          height={props.imageHeight ?? 581}
          className="h-auto w-full"
        />
      </div>

      <div className="relative -top-5 flex-1 text-center md:-top-5 md:text-left">
        <h1 className="whitespace-pre-line text-3xl font-bold leading-[1.33] text-gray-900 md:text-4xl lg:text-5xl">
          {props.title}
        </h1>
        <div className="mb-6 mt-4 text-left text-lg md:text-xl lg:text-2xl">
          {props.description}
        </div>
        {props.button}
      </div>
    </div>
  </header>
);

export { HeroOneButton };
