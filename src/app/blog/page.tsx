import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { GlobalCTA } from "@/components/global/GlobalCTA";
import { BlogGallery } from "@/components/blog/BlogGallery";
import { getAllPosts, getAllTags, getAllThemes } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Insights | Throttl",
  description:
    "Thought leadership on AI strategy, implementation, and operations.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const allTags = getAllTags();
  const allThemes = getAllThemes();

  return (
    <>
      <section className="bg-canvas pt-[72px]">
        <Container className="py-16 md:py-[100px]">
          <FadeIn>
            <span className="font-sans text-[14px] font-medium uppercase tracking-[0.08em] text-blueprint">
              Insights
            </span>
            <h1 className="mt-4 font-display text-[40px] font-bold leading-tight text-ink md:text-[56px]">
              Ideas that move<br className="hidden md:block" /> the needle.
            </h1>
            <p className="mt-5 max-w-[600px] font-sans text-lg text-charcoal/75">
              Practical thinking on AI strategy, engineering, and operations.
              No fluff, just what works.
            </p>
          </FadeIn>

          <div className="mt-12">
            <BlogGallery
              posts={posts}
              allTags={allTags}
              allThemes={allThemes}
            />
          </div>
        </Container>
      </section>
      <GlobalCTA />
    </>
  );
}
