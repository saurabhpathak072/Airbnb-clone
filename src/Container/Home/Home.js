import React from 'react';
import Banner from '../../Component/Banner/Banner';
import './Home.css';
import Card from '../../Component/Card/Card'

const Home = (props) => {
    return (
        <div className="home">
            <Banner/>
            <div className='home__section'>
                <Card src={'https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=320'} title={'Unique stays'} description={'Tents, treehouses, and more – these spaces are more than just a place to sleep'} price={'INR 270/night'}/>
                <Card src={'https://a0.muscache.com/im/pictures/4a2f688e-0b33-4feb-932f-494b9a37348c.jpg?im_w=320'} title={'Online Experiences'} description={'Join interactive experiences around the world, including kid-friendly field trips with inspiring hosts.'} price={'INR 270/night'}/>
                <Card src={'https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=320'} title={'Entire Home'} description={'Comfortable private places, with room for friends or family.'} price={'INR 270/night'}/>
            </div>
            {/* <div className='home__section'>
                <Card src={} title={} description={} price={}/>
                <Card src={} title={} description={} price={}/>
                <Card src={} title={} description={} price={}/>
            </div> */}
        </div>
    )
}

export default Home
