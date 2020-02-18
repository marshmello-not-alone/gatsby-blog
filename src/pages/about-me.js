import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="About me" />
    <h1>Hey this is Jiaqi</h1>
    <span>I am a software developer with a Degree in Nuclear Engineering. Here is a little about me...</span>
    <div>
      <ul>
        <li>I lead by example.</li>
        <li>I approach challenges with... 'This will be fun!'.</li>
        <li>I love solving problems and I care about the work I do.</li>
        <li>I get a sense of fulfillment for every feature I build & improve.</li>
        <li>My biggest strength - by far - is the ability of learn fast</li>
      </ul>
    </div>
  </Layout>
)

export default SecondPage
