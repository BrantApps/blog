import raw from "raw.macro"
import React from "react"
import { useParams } from "react-router-dom"
import { useMarkdownFetcher } from "../shared/fetchMarkdown"
import Document from "../shared/Document"

const debugPrivacyPolicy = raw("./markdown/terms-and-conditions.md")

export default function TermsAndConditions() {
  const {id} = useParams<{id: string}>()
  const termsAndConditions = useMarkdownFetcher("features/legal/markdown", id, debugPrivacyPolicy)

  return <Document document={termsAndConditions} />
}
