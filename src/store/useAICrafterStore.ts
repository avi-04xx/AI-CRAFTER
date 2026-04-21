import { create } from 'zustand'

type AICrafterState = {
  prompt: string
  improvePrompt: string
  generatedCode: string
  statusMessage: string
  isLoading: boolean
  setPrompt: (value: string) => void
  setImprovePrompt: (value: string) => void
  setGeneratedCode: (value: string) => void
  setStatusMessage: (value: string) => void
  setIsLoading: (value: boolean) => void
}

const starterCode = `export default function App() {
  return (
    <main style={{ padding: "2rem", fontFamily: "Inter, sans-serif" }}>
      <h1>ReactAICrafter</h1>
      <p>Your generated component will appear here.</p>
    </main>
  );
}`

export const useAICrafterStore = create<AICrafterState>((set) => ({
  prompt: '',
  improvePrompt: '',
  generatedCode: starterCode,
  statusMessage: 'Offline AI mode ready. Enter a prompt and click Generate Component.',
  isLoading: false,
  setPrompt: (value) => set({ prompt: value }),
  setImprovePrompt: (value) => set({ improvePrompt: value }),
  setGeneratedCode: (value) => set({ generatedCode: value }),
  setStatusMessage: (value) => set({ statusMessage: value }),
  setIsLoading: (value) => set({ isLoading: value }),
}))
