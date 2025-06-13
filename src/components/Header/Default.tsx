
import { Props } from './types'

export const Header: React.FC<Props> = ({
  title = "Welcome to Our Website",
  subtitle = "We are glad to have you here"
}) => {
  return (
    <section className="space-y-2 sm:text-center sm:max-w-xl sm:mx-auto">
      <h1 className="title text-blue-700">{title}</h1>
      <h2 className="subtitle text-neutral-700">{subtitle}</h2>
    </section>
  )
}
