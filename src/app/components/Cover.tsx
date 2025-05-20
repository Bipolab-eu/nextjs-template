import Image from "next/image";

interface Format {
  url: string;
  width: number;
  height: number;
}

interface CoverData {
  url: string;
  name: string;
  width: number;
  height: number;
  formats?: Record<string, Format>;
}

interface Props {
  cover: CoverData;
}

export const Cover: React.FC<Props> = ({ cover }) => {
  const breakpoints = [
    { format: "xlarge", className: "hidden 2xl:block 2xl:w-full" },
    { format: "large", className: "hidden xl:block xl:w-full 2xl:hidden" },
    { format: "medium", className: "hidden lg:block lg:w-full xl:hidden" },
    { format: "small", className: "hidden md:block md:w-full lg:hidden" },
    { format: "xsmall", className: "block w-full md:hidden" },
  ];

  return (
    <>
      {breakpoints.map(({ format, className }) => {
        const img = cover.formats?.[format] || cover;

        return (
          <Image
            key={format}
            className={className}
            src={img.url}
            alt={cover.name}
            width={img.width}
            height={img.height}
          />
        );
      })}
    </>
  );
};
