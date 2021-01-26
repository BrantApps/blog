import raw from "raw.macro"
import React from "react"
import { useParams } from "react-router-dom"
import { useMarkdownFetcher } from "../../shared/fetchMarkdown"
import Document from "../../shared/Document"

const debugWhatsNew = raw("./markdown/whats-new-android.md")

export default function WhatsNewAndroid() {
  const {id} = useParams<{id: string}>()
  const whatsNew = useMarkdownFetcher("features/projects/oceanlife/markdown", id, debugWhatsNew)

  return <Document document={whatsNew} />
}
