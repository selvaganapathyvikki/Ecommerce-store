import { Provider } from "react-redux";
import { store } from "../app/store";
import "../styles/globals.css";
// import { GoogleProvider as AuthProvider } from "next-auth/providers/google";
import { SessionProvider } from "next-auth/react";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

// const MyApp = ({ Component, pageProps }) => {
//   return (
//     <AuthProvider session={pageProps.session}>
//       <Provider store={store}>
//         <Component {...pageProps} />
//       </Provider>
//     </AuthProvider>
//   );
// };

// export default MyApp;
