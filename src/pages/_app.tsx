import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ revalidateOnFocus: false }}>
      <div className="min-h-screen w-full min-w-0 overflow-x-clip">
        <Component {...pageProps} />
      </div>
    </SWRConfig>
  );
}
