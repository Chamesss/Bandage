import Card from './featured-editors-components/card'
import SectionDescription from './styled-components/section-description'
import SectionHeading from './styled-components/section-heading'

export default function FeaturedEditors() {
  return (
    <div className="w-full bg-gray-100 p-8 text-center">
      <SectionHeading>Editor&apos;s Pick</SectionHeading>
      <SectionDescription className="mb-4 mt-1">
        Problems trying to resolve the conflict between
      </SectionDescription>
      <div className="mx-auto grid max-w-[75rem] grid-flow-col grid-cols-4 grid-rows-2 gap-4">
        <Card className="col-span-2 row-span-2" title="Men" />
        <Card className="col-span-1 row-span-2" title="Women" />
        <Card className="col-span-1 row-span-1" title="ACCESSORIES" />
        <Card className="col-span-1 row-span-1" title="KIDS" />
      </div>
    </div>
  )
}
