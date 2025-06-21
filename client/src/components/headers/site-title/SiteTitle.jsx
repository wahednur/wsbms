import { Helmet } from "react-helmet-async";

const SiteTitle = ({ title, tagline }) => {
  return (
    <Helmet>
      <title>
        {title} | {tagline ? tagline : "WS Building Management System"}
      </title>
    </Helmet>
  );
};

export default SiteTitle;
