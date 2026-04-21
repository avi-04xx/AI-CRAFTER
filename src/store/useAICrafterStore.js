import { create } from 'zustand'

const starterCode = `export default function App() {
  return (
    <main style={{ padding: "2rem", fontFamily: "Inter, sans-serif" }}>
      <h1>ReactAICrafter</h1>
      <p>Your generated component will appear here.</p>
    </main>
  );
}`

export const useAICrafterStore = create((set) => ({
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
