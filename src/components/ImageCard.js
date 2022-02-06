import React from 'react';

class ImageCard extends React.Component {
    constructor(props){
        super(props);
        this.state={spans:0};
        this.imageRef=React.createRef();
    }
    componentDidMount(){
        //the current represent the image 
        //while the eventListener is waiting until the image has loaded
        // after that our callback funciton starts
        this.imageRef.current.addEventListener('load', this.setSpans);
      
    }
    setSpans=()=>{
        const height = this.imageRef.current.clientHeight;

        //150 is the grid row size and plus one for better styling
        const spans= Math.ceil(height/10);

        this.setState({spans});
    }
    render() {
        const {description, urls}=this.props.image;
        return(
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img 
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                />
            </div>
        )
    }
}

export default ImageCard;