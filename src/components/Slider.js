import React from 'react'
import {Carousel} from 'react-bootstrap'
import i1 from './offer1.jpg'
import i2 from './offer2.jpg'
import i3 from './offer3.jpg'

const Slider = () => {
    return (
        <div style={{padding:'10px'}}>
            <Carousel variant='dark' style={{width:'100%'}}>
                <Carousel.Item interval={5000}>
                    <img src={i1} style={{height:'70vh',width:'100%'}}/>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img src={i2}  style={{height:'70vh',width:'100%'}}/>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img src={i3}  style={{height:'70vh',width:'100%'}}/>
                </Carousel.Item>
            </Carousel>
            
        </div>
    )
}

export default Slider
