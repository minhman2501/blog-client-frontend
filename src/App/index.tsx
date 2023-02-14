import Layout from '@/layout/Layout'
import LoginPage from '@/pages/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LOGIN, HOME } from '@/configs/constant'
import HomePage from '@/pages/Home'
import ErrorPage from '@/pages/Error'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route
                        path={LOGIN}
                        element={<LoginPage />}
                    />
                    <Route
                        path={HOME}
                        element={
                            <Layout>
                                <HomePage />
                            </Layout>
                        }
                    />
                    <Route
                        path="*"
                        element={<ErrorPage />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
