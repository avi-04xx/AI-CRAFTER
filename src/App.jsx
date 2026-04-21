import { CodeEditorPanel } from './components/CodeEditorPanel'
import { LivePreview } from './components/LivePreview'
import { PromptPanel } from './components/PromptPanel'
import { useAICrafterStore } from './store/useAICrafterStore'
import './App.css'

function App() {
  const { statusMessage } = useAICrafterStore()

  return (
    <div className="page">
      <header className="header">
        <h1>ReactAICrafter</h1>
        <p>Frontend-only AI React component generator with live sandbox preview.</p>
      </header>

      <section className="guideCard">
        <h3>How to use (Very Simple)</h3>
        <p>1) Enter prompt like "dashboard with 3 cards". 2) Click Generate. 3) See preview. 4) Write improve text. 5) Click Improve.</p>
        <div className="stepPills">
          <span>Prompt</span>
          <span>Generate</span>
          <span>Preview</span>
          <span>Improve</span>
        </div>
      </section>

      <p className="statusBar">{statusMessage}</p>

      <main className="layout">
        <PromptPanel />
        <CodeEditorPanel />
        <LivePreview />
      </main>
    </div>
  )
}

export default App
