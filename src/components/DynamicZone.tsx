import { Accordion } from "@/components/Accordion/Default";
import { Header } from "@/components/Header/Default";
import { Hero } from "@/components/Hero/Default";
import { RichText } from "./RichText/Default";
import { Testimonial } from "./Testimonial/Default";

export const listComponents: Record<string, React.ComponentType<any>> = {
  'blocks.accordion': Accordion,
  'blocks.header': Header,
  'blocks.hero': Hero,
  'blocks.rich-text': RichText,
  'blocks.testimonial': Testimonial,
};

export const DynamicZone = ({ blocks }: any) => {
  return (
    <>
      {blocks.map((block: any, i: number) => {
        const Component = listComponents[block.__component];

        if (!Component) {
          console.warn(`No component found for: ${block.__component}`);
          return null;
        }

        return <Component key={`${block.id || ''}-${i}`} {...block} />;
      })}
    </>
  );
}