import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroBg from "@/assets/hero-bg.jpg";
import { Brain, Code, Database, Sparkles } from "lucide-react";

const About = () => {
  const skills = [
    "Python", "SpaCy", "NLTK", "LangChain", "LLMs", "GANs",
    "Prompt Engineering", "Multimodal AI", "RAG", "Pinecone", "FAISS",
    "Chroma", "Astra DB", "TensorFlow", "PyTorch", "Transformers",
    "LSTM", "Hugging Face", "AWS", "MLOps", "Flask", "Databricks",
    "Streamlit", "Git", "Salesforce", "Predictive Modelling", "SQL"
  ];

  const expertise = [
    {
      icon: Brain,
      title: "NLP & Generative AI",
      description: "Expert in LLMs, GANs, Prompt Engineering, Multimodal AI using SpaCy, NLTK, and transformer models"
    },
    {
      icon: Code,
      title: "AI Agents & RAG Systems",
      description: "Building Conversational Agents, Autonomous Agents, RAG Agents using LangChain, Pinecone, FAISS, Chroma"
    },
    {
      icon: Database,
      title: "Production ML & MLOps",
      description: "End-to-end ML deployment with AWS, Databricks, Flask, Streamlit with integrated monitoring and CI/CD"
    },
    {
      icon: Sparkles,
      title: "Enterprise Integration",
      description: "Salesforce data integration, predictive modelling, and scalable solutions for production environments"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroBg} 
            alt="AI Background" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 gradient-hero opacity-80" />
        </div>
        <div className="relative z-10 text-center px-8 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Kunguma Balaji Nagarajan
          </h1>
          <p className="text-2xl md:text-3xl text-gradient font-semibold mb-6">
            Data Scientist & AI Engineer
          </p>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Results-driven Data Scientist with 3+ years of experience deploying end-to-end machine learning solutions in production. 
            Expertise in NLP, predictive modelling, Salesforce data integration, AI agents, and cloud-based MLOps (AWS)
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <Card className="shadow-card border-primary/20 animate-slide-in-right">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-gradient">About Me</h2>
              <div className="space-y-4 text-foreground/80">
                <p className="text-lg leading-relaxed">
                  Results-driven Data Scientist with 3+ years of experience deploying end-to-end machine learning 
                  solutions in production environments. Expert in NLP, Generative AI, and predictive modelling with 
                  proven ability to integrate complex AI systems with enterprise platforms like Salesforce and AWS.
                </p>
                <p className="text-lg leading-relaxed">
                  Specialized in building production-ready AI agents, conversational systems, and autonomous agents 
                  using LangChain, RAG architectures, and vector databases (Pinecone, FAISS, Chroma). Strong track record 
                  in MLOps, deploying scalable solutions using Flask, Databricks, and Streamlit while ensuring security, 
                  monitoring, and continuous improvement.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Expertise Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {expertise.map((item, index) => (
              <Card 
                key={index} 
                className="shadow-card hover:shadow-lg hover:border-primary/40 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <item.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skills */}
          <Card className="shadow-card mt-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="px-4 py-2 text-sm bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;
