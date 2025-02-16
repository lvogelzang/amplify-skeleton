import { ThemeProvider } from "@aws-amplify/ui-react"
import "@aws-amplify/ui-react/styles.css"
import { Amplify } from "aws-amplify"
import React from "react"
import ReactDOM from "react-dom/client"
import outputs from "../amplify_outputs.json"
import App from "./App.tsx"
import theme from "./theme.ts"

Amplify.configure(outputs)

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
)
