import raw from "raw.macro"
import React from "react"
import { useParams } from "react-router-dom"
import { useMarkdownFetcher } from "../shared/fetchMarkdown"
import Document from "../shared/Document"

const draftPost = raw("./markdown/draft.md")

export default function Post() {
  const {id} = useParams<{id: string}>()
  const post = useMarkdownFetcher("features/posts/markdown", id, draftPost)
  return <Document document={post} />
}
