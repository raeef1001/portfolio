import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import Parser from "rss-parser";

let cachedMediumPosts: any[] | null = null; // Cache variable

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  external?: boolean;
  externalUrl?: string; // Add this
};

const MEDIUM_RSS_URL = "https://medium.com/feed/@mohammadrafy1001";

async function getMediumPosts() {
  if (cachedMediumPosts) {
    console.log("Returning cached Medium posts.");
    return cachedMediumPosts;
  }

  const parser = new Parser();
  const feed = await parser.parseURL(MEDIUM_RSS_URL);
  console.log(`Fetched ${feed.items.length} items from Medium RSS feed.`);

  const posts = feed.items.map((item) => {
    let imageUrl = undefined;

    // 1. Prioritize item.thumbnail
    if (item.thumbnail) {
      imageUrl = item.thumbnail;
    }

    // 2. Check for enclosure URL (often used for media)
    if (!imageUrl && item.enclosure && item.enclosure.url && item.enclosure.type?.startsWith("image/")) {
      imageUrl = item.enclosure.url;
    }

    // 3. Search for image in item.content (which can be HTML)
    // Use item.content or item['content:encoded'] if available
    const contentToParse = item.content || item['content:encoded']; // Try both
    if (!imageUrl && contentToParse) {
      console.log(`Medium Post Content for "${item.title}":`, contentToParse); // Log the content being parsed
      // More specific regex for <img> src, excluding tracking pixels
      // Regex: Look for <img> tag, then src attribute, then capture URL that does NOT start with medium.com/_/stat
      const imgMatch = contentToParse.match(/<img[^>]*src=["'](?!https:\/\/medium\.com\/_\/stat)([^"']*)["'][^>]*>/i);
      if (imgMatch && imgMatch[1]) { // No need for !includes check here, regex handles it
        imageUrl = imgMatch[1];
      }
    }

    // Fallback image if no image is found
    if (imageUrl === undefined) { // Changed from !imageUrl
      imageUrl = "/me.png"; // Using a default image from the public directory
    }
    console.log(`Image URL for "${item.title}": ${imageUrl}`);

    return {
      metadata: {
        title: item.title || "No Title",
        publishedAt: item.pubDate ? new Date(item.pubDate).toISOString() : new Date().toISOString(),
        summary: item.contentSnippet || "No summary available.",
        image: imageUrl,
        external: true,
        externalUrl: item.link || "#", // Store the full URL here
      },
      slug: item.title ? item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-*|-*$/g, '') : "no-title", // Create a simple slug from title
      source: "",
    };
  });

  cachedMediumPosts = posts; // Cache the fetched posts
  return posts;
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

export async function markdownToHTML(markdown: string) {
  const p = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      // https://rehype-pretty.pages.dev/#usage
      theme: {
        light: "min-light",
        dark: "min-dark",
      },
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(markdown);

  return p.toString();
}

export async function getPost(slug: string) {
const filePath = path.resolve(process.cwd(), "src", "content", `${slug}.mdx`);
  let source = fs.readFileSync(filePath, "utf-8");
  const { content: rawContent, data } = matter(source);
  const metadata = {
    title: (data.title as string) || "No Title",
    publishedAt: (data.publishedAt as string) || new Date().toISOString(),
    summary: (data.summary as string) || "No summary available.",
    image: data.image as string | undefined,
    external: data.external as boolean | undefined,
    externalUrl: data.externalUrl as string | undefined,
  } as Metadata;
  const content = await markdownToHTML(rawContent);

  // Extract the first image from the content if metadata.image is not present
  let imageUrl = metadata.image;
  if (!imageUrl) {
    const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
    if (imgMatch && imgMatch[1]) {
      imageUrl = imgMatch[1];
    } else {
      imageUrl = "/me.png"; // Fallback for local posts if no image found
    }
  }

  return {
    source: content,
    metadata: {
      ...metadata,
      image: imageUrl,
    },
    slug,
  };
}

async function getAllPosts(dir: string) {
  let mdxFiles = getMDXFiles(dir);
  return Promise.all(
    mdxFiles.map(async (file) => {
      let slug = path.basename(file, path.extname(file));
      let { metadata, source } = await getPost(slug);
      return {
        metadata,
        slug,
        source,
      };
    }),
  );
}

export async function getBlogPosts() {
const localPosts = await getAllPosts(path.resolve(process.cwd(), "src", "content"));
  const mediumPosts = await getMediumPosts();
  return [...localPosts, ...mediumPosts];
}
