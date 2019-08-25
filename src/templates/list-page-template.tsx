import React, { useState } from "react";
import Search from "../components/search";
import ListItem from "../components/list-item";
import ListLayout from "../components/list-layout";

const ListPageTemplate = ({ pageContext, children, location }) => {
  const [filter, setFilter] = useState("");
  const {
    data,
    pageTitle,
    pageDescription,
    pageKeywords,
    lastModifiedDate,
  } = pageContext;

  const filteredData = data.filter(item => {
    const title = item.title ? item.title.toLowerCase() : "";
    const description = item.description ? item.description.toLowerCase() : "";
    const tags = item.tags.join(" ").toLowerCase();
    const allSearchableText = `${title} ${description} ${tags}`;
    if (allSearchableText.includes(filter.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <ListLayout
      title={pageTitle}
      keywords={pageKeywords}
      description={pageDescription}
      lastUpdatedDate={lastModifiedDate}
      pathname={location.pathname}
    >
      <div>
        <Search onChange={value => setFilter(value)} />
        <small
          css={`
            padding-left: 10px;
          `}
        >
          Showing {filteredData.length} of {pageContext.data.length}
        </small>

        {filteredData.map(item => {
          return (
            <ListItem
              key={item.title}
              title={item.title}
              description={item.description}
              thumbnail={item.thumbnail}
              url={item.url}
              tags={item.tags}
              isSmallImage={pageContext.smallImage}
            />
          );
        })}
        <section>{children}</section>
      </div>
    </ListLayout>
  );
};

export default ListPageTemplate;
