import React from "react";

class ImageSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
    };
  }

  handlePrevClick = () => {
    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex - 1,
    }));
  };

  handleNextClick = () => {
    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex + 1,
    }));
  };

  render() {
    const { images } = this.props;
    const { currentIndex } = this.state;

    const imageSlides = [];

    for (let i = 0; i < images.length; i += 3) {
      imageSlides.push(images.slice(i, i + 3));
    }

    return (
      <div className='image-slider-container'>
        <div
          className='image-slider-content'
          style={{
            transform: `translateX(-${currentIndex * 916}px)`,
          }}
        >
          {imageSlides.map((slide, index) => (
            <div
              key={index}
              className='image-slide flex flex-nowrap overflow-x-scroll'
            >
              <img src={slide[0]} alt='' style={{ width: "253px" }} />
              <img src={slide[1]} alt='' style={{ width: "660px" }} />
              <img src={slide[2]} alt='' style={{ width: "253px" }} />
            </div>
          ))}
        </div>

        <button
          className='prev-button'
          disabled={currentIndex === 0}
          onClick={this.handlePrevClick}
        >
          Prev
        </button>

        <button
          className='next-button'
          disabled={currentIndex === imageSlides.length - 1}
          onClick={this.handleNextClick}
        >
          Next
        </button>
      </div>
    );
  }
}

export default ImageSlider;
