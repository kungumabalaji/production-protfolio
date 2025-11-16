import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen, GraduationCap } from "lucide-react";
import cert3ns from "@/assets/cert-3ns.webp";
import certLsbu from "@/assets/cert-lsbu.webp";
import certLinkedin from "@/assets/cert-linkedin.webp";

const Academics = () => {
  const certifications = [
    {
      title: "AI/ML Full Stack Developer Internship",
      issuer: "3NS.AI - AI Web3",
      date: "2024",
      image: cert3ns,
      description: "Completed intensive internship focusing on AI and ML full-stack development with Web3 integration"
    },
    {
      title: "AI and Machine Learning Bootcamp",
      issuer: "London South Bank University",
      date: "July 2024",
      image: certLsbu,
      topics: [
        "Python Programming",
        "Matplotlib and Seaborn Visualization",
        "Pandas Data Frames",
        "Machine Learning Regression Models with Scikit-Learn",
        "Deep Learning with TensorFlow"
      ]
    },
    {
      title: "Artificial Intelligence and Business Strategy",
      issuer: "LinkedIn Learning",
      date: "January 2024",
      image: certLinkedin,
      skills: ["Business Strategy", "AI for Business", "Artificial Intelligence (AI)"]
    }
  ];

  const research = [
    {
      title: "HTAMV - Hybrid Temporal-Attentive Multi-Asset Volatility Forecasting Framework",
      type: "Master's Dissertation - Distinction",
      institution: "London South Bank University",
      year: "2025",
      description: "Advanced deep learning framework predicting volatility across ALL major asset classes (stocks, forex, crypto, commodities) using hybrid Transformer-LSTM architecture with Temporal Attention Engine and SHAP XAI",
      highlights: [
        "28% R² accuracy improvement over baseline models",
        "Multi-asset volatility prediction: TSLA, BTC/USD, EUR/USD, Gold, S&P500",
        "Hybrid Transformer + LSTM with Temporal Attention Engine for high-impact window identification",
        "Explainable AI (SHAP) for financial interpretability and decision-making transparency",
        "Real-time deployment with FastAPI and live forecasting dashboard",
        "15,000-word comprehensive research dissertation achieving Distinction grade"
      ]
    },
    {
      title: "AI-Powered Network Intelligence System",
      type: "Research & Analysis",
      institution: "Independent Research",
      year: "2024",
      description: "Advanced AI system analyzing 1,872 LinkedIn connections using LLaMA 2 & Mistral 7B for blockchain talent discovery, sentiment analysis, and opportunity mapping",
      highlights: [
        "Analyzed professional histories and career patterns with local LLM inference",
        "Identified 127 blockchain professionals and crypto founders with high collaboration potential",
        "Mapped career frustration signals and transition patterns using sentiment AI",
        "Detected 20+ banking-to-crypto career transitions through pattern analysis",
        "Built 3D opportunity visualization system combining frustration, impact, and network strength"
      ]
    },
    {
      title: "Manufacturing Analysis of Quality Inspection",
      type: "Research Presentation",
      institution: "London South Bank University",
      year: "2024",
      description: "Intelligent automation for transforming quality inspection in smart manufacturing using AI-powered analysis"
    }
  ];

  const publications = [
    {
      title: "VS Medical Chatbot - Verified Medical AI System",
      platform: "LinkedIn & Research",
      description: "Enterprise-grade medical AI chatbot powered by Gale Encyclopedia of Medicine, LangChain, and Pinecone RAG. Features transparent medical reasoning, zero hallucinations with strict retrieval constraints, and full traceability with source citations."
    },
    {
      title: "Universal AI Companion App - Multimodal AI Innovation",
      platform: "Research & Development",
      description: "Next-generation multimodal intelligence system integrating speech, vision, reasoning, memory, and RAG for human-centered universal companion applications."
    }
  ];

  return (
    <div className="py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4 text-gradient">Academic Achievements</h1>
          <p className="text-xl text-muted-foreground">
            Continuous learning and research in artificial intelligence and machine learning
          </p>
        </div>

        {/* Education */}
        <section className="mb-12 animate-slide-in-right">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-primary" />
            Education
          </h2>
          <Card className="shadow-card">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    MSc in Artificial Intelligence
                  </h3>
                  <p className="text-lg font-semibold mb-2">London South Bank University</p>
                  <p className="text-muted-foreground mb-3">2024 - 2025</p>
                  <p className="text-foreground/80">
                    Specializing in deep learning, multimodal AI systems, and explainable AI with 
                    focus on financial applications and regulated environments.
                  </p>
                </div>
                <div className="border-t border-border pt-6 mt-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    BCom Honours (Business Computing)
                  </h3>
                  <p className="text-lg font-semibold mb-2">London South Bank University</p>
                  <p className="text-muted-foreground mb-3">2019 - 2023</p>
                  <p className="text-foreground/80">
                    Business Computing with focus on Data Analytics, AI Applications, and Enterprise Systems Integration.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Research */}
        <section className="mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-primary" />
            Research Work
          </h2>
          <div className="space-y-6">
            {research.map((item, index) => (
              <Card key={index} className="shadow-card border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">{item.title}</CardTitle>
                  <div className="flex gap-4 text-muted-foreground">
                    <Badge variant="outline">{item.type}</Badge>
                    <span>{item.institution}</span>
                    <span>•</span>
                    <span>{item.year}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-4">{item.description}</p>
                  {item.highlights && (
                    <ul className="space-y-2">
                      {item.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                          <span className="text-primary">▸</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Award className="w-8 h-8 text-primary" />
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="shadow-card hover:shadow-lg transition-all duration-300 overflow-hidden group">
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                  <p className="text-sm text-primary font-semibold">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground">{cert.date}</p>
                </CardHeader>
                <CardContent>
                  {cert.description && (
                    <p className="text-sm text-foreground/80 mb-3">{cert.description}</p>
                  )}
                  {cert.topics && (
                    <div>
                      <p className="text-sm font-semibold mb-2">Topics Covered:</p>
                      <ul className="space-y-1">
                        {cert.topics.map((topic, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground flex gap-1">
                            <span className="text-primary">•</span>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {cert.skills && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {cert.skills.map((skill, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Publications */}
        <section className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <h2 className="text-3xl font-bold mb-6">Publications & Articles</h2>
          <div className="space-y-4">
            {publications.map((pub, index) => (
              <Card key={index} className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-1">{pub.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">Published on {pub.platform}</p>
                  <p className="text-foreground/80">{pub.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Academics;
