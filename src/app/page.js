import Image from "next/image";
import BannerSection from "./componets/home-component/BannerSection";
import FeaturedCourses from "./componets/home-component/FeaturedCourses";
export default function Home() {
  return (
        <>
          <BannerSection />
          <FeaturedCourses />
        </>
    );
}
