
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-fortis-light-blue hover:text-fortis-dark-blue transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-fortis-dark-blue mb-6">Terms of Service</h1>
          
          <div className="prose prose-blue max-w-none text-gray-700">
            <p className="lead-text mb-4">
              Last updated: January 1, 2023
            </p>
            
            <p>
              Please read these Terms of Service ("Terms") carefully before using the website and services offered by Fortis Security ("we," "us," or "our").
            </p>
            
            <h2 className="text-xl font-bold text-fortis-dark-blue mt-8 mb-4">Acceptance of Terms</h2>
            
            <p>
              By accessing or using our services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you may not use our services.
            </p>
            
            <h2 className="text-xl font-bold text-fortis-dark-blue mt-8 mb-4">Services</h2>
            
            <p>
              Fortis Security provides security services, including but not limited to door supervision, manned guarding, event security, and risk assessments. The specific services provided to you will be outlined in a separate service agreement.
            </p>
            
            <h2 className="text-xl font-bold text-fortis-dark-blue mt-8 mb-4">Service Agreements</h2>
            
            <p>
              All security services provided by Fortis Security are subject to a separate service agreement that outlines the specific terms, conditions, scope, and fees for the services. In the event of any conflict between these Terms and the service agreement, the service agreement shall prevail.
            </p>
            
            <h2 className="text-xl font-bold text-fortis-dark-blue mt-8 mb-4">Payment Terms</h2>
            
            <p>
              Payment terms will be specified in your service agreement. Generally, payment is due within 30 days of invoice date. Late payments may be subject to interest charges at the maximum rate permitted by law.
            </p>
            
            <h2 className="text-xl font-bold text-fortis-dark-blue mt-8 mb-4">Intellectual Property</h2>
            
            <p>
              All content on our website, including text, graphics, logos, images, audio clips, digital downloads, and software, is the property of Fortis Security or its content suppliers and is protected by international copyright laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
            </p>
            
            <h2 className="text-xl font-bold text-fortis-dark-blue mt-8 mb-4">Limitation of Liability</h2>
            
            <p>
              To the maximum extent permitted by law, Fortis Security shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising from or in connection with your use of our services or these Terms.
            </p>
            
            <p>
              Our total liability for any claims arising from or related to these Terms or our services shall not exceed the amounts paid by you for the services giving rise to the claim during the six (6) months preceding the claim.
            </p>
            
            <h2 className="text-xl font-bold text-fortis-dark-blue mt-8 mb-4">Indemnification</h2>
            
            <p>
              You agree to indemnify, defend, and hold harmless Fortis Security, its officers, directors, employees, agents, licensors, and suppliers from and against all losses, expenses, damages, and costs, including reasonable attorneys' fees, resulting from any violation of these Terms or any activity related to your account by you or any other person accessing the service using your account.
            </p>
            
            <h2 className="text-xl font-bold text-fortis-dark-blue mt-8 mb-4">Termination</h2>
            
            <p>
              We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including breach of these Terms. Upon termination, your right to use our services will immediately cease.
            </p>
            
            <h2 className="text-xl font-bold text-fortis-dark-blue mt-8 mb-4">Governing Law</h2>
            
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law principles.
            </p>
            
            <h2 className="text-xl font-bold text-fortis-dark-blue mt-8 mb-4">Changes to These Terms</h2>
            
            <p>
              We reserve the right to modify these Terms at any time. We will provide notice of any material changes by posting the updated Terms on our website and updating the "Last updated" date. Your continued use of our services after such modifications constitutes your acceptance of the revised Terms.
            </p>
            
            <h2 className="text-xl font-bold text-fortis-dark-blue mt-8 mb-4">Contact Us</h2>
            
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            
            <p className="ml-6 mt-2">
              Email: legal@fortissecurity.com<br />
              Phone: +44 123 456 7890<br />
              Address: 123 Security Street, London, SW1A 1AA, United Kingdom
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
