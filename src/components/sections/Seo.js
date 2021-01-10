import React from "react";
import { Helmet } from "react-helmet";

//graphql
import useSiteMetadata from "../grapqlQueries/useSiteMetadata";

export default function Seo({ description, keywords, title, pathname, image }) {
  const metaData = useSiteMetadata();
  const metaDescription = description || metaData.description;
  const canonical = pathname ? `${metaData.siteUrl}${pathname}` : null;
  const metaImage =
    image && image.src ? `${metaData.siteUrl}${image.src}` : metaData.image;
  const metaKeywords = keywords
    ? [metaData.keywords, ...keywords]
    : metaData.keywords;
  return (
    <Helmet
      title={title}
      link={canonical ? [{ rel: "canonical", href: canonical }] : []}
    >
      <html lang={metaData.lang}></html>
      <meta name="description" content={metaDescription}></meta>
      <meta name="image" content={metaImage}></meta>
      <meta name="image:alt" content={metaDescription}></meta>
      <meta name="keywords" content={metaKeywords.join(", ")}></meta>
      <link
        rel="icon"
        type="image/png"
        size="16x16"
        href={`${metaData.siteUrl}/${metaData.favicon.ico}`}
      ></link>
      <link
        rel="icon"
        type="image/png"
        size="16x16"
        href={`${metaData.siteUrl}/${metaData.favicon.sm}`}
      ></link>
      <link
        rel="icon"
        type="image/png"
        size="32x32"
        href={`${metaData.siteUrl}/${metaData.favicon.lg}`}
      ></link>
      <meta name="author" content={metaData.author}></meta>
      {/* FaceBook */}
      <meta property="og:type" content="website"></meta>
      <meta property="og:title" content={title}></meta>
      <meta property="og:url" content={canonical}></meta>
      <meta property="og:description" content={metaDescription}></meta>
      <meta property="og:image" content={metaImage}></meta>
      <meta property="og:image:alt" content={metaDescription}></meta>
      <meta property="og:image:width" content={metaImage.width}></meta>
      <meta property="og:image:height" content={metaImage.height}></meta>

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:title" content={title}></meta>
      <meta name="twitter:url" content={canonical}></meta>
      <meta name="twitter:description" content={metaDescription}></meta>
      <meta name="twitter:image" content={metaImage}></meta>
      <meta name="twitter:image:alt" content={metaDescription}></meta>
    </Helmet>
  );
}
