import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  className?: string;
};

export default function SectionHeading({ eyebrow, title, className }: Props) {
  return (
    <div className={className ?? "mb-12"}>
      <Reveal>
        <span className="eyebrow">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          {eyebrow}
        </span>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-4xl md:text-[2.75rem]">
          {title}
        </h2>
      </Reveal>
    </div>
  );
}
