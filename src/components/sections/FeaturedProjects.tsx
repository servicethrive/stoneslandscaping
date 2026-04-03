import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import catalinaPavers from "@/assets/projects/Catalina_Grana_pavers.jpg";
import outdoorKitchenFirepit from "@/assets/projects/outdoor_kitchen_and_firepit.jpg";
import outdoorKitchenPergola from "@/assets/projects/outdoor_kitchen_with_a_pergola.jpg";
import landscapingSanJose from "@/assets/projects/landscaping-san-jose-ca.jpg";
import lavaRockLandscaping from "@/assets/projects/lava-rock-landscaping-san-jose.jpg";
import woodFinishWalkway from "@/assets/projects/Wood_finish_Porcelain_walkway.jpg";
import lavaRockHardscape from "@/assets/projects/lava-rock-hardscape-san-jose.jpg";
import prefabPergola from "@/assets/projects/Prefabricated_placebo-2.jpg";
import stampedConcrete from "@/assets/projects/Stamped_concrete.jpg";

const projects = [
  {
    title: "Catalina Grana Pavers & Gazebo",
    location: "San Jose, CA",
    image: catalinaPavers,
  },
  {
    title: "Outdoor Kitchen & Fire Pit",
    location: "San Jose, CA",
    image: outdoorKitchenFirepit,
  },
  {
    title: "Outdoor Kitchen & Pergola",
    location: "San Jose, CA",
    image: outdoorKitchenPergola,
  },
  {
    title: "Modern Landscaping Design",
    location: "San Jose, CA",
    image: landscapingSanJose,
  },
  {
    title: "Lava Rock Landscaping",
    location: "San Jose, CA",
    image: lavaRockLandscaping,
  },
  {
    title: "Wood Finish Porcelain Walkway",
    location: "San Jose, CA",
    image: woodFinishWalkway,
  },
];

const FeaturedProjects = () => (
  <section className="py-20 lg:py-28 bg-brand-charcoal">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <div className="w-12 h-0.5 bg-primary mx-auto mb-6" />
        <h2 className="font-display text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-3">
          Featured Projects
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto font-light text-lg">
          Recent transformations by Stones Landscaping
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[240px]">
        {projects.map((project, i) => (
          <div
            key={i}
            className={`relative overflow-hidden rounded-sm group cursor-pointer ${
              i === 0 ? "col-span-2 row-span-2" : ""
            }`}
          >
            <img
              src={project.image}
              alt={`${project.title} — ${project.location}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <p className="text-white font-semibold text-sm md:text-base">
                {project.title}
              </p>
              <p className="text-primary text-xs tracking-wide uppercase">
                {project.location}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button
          asChild
          variant="outline"
          className="border-primary text-primary hover:bg-primary hover:text-white tracking-widest uppercase text-xs px-8 py-5 font-semibold"
        >
          <Link to="/gallery">
            View Full Portfolio <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

export default FeaturedProjects;
