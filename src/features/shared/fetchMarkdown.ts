import {useEffect, useState} from "react"
import staticConfig from "../../config"

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
        const legalResponse = await fetch(
          `https://raw.githubusercontent.com/BrantApps/blog/master/src/${path}/${id}.md`,
        )
        if (legalResponse.status === 200) {
          const text = await legalResponse.text()
          setDocument(text)
        } else {
          setDocument(debugDocumentPath)
        }
      }
    }

    fetchMarkdown()
  }, [path, id, debugDocumentPath])

  return document
}
