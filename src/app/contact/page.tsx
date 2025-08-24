'use client';

import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Facebook, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useContactForm } from "@/hooks/useContactForm";

export default function Contact() {
  const {
    formData,
    errors,
    isLoading,
    isSuccess,
    handleChange,
    handleSubmit,
    resetForm,
  } = useContactForm();
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <section className="text-center space-y-4 mb-16">
        <h1 className="text-4xl font-bold">Get In Touch</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          I'm always interested in new opportunities and exciting projects. 
          Let's discuss how we can work together to bring your ideas to life.
        </p>
      </section>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Let's Connect</h2>
            <p className="text-muted-foreground">
              Feel free to reach out through any of these channels. I typically respond 
              within 24 hours during business days.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Email</h3>
                <Link href="mailto:ocaba.ricky@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  ocaba.ricky@gmail.com
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Phone</h3>
                <Link href="tel:+639173268671" className="text-muted-foreground hover:text-primary transition-colors">
                  +63 917 326 8671
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Location</h3>
                <p className="text-muted-foreground">Cebu City, Philippines</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Follow Me</h3>
            <div className="flex space-x-4">
              <Link href="https://github.com/ocabafox" className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-secondary/80 transition-colors">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="https://www.linkedin.com/in/ricky-ocaba-5b6238125" className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-secondary/80 transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="https://www.facebook.com/ricky.tambok" className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-secondary/80 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-card border rounded-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Send me a message</h2>
              <p className="text-muted-foreground">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </div>

            {/* Success Message */}
            {isSuccess && (
              <div className="flex items-center space-x-2 p-4 bg-green-50 border border-green-200 rounded-md text-green-800">
                <CheckCircle className="w-5 h-5" />
                <span>Thank you! Your message has been sent successfully. I'll get back to you soon.</span>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-ring ${
                    errors.firstName ? 'border-red-500' : 'border-input'
                  }`}
                  placeholder="John"
                  disabled={isLoading}
                />
                {errors.firstName && (
                  <p className="text-sm text-red-500 flex items-center space-x-1">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.firstName}</span>
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-medium">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-ring ${
                    errors.lastName ? 'border-red-500' : 'border-input'
                  }`}
                  placeholder="Doe"
                  disabled={isLoading}
                />
                {errors.lastName && (
                  <p className="text-sm text-red-500 flex items-center space-x-1">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.lastName}</span>
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-ring ${
                  errors.email ? 'border-red-500' : 'border-input'
                }`}
                placeholder="john.doe@example.com"
                disabled={isLoading}
              />
              {errors.email && (
                <p className="text-sm text-red-500 flex items-center space-x-1">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-ring ${
                  errors.subject ? 'border-red-500' : 'border-input'
                }`}
                placeholder="Project inquiry"
                disabled={isLoading}
              />
              {errors.subject && (
                <p className="text-sm text-red-500 flex items-center space-x-1">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.subject}</span>
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-ring resize-none ${
                  errors.message ? 'border-red-500' : 'border-input'
                }`}
                placeholder="Tell me about your project..."
                disabled={isLoading}
              />
              {errors.message && (
                <p className="text-sm text-red-500 flex items-center space-x-1">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.message}</span>
                </p>
              )}
            </div>

            <div className="flex space-x-4">
              <Button 
                type="submit" 
                size="lg" 
                className="flex-1"
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </Button>
              {(isSuccess || Object.keys(errors).length > 0) && (
                <Button 
                  type="button" 
                  variant="outline" 
                  size="lg" 
                  onClick={resetForm}
                  disabled={isLoading}
                >
                  Reset
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Additional Information */}
      <section className="text-center py-20 border-t mt-20">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-2xl font-bold">Let's Build Something Great Together</h2>
          <p className="text-muted-foreground">
            Whether you're a startup looking to build your first product, 
            an established company wanting to modernize your tech stack, 
            or a fellow developer interested in collaboration, I'd love to hear from you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full">
              Available for freelance
            </span>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full">
              Open to full-time opportunities
            </span>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full">
              Interested in collaborations
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
