import React from "react";
import { useRouter } from "next/router";
import {
  archiveOutline,
  archiveSharp,
  bookmarkOutline,
  heartOutline,
  heartSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  trashOutline,
  trashSharp,
  warningOutline,
  warningSharp,
} from "ionicons/icons";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "Inbox",
    url: "/page/Inbox",
    iosIcon: mailOutline,
    mdIcon: mailSharp,
  },
  {
    title: "Outbox",
    url: "/page/Outbox",
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp,
  },
  {
    title: "Favorites",
    url: "/page/Favorites",
    iosIcon: heartOutline,
    mdIcon: heartSharp,
  },
  {
    title: "Archived",
    url: "/page/Archived",
    iosIcon: archiveOutline,
    mdIcon: archiveSharp,
  },
  {
    title: "Trash",
    url: "/page/Trash",
    iosIcon: trashOutline,
    mdIcon: trashSharp,
  },
  {
    title: "Spam",
    url: "/page/Spam",
    iosIcon: warningOutline,
    mdIcon: warningSharp,
  },
];

const labels = ["Family", "Friends", "Notes", "Work", "Travel", "Reminders"];

const Menu: React.FC = () => {
  const location = useRouter();

  return (
    <ion-menu content-id="main" type="overlay" side="start">
      <ion-content>
        <ion-list id="inbox-list">
          <ion-list-header>Inbox</ion-list-header>
          <ion-note>hi@ionicframework.com</ion-note>
          {appPages.map((appPage, index) => {
            return (
              <ion-menu-toggle key={index} auto-hide={false}>
                <ion-item
                  class={location.pathname === appPage.url ? "selected" : ""}
                  href={appPage.url}
                  router-direction="root"
                  lines="none"
                  detail={false}
                >
                  <ion-icon
                    slot="start"
                    icon={appPage.iosIcon}
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <ion-label>{appPage.title}</ion-label>
                </ion-item>
              </ion-menu-toggle>
            );
          })}
        </ion-list>

        <ion-list id="labels-list">
          <ion-list-header>Labels</ion-list-header>
          {labels.map((label, index) => (
            <ion-item lines="none" key={index}>
              <ion-icon slot="start" icon={bookmarkOutline} />
              <ion-label>{label}</ion-label>
            </ion-item>
          ))}
        </ion-list>
      </ion-content>
    </ion-menu>
  );
};

export default Menu;
