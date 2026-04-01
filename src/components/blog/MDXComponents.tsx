import type { MDXComponents } from "mdx/types";

function Callout({
  children,
  type = "info",
}: {
  children: React.ReactNode;
  type?: "info" | "warning" | "tip";
}) {
  const styles = {
    info: "border-blueprint/30 bg-blueprint/5",
    warning: "border-error/30 bg-error/5",
    tip: "border-success/30 bg-success/5",
  };

  const icons = {
    info: "i",
    warning: "!",
    tip: "✓",
  };

  return (
    <div
      className={`my-8 rounded-lg border-l-4 px-6 py-5 ${styles[type]}`}
    >
      <div className="flex gap-3">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink/10 font-mono text-xs font-bold text-ink">
          {icons[type]}
        </span>
        <div className="prose-callout [&>p]:m-0">{children}</div>
      </div>
    </div>
  );
}

export const mdxComponents: MDXComponents = {
  Callout,
  h1: (props) => (
    <h1
      className="font-display text-[32px] font-bold leading-tight text-ink md:text-[40px] mt-12 mb-6 first:mt-0"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="font-display text-[26px] font-semibold leading-tight text-ink md:text-[30px] mt-14 mb-5 scroll-mt-24"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="font-sans text-[20px] font-semibold leading-snug text-ink md:text-[22px] mt-10 mb-4 scroll-mt-24"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="my-5 font-sans text-[17px] leading-[1.8] text-charcoal"
      {...props}
    />
  ),
  a: (props) => (
    <a
      className="text-blueprint underline decoration-blueprint/30 underline-offset-2 transition-colors hover:text-blueprint-hover hover:decoration-blueprint/60"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="my-5 ml-1 list-none space-y-3 font-sans text-[17px] leading-[1.8] text-charcoal [&>li]:relative [&>li]:pl-6 [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:top-[0.65em] [&>li]:before:h-[5px] [&>li]:before:w-[5px] [&>li]:before:rounded-full [&>li]:before:bg-blueprint/50 [&>li]:before:content-['']"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="my-5 ml-1 list-none space-y-3 font-sans text-[17px] leading-[1.8] text-charcoal counter-reset-[item] [&>li]:relative [&>li]:pl-8 [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:top-[0.15em] [&>li]:before:flex [&>li]:before:h-6 [&>li]:before:w-6 [&>li]:before:items-center [&>li]:before:justify-center [&>li]:before:rounded-full [&>li]:before:bg-blueprint/10 [&>li]:before:font-mono [&>li]:before:text-xs [&>li]:before:font-semibold [&>li]:before:text-blueprint [&>li]:before:counter-increment-[item] [&>li]:before:content-[counter(item)]"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="my-8 border-l-[3px] border-blueprint/40 pl-6 italic text-charcoal/80 [&>p]:my-2"
      {...props}
    />
  ),
  code: (props) => {
    // Inline code (not inside a pre)
    if (typeof props.children === "string") {
      return (
        <code className="rounded-[4px] bg-wash px-[6px] py-[2px] font-mono text-[0.88em] text-ink">
          {props.children}
        </code>
      );
    }
    return <code {...props} />;
  },
  pre: (props) => (
    <pre
      className="my-8 overflow-x-auto rounded-lg border border-gridline bg-[#0d1117] p-5 font-mono text-[14px] leading-relaxed [&>code]:bg-transparent [&>code]:p-0 [&>code]:text-inherit"
      {...props}
    />
  ),
  hr: () => (
    <hr className="my-12 border-t border-gridline" />
  ),
  img: (props) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="my-8 w-full rounded-lg border border-gridline"
      alt={props.alt ?? ""}
      {...props}
    />
  ),
  table: (props) => (
    <div className="my-8 overflow-x-auto rounded-lg border border-gridline">
      <table className="w-full font-sans text-[15px]" {...props} />
    </div>
  ),
  thead: (props) => (
    <thead className="border-b border-gridline bg-wash" {...props} />
  ),
  th: (props) => (
    <th
      className="px-4 py-3 text-left font-semibold text-ink"
      {...props}
    />
  ),
  td: (props) => (
    <td className="border-t border-gridline px-4 py-3 text-charcoal" {...props} />
  ),
  strong: (props) => (
    <strong className="font-semibold text-ink" {...props} />
  ),
};
