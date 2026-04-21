import { Sandpack } from '@codesandbox/sandpack-react'
import { useAICrafterStore } from '../store/useAICrafterStore'

export function LivePreview() {
  const { generatedCode } = useAICrafterStore()

  return (
    <section className="card">
      <h2>Live Sandbox Preview</h2>
      <Sandpack
        template="react"
        files={{
          '/App.jsx': generatedCode,
        }}
        options={{
          editorHeight: 420,
          showNavigator: false,
          showTabs: false,
        }}
      />
    </section>
  )
}
