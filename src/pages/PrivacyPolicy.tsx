
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
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
          <h1 className="text-3xl font-bold text-fortis-dark-blue mb-6">Privacy Policy</h1>
          
          <div className="prose prose-blue max-w-none text-gray-700">
            <p className="lead-text mb-4">
              Last updated: January 1, 2023
            </p>
            
            <p>
              At Fortis Security, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            
            <h2 className="text-xl font-bold text-fortis-dark-blue mt-8 mb-4">Information We Collect</h2>
            
            <p>
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            
            <ul className="list-disc ml-6 mb-4">
              <li>Fill out forms on our website</li>
              <li>Register for an account</li>
              <li>Subscribe to our newsletter</li>
              <li>Request a quote or information about our services</li>
              <li>Participate in promotions or surveys</li>
              <li>Contact us via email, phone, or other communication channels</li>
            </ul>
            
            <p>
              The personal information we collect may include:
            </p>
            
            <ul className="list-disc ml-6 mb-4">
              <li>Name, email address, phone number, and business address</li>
              <li>Job title and company information</li>
              <li>Payment information</li>
              <li>Any other information you choose to provide</li>
            </ul>
            
            <h2 className="text-xl font-bold text-fortis-dark-blue mt-8 mb-4">How We Use Your Information</h2>
            
            <p>
              We may use the information we collect for various purposes, including:
            </p>
            
            <ul className="list-disc ml-6 mb-4">
              <li>Providing, maintaining, and improving our services</li>
              <li>Processing transactions and sending related information</li>
              <li>Sending administrative information, such as updates to our terms and policies</li>
              <li>Responding to your comments, questions, and requests</li>
              <li>Sending promotional communications</li>
              <li>Monitoring and analyzing trends, usage, and activities</li>
              <li>Detecting, investigating, and preventing fraudulent transactions and other illegal activities</li>
            </ul>
            
            <h2 className="text-xl font-bold text-fortis-dark-blue mt-8 mb-4">Disclosure of Your Information</h2>
            
            <p>
              We may share your information in the following situations:
            </p>
            
            <ul className="list-disc ml-6 mb-4">
              <li>With service providers who perform services on our behalf</li>
              <li>In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition</li>
              <li>If we believe disclosure is necessary to protect our rights, property, or safety</li>
              <li>To comply with applicable laws, regulations, legal processes, or governmental requests</li>
              <li>With your consent or at your direction</li>
            </ul>
            
            <h2 className="text-xl font-bold text-fortis-dark-blue mt-8 mb-4">Your Privacy Rights</h2>
            
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            
            <ul className="list-disc ml-6 mb-4">
              <li>The right to access personal information we hold about you</li>
              <li>The right to request correction of inaccurate information</li>
              <li>The right to request deletion of your information</li>
              <li>The right to restrict or object to our processing of your information</li>
              <li>The right to data portability</li>
            </ul>
            
            <p>
              To exercise these rights, please contact us using the information provided at the end of this policy.
            </p>
            
            <h2 className="text-xl font-bold text-fortis-dark-blue mt-8 mb-4">Security of Your Information</h2>
            
            <p>
              We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
            
            <h2 className="text-xl font-bold text-fortis-dark-blue mt-8 mb-4">Changes to This Privacy Policy</h2>
            
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
            
            <h2 className="text-xl font-bold text-fortis-dark-blue mt-8 mb-4">Contact Us</h2>
            
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            
            <p className="ml-6 mt-2">
              Email: privacy@fortissecurity.com<br />
              Phone: +44 123 456 7890<br />
              Address: 123 Security Street, London, SW1A 1AA, United Kingdom
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
