import Swiper from 'react-id-swiper';

class FixedSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Swiper: false,
    };
  }

  componentDidMount() {
    this.setState({ Swiper: require('react-id-swiper').default });
  }

  render() {
    const { Swiper } = this.state;

    if (!Swiper) {
      return (<div>{this.props.children}</div>)
    }

    return <Swiper {...this.props}>{this.props.children}</Swiper>
  }
}


const Slide = ({ children }) => (
  <div className="swiper-slide slider-slide">
    {children}
  </div>
);

const Slider = ({ children }) => (
  <div className="slider">
    <Swiper
      loop
      slidesPerView={1}
      paginationClickable
      pagination={{
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      keyboard
    >
      {children}
    </Swiper>
  </div>
);

Slider.Slide = Slide;

export default Slider;
