"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, X, Calendar, Tag, Layers, Clock, ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import type { BlogMeta } from "@/lib/blog";

// ─── Filter Pill ─────────────────────────────────────────────────────────────

function Pill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex items-center rounded-full px-3.5 py-1.5 font-sans text-[13px] font-medium transition-all duration-200 cursor-pointer",
        active
          ? "bg-ink text-white shadow-sm"
          : "bg-wash text-charcoal hover:bg-gridline hover:text-ink",
      )}
    >
      {label}
    </button>
  );
}

// ─── Blog Card ───────────────────────────────────────────────────────────────

function BlogCard({ post, index }: { post: BlogMeta; index: number }) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border border-gridline bg-white transition-all duration-300",
        "hover:border-blueprint/30 hover:shadow-[0_8px_30px_rgba(59,125,216,0.08)] hover:-translate-y-1",
      )}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Gradient cover */}
      <div
        className={cn(
          "relative h-[200px] overflow-hidden bg-gradient-to-br",
          post.coverGradient,
        )}
      >
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* Theme badge */}
        <div className="absolute left-4 top-4">
          <span className="inline-flex items-center rounded-[4px] bg-white/90 px-2.5 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.06em] text-ink backdrop-blur-sm">
            {post.theme}
          </span>
        </div>
        {/* Decorative accent line */}
        <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-blueprint transition-all duration-500 group-hover:w-full" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Tags */}
        <div className="mb-3 flex flex-wrap gap-1.5">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-block rounded-[3px] bg-blueprint/8 px-2 py-0.5 font-mono text-[11px] font-medium text-blueprint"
            >
              {tag}
            </span>
          ))}
          {post.tags.length > 3 && (
            <span className="inline-block rounded-[3px] bg-wash px-2 py-0.5 font-mono text-[11px] font-medium text-charcoal/60">
              +{post.tags.length - 3}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-display text-[20px] font-bold leading-snug text-ink transition-colors group-hover:text-blueprint md:text-[22px]">
          {post.title}
        </h3>

        {/* Description */}
        <p className="mt-3 line-clamp-3 flex-1 font-sans text-[15px] leading-relaxed text-charcoal/75">
          {post.description}
        </p>

        {/* Footer */}
        <div className="mt-5 flex items-center justify-between border-t border-gridline/60 pt-4">
          <div className="flex items-center gap-4 font-sans text-[13px] text-charcoal/50">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
          </div>
          <span className="flex items-center gap-1 font-sans text-[13px] font-medium text-blueprint opacity-0 transition-all duration-200 group-hover:opacity-100">
            Read
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

// ─── Gallery ─────────────────────────────────────────────────────────────────

export function BlogGallery({
  posts,
  allTags,
  allThemes,
}: {
  posts: BlogMeta[];
  allTags: string[];
  allThemes: string[];
}) {
  const [search, setSearch] = useState("");
  const [activeTags, setActiveTags] = useState<Set<string>>(new Set());
  const [activeTheme, setActiveTheme] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  const filtered = useMemo(() => {
    let result = posts;

    // Text search
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)),
      );
    }

    // Tag filter
    if (activeTags.size > 0) {
      result = result.filter((p) =>
        p.tags.some((t) => activeTags.has(t)),
      );
    }

    // Theme filter
    if (activeTheme) {
      result = result.filter((p) => p.theme === activeTheme);
    }

    // Sort
    if (sortOrder === "oldest") {
      result = [...result].reverse();
    }

    return result;
  }, [posts, search, activeTags, activeTheme, sortOrder]);

  const toggleTag = (tag: string) => {
    setActiveTags((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) next.delete(tag);
      else next.add(tag);
      return next;
    });
  };

  const hasFilters = search || activeTags.size > 0 || activeTheme;

  const clearAll = () => {
    setSearch("");
    setActiveTags(new Set());
    setActiveTheme(null);
  };

  return (
    <div>
      {/* ── Search + Sort Bar ── */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal/40" />
          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-gridline bg-white py-2.5 pl-10 pr-4 font-sans text-[15px] text-ink placeholder:text-charcoal/40 transition-all focus:border-blueprint/50 focus:outline-none focus:ring-2 focus:ring-blueprint/10"
          />
          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal/40 hover:text-ink cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2">
          <span className="font-sans text-[13px] text-charcoal/50">Sort:</span>
          <button
            type="button"
            onClick={() => setSortOrder(sortOrder === "newest" ? "oldest" : "newest")}
            className="flex items-center gap-1.5 rounded-lg border border-gridline bg-white px-3 py-2 font-sans text-[13px] font-medium text-ink transition-colors hover:border-blueprint/30 cursor-pointer"
          >
            <Calendar className="h-3.5 w-3.5 text-charcoal/50" />
            {sortOrder === "newest" ? "Newest first" : "Oldest first"}
          </button>
        </div>
      </div>

      {/* ── Filter Sections ── */}
      <div className="mt-6 space-y-4">
        {/* Themes */}
        {allThemes.length > 1 && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="flex items-center gap-1.5 font-sans text-[13px] font-medium text-charcoal/50">
              <Layers className="h-3.5 w-3.5" />
              Theme
            </span>
            <Pill
              label="All"
              active={activeTheme === null}
              onClick={() => setActiveTheme(null)}
            />
            {allThemes.map((theme) => (
              <Pill
                key={theme}
                label={theme}
                active={activeTheme === theme}
                onClick={() =>
                  setActiveTheme(activeTheme === theme ? null : theme)
                }
              />
            ))}
          </div>
        )}

        {/* Tags */}
        {allTags.length > 0 && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="flex items-center gap-1.5 font-sans text-[13px] font-medium text-charcoal/50">
              <Tag className="h-3.5 w-3.5" />
              Tags
            </span>
            {allTags.map((tag) => (
              <Pill
                key={tag}
                label={tag}
                active={activeTags.has(tag)}
                onClick={() => toggleTag(tag)}
              />
            ))}
          </div>
        )}
      </div>

      {/* ── Active filters bar ── */}
      {hasFilters && (
        <div className="mt-4 flex items-center gap-2">
          <span className="font-sans text-[13px] text-charcoal/50">
            {filtered.length} {filtered.length === 1 ? "result" : "results"}
          </span>
          <button
            type="button"
            onClick={clearAll}
            className="ml-auto flex items-center gap-1 rounded-full bg-wash px-3 py-1 font-sans text-[12px] font-medium text-charcoal/60 transition-colors hover:bg-gridline hover:text-ink cursor-pointer"
          >
            <X className="h-3 w-3" />
            Clear filters
          </button>
        </div>
      )}

      {/* ── Divider ── */}
      <div className="mt-6 border-t border-gridline" />

      {/* ── Card Grid ── */}
      {filtered.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      ) : (
        <div className="mt-16 flex flex-col items-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-wash">
            <Search className="h-7 w-7 text-charcoal/30" />
          </div>
          <h3 className="mt-5 font-display text-[22px] font-bold text-ink">
            No articles found
          </h3>
          <p className="mt-2 max-w-sm font-sans text-[15px] text-charcoal/60">
            Try adjusting your search or filters to find what you&apos;re looking
            for.
          </p>
          <button
            type="button"
            onClick={clearAll}
            className="mt-4 font-sans text-[14px] font-medium text-blueprint hover:text-blueprint-hover transition-colors cursor-pointer"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
