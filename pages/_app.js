import Header from "../components/Header";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/util.scss';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
