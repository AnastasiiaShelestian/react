import { useState, useEffect } from "react";

function Slider() {
  const slides = [
    { id: 1, title: "Быстро", image: "../images/baner6.jpg" },
    { id: 2, title: "Вкусно", image: "../images/baner4.jpg" },
    { id: 3, title: "с любовью!", image: "../images/baner8.jpg" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <div className="slide">
        <img
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
        />
        <h2>{slides[currentSlide].title}</h2>
      </div>

      <button onClick={goToPrevSlide} className="prev-btn">
        Назад
      </button>
      <button onClick={goToNextSlide} className="next-btn">
        Вперед
      </button>
    </div>
  );
}

export default Slider;
