import App from '../App'
import Home from '../components/pages/Home.page'
import Projects from '../components/pages/Projects.page'
import Contact from '../components/pages/Contact.page'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'projects', element: <Projects /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
])

export default router