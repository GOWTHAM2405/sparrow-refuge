
import { useState } from "react";
import { PageLayout } from "@/components/page-layout";
import { GalleryCard } from "@/components/gallery-card";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Sample gallery images (in a real app, these would come from a CMS or API)
const galleryImages = [
  {
    id: "img1",
    imageUrl: "images/sr1.jpg",
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

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <PageLayout>
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">Sparrow Gallery</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              See our sparrow nests in action. These images capture the beauty of house sparrows
              living harmoniously in urban environments with our nests.
            </p>
          </div>
          
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

export default Gallery;
