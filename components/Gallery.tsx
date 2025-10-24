"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

const videos = [
  {
    id: 1,
    title: "Training Session Video 1",
    videoId: "QZhPqsd0lms",
    thumbnail: "https://img.youtube.com/vi/QZhPqsd0lms/maxresdefault.jpg",
  },
  {
    id: 2,
    title: "Training Session Video 2",
    videoId: "uR_jaimD8BU",
    thumbnail: "https://img.youtube.com/vi/uR_jaimD8BU/maxresdefault.jpg",
  },
  {
    id: 3,
    title: "Training Session Video 3",
    videoId: "NlD_QiK0zho",
    thumbnail: "https://img.youtube.com/vi/NlD_QiK0zho/maxresdefault.jpg",
  },
  {
    id: 4,
    title: "Training Session Video 4",
    videoId: "g4Yc4Gajt1Q",
    thumbnail: "https://img.youtube.com/vi/g4Yc4Gajt1Q/maxresdefault.jpg",
  },
  {
    id: 5,
    title: "Training Session Video 5",
    videoId: "-b685z1lePA",
    thumbnail: "https://img.youtube.com/vi/-b685z1lePA/maxresdefault.jpg",
  },
  {
    id: 6,
    title: "Training Session Video 6",
    videoId: "mu0EaGEuw6M",
    thumbnail: "https://img.youtube.com/vi/mu0EaGEuw6M/maxresdefault.jpg",
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-padding bg-gradient-to-br from-gray-50 to-white" ref={ref}>
      <div className="container-custom">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
            <Play className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Watch Mr. Gopikrishna in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the energy and transformation of live training sessions
          </p>
          <motion.div
            className="w-24 h-1 bg-accent mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </motion.div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group cursor-pointer"
              onClick={() => setSelectedVideo(video.videoId)}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Thumbnail */}
                <div className="relative aspect-video">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 225'%3E%3Crect width='400' height='225' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='Arial' font-size='16' fill='%236b7280'%3EVideo Thumbnail%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                      <Play className="w-10 h-10 text-white ml-1" fill="white" />
                    </div>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-lg">
                      {video.title}
                    </h3>
                  </div>
                </div>

                {/* Hover Border */}
                <div className="absolute inset-0 border-4 border-accent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-5xl p-0 bg-black border-0">
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute -top-12 right-0 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors z-50"
          >
            <X className="w-6 h-6" />
          </button>
          {selectedVideo && (
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

