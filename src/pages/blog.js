import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Layout from "../components/Layout";

function BlogPage() {
    const data = useStaticQuery(graphql`
    query {
        allFile {
           nodes{
            name
           }
        }
    }
  `);

    return (
        <Layout pageTitle="My Blog Post">
            <p>My cool posts will go here</p>

            <ul>
                {data.allFile.nodes.map((node) => (
                    <li key={node.name}>{node.name}</li>
                ))}
            </ul>
        </Layout>

    );
};

export default BlogPage;
