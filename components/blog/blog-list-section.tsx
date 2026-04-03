import { cn } from "@/lib/utils";
import { Newspaper } from "lucide-react";

/** Shape for future blog posts (MDX, CMS, or static data). */
export type BlogPostPreview = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
};

type BlogListSectionProps = {
  className?: string;
};

export function BlogListSection({ className }: BlogListSectionProps) {
  const posts: BlogPostPreview[] = [];

  return (
    <section
      className={cn(
        "relative py-16 lg:py-24 border-b border-foreground/10",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="font-display text-2xl md:text-3xl tracking-tight text-foreground mb-10 md:mb-12">
          Latest posts
        </h2>

        {posts.length === 0 ? (
          <div
            className="rounded-2xl border border-dashed border-foreground/15 bg-foreground/[0.02] px-8 py-16 md:py-20 text-center max-w-2xl mx-auto"
            aria-live="polite"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-foreground/5 text-muted-foreground mb-6">
              <Newspaper className="w-6 h-6" aria-hidden />
            </div>
            <p className="text-foreground font-medium text-lg mb-2">No posts yet</p>
            <p className="text-muted-foreground leading-relaxed">
              We&apos;re lining up articles on the API, releases, and best practices. Check back
              soon—or subscribe in the app when available.
            </p>
          </div>
        ) : (
          <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <li key={post.slug}>
                <article className="rounded-xl border border-foreground/10 bg-background/50 p-6 shadow-sm transition-all duration-150 hover:border-foreground/20 hover:shadow-md">
                  <time
                    className="font-mono text-xs text-muted-foreground"
                    dateTime={post.publishedAt}
                  >
                    {post.publishedAt}
                  </time>
                  <h3 className="font-display text-xl mt-3 mb-2">
                    <a
                      href={`/blog/${post.slug}`}
                      className="text-foreground hover:underline underline-offset-4 transition-colors"
                    >
                      {post.title}
                    </a>
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{post.description}</p>
                </article>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
