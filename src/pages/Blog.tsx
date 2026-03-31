import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const articles = [
  {
    title: "Pavers vs Concrete: Which Is Best for Your Home?",
    description: "Compare cost, durability, maintenance, and curb appeal to make the right choice for your Silicon Valley home.",
    path: "/blog/pavers-vs-concrete",
  },
  {
    title: "Artificial Turf vs Natural Sod: A Complete Guide",
    description: "Weigh water savings, maintenance, feel, and long-term value to decide which lawn solution fits your lifestyle.",
    path: "/blog/artificial-turf-vs-sod",
  },
];

const Blog = () => {
  return (
    <Layout
      title="Resources & Guides | Stones Landscaping"
      description="Expert articles and comparison guides on hardscaping, landscaping, and outdoor living for Silicon Valley homeowners."
    >
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            Resources & Guides
          </h1>
          <p className="text-muted-foreground font-light max-w-2xl mb-12">
            In-depth comparisons and expert advice to help you make informed decisions about your outdoor living spaces.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {articles.map((article) => (
              <Link
                key={article.path}
                to={article.path}
                className="group block border border-border/60 rounded-sm p-8 hover:border-primary/40 hover:shadow-lg transition-all"
              >
                <h2 className="font-heading text-xl text-foreground group-hover:text-primary transition-colors mb-3">
                  {article.title}
                </h2>
                <p className="text-sm text-muted-foreground font-light mb-4">
                  {article.description}
                </p>
                <span className="text-sm font-medium text-primary tracking-wide">
                  Read More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
