import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { openSans } from "../font";

export default function Section() {
  const images = [
    "people/sara.png",
    "people/john.png",
    "people/jane.png",
    "people/jack.png",
  ];

  return (
    <div className="section-container bg-bgCover">
      <div className={`section-title ${openSans.className}`}><h2 className="text-white text-bold ">Coming soon</h2></div>
      <div className="section-overlay"></div>
      <div className="section-content">
        <h2 className={`section-subtitle ${openSans.className}`}>
          <strong className="text-black"> AutoApplys:</strong>  AI Powered Job Applications

        </h2>
        <div>
          <p className="section-text">
            AutoApplys uses AI to apply to 100s of jobs monthly for you. Focus on interviews while we handle the applications. 
            Start with AutoApplys and automate your job search!
          </p>
        </div>
        <div className="section-images">
          <div className="section-image-container">
            <div className="section-image-group-sm">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="section-image"
                  style={{ left: `${index * 36}px`, zIndex: images.length - index }}
                >
                  <img src={image} alt={`User ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            <div className="section-image-group-md">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="section-image-lg"
                  style={{ left: `${index * 52}px`, zIndex: images.length - index }}
                >
                  <img src={image} alt={`User ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="section-users-text">
              <p className={`section-users-description ${openSans.className}`}>
                we have over 6,000 users
              </p>
            </div>
          </div>
          <div className="section-rating">
            <FaStar className="section-rating-icon" size={30} />
            <FaStar className="section-rating-icon" size={30} />
            <FaStar className="section-rating-icon" size={30} />
            <FaStarHalfAlt className="section-rating-icon" size={30} />
            <p className={`section-rating-text ${openSans.className}`}>4.5 star rating</p>
          </div>
        </div>
      </div>
    </div>
  );
}
