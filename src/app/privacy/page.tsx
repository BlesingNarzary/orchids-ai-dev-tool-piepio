import React from 'react';
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-muted-foreground mb-12 italic">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="prose dark:prose-invert max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">1. Information We Collect</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                We collect information you provide directly to us when you create an account, use our services, or communicate with us. This may include:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Personal information (name, email address, password)</li>
                <li>Profile information</li>
                <li>Content you create using our Service</li>
                <li>Communications you send to us</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">2. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Provide, maintain, and improve our Service</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Develop new products and features</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">3. Data Storage and Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use industry-standard security measures to protect your personal information. Your data is stored securely using Supabase and other trusted cloud providers. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">4. Sharing of Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not share your personal information with third parties except:
              (i) with your consent; (ii) to comply with laws; (iii) to protect our rights; or (iv) in connection with a business transfer like a merger or sale.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">5. Cookies and Tracking</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">6. Your Data Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              Depending on your location, you may have certain rights regarding your personal data, including the right to access, correct, or delete the personal information we hold about you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">7. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13.
            </p>
          </section>

          <section className="pt-8 border-t border-border">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us at <span className="text-primary underline">privacy@piepio.com</span>.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
