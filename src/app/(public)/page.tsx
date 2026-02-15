import { HeroSection } from "@/components/home/hero-section";
import { AboutSection } from "@/components/home/about-section";
import { InstagramSection } from "@/components/home/instagram-section";
import { PostsPreviewSection } from "@/components/home/posts-preview-section";
import { TeamPreviewSection } from "@/components/home/team-preview-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <InstagramSection />
      <PostsPreviewSection />
      <TeamPreviewSection />
    </>
  );
}
