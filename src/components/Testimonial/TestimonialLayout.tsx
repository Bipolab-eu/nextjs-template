import { Testimonial } from "./Default";

export const TestimonialLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  return (
    <div className="grid md:grid-cols-2 gap-6 bg-gray-50 p-8 rounded-xl">
      { children }
    </div>
  )
}
