import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '4e7549b155msh04d1671d1fda57cp10f854jsn80a0dccdb5c1',
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
  };
  
  fetch('https://shazam.p.rapidapi.com/charts/track', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));


    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam.p.rapidapi.com/',
            prepareHeaders:(headers)=>{
                headers.set('X-RapidAPI-Key', '4e7549b155msh04d1671d1fda57cp10f854jsn80a0dccdb5c1');

                return headers;
            }
        }),
        endpoints: (builder)=>({
            getTopCharts: builder.query({query : ()=>'/charts/track'})
        })
    });

    export const {
        useGetTopChartsQuery
    } = shazamCoreApi