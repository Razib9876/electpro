interface SectionTitleProps {
  title: string;
  description: string;
  leftAlign?: boolean;
}

export const SectionTitle = ({
  title,
  description,
  leftAlign,
}: SectionTitleProps) => {
  return (
    <>
      <h1
        className={` font-urbanist text-4xl/12 font-bold max-w-2xl bg-linear-to-r text-gray-700  bg-clip-text  ${leftAlign ? "md:text-left text-center" : "text-center"}`}
      >
        {title}
      </h1>
      <p
        className={`text-base text-gray-600 max-w-lg mt-2 ${leftAlign ? "text-center md:text-left" : "text-center"}`}
      >
        {description}
      </p>
    </>
  );
};
