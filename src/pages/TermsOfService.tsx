
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
              <strong>Last Updated:</strong> 12-02-25
            </p>
            
            <h2 className="text-xl font-bold text-fortis-dark-blue mt-8 mb-4">1. Introduction</h2>
            <p>
              These Terms of Service ("Terms") govern the use of the security services provided by Fortis Security ("Company," "we," "our," or "us"). By engaging our services, you agree to adhere to these Terms. Please read them carefully before proceeding with any service agreement.
            </p>
            
            <h2 className="text-xl font-bold text-fortis-dark-blue mt-8 mb-4">2. Service Agreement</h2>
            <h3 className="text-lg font-semibold text-fortis-dark-blue mt-4 mb-2">2.1 Service Provision</h3>
            <p>
              Fortis Security offers professional security services, including manned guarding, event security, door supervision, and risk assessment services. Your service agreement will delineate the specific services to be provided.
            </p>
            
            <h3 className="text-lg font-semibold text-fortis-dark-blue mt-4 mb-2">2.2 Service Standards</h3>
            <p>
              Our commitment is to deliver services with reasonable care and skill, adhering to industry standards and applicable regulations. Our security personnel are appropriately licensed and trained under relevant regulatory requirements.
            </p>
            
            <h3 className="text-lg font-semibold text-fortis-dark-blue mt-4 mb-2">2.3 Service Modifications</h3>
            <p>
              We reserve the right to modify our services with reasonable notice to accommodate evolving security needs, regulatory requirements, or operational circumstances.
            </p>
            
            <h2 className="text-xl font-bold text-fortis-dark-blue mt-8 mb-4">3. Client Obligations</h2>
            <h3 className="text-lg font-semibold text-fortis-dark-blue mt-4 mb-2">3.1 Cooperation</h3>
            <p>
              Clients are required to provide accurate information and reasonable cooperation necessary for the delivery of services, which includes:
            </p>
            <ul className="list-disc pl-8 mb-4">
              <li>Providing access to relevant premises and facilities,</li>
              <li>Supplying necessary documentation and authorizations,</li>
              <li>Communicating security requirements promptly,</li>
              <li>Promptly notifying us of any security concerns or incidents.</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-fortis-dark-blue mt-4 mb-2">3.2 Safe Working Environment</h3>
            <p>
              Clients must ensure a safe working environment for our security personnel, following health and safety regulations.
            </p>
            
            <h3 className="text-lg font-semibold text-fortis-dark-blue mt-4 mb-2">3.3 Payment Terms</h3>
            <p>
              Clients agree to remit service payments according to the agreed rates and payment schedule. Unless specified otherwise in the service agreement, the payment terms are net 30 days.
            </p>
            
            <h2 className="text-xl font-bold text-fortis-dark-blue mt-8 mb-4">4. Liability and Insurance</h2>
            <h3 className="text-lg font-semibold text-fortis-dark-blue mt-4 mb-2">4.1 Insurance Coverage</h3>
            <p>
              We maintain comprehensive insurance coverage appropriate to our services, which includes:
            </p>
            <ul className="list-disc pl-8 mb-4">
              <li>Public Liability Insurance,</li>
              <li>Professional Indemnity Insurance,</li>
              <li>Employer's Liability Insurance.</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-fortis-dark-blue mt-4 mb-2">4.2 Limitation of Liability</h3>
            <p>
              Our liability is limited to direct damages arising from our negligence and shall not exceed the greater of:
            </p>
            <ul className="list-disc pl-8 mb-4">
              <li>The amount paid for our services in the twelve months preceding the incident or</li>
              <li>The amount covered by our relevant insurance policies.</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-fortis-dark-blue mt-4 mb-2">4.3 Exclusions</h3>
            <p>
              We are not liable for:
            </p>
            <ul className="list-disc pl-8 mb-4">
              <li>Consequential or indirect losses,</li>
              <li>Losses arising from the client's failure to adhere to our security recommendations,</li>
              <li>Damages resulting from circumstances beyond our reasonable control.</li>
            </ul>
            
            <h2 className="text-xl font-bold text-fortis-dark-blue mt-8 mb-4">5. Confidentiality</h2>
            <h3 className="text-lg font-semibold text-fortis-dark-blue mt-4 mb-2">5.1 Information Protection</h3>
            <p>
              We shall maintain the confidentiality of all client information and implement appropriate measures to protect such information from unauthorized disclosure.
            </p>
            
            <h3 className="text-lg font-semibold text-fortis-dark-blue mt-4 mb-2">5.2 Data Protection</h3>
            <p>
              We process personal data per our Privacy Policy and applicable data protection laws.
            </p>
            
            <h2 className="text-xl font-bold text-fortis-dark-blue mt-8 mb-4">6. Term and Termination</h2>
            <h3 className="text-lg font-semibold text-fortis-dark-blue mt-4 mb-2">6.1 Duration</h3>
            <p>
              The service agreement will remain in effect for the period specified in your service contract or until terminated following these Terms.
            </p>
            
            <h3 className="text-lg font-semibold text-fortis-dark-blue mt-4 mb-2">6.2 Termination</h3>
            <p>
              Either party may terminate the agreement:
            </p>
            <ul className="list-disc pl-8 mb-4">
              <li>With thirty days written notice,</li>
              <li>Immediately for a material breach of these Terms or</li>
              <li>Immediately if the other party becomes insolvent.</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-fortis-dark-blue mt-4 mb-2">6.3 Post-Termination</h3>
            <p>
              Upon termination:
            </p>
            <ul className="list-disc pl-8 mb-4">
              <li>All outstanding payments shall become immediately due,</li>
              <li>We shall return any client property in our possession and</li>
              <li>Confidentiality obligations shall continue to apply.</li>
            </ul>
            
            <h2 className="text-xl font-bold text-fortis-dark-blue mt-8 mb-4">7. Force Majeure</h2>
            <p>
              Neither party shall be liable for any failure or delay in fulfilling their obligations if such failure or delay arises from circumstances beyond their reasonable control.
            </p>
            
            <h2 className="text-xl font-bold text-fortis-dark-blue mt-8 mb-4">8. Compliance with Laws</h2>
            <h3 className="text-lg font-semibold text-fortis-dark-blue mt-4 mb-2">8.1 Regulatory Compliance</h3>
            <p>
              We maintain all licenses and permissions required for our security services and adhere to applicable laws and regulations.
            </p>
            
            <h3 className="text-lg font-semibold text-fortis-dark-blue mt-4 mb-2">8.2 Anti-Bribery</h3>
            <p>
              Both parties agree to comply with applicable anti-bribery and anti-corruption laws.
            </p>
            
            <h2 className="text-xl font-bold text-fortis-dark-blue mt-8 mb-4">9. Intellectual Property</h2>
            <p>
              Fortis Security owns all intellectual property rights related to our security methodologies, procedures, and documentation.
            </p>
            
            <h2 className="text-xl font-bold text-fortis-dark-blue mt-8 mb-4">10. Dispute Resolution</h2>
            <h3 className="text-lg font-semibold text-fortis-dark-blue mt-4 mb-2">10.1 Governing Law</h3>
            <p>
              The laws of the United Kingdom govern these Terms.
            </p>
            
            <h3 className="text-lg font-semibold text-fortis-dark-blue mt-4 mb-2">10.2 Dispute Process</h3>
            <p>
              Any disputes shall be resolved through the following:
            </p>
            <ol className="list-decimal pl-8 mb-4">
              <li>Initial good faith negotiations,</li>
              <li>Mediation if negotiations fail, and</li>
              <li>Legal proceedings as a last resort.</li>
            </ol>
            
            <h2 className="text-xl font-bold text-fortis-dark-blue mt-8 mb-4">11. Amendments</h2>
            <p>
              We reserve the right to modify these Terms with reasonable notice. Continued use of our services following such modifications constitutes acceptance of the updated Terms.
            </p>
            
            <h2 className="text-xl font-bold text-fortis-dark-blue mt-8 mb-4">12. Severability</h2>
            <p>
              If any provision of these Terms is deemed unenforceable, the remaining provisions shall continue to be in full force and effect.
            </p>
            
            <h2 className="text-xl font-bold text-fortis-dark-blue mt-8 mb-4">13. Contact Information</h2>
            <p>
              For any inquiries regarding these Terms, please get in touch with us at:
            </p>
            <p className="ml-6 mt-2">
              Fortis Security<br />
              Email: legal@fortissecurity.com<br />
              Phone: 07762 853 255
            </p>
            
            <h2 className="text-xl font-bold text-fortis-dark-blue mt-8 mb-4">14. Acknowledgement</h2>
            <p>
              By engaging our services, you acknowledge that you have read, comprehended, and agree to be bound by these Terms of Service.
            </p>
            
            <p className="mt-8 text-sm">
              <strong>Last Updated:</strong> 12-02-25
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
