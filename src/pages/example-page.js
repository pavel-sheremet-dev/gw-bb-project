import React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Layout from 'components/Layout';
import Container from 'components/reusable/Container';
import Seo from 'components/Seo';
import useClientLocation from 'hooks/useClientLocation';

import Slider from 'components/slider/Slider';
import SocialGroup from 'components/reusable/SocialGroup';
import { fullSocial, social } from 'data/social/social';

import Hero from 'components/hero/Hero';
// import { heroTitle, heroDataTitle, heroDataList } from 'data/hero/hero';

const ExamplePage = ({ data, pageContext }) => {
  const { i18n } = useTranslation();
  const mdxContent = data.example.nodes;
  const clientLocation = useClientLocation();

  const images = data.images.nodes;

  // const languageData = pageContext.language;
  // console.log('languageData', languageData);

  console.log(clientLocation);

  return (
    <Layout>
      <section>
        <Container>
          <Link to="/">Go back to the homepage</Link>
          <h1>Second Page</h1>
          <p>Welcome to page 2</p>

          <StaticImage
            src="../images/example.png"
            loading="eager"
            width={64}
            quality={95}
            formats={['auto', 'webp', 'avif']}
            alt=""
          />
          <ul>
            {images.map(item => {
              const imageData =
                item.cloudinaryImg.childImageSharp.gatsbyImageData;
              const imageAlt = item.frontmatter[pageContext.language];
              return (
                <li key={item.id}>
                  <GatsbyImage image={imageData} alt={imageAlt} />
                </li>
              );
            })}
          </ul>

          <ul>
            {mdxContent.map(item => (
              <li key={item.id}>
                <p>{item.frontmatter.date}</p>
                <p>{item.frontmatter.language}</p>
                <p>{item.frontmatter.name}</p>
                <p>{item.frontmatter.charity}</p>
              </li>
            ))}
          </ul>

          <Slider images={images} />
          <Hero
            // data={heroTitle}
            // heroDataTitle={heroDataTitle}
            // heroDataList={heroDataList}
            language={i18n.language}
          >
            <SocialGroup data={fullSocial} language={i18n.language} />
          </Hero>
          <p>Example for form</p>

          <SocialGroup data={social} />
        </Container>
      </section>
    </Layout>
  );
};

export const Head = () => <Seo title="Page two" />;

export const query = graphql`
  query ($language: String!) {
    example: allMdx(
      filter: {
        frontmatter: {
          fieldIdName: { eq: "main" }
          language: { eq: $language }
        }
      }
    ) {
      nodes {
        id
        frontmatter {
          date
          language
          title
          charity
        }
      }
    }
    images: allMdx(
      filter: { frontmatter: { fieldIdName: { eq: "content-image" } } }
    ) {
      nodes {
        cloudinaryImg {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 200)
          }
        }
        frontmatter {
          en
          ru
          uk
        }
        id
      }
    }
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

export default ExamplePage;
