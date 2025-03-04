import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import Link from "next/link";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Intro />
      <Container>
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
      <footer className="py-10 bg-gradient-to-r   text-center mt-10">
        <div className="container mx-auto px-4">
          <p className="text-xl font-bold mb-2">
            Building{" "}
            <Link href="https://fluxanime.com" className="hover:underline" target="_blank" rel="noopener noreferrer">
              Flux Anime
            </Link>
          </p>
          <p className="text-sm opacity-80">Dedicated to building a virtual world</p>
          <p className="mt-4 text-xs">&copy; {new Date().getFullYear()} Flux Anime. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
