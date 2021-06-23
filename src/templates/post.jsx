import React from "react"
import { graphql } from "gatsby"

export default function Post({ data }) {
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}

export const query = graphql`
  query GetPost($id: String) {
    wpPost(id: { eq: $id }) {
      __typename
      id
      databaseId
      title
      slug
      uri
      status
      date
      content
    }
  }
`
