import { Accordion } from "@/components/Accordion/Default";
import { Header } from "@/components/Header/Default";
import { Hero } from "@/components/Hero/Default";
import { TestimonialLayout } from "./Testimonial/TestimonialLayout";
import { Testimonial } from "./Testimonial/Default";

export const components: Record<string, React.ComponentType<any>> = {
  'blocks.accordion': Accordion,
  'blocks.header': Header,
  'blocks.hero': Hero,
};

function groupTestimonials(blocks: any[]) {
  const result = [];
  let currentGroup = [];

  for (const block of blocks) {
    if (block.__component === 'blocks.testimonial') {
      currentGroup.push(block);
    } else {
      if (currentGroup.length > 0) {
        result.push([...currentGroup]);
        currentGroup = [];
      }
      result.push(block);
    }
  }

  if (currentGroup.length > 0) {
    result.push([...currentGroup]);
  }

  return result;
}

export default function Blocks({ blocks }: any) {
  const groupedBlocks = groupTestimonials(blocks);

  return (
    <>
      {groupedBlocks.map((group: any, i: number) => {
        // Agrupación de blocks.testimonial
        if (Array.isArray(group) && group[0]?.__component === 'blocks.testimonial') {
          return (
            <TestimonialLayout key={`testimonial-group-${i}`}>
              {group.map((testimonial: any) => (
                <Testimonial key={testimonial.id} {...testimonial} />
              ))}
            </TestimonialLayout>
          );
        }

        // Resto de bloques
        const Component = components[group.__component];
        if (!Component) {
          console.warn(`No component found for: ${group.__component}`);
          return null;
        }

        return <Component key={group.id} {...group} />;
      })}
    </>
  );
}
