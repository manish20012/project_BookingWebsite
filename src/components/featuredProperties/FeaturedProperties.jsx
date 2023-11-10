import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://pix10.agoda.net/hotelImages/465/4654/4654_15081816050034517049.jpg?s=1024x768"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Taj Mahal Hotel</span>
        <span className="fpCity">New Delhi</span>
        <span className="fpPrice">Starting from ₹6000</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://q-cf.bstatic.com/images/hotel/max1024x768/156/156077043.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Radisson Mumbai Andheri</span>
        <span className="fpCity">Mumbai</span>
        <span className="fpPrice">Starting from ₹4000</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://images.trvl-media.com/hotels/1000000/530000/526400/526338/b2de684b_z.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Taj MG Road</span>
        <span className="fpCity">Bengalore</span>
        <span className="fpPrice">Starting from ₹5000</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://www.luxurylifestyle.co/wp-content/uploads/2016/11/Grand-Hyatt-Mumbai.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Grand Hyatt Mumbai Hotel & Residences</span>
        <span className="fpCity">Mumbai</span>
        <span className="fpPrice">Starting from ₹6000</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
