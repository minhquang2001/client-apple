import { Header } from 'src/pages/Manager/components/Navbar';
import Footer from 'src/pages/Manager/components/Footer/Footer';

function LayoutManager({ children }) {
    return (
        <>
            <Header />
            <div>{children}</div>
            <Footer />
        </>
    );
}

export default LayoutManager;
