import React, { Component } from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';
import cringe from '../assets/Sonichu.jpg';

const Styles = styled.div`
    .jumbotron{
        background: url(${cringe}) no-repeat fixed ;
        background-size: 2000px 460px;
        color: #ccc;
        height: 200px;
        position: relative;
        z-index: -2;
    }
    
    .overlay {
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index -1;
    }`;
class Banner extends Component {
    state = {  }
    render() { 
        return ( 
        <Styles>
            <Jumbo fluid className='jumbo'>
                <div className='overlay'></div>
                <Container>
                    <h1>{this.props.header}</h1>
                    <p>{this.props.caption}</p>
                </Container>
            </Jumbo>
        </Styles> );
    }   
}
 
export default Banner;