import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }}/>
      </div>
    </Layout>
  )
}
//note: set all html value inside this div

/*match this field on our markdown remark where the slug is equivalent to this slug string that we passed in
from parameter
*/
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: { eq: $slug }}){
      html
      frontmatter {
        title
      }
    }
  }
`