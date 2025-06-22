import Slider from "react-slick";
import "./Slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderImages = [
  {
    src: require('../assets/img/dress.jpeg'),
    heading: "Dress measurements",
    subheading: "Sign up for the daily Posts"
  },
  {
    src: require('../assets/img/shirt.jpeg'),
    heading: "Top Measurements",
    subheading: "Dive into the new era of fashion"
  },
  {
    src: require('../assets/img/pant.jpeg'),
    heading: "Bottom measurements",
    subheading: "Save more with our partner discounts"
  }
];

const Slicker = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {sliderImages.map((item, index) => (
          <div className="slide" key={index}>
            <div className="slide-content">
              <div className="slide-text">
                <h1>{item.heading}</h1>
                <p>{item.subheading}</p>
                {/* <div className="email-input-wrapper">
                  <input type="email" placeholder="Your email address" />
                  <button>Subscribe</button>
                </div> */}
              </div>
              <img
                src={item.src}
                alt={`Slide ${index}`}
                className={`slide-img ${index === 1 ? 'second-slide-img' : ''}`}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slicker;