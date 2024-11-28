import { cn } from '@/lib/utils'

export default function SectionDescription({
  className = '',
  children
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <h6 className={cn('darkblue text-sm font-semibold capitalize text-neutral-500', className)}>
      {children}
    </h6>
  )
}
