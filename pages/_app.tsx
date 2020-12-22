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

function MyApp({ Component, pageProps }) {
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
      <ion-header translucent>
        <ion-toolbar>
          <ion-title>Next.js with Ionic</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content fullscreen>
        <Component {...pageProps} />
      </ion-content>
      <ion-footer>
        <ion-toolbar>
          <ion-title>Footer</ion-title>
        </ion-toolbar>
      </ion-footer>
    </ion-app>
  );
}

export default MyApp;
