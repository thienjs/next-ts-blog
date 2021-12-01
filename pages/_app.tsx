import { AppProps } from 'next/app'
import "@/css/tailwind.css";
import "@/css/font.css";
import { ThemeProvider } from "next-themes";
import Layout from "@/components/layout";
import ThemeSwitch from '@/components/themeswitch';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <Layout>
       <Component {...pageProps} />
      </Layout>
      
    </ThemeProvider>
  );
}

export default MyApp;
