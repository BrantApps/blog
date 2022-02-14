import raw from "raw.macro"
import {useEffect, useState} from "react"
import staticConfig from "../../config"

const fourofour = raw("./markdown/draft.md")

export function useMarkdownFetcher(
  path: string,
  id: string,
  debugDocumentPath?: string,
) {
  const [document, setDocument] = useState<string>()
  useEffect(() => {
    async function fetchMarkdown() {
      if (staticConfig.debug) {
        setDocument(debugDocumentPath)
      } else {
        const postResponse = await fetch(
          `https://raw.githubusercontent.com/BrantApps/blog/master/src/${path}/${id}.md`,
        )
        if (postResponse.status === 200) {
          const text = await postResponse.text()
          setDocument(text)
        } else {
          setDocument(fourofour)
        }
      }
    }

    fetchMarkdown()
  }, [path, id, debugDocumentPath])

  return document
}
