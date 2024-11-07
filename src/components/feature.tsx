import { Lightbulb, Workflow, Gauge } from "lucide-react";
import React from "react";

interface feature_details {
  icon: React.ReactNode;
  heading: string;
  body: string;
}

const feature_deatils: feature_details[] = [
  {
    icon: <Lightbulb className="w-6 h-6 text-red-400" />,
    heading: "Ideation & Planning",
    body: "We help refine your idea and create a detailed roadmap for your MVP, focusing on core features that matter.",
  },
  {
    icon: <Workflow className="w-6 h-6 text-red-400" />,
    heading: "Rapid Development",
    body: "Our experienced team builds your MVP using modern tech stack, ensuring quick iterations and quality code.",
  },
  {
    icon: <Gauge className="w-6 h-6 text-red-400" />,
    heading: "Launch & Scale",
    body: "We help you launch your MVP and gather user feedback, setting you up for successful scaling.",
  },
];

const Feature = () => {
  return (
    <div className="py-32 text-center" id="feature">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">How it Works</h2>
      <p className="text-xl text-zinc-400 max-w-[600px] mx-auto mb-16">
        Our streamlined process takes you from concept to launch in three simple
        steps
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {feature_deatils.map((feature, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-zinc-800/50 border border-zinc-700"
          >
            <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mx-auto mb-6">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-4">{feature.heading}</h3>
            <p className="text-zinc-400">{feature.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
