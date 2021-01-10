import { useStaticQuery, graphql } from "gatsby";

const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query siteData {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
          lang
          image
          favicon {
            ico
            sm
            lg
          }
          twitterUsername
          keywords
        }
      }
    }
  `);
  return site.siteMetadata;
};

export default useSiteMetadata;
