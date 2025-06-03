import { Accordion } from "../components/Accordion";
import Hero from "../components/Hero";

export default async function HomePage({ params }:any) {

  return (
    <main>
      <Hero></Hero>
      <Hero></Hero>
      <Hero></Hero>
      <Hero></Hero>
      <h1>Hola mundo</h1>
      <Accordion
        title="hola"
        description="adios fsaldfh asgdkl "></Accordion>
    </main>
  )
}