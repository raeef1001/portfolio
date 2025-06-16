import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">blog</h1>
      </BlurFade>
      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
            {post.metadata.external ? (
              <a
                className="flex space-x-4 mb-4 group"
                href={post.slug}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex-1 flex flex-col">
                  <p className="tracking-tight">{post.metadata.title}</p>
                  <p className="h-6 text-xs text-muted-foreground">
                    {formatDate(post.metadata.publishedAt)} (Medium)
                  </p>
                </div>
                {post.metadata.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.metadata.image}
                    alt={post.metadata.title}
                    className="w-[150px] h-[100px] object-cover rounded-lg group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                )}
              </a>
            ) : (
              <Link
                className="flex space-x-4 mb-4 group"
                href={`/blog/${post.slug}`}
              >
                <div className="flex-1 flex flex-col">
                  <p className="tracking-tight">{post.metadata.title}</p>
                  <p className="h-6 text-xs text-muted-foreground">
                    {formatDate(post.metadata.publishedAt)}
                  </p>
                </div>
                {post.metadata.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.metadata.image}
                    alt={post.metadata.title}
                    className="w-[150px] h-[100px] object-cover rounded-lg group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                )}
              </Link>
            )}
          </BlurFade>
        ))}
    </section>
  );
}
