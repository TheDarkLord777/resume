import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from "@layout/Layout.tsx";
import "./index.css"

const root=document.getElementById('root')

ReactDOM.createRoot(root!).render(
	<React.StrictMode>
		<Layout/>
	</React.StrictMode>,
)
