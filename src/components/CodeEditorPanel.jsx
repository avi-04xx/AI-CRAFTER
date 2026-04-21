import { useAICrafterStore } from '../store/useAICrafterStore'

export function CodeEditorPanel() {
  const { generatedCode, setGeneratedCode } = useAICrafterStore()

  return (
    <section className="card">
      <h2>Code Editor</h2>
      <textarea
        className="codeArea"
        value={generatedCode}
        onChange={(event) => setGeneratedCode(event.target.value)}
        rows={20}
      />
    </section>
  )
}
