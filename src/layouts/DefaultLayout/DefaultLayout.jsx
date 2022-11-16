import Header from '~/layouts/components/Header/Header';
import Footer from '~/layouts/components/Footer/Footer';

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

export default DefaultLayout;
