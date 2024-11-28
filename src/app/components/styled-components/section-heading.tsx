import { cn } from '@/lib/utils'

export default function SectionHeading({
  className = '',
  children
}: {
  className?: string
  children: React.ReactNode
}) {
  return <h3 className={cn('darkblue text-lg font-bold uppercase', className)}>{children}</h3>
}
