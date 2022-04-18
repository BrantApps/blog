import raw from "raw.macro"
import React from "react"
import {useMarkdownFetcher} from "../shared/fetchMarkdown"
import Document from "../shared/Document"

const debugPrivacyPolicy = raw("./markdown/terms-and-conditions.md")

export default function TermsAndConditions() {
  const termsAndConditions = useMarkdownFetcher(
    "features/legal/markdown",
    "terms-and-conditions",
    debugPrivacyPolicy,
  )

  return <Document document={termsAndConditions} />
}
