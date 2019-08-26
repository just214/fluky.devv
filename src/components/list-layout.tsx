import React from "react";
import { Link } from "gatsby";
import BackToTop from "./back-to-top";
import Layout from "./layout";
import TitleBox from "./title-box";

type ListLayoutProps = {
  title: string;
  keywords: string[];
  description: string;
  lastUpdatedDate?: string;
  type?: string;
  pathname: string;
};
const ListLayout: React.FC<ListLayoutProps> = props => {
  const {
    title,
    keywords,
    description,
    lastUpdatedDate,
    children,
    pathname,
  } = props;

  return (
    <Layout title={title} keywords={keywords} description={description}>
      <BackToTop />

      <div
        css={`
          margin-bottom: 200px;
        `}
      >
        <TitleBox
          title={title}
          subTitle={description}
          lastUpdated={lastUpdatedDate}
        >
          <Link to="/contact" state={{ pathname, title }}>
            Suggestion?
          </Link>
        </TitleBox>

        <br />
        {children}
      </div>
    </Layout>
  );
};

export default ListLayout;
