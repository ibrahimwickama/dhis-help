import { Injectable } from '@angular/core';

@Injectable()
export class DhisHelpService {

  constructor() { }

  getDhisHelpUnits(){

    let components = [
      {
        name: "Settings",
        icon: "./assets/icons/settings.png",
        description: "Settings guide gives you clear help on Dhis settings options",
        options:['User general settings',
          'User message settings',
          'System general settings',
          'System appearance settings',
          'System email settings'],
        key: "setting-dhis"
      },

      {
        name: "Data Quality functionalities",
        icon: "./assets/icons/dataquaity.png",
        description: "Data Quality functionalities guide gives you clear help on Data quality in Dhis",
        options:['Running Validation Rule Analysis',
          'Std Dev Outlier Analysis',
          'Min-Max Outlier Analysis',
          'Follow-Up Analysis'],
        key: "data-quality-functionality"
      },

      {
        name: "Import-Export",
        icon: "./assets/icons/importexport.png",
        description: "Settings guide gives you clear help on Dhis settings options",
        options:['Exporting data',
          'Importing data'],
        key: "import-export"
      },

      {
        name: "Datasets and Data entry forms",
        icon: "./assets/icons/dataset.png",
        description: "Datasets and Data entry forms guide gives you more details on Datasets on various forms in data entry",
        options:['Datasets',
          'Dataset management',
          'Adding a new section form custom Forms',
          'Data set assignment editor'],
        key: "datasets-forms"
      },

      {
        name: "Organisation units",
        icon: "./assets/icons/orgunit.png",
        description: "",
        options:['Organisation Unit hierarchy',
          'Organisation units',
          'Editing organisation units',
          'Organisation unit group sets',
          'Editing organisation unit group sets',
          'Organisation unit groups',
          'Editing organisation unit groups',
          'Organisation unit level',
          'Hierarchy operations'],
        key: "organisation-unit"
      },

      {
        name: "About DHIS 2",
        icon: "./assets/icons/aboutdhis.png",
        description: "Learn the story behind DHIS",
        options:['Background of DHIS 2'],
        key: "about-dhis"
      },

      {
        name: "Get started with DHIS 2",
        icon: "./assets/icons/startdhis.png",
        description: "",
        options:['Getting started with DHIS 2',
          'Logging on to DHIS 2',
          'Creating new users and roles',
          'Define a new role',
          'Logging out of DHIS 2'],
        key: "starting-dhis"
      },

      {
        name: "Indicators",
        icon: "./assets/icons/indicator.png",
        description: "",
        options:['Indicators',
          'Indicator types',
          'Indicator groups',
          'Indicator group editor',
          'Indicator group sets'],
        key: "indicators"
      },

      {
        name: "User management",
        icon: "./assets/icons/user.png",
        description: "",
        options:['Creating new users and roles',
          'User maintenance',
          'User role management',
          'User management',
          'User group management',
          'User by organisation unit'],
        key: "user-management"
      },

      {
        name: "Using Data Visualizer",
        icon: "./assets/icons/visualize.png",
        description: "",
        options:['Data Visualizer overview',
          'Selecting chart type',
          'Selecting series, category and filter',
          'Displaying a chart',
          'Displaying a data table',
          'Downloading chart as image or PDF',
          'Saving chart as favorite'],
        key: "data-visualizer"
      },

      {
        name: "Using GIS",
        icon: "./assets/icons/gis.png",
        description: "",
        options:['Thematic layer 1 and 2',
          'Facility layer',
          'Symbol layer',
          'Register favorite map views',
          'Register legend sets',
          'Exporting/saving map images',
          'Measure distance',
          'Importing coordinates',
          'Register overlays'],
        key: "using-gis"
      },

      {
        name: "Reports",
        icon: "./assets/icons/reports.png",
        description: "",
        options:['Reporting functionality in DHIS 2',
          'Using standard reports',
          'Using report tables',
          'Using dataset reports',
          'Using resources',
          'Using reporting rate summary',
          'Using organisation unit report'],
        key: "reports-module"
      },

      {
        name: "Data entry",
        icon: "./assets/icons/dataentry.png",
        description: "",
        options:['Data entry with DHIS 2',
          'Validating data in the form'],
        key: "data-entry"
      },

      {
        name: "DashBoards",
        icon: "./assets/icons/dashboard.png",
        description: "",
        options:['Setting up the dashboard',
        'Creating new dashboard',
        'Manage dashboard'],
        key: "dashboard-module"
      },

      {
        name: "Data Administration",
        icon: "./assets/icons/dataadmin.png",
        description: "",
        options:['Data browser',
          'Data integrity',
          'Data Archive',
          'Person Data Archive',
          'Maintenance',
          'Resource tables',
          'SQL View',
          'Organisation unit merge',
          'Duplicate data elimination',
          'Data statistics',
          'Lock exceptions',
          'Zero value storage',
          'Min-Max Value Generation',
          'Constant',
          'Option sets',
          'Cache Statistics',
          'Dynamic attributes',
          'Scheduling'],
        key: "data-administration"
      },

      {
        name: "Data elements",
        icon: "./assets/icons/dataelements.png",
        description: "",
        options:['Data elements',
          'Data element groups',
          'Data element group editor',
          'Data element group sets',
          'Data element categories',
          'Data element category combinations',
          'Translations'],
        key: "data-elements"
      },

    ];


    return components;
  }

}
