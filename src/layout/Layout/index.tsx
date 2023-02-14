import { ReactNode } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import StickyHeader from '../StickyHeader'

interface LayoutProps {
    children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="body">
            <StickyHeader />
            <div className="container">
                <Header />
                <main>{children}</main>
                <Footer />
            </div>
        </div>
    )
}
