import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import aiCompanionImg from "@/assets/project-ai-companion.jpg";
import medicalChatbotImg from "@/assets/project-medical-chatbot.jpg";
import dissertationImg from "@/assets/project-dissertation.jpg";
import networkAnalysisImg from "@/assets/network-analysis.png";

const Projects = () => {
  const projects = [
    {
      title: "Universal AI Companion App — Advanced Multimodal AI Innovation",
      description: "Next-generation multimodal intelligence system combining speech, vision, reasoning, memory, and RAG for human-centered universal companion",
      image: aiCompanionImg,
      tags: ["Multimodal AI", "Vision Transformers", "Speech AI", "LangChain", "RAG", "Pinecone"],
      highlights: [
        "Speech Intelligence with real-time conversational interaction",
        "Visual Reasoning with image analysis and OCR",
        "Long-term memory with persistent context storage",
        "Multi-agent orchestration for specialized tasks",
        "RAG Knowledge Engine powered by Pinecone",
        "Adaptive learning based on user behavior"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "HTAMV - Hybrid Temporal-Attentive Multi-Asset Volatility Forecasting",
      description: "MSc Distinction-level framework predicting volatility across stocks, forex & crypto using hybrid Transformer-LSTM with Temporal Attention and SHAP XAI",
      image: dissertationImg,
      tags: ["Transformers", "LSTM", "XAI", "SHAP", "FinTech", "Deep Learning"],
      highlights: [
        "28% R² improvement over baseline models",
        "Forecasts volatility for TSLA, BTC/USD, EUR/USD, Gold, S&P500",
        "Hybrid Transformer + LSTM with Temporal Attention Engine",
        "Explainable AI using SHAP for financial interpretability",
        "Real-time deployment with FastAPI and live dashboard",
        "15,000-word research dissertation - Distinction grade"
      ],
      github: "#"
    },
    {
      title: "VS Medical Chatbot - Verified Medical AI System",
      description: "Enterprise-grade medical AI chatbot powered by Gale Encyclopedia of Medicine, LangChain, and Pinecone RAG for authoritative healthcare information",
      image: medicalChatbotImg,
      tags: ["Healthcare AI", "RAG", "LangChain", "Pinecone", "Clinical NLP"],
      highlights: [
        "Verified medical knowledge from Gale Encyclopedia",
        "Transparent medical reasoning with source citations",
        "RAG pipeline for semantic knowledge retrieval",
        "Zero hallucinations with strict retrieval constraints",
        "Enterprise-ready for hospitals and telemedicine",
        "Structured answers: definition, causes, symptoms, diagnosis, treatment"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "AI-Powered Network Intelligence - LLaMA 2 & Mistral",
      description: "Advanced AI system analyzing 1,872 LinkedIn connections using LLaMA 2 & Mistral for blockchain talent discovery, sentiment analysis, and opportunity mapping",
      image: networkAnalysisImg,
      tags: ["LLaMA 2", "Mistral", "NLP", "Sentiment AI", "Network Analysis"],
      highlights: [
        "Analyzed 1,872 connections with local LLM inference",
        "Identified 127 blockchain professionals and founders",
        "Career frustration mapping with sentiment AI",
        "Detected 20+ banking-to-crypto transitions",
        "$2.3M+ potential value identification",
        "3D opportunity visualization system"
      ],
      github: "#"
    },
    {
      title: "NeuroLife AI - Multimodal System for Learning Disabilities",
      description: "Multimodal AI system engineered for individuals with learning and cognitive disabilities, integrating vision, speech, and reasoning models",
      image: aiCompanionImg,
      tags: ["Multimodal AI", "CUDA", "Whisper", "CLIP", "Assistive Tech"],
      highlights: [
        "CUDA-accelerated speech pipeline with Whisper",
        "Vision understanding with CLIP and Vision Transformers",
        "Adaptive learning profiles using RL-based feedback",
        "Real-time context switching for user modes",
        "RAG knowledge network for medical & educational domains",
        "Error correction layer for dyslexia-friendly output"
      ],
      github: "#"
    },
    {
      title: "AI-Powered Intelligent Scheduling System",
      description: "Deep learning system optimizing agricultural job scheduling with real-time deployment and predictive resource allocation",
      image: networkAnalysisImg,
      tags: ["Deep Learning", "Optimization", "Real-Time ML", "Resource Planning"],
      highlights: [
        "Real-time job scheduling optimization",
        "Predictive resource allocation algorithms",
        "Integration with agricultural management systems",
        "Production-grade deployment with monitoring"
      ],
      github: "#"
    }
  ];

  return (
    <div className="py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4 text-gradient">Projects</h1>
          <p className="text-xl text-muted-foreground">
            Innovative AI solutions spanning healthcare, finance, and enterprise applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="shadow-card hover:shadow-lg transition-all duration-300 overflow-hidden group animate-slide-in-right"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{project.title}</CardTitle>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="text-primary">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-primary/10 text-primary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.github && (
                    <Button variant="outline" size="sm" className="gap-2">
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                  )}
                  {project.demo && (
                    <Button size="sm" className="gap-2 bg-primary hover:bg-primary/90">
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
