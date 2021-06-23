import React from "react"
import { graphql } from "gatsby"

export default function Page({ data }) {
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}

export const query = graphql`
  query GetPage($id: String) {
    wpPage(id: { eq: $id }) {
      __typename
      id
      databaseId
      title
      slug
      uri
      status
      content
    }
  }
`
