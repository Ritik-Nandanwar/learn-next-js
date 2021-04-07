import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
const Layout = ({children}) => {
    return ( 
        <>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        </>
     );
}
 
export default Layout;