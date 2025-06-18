export interface Testimonial {
  id: number;
  author: string;
  quote: string;
}

export interface Props {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
}