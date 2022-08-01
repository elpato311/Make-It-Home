import Header from "./Header";
import Wall from "./Wall";
import Footer from "./Footer";
export default function Layout(props) {
    return (
        <>
            <Header />
            <Wall/>
            {props.children}
            <Footer />
        </>
    )
}