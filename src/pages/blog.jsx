import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from "../components/layout";
import Seo from "../components/seo";

const pageTitle = "My blog posts";

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle={pageTitle}>
            <ul>
                {
                    data.allMdx.nodes.map(node => (
                        <article key={node.id}>
                            <h2>{node.frontmatter.title}</h2>
                            <p>Posted: {node.frontmatter.date}</p>
                            <p>{node.excerpt}</p>
                        </article>
                    ))
                }
            </ul>
        </Layout>
    );
};

export const query = graphql`
    query {
        allMdx(sort: {frontmatter: {date: DESC}}) {
            nodes {
                frontmatter {
                    date(formatString: "MMMM D, YYYY")
                    title
                }
                id
                excerpt
            }
        }
    }
`;

export const Head = () => <Seo title={pageTitle} />

export default BlogPage;