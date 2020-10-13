import { Button } from '@material-ui/core';
import React from 'react';
import SearchResult from '../../Component/SearchResult/SearchResult';
import './SearchPage.css';

const SearchPage = (props) => {
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p>62 stays - 26 august to 30 august - 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant='outlined'>Cancellation flexibility</Button>
                <Button variant='outlined'>Type of place</Button>
                <Button variant='outlined'>Price</Button>
                <Button variant='outlined'>Rooms and beds</Button>
                <Button variant='outlined'>More filter</Button>
            </div>
            <SearchResult img="https://a0.muscache.com/im/pictures/e49a0bf5-0b03-4f45-821e-1881364e48d3.jpg?im_w=720" location="private room in center of london" title="5 star luxury apartment"
            description="62 stays - 26 august to 30 august - 2 guest"
            star={3.85}
            price="INR 90 /night"
            total="INR 650 total"/>
            <SearchResult img="https://a0.muscache.com/im/pictures/6c0e09d9-2537-4c2a-9180-4f14e22a1996.jpg?im_w=960" location="private room in center of london" title="Farm stay hosted by Raajen & Archana"
            description="3 guests · 1 bedroom · 2 beds · 1 bathroom"
            star={4.85}
            price="INR 190 /night"
            total="INR 950 total"/>
            <SearchResult img="https://a0.muscache.com/im/pictures/afe2bf0f-991d-4066-bbdb-b6c849d9b27e.jpg?im_w=960" location="private room in center of london" title="FEntire villa hosted by Frances"
            description="8 guests · 4 bedrooms · 4 beds · 4 bathrooms"
            star={4.91}
            price="INR 220 /night"
            total="INR 1050 total"/>
        </div>
    )
}

export default SearchPage
