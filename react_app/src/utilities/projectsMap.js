import React from 'react';

import DenverShootings from '../Components/Projects/OfficerInvolvedShootings/Shootings'
import Denver311 from '../Components/Projects/Maps/Denver311'
import GoogleGps from '../Components/Projects/Maps/GoogleGps'

const projectsMap = [
    
    {
        name: 'My GPS Data',
        id: 'gpsGoogle',
        type: 'Heatmap',
        description: 'A Heatmap of my GPS data over the last few years.  I downloaded my GPS history for the last 5 years from Google and mapped it using Leaflet.',
        component: <GoogleGps />,
        website: null,
        resources: null,
        github: 'https://github.com/jamesanderegg/porftolio_5.0/tree/main/react_app/src/Components/Projects/Maps/GoogleGps',
        tags: 'data, map',
        image: 'https://www.jamesanderegg.com/uploads/images/heatMap.png',
        text: 'A heatmap of my GPS data',
        tools: 'axios, styled-components, react, class-components, leaflet, d3'
    },
    {
        name: 'Denver 311: Phone Data',
        id: 'denver_311',
        type: 'Cluster Map',
        description: 'A Cluster map of Denvers phone information hotline for the year 2016.  You can filter the data by searching and the map will update.',
        component: <Denver311 />,
        website: null,
        resources: null,
        github: 'https://github.com/jamesanderegg/flask-reactTreeMap/tree/master/react-flask-app/src/Components/Projects/Maps/Denver311',
        tags: 'data, denver, map',
        image: 'https://www.jamesanderegg.com/uploads/images/denver311.png',
        text: 'Denver has an open data city catalog with lots of datasets.  This is the information hotline, sorted by complaints for the year 2016.',
        tools: 'axios, styled-componets, react, class-components, leaflet, d3'
    },
    {
        name: 'School of the Natural Order',
        id: 'snoc',
        type: 'Client Website',
        description: 'SNOC.ORG is a website I built using React and Gatsby.  The website is hosted on github-pages and also has google analytics set up so my client can collect information on site traffic.',
        component: null,
        website: 'https://snoc.org/',
        resources: null,
        github: 'https://github.com/jamesanderegg/schoolofnaturalordercolorado',
        tags: 'website, gatsby',
        image: 'https://www.jamesanderegg.com/uploads/images/snoc.png',
        text: 'A website for the School of the Natural Order of Colorado.',
        tools: 'react, functional-components, gatsby, gatsby-image, github-pages'
    },
    {
        name: 'Officer-Involved Shootings: Denver',
        id: 'denver-dashboard',
        type: 'Power Bi Dashboard',
        description: 'I rebuilt a dashboard I found on Denver.org of Officer-involved shootings.  My dashboard is dynamic and built in power bi.',
        component: <DenverShootings/>,
        website: null,
        resources: 'https://www.denvergov.org/opendata/dataset/city-and-county-of-denver-denver-police-officer-involved-shootings',
        github: 'https://github.com/jamesanderegg/porftolio_5.0/tree/main/react_app/src/Components/Projects/OfficerInvolvedShootings',
        tags: 'power-bi, data, dashboard, denver',
        image: 'https://www.jamesanderegg.com/uploads/images/treemap-police.png',
        text: 'A dynamic dashboard built in Power bi of Denver, officer involved shootings.',
        tools: 'python, pandas, beautifulsoup, requests, power-bi'
    },
    {
        name: 'Master Gatsby: Slicks Slices',
        id: 'master-gatsby',
        type: 'Wes Bos Gatsby Tutorial',
        description: 'A Master Gatsby tutorial by Wes Bos.  We built a mock up pizza shop using Sanity as a CMS on the backend and Gatsby on the frontend. Managers can update their pizza shop with a super easy UI thanks to Sanity.',
        component: null,
        website: 'https://pizzabytheslice.netlify.app/?fbclid=IwAR15qWzcWihXnvIdtERClarZjD8_GLhz8ZeXgizCDtrgRF0nbDEQ-5h3-n4',
        resources: null,
        github: 'https://github.com/jamesanderegg/master-gatsby-tutorial',
        tags: 'data, sanity, gatsby',
        image: 'https://www.jamesanderegg.com/uploads/images/slices.PNG',
        text: 'This website was built with Gatsby frontend and a content managment system called Sanity.',
        tools: 'sanity, graphql, javascript, react, gatsby, GROQ'
    }
]
export default projectsMap;