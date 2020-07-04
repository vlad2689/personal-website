import React from "react";

const Link = ({ url, openInNewTab, children }) => {
  const linkProps = Object.assign(
    {},
    {
      href: url,
    },
    openInNewTab
      ? {
          target: "_blank",
          rel: "noopener noreferrer",
        }
      : {}
  );

  return <a {...linkProps}>{children}</a>;
};

export default Link;
