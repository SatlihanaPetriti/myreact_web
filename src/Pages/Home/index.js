import Header from "../../components/Header";
// import HomeCarousel from "../../components/Carousel";
import CarouselBootstrap from "../../components/CarouselBootstrap";
import HomeBody from "../../components/Body";
import FooterHome from "../../components/Footer";
import Announcement from "../../components/Abar/Announcement";
import PaginationSlider from "../../components/pagination_slider/pagination";

const HomePage = () => {
    return (
        <div>
            <Announcement />
            <Header />
            <CarouselBootstrap />
            <HomeBody />
            <PaginationSlider />
            <FooterHome />

        </div>
    )
}

export default HomePage;