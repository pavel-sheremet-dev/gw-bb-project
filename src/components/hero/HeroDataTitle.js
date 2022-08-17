import * as React from 'react';

const HeroDataTitle = ({ heroTitle }) => {
  return (
    <>
      <h3 className="mb-4 text-lg leading-6">{heroTitle.supTitle}</h3>
      <h1 className="font-bold text-5xl leading-[58px] mb-2">
        {heroTitle.title}
      </h1>
      <p className="mb-16 text-[32px] leading-9">{heroTitle.subTitle}</p>
    </>
  );
};
export default HeroDataTitle;
