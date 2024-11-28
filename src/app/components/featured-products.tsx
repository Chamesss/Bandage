import ItemCard from './styled-components/item-card'
import SectionDescription from './styled-components/section-description'
import SectionHeading from './styled-components/section-heading'

export default function FeaturedProducts() {
  return (
    <div className="mx-auto w-full max-w-[75rem] p-8 text-center">
      <p className="my-2 text-sm font-semibold text-neutral-500">Featured Products</p>
      <SectionHeading>Bestseller Products</SectionHeading>
      <SectionDescription className="mb-4 mt-1">
        Problems trying to resolve the conflict between
      </SectionDescription>
      <div className="mt-10 grid grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <ItemCard key={i} />
        ))}
      </div>
    </div>
  )
}
