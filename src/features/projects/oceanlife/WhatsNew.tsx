import raw from "raw.macro"
import React from "react"
import {useMarkdownFetcher} from "../../shared/fetchMarkdown"
import Document from "../../shared/Document"

const debugWhatsNew = raw("./markdown/whats-new-android.md")

export default function WhatsNewAndroid() {
  const whatsNew = useMarkdownFetcher(
    "features/projects/oceanlife/markdown",
    "whats-new-android",
    debugWhatsNew,
  )

  return <Document document={whatsNew} />
}
