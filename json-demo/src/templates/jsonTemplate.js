import React from "react"
import Layout from "../components/layout"

export default function Template({ pageContext }) {
  const page = pageContext.page.node
  return (
    <Layout>
      <div className="">
        <h2 className="">{page.title}</h2>
        <h4 className="">{page.description}</h4>
        <div className="">{page.content}</div>
      </div>
    </Layout>
  )
}
