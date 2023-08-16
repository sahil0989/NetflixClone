import React from 'react'
import Main from './Main'
import Row from '../Components/Row'
import requests from '../Request'

export default function Home() {
  return (
    <>
        <Main />
        <Row rowID='1' title="Up Coming" fetchURL={requests.requestUpcoming}/>
        <Row rowID='2' title="Popular" fetchURL={requests.requestPopular}/>
        <Row rowID='3' title="Trending" fetchURL={requests.requestTrending}/>
        <Row rowID='4' title="Top Rated" fetchURL={requests.requestTopRated}/>
    </>
  )
}
