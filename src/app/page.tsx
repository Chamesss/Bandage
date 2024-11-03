import FeaturedEditors from './components/featured-editors'
import FeaturedPosts from './components/featured-posts'
import FeaturedProducts from './components/featured-products'
import Hero from './components/hero'
import Info from './components/info'
import Marquee from './components/marquee'

export default function Home() {
  return (
    <div>
      <Hero />
      <Marquee pauseOnHover={true} />
      <FeaturedEditors />
      <FeaturedProducts />
      {/* <Hero /> */}
      <Info />
      <FeaturedPosts />
    </div>
  )
}
