import "../styles/globals.css";

// Importing Components
import { Header, Footer, PageTransition } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div className="h-fit w-full overflow-x-hidden">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </div>
  );
}

export default MyApp;
