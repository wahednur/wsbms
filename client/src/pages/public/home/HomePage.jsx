import AreaAbdicableFlat from "../../../components/home/AreaAbdicableFlat";
import HomePageFeature from "../../../components/home/HomePageFeature";
import HomeSlider from "../../../components/sliders/HomeSlider";

const HomePage = () => {
  return (
    <div>
      <div>
        <HomeSlider />
      </div>
      <div className="container mt">
        <HomePageFeature />
      </div>
      <div className="container">
        <AreaAbdicableFlat />
      </div>
    </div>
  );
};

export default HomePage;
