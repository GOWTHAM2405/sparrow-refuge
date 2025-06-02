
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
    imageUrl: "images/sr3.png",
    content: "Lorem ipsum...",
  },
  {
    id: "2",
    slug: "creating-sparrow-friendly-balcony",
    title: "How to Create a Sparrow-Friendly Balcony in Your Apartment",
    excerpt: "Even with limited space, apartment dwellers can provide safe havens for sparrows. Learn how to transform your balcony into a bird-friendly oasis.",
    date: "2023-10-22T12:00:00Z",
    imageUrl: "images/sr18.png",
    content: "Lorem ipsum...",
  },
  {
    id: "3",
    slug: "sparrow-nest-maintenance",
    title: "Seasonal Guide: Maintaining Your Sparrow Nest Throughout the Year",
    excerpt: "While our nests are designed to be low-maintenance, here are some seasonal tips to ensure they remain attractive and safe for sparrows year-round.",
    date: "2023-09-18T12:00:00Z",
    imageUrl: "images/sr26.png",
    content: "Lorem ipsum...",
  },
  {
    id: "4",
    slug: "sparrow-community-stories",
    title: "Community Stories: How Sparrows Changed Our Neighborhood",
    excerpt: "Read inspiring stories from our community members who have seen positive changes in their neighborhoods after installing sparrow nests.",
    date: "2023-08-05T12:00:00Z",
    imageUrl: "images/sr16.jpg",
    content: "Lorem ipsum...",
  },
  {
    id: "5",
    slug: "sparrows-urban-biodiversity",
    title: "The Role of Sparrows in Urban Biodiversity",
    excerpt: "Sparrows are more than just charming birds – they play a crucial role in maintaining ecological balance in our cities. Learn about their importance.",
    date: "2023-07-12T12:00:00Z",
    imageUrl: "images/sr22.png",
    content: "Lorem ipsum...",
  },
  {
    id: "6",
    slug: "feeding-sparrows-properly",
    title: "Guide to Feeding Sparrows: Do's and Don'ts",
    excerpt: "While installing a nest is a great first step, learning how to properly feed sparrows can further help their populations thrive in urban areas.",
    date: "2023-06-30T12:00:00Z",
    imageUrl: "images/sr20.png",
    content: "Lorem ipsum...",
  },
];

// Sample gallery images
const galleryImages = [
  {
    id: "img1",
    imageUrl: "images/sr26.png",
    caption: "House sparrow perched on a branch in an urban park",
  },
  {
    id: "img2",
    imageUrl: "images/sr1.jpg",
    caption: "A sparrow enjoying our compact nest design on an apartment balcony",
  },
  {
    id: "img3",
    imageUrl: "images/sr17.png",
    caption: "Mother sparrow feeding her young in one of our standard nests",
  },
  {
    id: "img4",
    imageUrl: "images/sr20.png",
    caption: "Sparrows gathering near a community installation in a city garden",
  },
  {
    id: "img5",
    imageUrl: "images/sr23.png",
    caption: "A family of sparrows making themselves at home in our deluxe nest model",
  },
  {
    id: "img6",
    imageUrl: "images/sr25.png",
    caption: "Sparrows interacting with their urban environment near a nest installation",
  },
  {
    id: "img7",
    imageUrl: "images/sr14.jpg",
    caption: "A sparrow nest installed in a natural setting at the edge of an urban park",
  },
  {
    id: "img8",
    imageUrl: "images/sr7.jpg",
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
