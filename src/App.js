import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Code,
  ShoppingCart,
  Globe,
  Check,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  ArrowRight,
  Star,
  Users,
  Award,
  Zap,
} from "lucide-react";

const ACTWebsite = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Smooth scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "solutions", "pricing", "faqs", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setIsMenuOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const plans = [
    {
      name: "Basic",
      price: "$999",
      period: "one-time",
      description: "Perfect for startups and small businesses",
      features: [
        "Responsive Web Design",
        "Basic E-commerce Setup",
        "Contact Form Integration",
        "SEO Optimization",
        "3 Months Support",
        "Mobile Responsive",
      ],
      color: "from-blue-500 to-cyan-500",
      popular: false,
    },
    {
      name: "Standard",
      price: "$2,499",
      period: "one-time",
      description: "Ideal for growing businesses",
      features: [
        "Custom Software Development",
        "Advanced E-commerce Platform",
        "Payment Gateway Integration",
        "User Management System",
        "Analytics Dashboard",
        "6 Months Support",
        "Database Integration",
        "API Development",
      ],
      color: "from-purple-500 to-pink-500",
      popular: true,
    },
    {
      name: "Elite",
      price: "$4,999",
      period: "one-time",
      description: "Enterprise-grade solutions",
      features: [
        "Full-Stack Custom Development",
        "Enterprise E-commerce Solution",
        "Multi-vendor Marketplace",
        "Advanced Security Features",
        "Cloud Integration",
        "12 Months Premium Support",
        "Performance Optimization",
        "Custom Integrations",
        "Dedicated Project Manager",
      ],
      color: "from-orange-500 to-red-500",
      popular: false,
    },
  ];

  const faqs = [
    {
      question: "What technologies do you use for development?",
      answer:
        "We use modern technologies including React.js, Node.js, Python, PHP, and cloud platforms like AWS and Azure. Our tech stack is chosen based on your specific project requirements.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "Timeline varies based on complexity. Basic projects take 2-4 weeks, Standard projects 4-8 weeks, and Elite projects 8-16 weeks. We provide detailed timelines during consultation.",
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer:
        "Yes! All our plans include support periods ranging from 3-12 months. We also offer extended support packages for ongoing maintenance and updates.",
    },
    {
      question: "Can you integrate with existing systems?",
      answer:
        "Absolutely! We specialize in system integrations and can connect your new solution with existing CRM, ERP, payment systems, and third-party APIs.",
    },
    {
      question: "Do you offer custom solutions outside of the listed plans?",
      answer:
        "Yes, we create fully customized solutions. Our plans are starting points, and we can tailor any package to meet your specific business needs and requirements.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                ACT
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["Home", "Solutions", "Pricing", "FAQs", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`px-3 py-2 rounded-lg transition-all duration-300 hover:bg-slate-700/50 ${
                      activeSection === item.toLowerCase()
                        ? "text-cyan-400 bg-slate-700/30"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-slate-700/50 hover:bg-slate-700"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-lg border-t border-slate-700/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["Home", "Solutions", "Pricing", "FAQs", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/50"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Avyukt Core Technology
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
                Transforming ideas into powerful digital solutions with
                cutting-edge custom software development
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-full">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>Fast Development</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-full">
                <Award className="w-4 h-4 text-green-400" />
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-full">
                <Users className="w-4 h-4 text-blue-400" />
                <span>Expert Team</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection("solutions")}
                className="group bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Explore Solutions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 rounded-xl font-semibold border-2 border-slate-600 hover:border-cyan-500 hover:bg-slate-800/50 transition-all duration-300"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-slate-400" />
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Solutions
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From basic websites to enterprise-grade applications, we deliver
              solutions that scale with your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                Custom Software Development
              </h3>
              <p className="text-slate-300 mb-6">
                Tailored software solutions built with modern technologies to
                meet your specific business requirements and workflows.
              </p>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>Full-stack development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>API integration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>Database design</span>
                </li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">
                E-Commerce Solutions
              </h3>
              <p className="text-slate-300 mb-6">
                Complete online store solutions with payment integration,
                inventory management, and customer analytics.
              </p>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>Payment gateway integration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>Inventory management</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>Order tracking system</span>
                </li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-orange-400">
                Online Store Setup
              </h3>
              <p className="text-slate-300 mb-6">
                Professional online presence with responsive design, SEO
                optimization, and content management systems.
              </p>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>Responsive web design</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>SEO optimization</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>Content management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Choose Your Plan
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Flexible pricing options to match your business needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular
                    ? "border-purple-500/50 ring-2 ring-purple-500/20"
                    : "border-slate-700/50 hover:border-cyan-500/50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-slate-400 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span
                      className={`text-4xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}
                    >
                      {plan.price}
                    </span>
                    <span className="text-slate-400 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => scrollToSection("contact")}
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:transform hover:scale-105 ${
                    plan.popular
                      ? `bg-gradient-to-r ${plan.color} text-white hover:shadow-lg hover:shadow-purple-500/25`
                      : "border-2 border-slate-600 hover:border-cyan-500 hover:bg-slate-800/50"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-20 bg-slate-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-300">
              Got questions? We've got answers to help you make the right choice
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700/50 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-700/30 transition-colors"
                >
                  <span className="text-lg font-semibold text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-cyan-400 transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-slate-300 border-t border-slate-700/50">
                    <p className="pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Let's Start Building Together
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ready to transform your ideas into reality? Get in touch with our
              team today
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700/50">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full p-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full p-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Project Details
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full p-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-colors resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700/50">
                <h3 className="text-2xl font-bold mb-6 text-cyan-400">
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Email</p>
                      <p className="text-slate-300">contact@avyuktcore.tech</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Phone</p>
                      <p className="text-slate-300">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Location</p>
                      <p className="text-slate-300">
                        Hyderabad, Telangana, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700/50">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">
                  Why Choose ACT?
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>5+ years of industry experience</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>100+ successful projects delivered</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>24/7 technical support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>Agile development methodology</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                ACT - Avyukt Core Technology
              </span>
            </div>
            <p className="text-slate-400 mb-6">
              Transforming ideas into powerful digital solutions
            </p>
            <p className="text-slate-500 text-sm">
              © 2025 Avyukt Core Technology. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ACTWebsite;
