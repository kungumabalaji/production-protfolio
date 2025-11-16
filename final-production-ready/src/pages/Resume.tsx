import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const Resume = () => {
  const experience = [
    {
      title: "Artificial Intelligence Engineer",
      company: "ASPECT, UK",
      location: "On-site",
      period: "May 2025 - Present",
      achievements: [
        "Built production-level voice Agent using LangChain, improving customer interaction accuracy by 42%",
        "Developed Training Agent by fine-tuning LLMs, saving 45% in training costs",
        "Built customer portal integrating Salesforce with Firebase and React, reducing query latency by 40%",
        "Automated Salesforce processes with Selenium, cutting QA time by 70%",
        "Developed AI-powered Interview Analysis Tool, reducing manual review time by 60%"
      ]
    },
    {
      title: "Artificial Intelligence Researcher",
      company: "London South Bank University, UK",
      location: "Research",
      period: "July 2025 - Ongoing",
      achievements: [
        "Led AI research on multimodal systems integrating NLP and anomaly detection",
        "Drove collaborative research projects with industry partners for regulated environments",
        "Developed models with explainability focus for stakeholder understanding",
        "Conducting research on multimodal AI integration and compliance"
      ]
    },
    {
      title: "AI Intern",
      company: "Syntagma Labs, UK",
      location: "Remote",
      period: "January 2025 - May 2025",
      achievements: [
        "Built RAG-based AI assistants improving operational efficiency by 25%",
        "Deployed client-facing AI systems with transparent predictions",
        "Collaborated with stakeholders via dashboards & ML reports",
        "Delivered AI-driven solutions for financial clients"
      ]
    },
    {
      title: "AI Intern",
      company: "Small Cap AI, UK",
      location: "Remote",
      period: "July 2024 - November 2024",
      achievements: [
        "Built Agentic AI assistance with RAG pipelines, boosting prediction accuracy by 30%",
        "Built ML models to drive predictive insights for small-cap investment",
        "Delivered client-facing AI demos and insights",
        "Built LLM-powered chatbot for client engagement"
      ]
    },
    {
      title: "Financial Analysis Intern",
      company: "India Infoline Finance, India",
      location: "On-site",
      period: "February 2023 - July 2023",
      achievements: [
        "Managed high-volume financial data and client portfolios",
        "Conducted risk assessment and performance analysis",
        "Collaborated with stakeholders on investment strategies"
      ]
    }
  ];

  const education = [
    {
      degree: "MSc in Artificial Intelligence",
      institution: "London South Bank University",
      period: "2024 - 2025",
      details: "Dissertation: Explainable Deep Learning Framework for Multi-Asset Volatility Forecasting"
    },
    {
      degree: "Bachelor's in Computer Science",
      institution: "Previous Institution",
      period: "2019 - 2023",
      details: "Focus on Machine Learning and Data Science"
    }
  ];

  return (
    <div className="py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gradient animate-fade-in">Resume</h1>

        {/* Work Experience */}
        <section className="mb-12 animate-slide-in-right">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-primary" />
            Work Experience
          </h2>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <Card key={index} className="shadow-card hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">{job.title}</CardTitle>
                  <div className="flex flex-wrap gap-4 text-muted-foreground mt-2">
                    <span className="font-semibold">{job.company}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {job.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex gap-2 text-foreground/80">
                        <span className="text-primary mt-1">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-3xl font-bold mb-6">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{edu.degree}</h3>
                  <p className="text-lg font-semibold mb-1">{edu.institution}</p>
                  <p className="text-muted-foreground mb-2">{edu.period}</p>
                  <p className="text-foreground/80">{edu.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills Summary */}
        <section className="mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Card className="shadow-card bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Core Competencies</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h3 className="font-semibold text-primary mb-3">AI & ML</h3>
                  <div className="space-y-1 text-sm">
                    <Badge variant="outline">LLM Development</Badge>
                    <Badge variant="outline">RAG Systems</Badge>
                    <Badge variant="outline">Deep Learning</Badge>
                    <Badge variant="outline">NLP</Badge>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-3">Tools & Frameworks</h3>
                  <div className="space-y-1 text-sm">
                    <Badge variant="outline">LangChain</Badge>
                    <Badge variant="outline">Azure AI</Badge>
                    <Badge variant="outline">Databricks</Badge>
                    <Badge variant="outline">TensorFlow</Badge>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-3">Development</h3>
                  <div className="space-y-1 text-sm">
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">TypeScript</Badge>
                    <Badge variant="outline">Firebase</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Resume;
