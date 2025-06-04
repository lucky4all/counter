import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Main } from './App'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Main></Main>
  </StrictMode>
)