import { AppProps } from 'next/app'
import "@/css/tailwind.css";
import '../styles/index.css'
import { ThemeProvider } from "next-themes";
import ThemeSwitch from '@/components/themeswitch';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
