"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Clock } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Contact() {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    preferredTime: "As soon as possible",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          preferredTime: "As soon as possible",
        });
      } else {
        setError("Something went wrong. Please try again later.");
      }
    } catch (err) {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen py-20 px-4 bg-gradient-to-b from-[#f0f4f8] to-[#ffffff] text-gray-800">
      <h1 className="text-4xl font-bold text-center mb-16">Contact Us</h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">

        {/* Contact Form Card */}
        <Card className="shadow-lg flex flex-col h-full">
            <CardContent className="p-8 flex flex-col flex-grow justify-between">
                <div>
                <h2 className="text-2xl font-semibold mb-4">Request a Call</h2>
                <p className="text-gray-600 mb-6">
                    Usually replies within an hour.<br/>Not free now? You can request a call at your convenience.
                </p>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <Input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
                    <Input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
                    <Input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
                    <Textarea name="message" placeholder="Your Message (optional)" rows={4} value={formData.message} onChange={handleChange} />

                    <div className="space-y-2">
                    <label className="font-medium">Preferred Call Time</label>
                    <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full p-3 rounded-md border border-gray-300"
                    >
                        <option>As soon as possible</option>
                        <option>Morning (9AM - 12PM)</option>
                        <option>Afternoon (12PM - 4PM)</option>
                        <option>Evening (4PM - 8PM)</option>
                    </select>
                    </div>

                    <Button type="submit" className="w-full py-6 text-lg" disabled={loading || success}>
                        {loading ? "Sending..." : success ? "Request Sent Successfully" : "Request Call"}
                    </Button>
                </form>

                {success && <p className="mt-4 text-green-600 font-medium">Thank you! We will contact you soon.</p>}
                {error && <p className="mt-4 text-red-600 font-medium">{error}</p>}
                </div>
            </CardContent>
            </Card>

        {/* Address & Map Card */}
        <Card className="shadow-lg flex flex-col h-full">
          <CardContent className="p-8 flex flex-col flex-grow justify-between">
            <div className="space-y-6 mb-6">
                {/* Embedded Map */}
            <div className="rounded-xl overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAP_EMBED_URL"
                width="100%"
                height="250"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
              <div className="flex items-start space-x-4">
                <MapPin className="text-green-600" />
                <div>
                  <h3 className="font-semibold text-lg">Our Store</h3>
                  <p>MattressCo Pvt Ltd,<br />
                    123 Comfort Street,<br />
                    New Delhi, India - 110001
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Phone className="text-green-600" />
                <p>+91 98765 43210</p>
              </div>

              <div className="flex items-center space-x-4">
                <Mail className="text-green-600" />
                <p>support@mattressco.in</p>
              </div>

              <div className="flex items-center space-x-4">
                <Clock className="text-green-600" />
                <p>Mon-Sat: 9AM - 8PM</p>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <Link href="https://facebook.com" target="_blank">
                  <Facebook className="h-6 w-6 hover:text-green-600 transition" />
                </Link>
                <Link href="https://instagram.com" target="_blank">
                  <Instagram className="h-6 w-6 hover:text-green-600 transition" />
                </Link>
                <Link href="https://twitter.com" target="_blank">
                  <Twitter className="h-6 w-6 hover:text-green-600 transition" />
                </Link>
              </div>
            </div>

          </CardContent>
        </Card>

      </div>
    </main>
  )
}
