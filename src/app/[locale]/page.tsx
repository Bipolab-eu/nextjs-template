import { Accordion } from "@/components/Accordion/Default";
import Hero from "@/components/Hero/Variant1";
import { Testimonial } from "@/components/Testimonial/Default";

export default async function HomePage({ params }:any) {

  return (
    <main className="layout">
      <Hero />
      <Testimonial />
    </main>
  )
}