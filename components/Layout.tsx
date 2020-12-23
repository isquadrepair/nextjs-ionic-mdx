import React, { Children } from "react";
import ExploreContainer from "./ExploreContainer";
import Menu from "./Menu";

export default ({ children, pageName }) => (
  <>
    <ion-split-pane content-id="main">
      <Menu />
      <ion-content id="main">
        <ion-header>
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-menu-button></ion-menu-button>
            </ion-buttons>
            <ion-title>{pageName}</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">{pageName}</ion-title>
          </ion-toolbar>
        </ion-header>
        <ExploreContainer name={pageName} />

        {children}
      </ion-content>
    </ion-split-pane>
  </>
);
