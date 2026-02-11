// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom'
// import { HashRouter } from 'react-router-dom'
// import App from './App'
// import './index.css'
// import { ThemeProvider } from "./context/ThemeContext"
// import { SidebarProvider } from "./context/SidebarContext"


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
    
//       <ThemeProvider> 
//       <SidebarProvider>
//         <BrowserRouter>
//           <App />
//         </BrowserRouter>
//       </SidebarProvider> 
//       </ThemeProvider>
     
//   </React.StrictMode>
// )


import React from 'react'
import ReactDOM from 'react-dom/client'

import { HashRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { ThemeProvider } from "./context/ThemeContext"
import { SidebarProvider } from "./context/SidebarContext"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <ThemeProvider> 
      <SidebarProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </SidebarProvider> 
      </ThemeProvider>
     
  </React.StrictMode>
)