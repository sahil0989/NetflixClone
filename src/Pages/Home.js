import React from 'react'
import Main from './Main'
import Row from '../Components/Row'
import requests from '../Request'

export default function Home() {
  return (
    <>
        <Main />
        <Row title="Up Coming" fetchURL={requests.requestUpcoming}/>
        <Row title="Popular" fetchURL={requests.requestPopular}/>
        <Row title="Trending" fetchURL={requests.requestTrending}/>
        <Row title="Top Rated" fetchURL={requests.requestTopRated}/>
    </>
  )
}
