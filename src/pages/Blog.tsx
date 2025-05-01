
import { PageLayout } from "@/components/page-layout";
import { BlogPostCard } from "@/components/blog-post-card";

// Sample blog data (in a real app, this would come from a CMS or API)
const blogPosts = [
  {
    id: "1",
    slug: "house-sparrow-decline",
    title: "Understanding the House Sparrow Decline in Urban Areas",
    excerpt: "House sparrow populations have declined dramatically in many cities around the world. This article explores the causes and what we can do to help reverse this trend.",
    date: "2023-11-15T12:00:00Z",
    imageUrl: "https://images.unsplash.com/photo-1552727451-6f5671e14d83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    content: "Lorem ipsum...",
  },
  {
    id: "2",
    slug: "creating-sparrow-friendly-balcony",
    title: "How to Create a Sparrow-Friendly Balcony in Your Apartment",
    excerpt: "Even with limited space, apartment dwellers can provide safe havens for sparrows. Learn how to transform your balcony into a bird-friendly oasis.",
    date: "2023-10-22T12:00:00Z",
    imageUrl: "https://images.unsplash.com/photo-1591758879073-6fc9c4ee5162?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
    content: "Lorem ipsum...",
  },
  {
    id: "3",
    slug: "sparrow-nest-maintenance",
    title: "Seasonal Guide: Maintaining Your Sparrow Nest Throughout the Year",
    excerpt: "While our nests are designed to be low-maintenance, here are some seasonal tips to ensure they remain attractive and safe for sparrows year-round.",
    date: "2023-09-18T12:00:00Z",
    imageUrl: "https://images.unsplash.com/photo-1591445313121-6ec078571574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    content: "Lorem ipsum...",
  },
  {
    id: "4",
    slug: "sparrow-community-stories",
    title: "Community Stories: How Sparrows Changed Our Neighborhood",
    excerpt: "Read inspiring stories from our community members who have seen positive changes in their neighborhoods after installing sparrow nests.",
    date: "2023-08-05T12:00:00Z",
    imageUrl: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    content: "Lorem ipsum...",
  },
  {
    id: "5",
    slug: "sparrows-urban-biodiversity",
    title: "The Role of Sparrows in Urban Biodiversity",
    excerpt: "Sparrows are more than just charming birds – they play a crucial role in maintaining ecological balance in our cities. Learn about their importance.",
    date: "2023-07-12T12:00:00Z",
    imageUrl: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    content: "Lorem ipsum...",
  },
  {
    id: "6",
    slug: "feeding-sparrows-properly",
    title: "Guide to Feeding Sparrows: Do's and Don'ts",
    excerpt: "While installing a nest is a great first step, learning how to properly feed sparrows can further help their populations thrive in urban areas.",
    date: "2023-06-30T12:00:00Z",
    imageUrl: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    content: "Lorem ipsum...",
  },
];

const Blog = () => {
  return (
    <PageLayout>
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">Sparrow Stories & Tips</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Stay updated with the latest insights on house sparrows, conservation efforts, 
              and tips for creating sparrow-friendly urban environments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogPostCard
                key={post.id}
                id={post.id}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                imageUrl={post.imageUrl}
                className={`animate-fade-in [animation-delay:${index * 100}ms]`}
              />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Blog;
