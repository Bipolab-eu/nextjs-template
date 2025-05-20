import { ChevronDown } from "lucide-react"

interface Props {
  title: string
  description: string
}

export const Accordion: React.FC<Props> = async ({ title, description }) => {
  return (
    <details
      name="active"
      className="group"
    >
      <summary
        className="cursor-pointer border-b border-clay-300 p-4 hover:bg-clay-300 flex items-center justify-between"
      >
        <span className="body">{title}</span>
        <ChevronDown className="transition-transform duration-300 group-open:rotate-180" />
      </summary>
      <p className="body p-4">{description}</p>
    </details>
  )
}
