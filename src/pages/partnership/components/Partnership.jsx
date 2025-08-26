
import { CheckCircle, Users, Building2, Star, Award, ArrowRight, HandshakeIcon, Globe, Target, TrendingUp, Calendar, Phone, Mail, Send, ShieldCheck, Network, Crown, Sparkles, ChevronRight, BarChart, DollarSign, Zap, Clock, Briefcase, Monitor, FileCheck, Lock, UserCheck, PieChart, Shield, Heart, Eye, Compass, Lightbulb, Coffee, MessageCircle, Map } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { useState } from 'react';

export default function Partnership() {
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    businessType: '',
    establishedYear: '',
    currentMarkets: '',
    japanExperience: '',
    clientProfile: '',
    partnershipGoals: '',
    uniqueValue: '',
    preferredApproach: '',
    message: ''
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Partnership inquiry submitted:', formData);
    setShowInquiryModal(false);
  };

  const partnershipPhilosophy = [
    {
      principle: 'Curated Excellence',
      description: 'We select partners who share our commitment to exceptional experiences and cultural authenticity.',
      icon: Crown,
      color: 'text-nippon-gold'
    },
    {
      principle: 'Collaborative Innovation',
      description: 'Together, we create unique travel experiences that neither of us could offer independently.',
      icon: Lightbulb,
      color: 'text-nippon-gold'
    },
    {
      principle: 'Mutual Growth',
      description: 'Success is measured by the value we create together, not just transaction volumes.',
      icon: TrendingUp,
      color: 'text-nippon-gold'
    },
    {
      principle: 'Cultural Bridge',
      description: "We help partners authentically connect their clients with Japan's rich cultural heritage.",
      icon: Heart,
      color: 'text-nippon-gold'
    }
  ];

  const partnershipTypes = [
    {
      type: 'Destination Management Partnership',
      subtitle: 'Complete Japan Solutions',
      description: 'We become your dedicated Japan team, handling everything from initial consultation to post-travel follow-up.',
      approach: 'White-label or co-branded',
      ideal: 'Established luxury travel companies looking to expand into Japan',
      benefits: [
        'Complete destination expertise',
        'Custom itinerary development',
        'Local vendor relationships',
        'Cultural authenticity assurance',
        'Crisis management support'
      ],
      icon: Map,
      commitment: 'Long-term strategic partnership'
    },
    {
      type: 'Boutique Collaboration',
      subtitle: 'Specialized Experience Creator',
      description: 'Partner with us to offer exclusive Japan experiences that complement your existing premium services.',
      approach: 'Joint product development',
      ideal: 'Boutique agencies with discerning clientele',
      benefits: [
        'Exclusive experience access',
        'Co-created unique offerings',
        'Premium client referrals',
        'Shared marketing initiatives',
        'Flexible engagement terms'
      ],
      icon: Sparkles,
      commitment: 'Project-based with growth potential'
    },
    {
      type: 'Strategic Alliance',
      subtitle: 'Market Co-Development',
      description: 'Deep, strategic partnership to co-develop the luxury Japan travel market in your region.',
      approach: 'Joint business development',
      ideal: 'Market leaders seeking exclusive Japan partnership',
      benefits: [
        'Market exclusivity agreements',
        'Joint marketing campaigns',
        'Shared business intelligence',
        'Co-investment opportunities',
        'Executive partnership program'
      ],
      icon: Crown,
      commitment: 'Multi-year strategic alliance'
    }
  ];

  const collaborativeProcess = [
    {
      phase: "Discovery & Vision Alignment",
      description: "We explore your business goals, market position, and vision for Japan travel offerings.",
      activities: ["Business assessment", "Market analysis", "Cultural fit evaluation", "Partnership visioning"],
      outcome: "Mutual understanding and strategic direction",
      icon: Eye
    },
    {
      phase: "Co-Creation Workshop",
      description: "Together, we design the partnership structure and unique offerings that will set you apart.",
      activities: ["Partnership design", "Product co-creation", "Pricing strategy", "Brand alignment"],
      outcome: "Customized partnership framework",
      icon: Lightbulb
    },
    {
      phase: "Pilot Program Launch",
      description: "We start with a focused pilot to prove value and refine our collaboration approach.",
      activities: ["Limited rollout", "Performance tracking", "Client feedback", "Process optimization"],
      outcome: "Proven partnership model",
      icon: Zap
    },
    {
      phase: "Strategic Partnership Growth",
      description: "Based on pilot success, we expand the partnership and explore new opportunities together.",
      activities: ["Full market launch", "Ongoing optimization", "Innovation pipeline", "Long-term planning"],
      outcome: "Sustainable competitive advantage",
      icon: TrendingUp
    }
  ];

  const partnershipValues = [
    {
      value: "Cultural Authenticity",
      description: "Every experience we create together honors Japan's rich cultural heritage",
      icon: Heart
    },
    {
      value: "Exceptional Quality",
      description: "We never compromise on the luxury standards that define both our brands",
      icon: Crown
    },
    {
      value: "Transparent Partnership",
      description: "Open communication, shared goals, and mutual respect guide every decision",
      icon: Eye
    },
    {
      value: "Continuous Innovation",
      description: "Together, we push boundaries to create experiences that inspire and transform",
      icon: Lightbulb
    }
  ];

  return (
    <div className="relative">
      {/* Partnership Inquiry Modal */}
      <Dialog open={showInquiryModal} onOpenChange={setShowInquiryModal}>
        <DialogContent className="max-w-4xl h-[90vh] overflow-y-auto p-0 bg-nippon-warm-white">
          <div className="relative">
            {/* Sticky Header */}
            <div className="sticky top-0 z-10 bg-nippon-warm-white border-b border-nippon-border shadow-sm">
              <div className="px-6 py-4">
                <DialogHeader>
                  <DialogTitle className="text-luxury-xl text-nippon-black font-serif text-left">
                    Partnership Conversation
                  </DialogTitle>
                  <DialogDescription className="text-luxury-sm text-nippon-gray font-sans text-left">
                    Let's explore how we can create something extraordinary together
                  </DialogDescription>
                </DialogHeader>
              </div>
            </div>

            {/* Form Content */}
            <div className="p-6">
              <form onSubmit={handleFormSubmit} className="max-w-3xl mx-auto space-y-6">
                
                {/* About Your Company */}
                <div className="bg-nippon-beige/30 p-6 rounded-lg border border-nippon-border space-y-4">
                  <div className="border-b border-nippon-gold/20 pb-3">
                    <h3 className="text-luxury-xl text-nippon-black font-serif mb-1 flex items-center">
                      <span className="w-2 h-2 bg-nippon-gold rounded-full mr-3"></span>
                      About Your Company
                    </h3>
                    <p className="text-luxury-sm text-nippon-gray font-sans">Help us understand your business and vision</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="companyName" className="text-nippon-black font-serif flex items-center">
                        Company Name <span className="text-nippon-gold ml-1">*</span>
                      </Label>
                      <Input
                        id="companyName"
                        value={formData.companyName}
                        onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                        className="enhanced-luxury-input"
                        placeholder="Your company name"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="establishedYear" className="text-nippon-black font-serif">
                        Established Year
                      </Label>
                      <Input
                        id="establishedYear"
                        value={formData.establishedYear}
                        onChange={(e) => setFormData({...formData, establishedYear: e.target.value})}
                        className="enhanced-luxury-input"
                        placeholder="Year founded"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contactName" className="text-nippon-black font-serif flex items-center">
                        Your Name <span className="text-nippon-gold ml-1">*</span>
                      </Label>
                      <Input
                        id="contactName"
                        value={formData.contactName}
                        onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                        className="enhanced-luxury-input"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-nippon-black font-serif flex items-center">
                        Email Address <span className="text-nippon-gold ml-1">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="enhanced-luxury-input"
                        placeholder="your@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="businessType" className="text-nippon-black font-serif">
                      Business Focus
                    </Label>
                    <Select onValueChange={(value) => setFormData({...formData, businessType: value})}>
                      <SelectTrigger className="enhanced-luxury-input">
                        <SelectValue placeholder="Describe your business focus" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="luxury-travel">Luxury Travel Specialists</SelectItem>
                        <SelectItem value="boutique-agency">Boutique Travel Agency</SelectItem>
                        <SelectItem value="corporate-travel">Corporate & Executive Travel</SelectItem>
                        <SelectItem value="cultural-tours">Cultural & Educational Tours</SelectItem>
                        <SelectItem value="adventure-luxury">Adventure & Luxury Combination</SelectItem>
                        <SelectItem value="family-luxury">Luxury Family Travel</SelectItem>
                        <SelectItem value="other">Other Focus</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Your Market & Experience */}
                <div className="bg-nippon-warm-white/80 p-6 rounded-lg border border-nippon-border space-y-4">
                  <div className="border-b border-nippon-gold/20 pb-3">
                    <h3 className="text-luxury-xl text-nippon-black font-serif mb-1 flex items-center">
                      <span className="w-2 h-2 bg-nippon-gold rounded-full mr-3"></span>
                      Your Market & Experience
                    </h3>
                    <p className="text-luxury-sm text-nippon-gray font-sans">Understanding your current position and aspirations</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="currentMarkets" className="text-nippon-black font-serif">
                      Primary Markets & Client Base
                    </Label>
                    <Textarea
                      id="currentMarkets"
                      value={formData.currentMarkets}
                      onChange={(e) => setFormData({...formData, currentMarkets: e.target.value})}
                      className="enhanced-luxury-input min-h-[100px]"
                      placeholder="Tell us about your current markets, client demographics, and geographic focus..."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="japanExperience" className="text-nippon-black font-serif">
                      Current Japan Travel Experience
                    </Label>
                    <Select onValueChange={(value) => setFormData({...formData, japanExperience: value})}>
                      <SelectTrigger className="enhanced-luxury-input">
                        <SelectValue placeholder="Your current level of Japan expertise" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="no-experience">New to Japan travel offerings</SelectItem>
                        <SelectItem value="basic">Basic Japan packages with other operators</SelectItem>
                        <SelectItem value="some-experience">Some Japan experience, seeking improvement</SelectItem>
                        <SelectItem value="experienced">Experienced, looking for strategic partner</SelectItem>
                        <SelectItem value="expert">Expert level, seeking collaboration</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="clientProfile" className="text-nippon-black font-serif">
                      Ideal Client Profile
                    </Label>
                    <Textarea
                      id="clientProfile"
                      value={formData.clientProfile}
                      onChange={(e) => setFormData({...formData, clientProfile: e.target.value})}
                      className="enhanced-luxury-input min-h-[100px]"
                      placeholder="Describe your ideal clients - demographics, travel patterns, spending habits, interests..."
                    />
                  </div>
                </div>

                {/* Partnership Vision */}
                <div className="bg-nippon-beige/30 p-6 rounded-lg border border-nippon-border space-y-4">
                  <div className="border-b border-nippon-gold/20 pb-3">
                    <h3 className="text-luxury-xl text-nippon-black font-serif mb-1 flex items-center">
                      <span className="w-2 h-2 bg-nippon-gold rounded-full mr-3"></span>
                      Partnership Vision
                    </h3>
                    <p className="text-luxury-sm text-nippon-gray font-sans">What would success look like together?</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="preferredApproach" className="text-nippon-black font-serif">
                      Partnership Approach Interest
                    </Label>
                    <Select onValueChange={(value) => setFormData({...formData, preferredApproach: value})}>
                      <SelectTrigger className="enhanced-luxury-input">
                        <SelectValue placeholder="Which approach interests you most?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="destination-management">Destination Management Partnership</SelectItem>
                        <SelectItem value="boutique-collaboration">Boutique Collaboration</SelectItem>
                        <SelectItem value="strategic-alliance">Strategic Alliance</SelectItem>
                        <SelectItem value="custom">Let's explore what works best</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="partnershipGoals" className="text-nippon-black font-serif">
                      Partnership Goals & Aspirations
                    </Label>
                    <Textarea
                      id="partnershipGoals"
                      value={formData.partnershipGoals}
                      onChange={(e) => setFormData({...formData, partnershipGoals: e.target.value})}
                      className="enhanced-luxury-input min-h-[120px]"
                      placeholder="What are you hoping to achieve through a Japan partnership? Revenue goals, market positioning, client experience improvements..."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="uniqueValue" className="text-nippon-black font-serif">
                      Your Unique Value & Strengths
                    </Label>
                    <Textarea
                      id="uniqueValue"
                      value={formData.uniqueValue}
                      onChange={(e) => setFormData({...formData, uniqueValue: e.target.value})}
                      className="enhanced-luxury-input min-h-[100px]"
                      placeholder="What makes your company special? What unique value would you bring to a partnership?"
                    />
                  </div>
                </div>

                {/* Additional Thoughts */}
                <div className="bg-nippon-warm-white/80 p-6 rounded-lg border border-nippon-border space-y-4">
                  <div className="border-b border-nippon-gold/20 pb-3">
                    <h3 className="text-luxury-xl text-nippon-black font-serif mb-1 flex items-center">
                      <span className="w-2 h-2 bg-nippon-gold rounded-full mr-3"></span>
                      Additional Thoughts
                    </h3>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-nippon-black font-serif">
                      Questions, Ideas, or Additional Context
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="enhanced-luxury-input min-h-[120px]"
                      placeholder="Any questions about our approach, ideas you'd like to explore, or additional context about your business..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4 space-y-3">
                  <Button
                    type="submit"
                    disabled={!formData.companyName || !formData.contactName || !formData.email}
                    className="group relative overflow-hidden w-full bg-transparent border-2 border-nippon-gold text-nippon-gold hover:text-nippon-black font-sans text-luxury-base px-6 py-4 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-2 hover:bg-nippon-gold disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none"
                    style={{
                      backdropFilter: 'blur(20px)',
                      backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    }}
                  >
                    <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                    <span className="relative flex items-center justify-center space-x-2">
                      <Coffee className="w-4 h-4" />
                      <span className="tracking-wider font-medium">Start Our Conversation</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Button>
                  
                  <p className="text-luxury-xs text-nippon-gray font-sans text-center">
                    We'll respond within 24 hours to schedule a personal conversation about your partnership vision.
                  </p>
                </div>

              </form>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1722347315185-4f232000781b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW0lMjBKYXBhbiUyMHBhcnRuZXJzaGlwfGVufDF8fHx8MTc1NTc1ODQ2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Partnership collaboration - building meaningful relationships in luxury travel"
            className="w-full h-full object-cover scale-110"
            style={{
              filter: 'brightness(0.6) contrast(1.1) saturate(1.1)',
              animation: 'cinematicZoom 25s ease-in-out infinite alternate'
            }}
          />
          
          <div 
            className="absolute inset-0 w-full h-full opacity-20"
            style={{
              background: 'radial-gradient(ellipse at 30% 40%, rgba(212, 175, 55, 0.15) 0%, rgba(26, 26, 45, 0.1) 50%, transparent 80%)',
              animation: 'gradientMove 35s ease-in-out infinite'
            }}
          ></div>
        </div>
        
        <div className="absolute inset-0 bg-nippon-black/50 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-nippon-black/60 via-nippon-black/30 to-nippon-black/70 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-nippon-black/50 via-transparent to-nippon-black/40 z-10"></div>
        
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-nippon-gold opacity-4 blur-3xl z-10"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-nippon-gold-bright opacity-3 blur-3xl z-10"></div>
        
        <div className="relative z-20 max-w-6xl mx-auto px-8" data-scroll-reveal>
          <div className="max-w-4xl text-center">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <HandshakeIcon className="w-12 h-12 text-nippon-gold" />
              <div className="h-px w-16 bg-nippon-gold"></div>
              <Heart className="w-10 h-10 text-nippon-gold" />
              <div className="h-px w-16 bg-nippon-gold"></div>
              <Globe className="w-12 h-12 text-nippon-gold" />
            </div>

            <h1 className="text-luxury-6xl lg:text-luxury-7xl text-nippon-warm-white font-serif mb-12 leading-none tracking-tight"
                style={{
                  textShadow: '0 4px 32px rgba(0, 0, 0, 0.9), 0 2px 16px rgba(0, 0, 0, 0.8), 0 0 50px rgba(0, 0, 0, 0.7), 0 0 20px rgba(212, 175, 55, 0.3)'
                }}>
              Partnership Philosophy
            </h1>
            
            <div className="h-px w-48 mb-12 bg-gradient-to-r from-transparent via-nippon-gold to-transparent shadow-gold mx-auto"></div>
            
            <div className="space-y-8 max-w-3xl mx-auto">
              <p className="text-luxury-xl text-nippon-warm-white font-serif leading-relaxed text-center"
                 style={{
                   textShadow: '0 4px 24px rgba(0, 0, 0, 0.9), 0 2px 12px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 0, 0, 0.6)'
                 }}>
                We don't just work with partners — we co-create exceptional Japan experiences that transform travelers and elevate brands.
              </p>

              <p className="text-luxury-base text-nippon-gray-light font-sans leading-relaxed text-center max-w-2xl mx-auto"
                 style={{
                   textShadow: '0 2px 16px rgba(0, 0, 0, 0.8)'
                 }}>
                Our partnerships are built on shared values, collaborative innovation, and the belief that together we can create something extraordinary.
              </p>
            </div>

            <div className="mt-16">
              <Button
                onClick={() => setShowInquiryModal(true)}
                className="group relative overflow-hidden bg-transparent border-2 border-nippon-gold text-nippon-gold hover:text-nippon-black font-sans text-luxury-base px-8 py-4 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-2 hover:bg-nippon-gold"
                style={{
                  backdropFilter: 'blur(20px)',
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                }}
              >
                <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                <span className="relative flex items-center space-x-3">
                  <MessageCircle className="w-4 h-4" />
                  <span className="tracking-wider font-medium">Begin Our Conversation</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Philosophy */}
      <section className="relative bg-nippon-warm-white section-padding overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto content-padding">
          <div className="text-center mb-16" data-scroll-reveal>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="h-px w-16 bg-nippon-gold"></div>
              <Heart className="w-8 h-8 text-nippon-gold" />
              <div className="h-px w-16 bg-nippon-gold"></div>
            </div>
            
            <h2 className="text-luxury-4xl text-nippon-black font-serif mb-6">
              Our Partnership Principles
            </h2>
            
            <p className="text-luxury-lg text-nippon-gray font-sans max-w-2xl mx-auto">
              These core principles guide every partnership we build and every experience we create together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" data-scroll-reveal>
            {partnershipPhilosophy.map((principle, index) => (
              <Card key={index} className="warm-white-card-secondary hover:shadow-gold transition-all duration-500 transform hover:-translate-y-2 text-center">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-nippon-gold/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <principle.icon className={`w-8 h-8 ${principle.color}`} />
                  </div>
                  
                  <h3 className="text-luxury-lg text-nippon-black font-serif mb-4">
                    {principle.principle}
                  </h3>
                  
                  <p className="text-luxury-sm text-nippon-gray font-sans leading-relaxed">
                    {principle.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="relative bg-nippon-black section-padding overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto content-padding">
          <div className="text-center mb-16" data-scroll-reveal>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="h-px w-16 bg-nippon-gold"></div>
              <Compass className="w-8 h-8 text-nippon-gold" />
              <div className="h-px w-16 bg-nippon-gold"></div>
            </div>
            
            <h2 className="text-luxury-4xl text-nippon-warm-white font-serif mb-6">
              Partnership Approaches
            </h2>
            
            <p className="text-luxury-lg text-nippon-gray-light font-sans max-w-2xl mx-auto">
              We tailor our partnership to your business model, goals, and vision for Japan travel offerings.
            </p>
          </div>

          <div className="space-y-12" data-scroll-reveal>
            {partnershipTypes.map((type, index) => (
              <Card key={index} className="black-card-dominant hover:shadow-gold transition-all duration-500 transform hover:-translate-y-2">
                <CardHeader className="pb-6">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-nippon-gold/10 rounded-lg flex items-center justify-center">
                        <type.icon className="w-8 h-8 text-nippon-gold" />
                      </div>
                      <div>
                        <CardTitle className="text-luxury-2xl text-nippon-warm-white font-serif mb-2">
                          {type.type}
                        </CardTitle>
                        <p className="text-luxury-sm text-nippon-gold font-serif italic">
                          {type.subtitle}
                        </p>
                      </div>
                    </div>
                    <Badge className="bg-nippon-gold text-nippon-black">
                      {type.commitment}
                    </Badge>
                  </div>
                  
                  <p className="text-luxury-base text-nippon-gray-light font-sans leading-relaxed mb-6">
                    {type.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-luxury-sm text-nippon-gold font-serif mb-3">Approach:</h4>
                      <p className="text-luxury-sm text-nippon-gray-light font-sans">{type.approach}</p>
                    </div>
                    <div>
                      <h4 className="text-luxury-sm text-nippon-gold font-serif mb-3">Ideal For:</h4>
                      <p className="text-luxury-sm text-nippon-gray-light font-sans">{type.ideal}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <h4 className="text-luxury-base text-nippon-warm-white font-serif mb-4">Partnership Benefits:</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-nippon-gold mt-1 flex-shrink-0" />
                        <span className="text-luxury-sm text-nippon-gray-light font-sans">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborative Process */}
      <section className="relative bg-nippon-black section-padding overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto content-padding">
          <div className="text-center mb-16" data-scroll-reveal>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="h-px w-16 bg-nippon-gold"></div>
              <Lightbulb className="w-8 h-8 text-nippon-gold" />
              <div className="h-px w-16 bg-nippon-gold"></div>
            </div>
            
            <h2 className="text-luxury-4xl text-nippon-warm-white font-serif mb-6">
              Our Collaborative Process
            </h2>
            
            <p className="text-luxury-lg text-nippon-gray-light font-sans max-w-2xl mx-auto">
              How we work together to create partnerships that drive mutual success and exceptional client experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" data-scroll-reveal>
            {collaborativeProcess.map((phase, index) => (
              <Card key={index} className="black-card-dominant hover:shadow-gold transition-all duration-500 transform hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-nippon-gold/10 rounded-lg flex items-center justify-center">
                      <phase.icon className="w-6 h-6 text-nippon-gold" />
                    </div>
                    <div className="w-8 h-8 bg-nippon-gold rounded-full flex items-center justify-center">
                      <span className="text-nippon-black font-serif text-luxury-sm">{index + 1}</span>
                    </div>
                  </div>
                  <CardTitle className="text-luxury-base text-nippon-warm-white font-serif mb-3">
                    {phase.phase}
                  </CardTitle>
                  <p className="text-luxury-sm text-nippon-gray-light font-sans leading-relaxed mb-4">
                    {phase.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-luxury-sm text-nippon-gold font-serif mb-2">Key Activities:</h4>
                    <ul className="space-y-1">
                      {phase.activities.map((activity, activityIndex) => (
                        <li key={activityIndex} className="text-luxury-xs text-nippon-gray-light font-sans flex items-center">
                          <span className="w-1.5 h-1.5 bg-nippon-gold rounded-full mr-2 flex-shrink-0"></span>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-nippon-gold/5 p-3 rounded">
                    <h4 className="text-luxury-xs text-nippon-gold font-serif mb-1">Outcome:</h4>
                    <p className="text-luxury-xs text-nippon-warm-white font-sans">{phase.outcome}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Values */}
      <section className="relative bg-nippon-warm-white section-padding overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto content-padding text-center">
          <div className="mb-16" data-scroll-reveal>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="h-px w-16 bg-nippon-gold"></div>
              <Sparkles className="w-8 h-8 text-nippon-gold" />
              <div className="h-px w-16 bg-nippon-gold"></div>
            </div>
            
            <h2 className="text-luxury-4xl text-nippon-black font-serif mb-6">
              What We Value in Partnership
            </h2>
            
            <p className="text-luxury-lg text-nippon-gray font-sans max-w-3xl mx-auto">
              Beyond business metrics, these are the values that create lasting, meaningful partnerships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16" data-scroll-reveal>
            {partnershipValues.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-nippon-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-nippon-gold" />
                </div>
                <h3 className="text-luxury-base text-nippon-black font-serif mb-3">
                  {value.value}
                </h3>
                <p className="text-luxury-sm text-nippon-gray font-sans leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-nippon-gold/5 p-12 rounded-lg border border-nippon-gold/20" data-scroll-reveal>
            <div className="max-w-4xl mx-auto space-y-8">
              <h3 className="text-luxury-2xl text-nippon-black font-serif italic leading-relaxed">
                "The best partnerships feel less like business relationships and more like shared journeys toward creating something beautiful."
              </h3>
              
              <div className="pt-6">
                <Button
                  onClick={() => setShowInquiryModal(true)}
                  className="group relative overflow-hidden bg-transparent border-2 border-nippon-gold text-nippon-gold hover:text-nippon-black font-sans text-luxury-base px-8 py-4 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-2 hover:bg-nippon-gold"
                  style={{
                    backdropFilter: 'blur(20px)',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  }}
                >
                  <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                  <span className="relative flex items-center space-x-3">
                    <Coffee className="w-4 h-4" />
                    <span className="tracking-wider font-medium">Let's Explore Partnership</span>
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
