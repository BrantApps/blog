import raw from "raw.macro"
import React from "react"
import {useMarkdownFetcher} from "../shared/fetchMarkdown"
import Document from "../shared/Document"

const debugPrivacyPolicy = raw("./markdown/privacy-policy.md")

export default function PrivacyPolicy() {
  const privacyPolicy = useMarkdownFetcher(
    "features/legal/markdown",
    "privacy-policy",
    debugPrivacyPolicy,
  )

  return <Document document={privacyPolicy} />
}
