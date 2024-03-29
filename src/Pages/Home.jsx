import Top from "../components/Top/Index";
import Carousel from "../components/Carousel/Index";
import TweetCarousel from "../components/TweetCarousel/Index";
const Home = () => {
  return (
    <div>
      <Top />
      <Carousel
        heading="Courses For you"
        description="Listen to byte-sized audio courses from top thinkers"
      />
      <Carousel
        heading="Article Reads"
        description="Listen to audio versions of top web articles"
      />
      <TweetCarousel
        heading="Tweet Shorts"
        description="Listen to audio versions of tweet threads"
      />
    </div>
  );
}

export default Home