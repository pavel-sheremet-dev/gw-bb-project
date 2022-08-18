import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import MyFormulaList from './MyFormulaList';
import Section from '../reusable/Section';
import Container from '../reusable/Container';

const MyFormulaSection = () => {
  const { t } = useTranslation();
  const myFormula = t('myFormula', {
    returnObjects: true,
  });

  return (
    <Section>
      {/* <Container className="-px-20"> */}
      <div className="bg-orange-300 mx-auto my-0 h-full pt-[124px] pb-[64px] px-[190px] text-slate-50 lg:w-[1440px]">
        <h2 className="mb-14 text-center">{myFormula.title}</h2>
        <MyFormulaList data={myFormula} />
      </div>
      {/* </Container> */}
    </Section>
  );
};

export default MyFormulaSection;
