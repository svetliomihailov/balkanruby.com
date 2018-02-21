import Layout from '../documentation/Layout';
import Title from '../documentation/Title';
import Pattern from '../documentation/Pattern';

import ArticleTitle from '../patterns/ArticleTitle';
import LeadImage from '../patterns/LeadImage';
import LeadImageDark from '../patterns/LeadImageDark';
import SingleImage from '../patterns/SingleImage';
import Text from '../patterns/Text';
import Quote from '../patterns/Quote';
import SingleImageInset from '../patterns/SingleImageInset';
import SectionTitle from '../patterns/SectionTitle';
import Video from '../patterns/Video';
import VideoInset from '../patterns/VideoInset';
import PageTitle from '../patterns/PageTitle';
import Navigation from '../patterns/Navigation';
import Breadcrumbs from '../patterns/Breadcrumbs';
import Cards from '../patterns/Cards';
import CardsTwo from '../patterns/CardsTwo';
import ArticleList from '../patterns/ArticleList';
import Pagination from '../patterns/Pagination';
import Slider from '../patterns/Slider';
import ThumbFeed from '../patterns/ThumbFeed';
import Cta from '../patterns/Cta';
import PartnerFeed from '../patterns/PartnerFeed';

export default () => (
  <Layout>
    <Title>Pattern Library</Title>

    <Pattern title="Slider" description="Simple slider gallery">
      <Slider>
        <Slider.Slide>
          <img src="http://placehold.it/1920x1080" />
        </Slider.Slide>

        <Slider.Slide>
          <img src="http://placehold.it/1920x1080" />
        </Slider.Slide>

        <Slider.Slide>
          <img src="http://placehold.it/1920x1080" />
        </Slider.Slide>
      </Slider>
    </Pattern>

    <Pattern title="Article Title" description="Used in the blog">
      <ArticleTitle />
    </Pattern>

    <Pattern title="Call to action" description="">
      <Cta />
    </Pattern>

    <Pattern title="Thumb Feed" description="Used for sponsors">
      <ThumbFeed />
    </Pattern>

    <Pattern title="Partner Feed" description="Used for sponsors">
      <PartnerFeed />
    </Pattern>

    <Pattern title="Lead Image" description="">
      <LeadImage />
    </Pattern>

    <Pattern title="Lead Image (dark)" description="">
      <LeadImageDark />
    </Pattern>

    <Pattern title="Single Image" description="">
      <SingleImage />
    </Pattern>

    <Pattern title="Single Image (inset)" description="">
      <SingleImageInset />
    </Pattern>

    <Pattern title="Text" description="">
      <Text />
    </Pattern>

    <Pattern title="Quote" description="">
      <Quote />
    </Pattern>

    <Pattern title="Section Title" description="">
      <SectionTitle />
    </Pattern>

    <Pattern title="Video" description="">
      <Video />
    </Pattern>

    <Pattern title="Video (inset)" description="">
      <VideoInset />
    </Pattern>

    <Pattern title="Page Title" description="">
      <PageTitle />
    </Pattern>

    <Pattern title="Navigation" description="">
      <Navigation />
    </Pattern>

    <Pattern title="Breadcrumbs" description="">
      <Breadcrumbs />
    </Pattern>

    <Pattern title="Cards" description="">
      <Cards />
    </Pattern>

    <Pattern title="Cards (two)" description="">
      <CardsTwo />
    </Pattern>

    <Pattern title="Article List" description="Used in the blog">
      <ArticleList />
    </Pattern>

    <Pattern title="Pagination" description="">
      <Pagination />
    </Pattern>
  </Layout>
);
