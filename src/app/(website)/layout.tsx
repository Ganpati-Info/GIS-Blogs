import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getPosts } from "@/services/post.service";

export default async function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const posts = await getPosts();

  return (
    <>
      <Navbar allPosts={posts} />

      <main id="main-content" className="flex-1">
        {children}
      </main>

      <Footer />
    </>
  );
}