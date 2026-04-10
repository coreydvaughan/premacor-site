export interface CapabilityEntry {
  slug: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
}

/** Short labels for vertical tabs (services + use cases). */
export const tabLabels: Record<string, string> = {
  "cnc-machining": "CNC Machining",
  fabrication: "Metal Forming & Fabrication",
  "injection-molding": "Injection Molding",
  "production-engineering": "Production Engineering",
  "high-volume": "High-Volume Manufacturing",
  aerospace: "Aerospace",
  medical: "Medical",
  industrial: "Industrial",
  consumer: "Consumer",
  custom: "Custom",
};

export const data: {
  services: CapabilityEntry[];
  useCases: CapabilityEntry[];
} = {
  services: [
    {
      slug: "cnc-machining",
      title: "Tight Tolerances. Repeatable Output.",
      description:
        "Our CNC machining systems are built for consistency across production runs—delivering precision parts that meet exact specifications every time.",
      bullets: [
        "Sub ±0.001” tolerance capability",
        "Multi-axis machining for complex geometries",
        "Production-ready workflows across materials",
      ],
      image: "/images/capabilities/cnc-machined-parts.png",
    },
    {
      slug: "fabrication",
      title: "Formed and Fabricated for Structural Precision",
      description:
        "From flat stock to formed components, our fabrication systems deliver reliable, repeatable results for structural and industrial applications.",
      bullets: [
        "Sheet and tube forming capabilities",
        "Precision bending and fabrication",
        "Consistent output across production runs",
      ],
      image: "/images/capabilities/fabrication.png",
    },
    {
      slug: "injection-molding",
      title: "Plastic Production Without Variability",
      description:
        "We support scalable plastic manufacturing with molding processes designed for consistency, efficiency, and long production cycles.",
      bullets: [
        "Tooling optimized for repeatability",
        "Consistent part quality across batches",
        "Efficient scaling for high-volume demand",
      ],
      image: "/images/capabilities/injection-molding.png",
    },
    {
      slug: "production-engineering",
      title: "Production Systems That Scale With You",
      description:
        "We don’t just make parts—we optimize how they’re made. Our production engineering ensures your designs translate into efficient, scalable manufacturing workflows.",
      bullets: [
        "Process optimization for production efficiency",
        "Workflow design for repeatability",
        "Seamless transition from low to high volume",
      ],
      image: "/images/capabilities/production-engineering.png",
    },
    {
      slug: "high-volume",
      title: "Built for Throughput. Designed for Consistency.",
      description:
        "When volume matters, our systems are engineered to deliver consistent output without sacrificing precision or quality.",
      bullets: [
        "High-output production environments",
        "Integrated quality control systems",
        "Long-term manufacturing scalability",
      ],
      image: "/images/capabilities/high-volume.png",
    },
  ],
  useCases: [
    {
      slug: "aerospace",
      title: "Aerospace Components",
      description: "Precision components built to meet strict aerospace standards and tolerances.",
      bullets: [
        "Tight tolerance machining",
        "High reliability materials",
        "Consistent production quality",
      ],
      image: "/images/capabilities/aerospace.png",
    },
    {
      slug: "medical",
      title: "Medical Devices",
      description:
        "Manufacturing processes designed for precision and reliability in medical applications.",
      bullets: ["High precision components", "Strict quality standards", "Repeatable production"],
      image: "/images/capabilities/medical.png",
    },
    {
      slug: "industrial",
      title: "Industrial Equipment",
      description: "Durable components for heavy-duty industrial systems and environments.",
      bullets: ["Robust fabrication", "High-strength materials", "Scalable production"],
      image: "/images/capabilities/industrial.png",
    },
    {
      slug: "consumer",
      title: "Consumer Products",
      description: "Efficient manufacturing for consumer-facing products at scale.",
      bullets: ["Cost-efficient production", "Consistent output", "Scalable workflows"],
      image: "/images/capabilities/consumer.png",
    },
    {
      slug: "custom",
      title: "Custom Production Runs",
      description: "Flexible production systems for specialized and custom manufacturing needs.",
      bullets: ["Adaptable workflows", "Custom part handling", "Production flexibility"],
      image: "/images/capabilities/custom.png",
    },
  ],
};
