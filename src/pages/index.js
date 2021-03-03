import * as React from "react";
import { graphql } from "gatsby";
import DecryptComponent from "../components/decryptComponent";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif"
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320
};
const headingAccentStyles = {
  color: "#663399"
};
const paragraphStyles = {
  marginBottom: 48
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0
};
const listItemStyles = {
  fontWeight: "300",
  fontSize: "24px",
  maxWidth: "560px"
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: "16px",
  verticalAlign: "5%"
};

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24
};

const descriptionStyle = {
  color: "#232129",
  fontSize: "14px"
};

// markup
const IndexPage = ({ data }) => {
  const {
    allContentJson: { nodes }
  } = data;
  return (
    <main style={pageStyles}>
      <title>Welcome</title>
      {nodes.map(entry => (
        <div key={entry.id}>
          <h1 style={headingStyles}>
            <DecryptComponent data={entry.heading} />
          </h1>
          <h3>
            <DecryptComponent data={entry.content} />
          </h3>
        </div>
      ))}
    </main>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    allContentJson {
      nodes {
        heading
        content
        id
      }
    }
  }
`;
