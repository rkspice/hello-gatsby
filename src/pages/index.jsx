import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <p>I'm making this by following the Gatsby Tutorial lulz.</p>
        <StaticImage
          alt="This is Saki, a small black cat, sleeping on a DENON AVR-1600 home theater receiver to get warm."
          src="../images/StereoSaki.jpg"
        />
        <StaticImage
          alt="This is Lala, right side, a gray tabby cat, the voice actor for the feline protagonist, left side, an orange tabby cat, in the video game Stray."
          src="https://static1.srcdn.com/wordpress/wp-content/uploads/2022/07/Stray-Cat-Lala-Voice-Actor.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5"
        />
      </Layout>
    </main>
  )
};

export const Head = () => <Seo title="Home Page" />

export default IndexPage;