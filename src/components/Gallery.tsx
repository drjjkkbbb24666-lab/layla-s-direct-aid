import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import sudanFlag from "@/assets/sudan-flag.jpg";
import sudanPeople from "@/assets/sudan-people.jpg";

const images = [
  {
    src: sudanFlag,
    alt: "Sudanese flag against blue sky",
    caption: "The hope of Sudan",
  },
  {
    src: sudanPeople,
    alt: "Sudanese people with flag",
    caption: "Strength in unity",
  },
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-foreground">
            A Journey of Resilience
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(image)}
                className="group relative overflow-hidden rounded-xl cursor-pointer shadow-soft hover:shadow-glow transition-all duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-6 font-medium">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>

          <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="max-w-4xl">
              {selectedImage && (
                <div className="space-y-4">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="w-full h-auto rounded-lg"
                  />
                  <p className="text-center text-lg font-medium">{selectedImage.caption}</p>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};
