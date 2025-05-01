
import { useState } from "react";
import { PageLayout } from "@/components/page-layout";
import { BlogPostCard } from "@/components/blog-post-card";
import { GalleryCard } from "@/components/gallery-card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample blog data
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

// Sample gallery images
const galleryImages = [
  {
    id: "img1",
    imageUrl: "https://images.unsplash.com/photo-1552727451-6f5671e14d83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    caption: "House sparrow perched on a branch in an urban park",
  },
  {
    id: "img2",
    imageUrl: "https://images.unsplash.com/photo-1591445313121-6ec078571574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    caption: "A sparrow enjoying our compact nest design on an apartment balcony",
  },
  {
    id: "img3",
    imageUrl: "https://images.unsplash.com/photo-1591758879073-6fc9c4ee5162?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
    caption: "Mother sparrow feeding her young in one of our standard nests",
  },
  {
    id: "img4",
    imageUrl: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    caption: "Sparrows gathering near a community installation in a city garden",
  },
  {
    id: "img5",
    imageUrl: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    caption: "A family of sparrows making themselves at home in our deluxe nest model",
  },
  {
    id: "img6",
    imageUrl: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    caption: "Sparrows interacting with their urban environment near a nest installation",
  },
  {
    id: "img7",
    imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    caption: "A sparrow nest installed in a natural setting at the edge of an urban park",
  },
  {
    id: "img8",
    imageUrl: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    caption: "Sparrows thriving in a busy urban environment with our nests nearby",
  },
];

const BlogAndGallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <PageLayout>
      <section className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">Sparrow Stories & Gallery</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Read about our latest sparrow conservation efforts and view our gallery of sparrows in their urban habitats.
            </p>
          </div>

          <Tabs defaultValue="blog" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="blog">Blog</TabsTrigger>
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
            </TabsList>

            <TabsContent value="blog">
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
            </TabsContent>
            
            <TabsContent value="gallery">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryImages.map((image, index) => (
                  <GalleryCard
                    key={image.id}
                    imageUrl={image.imageUrl}
                    caption={image.caption}
                    onClick={() => setSelectedImage(image)}
                    className={`animate-fade-in [animation-delay:${index * 100}ms]`}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          {selectedImage && (
            <div>
              <img 
                src={selectedImage.imageUrl} 
                alt={selectedImage.caption} 
                className="w-full object-contain max-h-[80vh]"
              />
              <div className="p-4">
                <p className="text-gray-700 font-serif">{selectedImage.caption}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </PageLayout>
  );
};

export default BlogAndGallery;
