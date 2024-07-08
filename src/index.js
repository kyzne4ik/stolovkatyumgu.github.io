import * as ReactDOMClient from "react-dom/client"
import { MyProvider } from './MyContext'

//import "./tgApp/tgApp.js"
import App from "./App.js"

const root = ReactDOMClient.createRoot(document.getElementById("root"))

root.render(
	<MyProvider>
		<App />
	</MyProvider>
)