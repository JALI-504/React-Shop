import { ProvideAuth } from "hooks/useAuth";
import "@styles/tailwind.css";
import MainLayout from "@layout/MainLayout";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <ProvideAuth>
      <MainLayout>
        <Component {...pageProps} />;
      </MainLayout>
    </ProvideAuth>
    </>
  );
}

export default MyApp;
