import Head from "next/head";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
}

const SEO = ({
  title = "Abdalla Emad | Full Stack Developer",
  description = "Abdalla Emad is a professional Full Stack Developer specializing in building modern, high-performance web applications using React, Next.js, and Three.js.",
  keywords = "Full Stack Developer, Web Development, React, Next.js, Portfolio, Abdalla Emad, Mansoura, Egypt, Three.js, GSAP",
  author = "Abdalla Emad",
  ogTitle,
  ogDescription,
  ogImage = "/og-image.jpg",
  ogUrl = "https://abdallaemad.com", // Placeholder
  canonical,
}: SEOProps) => {
  const finalTitle = title;
  const finalDescription = ogDescription || description;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />

      {/* Canonical Link */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={ogTitle || finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={ogUrl} />
      <meta property="twitter:title" content={ogTitle || finalTitle} />
      <meta property="twitter:description" content={finalDescription} />
      <meta property="twitter:image" content={ogImage} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </Head>
  );
};

export default SEO;
