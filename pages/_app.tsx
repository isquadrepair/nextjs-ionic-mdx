import React, { useEffect } from "react";
import {
  defineCustomElements as ionDefineCustomElements,
  applyPolyfills as ionApplyPolyfills,
} from "@ionic/core/loader";
import {
  defineCustomElements as ioniconsDefineCustomElements,
  applyPolyfills as ioniconsApplyPolyfills,
} from "ionicons/dist/loader";

/* Core CSS required for Ionic components to work properly */
import "@ionic/core/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/core/css/normalize.css";
import "@ionic/core/css/structure.css";
import "@ionic/core/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/core/css/padding.css";
import "@ionic/core/css/float-elements.css";
import "@ionic/core/css/text-alignment.css";
import "@ionic/core/css/text-transformation.css";
import "@ionic/core/css/flex-utils.css";
import "@ionic/core/css/display.css";

import "../styles/globals.css";
import "../styles/Menu.css";
import "../styles/ExploreContainer.css";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  console.log(pageProps);
  useEffect(() => {
    const applCustomElements = async () => {
      await ionApplyPolyfills();
      await ionDefineCustomElements(window, { resourcesUrl: "static/svg" });
      await ioniconsApplyPolyfills();
      await ioniconsDefineCustomElements(window);
    };
    applCustomElements();
  }, []);
  return (
    <ion-app>
      <Component {...pageProps} />
    </ion-app>
  );
}

export default MyApp;
