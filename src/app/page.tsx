import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { getBlogPosts } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

const BLUR_FADE_DELAY = 0.04;

export default async function Page() {
  const posts = await getBlogPosts();

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-col gap-y-2">
            {DATA.skills.map((category, id) => (
              <div key={category.title}>
                <BlurFade delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <h3 className="text-base">{category.title}</h3>
                </BlurFade>
                <div className="flex flex-wrap gap-1 mt-1">
                  {category.items.map((skill, skillId) => (
                    <BlurFade
                      key={skill}
                      delay={BLUR_FADE_DELAY * 11 + id * 0.05 + skillId * 0.02}
                    >
                      <Badge key={skill}>{skill}</Badge>
                    </BlurFade>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I've worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="blog">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Blog
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Latest Posts
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Here are some of my thoughts on software development, life, and more.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {posts
              .sort((a, b) => {
                if (
                  new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
                ) {
                  return -1;
                }
                return 1;
              })
              .slice(0, 4) // Displaying only a few latest posts on homepage
              .map((post, id) => (
                <BlurFade delay={BLUR_FADE_DELAY * 14 + id * 0.05} key={post.slug}>
                  {post.metadata.external ? (
                    <a
                      className="flex flex-col space-y-1 mb-4 group"
                      href={post.slug}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {post.metadata.image && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={post.metadata.image}
                          alt={post.metadata.title}
                          className="w-full h-48 object-cover rounded-lg mb-2 group-hover:scale-105 transition-transform duration-300 ease-in-out"
                        />
                      )}
                      <div className="w-full flex flex-col">
                        <p className="tracking-tight">{post.metadata.title}</p>
                        <p className="h-6 text-xs text-muted-foreground">
                          {formatDate(post.metadata.publishedAt)} (Medium)
                        </p>
                      </div>
                    </a>
                  ) : (
                    <Link
                      className="flex flex-col space-y-1 mb-4 group"
                      href={`/blog/${post.slug}`}
                    >
                      {post.metadata.image && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={post.metadata.image}
                          alt={post.metadata.title}
                          className="w-full h-48 object-cover rounded-lg mb-2 group-hover:scale-105 transition-transform duration-300 ease-in-out"
                        />
                      )}
                      <div className="w-full flex flex-col">
                        <p className="tracking-tight">{post.metadata.title}</p>
                        <p className="h-6 text-xs text-muted-foreground">
                          {formatDate(post.metadata.publishedAt)}
                        </p>
                      </div>
                    </Link>
                  )}
                </BlurFade>
              ))}
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href={DATA.contact.social.X.url}
                  className="text-blue-500 hover:underline"
                >
                  with a direct question on twitter
                </Link>{" "}
                and I'll respond whenever I can. I will ignore all
                soliciting.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="download-cv">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 15}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Resume
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Download My CV
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Access my full professional resume for a detailed overview of my experience and skills.
              </p>
              <Button asChild>
                <Link href="/resume.pdf" target="_blank">
                  <Icons.download className="size-4 mr-2" />
                  Download CV
                </Link>
              </Button>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
