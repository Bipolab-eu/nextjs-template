import { Accordion } from "@/components/Accordion/Default";
import { Header } from "@/components/Header/Default";
import { Hero } from "@/components/Hero/Default";
import { TestimonialLayout } from "./Testimonial/TestimonialLayout";
import { Testimonial } from "./Testimonial/Default";

export const listComponents: Record<string, React.ComponentType<any>> = {
  'blocks.accordion': Accordion,
  'blocks.header': Header,
  'blocks.hero': Hero,
  "blocks.testimonial": TestimonialLayout,
};

function groupBlocksByType(blocks: any[], groupTypes: string[]) {
  const result = [];
  let currentGroup = [];

  for (const block of blocks) {
    if (groupTypes.includes(block.__component)) {
      currentGroup.push(block);
    } else {
      if (currentGroup.length > 0) {
        result.push({ __component: currentGroup[0].__component, items: [...currentGroup] });
        currentGroup = [];
      }
      result.push(block);
    }
  }

  if (currentGroup.length > 0) {
    result.push({ __component: currentGroup[0].__component, items: [...currentGroup] });
  }

  return result;
}

export default function Blocks({ blocks }: any) {
  // Agrupa por tipos deseados
  const groupedBlocks = groupBlocksByType(blocks, ["blocks.testimonial"]);

  return (
    <>
      {groupedBlocks.map((block: any, i: number) => {
        const Component = listComponents[block.__component];

        if (!Component) {
          console.warn(`No component found for: ${block.__component}`);
          return null;
        }

        if (block.items) {
          // Es un grupo (como testimonial.group)
          return (
            <Component key={`group-${i}`}>
              {block.items.map((item: any) => (
                <Testimonial key={item.id} {...item} />
              ))}
            </Component>
          );
        }

        // Renderiza normalmente
        return <Component key={block.id} {...block} />;
      })}
    </>
  );
}

