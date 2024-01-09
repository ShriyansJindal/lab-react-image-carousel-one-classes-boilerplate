import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {

    constructor(){
        super()
        this.state={
            index:0
        }
    }

    render(){
        let {index} = this.state;
        let currentImage = images[index];
        let handlePrev=()=>{
                // this.setState({index:(this.state.index-1+images.length)%images.length})

                if(index==0){
                    this.setState({index:(2)})
                }
                else{
                    this.setState({index:(this.state.index-1)})
                }
        }
        let handleNext=()=>{
                // this.setState({index:(this.state.index+1)%images.length})
                if(index==2){
                    this.setState({index:(0)})
                }
                else{
                    this.setState({index:(this.state.index+1)})
                }
            
        }
        return(
            <>
            <div className="main">
                <div >
                <ArrowBackIosIcon className="arrow" onClick = {handlePrev}/>
                </div>
                <div className="imagebox">
                    <img src={currentImage.img} alt="" />
                </div>
                <div className="imageContainer">
                    <div className="titlebox">
                        <p>{currentImage.title}</p>
                    </div>
                    <div className="subtittle">
                        <p>{currentImage.subtitle}</p>
                    </div>
                </div>
                <div >
                    <ArrowForwardIosIcon className="arrow" onClick = {handleNext}/>
                </div>
            </div>
            </>
        )
    }
  
}

export default Carousel;