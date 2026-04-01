import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import { Container } from "@/components/ui/Container";
import { GlobalCTA } from "@/components/global/GlobalCTA";
import { mdxComponents } from "@/components/blog/MDXComponents";
import { getPostBySlug, getAllPosts } from "@/lib/blog";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} — Throttl`,
    description: post.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-ink pt-[72px]">
        {/* Gradient mesh */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="absolute -left-[200px] top-[20%] h-[600px] w-[600px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(59,125,216,0.12) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute -right-[100px] bottom-0 h-[400px] w-[400px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(133,0,255,0.08) 0%, transparent 70%)",
            }}
          />
        </div>

        <Container className="relative z-10 py-16 md:py-24">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-sans text-[14px] font-medium text-white/50 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            All articles
          </Link>

          {/* Meta */}
          <div className="mt-8 flex flex-wrap items-center gap-4 font-sans text-[14px] text-white/50">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
            <span className="rounded-[4px] bg-white/10 px-2.5 py-0.5 font-sans text-[12px] font-semibold uppercase tracking-[0.06em] text-white/70">
              {post.theme}
            </span>
          </div>

          {/* Title */}
          <h1 className="mt-6 max-w-[800px] font-display text-[32px] font-bold leading-[1.15] text-white md:text-[48px]">
            {post.title}
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-[640px] font-sans text-lg leading-relaxed text-white/60">
            {post.description}
          </p>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 rounded-full bg-white/8 px-3 py-1 font-mono text-[12px] font-medium text-white/50"
              >
                <Tag className="h-3 w-3" />
                {tag}
              </span>
            ))}
          </div>

          {/* Author */}
          <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blueprint/20 font-sans text-sm font-bold text-blueprint">
              {post.author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <p className="font-sans text-[15px] font-medium text-white">
                {post.author}
              </p>
              <p className="font-sans text-[13px] text-white/40">
                Throttl
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Article Body ── */}
      <section className="bg-canvas">
        <Container className="py-16 md:py-20">
          <article className="mx-auto max-w-[720px]">
            <MDXRemote
              source={post.content}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [
                    rehypeSlug,
                    [
                      rehypePrettyCode,
                      {
                        theme: "github-dark-dimmed",
                        keepBackground: true,
                      },
                    ],
                  ],
                },
              }}
            />
          </article>
        </Container>
      </section>

      <GlobalCTA />
    </>
  );
}
