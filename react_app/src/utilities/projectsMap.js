import React from 'react';

import DenverShootings from "../Components/Projects/OfficerInvolvedShootings/Shootings"
import Denver311 from "../Components/Projects/Maps/Denver311"
import GoogleGps from "../Components/Projects/Maps/GoogleGps"

const projectsMap = [
    
    {
        name: 'GPS Data: Heatmap',
        id: 'gpsGoogle',
        type: 'Map',
        description: "A Heatmap of my GPS data over the last few years.",
        component: <GoogleGps />,
        website: null,
        url: 'https://leafletjs.com/',
        urlText: 'Leaflet',
        tags: "data, map",
        image: 'https://www.jamesanderegg.com/uploads/images/heatMap.png',
        text: "I downloaded my GPS data from google and used Leaflet JS to map it.  I also used a heatmap and loading spinner library.  It's pulling over 1 million rows from my database so please give it time to load.  "
    },
    {
        name: 'Denver 311: Phone Data',
        id: 'denver_311',
        type: 'Map',
        description: "A map of Denvers phone information hotline for the year 2016.",
        component: <Denver311 />,
        website: null,
        url: 'https://github.com/jamesanderegg/flask-reactTreeMap/tree/master/react-flask-app/src/Components/Projects/Maps/Denver311',
        urlText: 'Github',
        tags: "data, denver, map",
        image: 'https://www.jamesanderegg.com/uploads/images/denver311.png',
        text: "Denver has an open data city catalog with lots of datasets.  This is the information hotline, sorted by complaints for the year 2016.  I've made the data searchable."
    },
    {
        name: 'School of the Natural Order',
        id: 'snoc',
        type: 'Client Website',
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
        type: 'Power Bi Dashboard',
        description: "A dashboard of officer involved shootings, built in Power Bi with Data from Denver Open Data Catalog",
        component: <DenverShootings/>,
        website: null,
        url: 'https://www.denvergov.org/opendata/dataset/city-and-county-of-denver-denver-police-officer-involved-shootings',
        urlText: 'Denver Open Data',
        tags: "power-bi, data, dashboard, denver",
        image: 'https://www.jamesanderegg.com/uploads/images/treemap-police.png',
        text: "A website for the School of the Natural Order of Colorado."
    },
    {
        name: 'Master Gatsby Tutorial',
        id: 'master-gatsby',
        type: 'Gatsby Tutorial',
        description: "A tutorial by Wes Bos, where we learned a CMS called Sanity, and a gatsby frontend.  Sanity is amazing to work with",
        component: null,
        website: 'https://pizzabytheslice.netlify.app/?fbclid=IwAR15qWzcWihXnvIdtERClarZjD8_GLhz8ZeXgizCDtrgRF0nbDEQ-5h3-n4',
        url: 'https://mastergatsby.com/',
        urlText: 'Wes Bos Master Gatsby',
        tags: "data, sanity, gatsby",
        image: 'https://www.jamesanderegg.com/uploads/images/slices.PNG',
        text: "This website was built with Gatsby frontend and a content managment system called Sanity."
    }
]
export default projectsMap;