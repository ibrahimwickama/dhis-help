import { Injectable } from '@angular/core';

@Injectable()
export class CoreAppsService {

  constructor() { }

  getCoreApps(){

    let coreApps = [
      {
      name: "Pivot Table",
      appType: "APP",
      appStorageSource: "JCLOUDS",

      description: "Pivot Table",
      icons: {
        16: "favicon.ico",
        48: "favicon.ico",
        128: "favicon.ico"
      },
        key: "Pivot-Table",
      launchUrl: "../../../dhis-web-pivot/",
      default_locale: "en"
    },

      {
        name: "Data Entry",
        appType: "APP",
        appStorageSource: "JCLOUDS",
        description: "Data Entry App",
        icons: {
          16: "favicon.ico",
          48: "favicon.ico",
          128: "favicon.ico"
        },

        launchUrl: "../../../dhis-web-dataentry/index.action",
        key: "Data-Entry",
        default_locale: "en"
      },

      {

        name: "Data Visualizer",
        appType: "APP",
        appStorageSource: "JCLOUDS",
        description: "Data Visualizer",
        icons: {
          16: "favicon.ico",
          48: "favicon.ico",
          128: "favicon.ico"
        },

        launchUrl: "../../..//dhis-web-visualizer/index.html",
        key: "Data-Visualizer",
        default_locale: "en"
      },

      {

        name: "Event Capture",
        appType: "APP",
        appStorageSource: "JCLOUDS",
        description: "Event Capture",
        icons: {
          16: "favicon.ico",
          48: "favicon.ico",
          128: "favicon.ico"
        },
        launchUrl: "../../../dhis-web-event-capture/index.html",
        key: "Event-Capture",
        default_locale: "en"
      },

      {
        name: "Reports",
        appType: "APP",
        appStorageSource: "JCLOUDS",
        description: "Reports",
        icons: {
          16: "favicon.ico",
          48: "favicon.ico",
          128: "favicon.ico"
        },
        launchUrl: "../../../dhis-web-reporting/index.action",
        key: "Reports",
        default_locale: "en"
      },

      {
        name: "Tracker Capture",
        appType: "APP",
        appStorageSource: "JCLOUDS",
        description: "Tracker Capture",
        icons: {
          16: "favicon.ico",
          48: "favicon.ico",
          128: "favicon.ico"
        },

        launchUrl: "../../../dhis-web-tracker-capture/index.html",
        key: "Tracker-Capture",
        default_locale: "en"
      },
      //
      // {
      //   version: "1.0.0",
      //   name: "Interactive Archive",
      //   appType: "APP",
      //   appStorageSource: "JCLOUDS",
      //   folderName: "Interactive-Archive",
      //   description: "Interactive archive",
      //   icons: {
      //     16: "favicon.ico",
      //     48: "favicon.ico",
      //     128: "favicon.ico"
      //   },
      //   developer: {
      //     url: "https://hisptanzania.org",
      //     name: "HISPTZ"
      //   },
      //   activities: {
      //     dhis: {
      //       href: "../../.."
      //     }
      //   },
      //   launchUrl: "https://play.dhis2.org/demo/api/apps/Interactive-Archive/index.html",
      //   key: "Interactive-Archive",
      //   launch_path: "index.html",
      //   default_locale: "en"
      // },
      //
      // {
      //   version: "1.0.0",
      //   name: "Interactive Archive",
      //   appType: "APP",
      //   appStorageSource: "JCLOUDS",
      //   folderName: "Interactive-Archive",
      //   description: "Interactive archive",
      //   icons: {
      //     16: "favicon.ico",
      //     48: "favicon.ico",
      //     128: "favicon.ico"
      //   },
      //   developer: {
      //     url: "https://hisptanzania.org",
      //     name: "HISPTZ"
      //   },
      //   activities: {
      //     dhis: {
      //       href: "../../.."
      //     }
      //   },
      //   launchUrl: "https://play.dhis2.org/demo/api/apps/Interactive-Archive/index.html",
      //   key: "Interactive-Archive",
      //   launch_path: "index.html",
      //   default_locale: "en"
      // },
      //
      // {
      //   version: "1.0.0",
      //   name: "Interactive Archive",
      //   appType: "APP",
      //   appStorageSource: "JCLOUDS",
      //   folderName: "Interactive-Archive",
      //   description: "Interactive archive",
      //   icons: {
      //     16: "favicon.ico",
      //     48: "favicon.ico",
      //     128: "favicon.ico"
      //   },
      //   developer: {
      //     url: "https://hisptanzania.org",
      //     name: "HISPTZ"
      //   },
      //   activities: {
      //     dhis: {
      //       href: "../../.."
      //     }
      //   },
      //   launchUrl: "https://play.dhis2.org/demo/api/apps/Interactive-Archive/index.html",
      //   key: "Interactive-Archive",
      //   launch_path: "index.html",
      //   default_locale: "en"
      // },
     ];

    return coreApps;
  }

}
