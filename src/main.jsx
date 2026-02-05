import React from 'react'
import ReactDOM from 'react-dom/client'
import ActivityWidget from './components/ActivityWidget'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <div className="min-h-screen bg-black flex items-center justify-center p-4">
            <ActivityWidget />
        </div>
    </React.StrictMode>,
)
