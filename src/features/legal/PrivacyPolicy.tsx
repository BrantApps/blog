import raw from "raw.macro"
import React from "react"
import { useParams } from "react-router-dom"
import { useMarkdownFetcher } from "../shared/fetchMarkdown"
import Document from "../shared/Document"

const debugPrivacyPolicy = raw("./markdown/privacy-policy.md")

export default function PrivacyPolicy() {
  const {id} = useParams<{id: string}>()
  const privacyPolicy = useMarkdownFetcher("features/legal/markdown", id, debugPrivacyPolicy)

  return <Document document={privacyPolicy} />
}
