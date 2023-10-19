import Navbar from './Navbar';
import Footer from './Footer';
import {ReactNode} from "react";

const Layout = ({ children }: { children: ReactNode }) => {
    const stockVh = "85vh";

    return (
        <div>
            <Navbar/>
            <main style={{minHeight: stockVh}}>
                {children}
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;
