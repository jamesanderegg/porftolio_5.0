import React from 'react';

import DenverShootings from "../Components/Projects/OfficerInvolvedShootings/Shootings"
import Denver311 from "../Components/Projects/Maps/Denver311"
import GoogleGps from "../Components/Projects/Maps/GoogleGps"

const projectsMap = [
    
    {
        name: 'Google GPS Data: Heatmap',
        id: 'gpsGoogle',
        type: 'map',
        description: "A Heatmap of my GPS data over the last few years.",
        component: <GoogleGps />,
        website: null,
        url: 'https://leafletjs.com/',
        urlText: 'Leaflet',
        tags: "data, heatmap, map",
        image: 'https://www.jamesanderegg.com/uploads/images/heatMap.png',
        text: "I downloaded my GPS data from google and used Leaflet JS to map it.  I also used a heatmap and loading spinner librarys.  It's pulling over 1 million rows from my database so please give it time to load.  "
    },
    {
        name: 'Denver 311: Phone Data',
        id: 'denver311',
        type: 'map',
        description: "A map of Denvers phone information hotline for the year 2016.",
        component: <Denver311 />,
        website: null,
        url: 'https://github.com/jamesanderegg/flask-reactTreeMap/tree/master/react-flask-app/src/Components/Projects/Maps/Denver311',
        urlText: 'Github',
        tags: "data, heatmap, denver, map",
        image: 'https://www.jamesanderegg.com/uploads/images/denver311.png',
        text: "Denver has an open data city catalog with lots of datasets.  This is the information hotline, sorted by complaints for the year 2016.  I've made the data searchable."
    },
    {
        name: 'Gatsby Static Website',
        id: 'snoc',
        type: 'Client Project',
        description: "A website I built for a client in React with Gatsby.",
        component: null,
        website: 'https://snoc.org/',
        url: 'https://github.com/jamesanderegg/schoolofnaturalordercolorado',
        urlText: 'Github',
        tags: "website, gatsby",
        image: 'https://www.jamesanderegg.com/uploads/images/snoc.png',
        text: "A website for the School of the Natural Order of Colorado."
    },
    {
        name: 'Officer-Involved Shootings',
        id: 'denver-dashboard',
        type: 'dashboard',
        description: "A dashboard of officer involved shootings, built in Power Bi with Data from Denver Open Data Catalog",
        component: <DenverShootings/>,
        website: null,
        url: 'https://www.denvergov.org/opendata/dataset/city-and-county-of-denver-denver-police-officer-involved-shootings',
        urlText: 'Denver Open Data',
        tags: "power-bi, data, dashboard, denver",
        image: 'https://www.jamesanderegg.com/uploads/images/treemap-police.png',
        text: "A website for the School of the Natural Order of Coloradoo."
    }
]
export default projectsMap;