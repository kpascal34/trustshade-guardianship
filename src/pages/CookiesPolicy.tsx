
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const CookiesPolicy = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <Helmet>
          <title>Cookies Policy | Fortis Security</title>
          <meta name="description" content="Fortis Security's cookies policy explains how we use cookies on our website." />
        </Helmet>
        
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
          <h1 className="text-3xl font-bold text-fortis-dark-blue mb-6">Cookie Policy</h1>
          
          <div className="prose prose-blue max-w-none text-gray-700">
            <p className="lead-text mb-4">
              <strong>Last Updated:</strong> 12-02-25
            </p>
            
            <h2 className="text-xl font-bold text-fortis-dark-blue mt-8 mb-4">Introduction</h2>
            <p>
              This Cookie Policy elucidates how Fortis Security ("we," "us," or "our") utilises cookies and similar technologies during your visit to our website. We implement cookies to improve the browsing experience, analyse website traffic, and personalise content. This policy provides comprehensive information regarding what cookies entail, how we use them, and how individuals may control them.
            </p>
            
            <h2 className="text-xl font-bold text-fortis-dark-blue mt-8 mb-4">What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on your device by websites during your visit. They serve various purposes, ranging from enabling essential website functionality to providing analytical data concerning visitor interactions with our site. Cookies may originate from our website (first-party cookies) or third-party services on our pages.
            </p>
            
            <h2 className="text-xl font-bold text-fortis-dark-blue mt-8 mb-4">Types of Cookies We Utilise</h2>
            
            <h3 className="text-lg font-semibold text-fortis-dark-blue mt-4 mb-2">Essential Cookies</h3>
            <p>
              Essential cookies are critical for the proper functioning of the website. They enable fundamental features such as page navigation and access to secure areas, and the functionality of our site is contingent upon these cookies.
            </p>
            <p>
              Essential cookies employed on our site include:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Session cookies for maintaining user sessions</li>
              <li>Security cookies for the prevention of fraud</li>
              <li>Technical cookies essential for system administration</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-fortis-dark-blue mt-4 mb-2">Performance and Analytics Cookies</h3>
            <p>
              Performance and analytics cookies collect and report anonymous information to help us understand how visitors engage with our website. The information gathered is utilised to enhance website performance and user experience.
            </p>
            <p>
              Performance cookies present on our site include:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Analysis of website traffic</li>
              <li>Tracking of page load times</li>
              <li>Monitoring of errors</li>
              <li>User behaviour analytics</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-fortis-dark-blue mt-4 mb-2">Functionality Cookies</h3>
            <p>
              Functionality cookies facilitate enhanced features and personalisation. They may be established by us or by third-party providers contributing services to our pages.
            </p>
            <p>
              Functionality cookies incorporated on our site include:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Preferences for language selection</li>
              <li>Content tailored to user location</li>
              <li>Previously selected user preferences</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-fortis-dark-blue mt-4 mb-2">Marketing and Targeting Cookies</h3>
            <p>
              Marketing and targeting cookies track browsing behaviours to enable the delivery of advertisements that are likely to be of interest to the user. Typically, these cookies are placed by advertising networks with our authorisation.
            </p>
            
            <h2 className="text-xl font-bold text-fortis-dark-blue mt-8 mb-4">How We Utilise Specific Cookies</h2>
            
            <h3 className="text-lg font-semibold text-fortis-dark-blue mt-4 mb-2">First-Party Cookies</h3>
            <p>
              We utilise first-party cookies for the following purposes:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Retaining user preferences</li>
              <li>Maintaining session information</li>
              <li>Analysing website performance</li>
              <li>Enhancing security features</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-fortis-dark-blue mt-4 mb-2">Third-Party Cookies</h3>
            <p>
              We may permit trusted third parties to establish cookies for the following objectives:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Analytics services (e.g., Google Analytics)</li>
              <li>Integration with social media</li>
              <li>Marketing and advertising purposes</li>
              <li>Provision of security services</li>
            </ul>
            
            <h2 className="text-xl font-bold text-fortis-dark-blue mt-8 mb-4">Cookie Management</h2>
            
            <h3 className="text-lg font-semibold text-fortis-dark-blue mt-4 mb-2">Your Cookie Choices</h3>
            <p>
              Individuals possess the right to decide whether to accept or decline cookies. Cookie preferences may be exercised in the following manners:
            </p>
            
            <h3 className="text-lg font-semibold text-fortis-dark-blue mt-4 mb-2">Browser Settings</h3>
            <p>
              Most web browsers allow control over cookies via their settings preferences. To modify cookie settings, please consult your browser's help documentation:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Google Chrome</li>
              <li>Mozilla Firefox</li>
              <li>Microsoft Edge</li>
              <li>Safari</li>
              <li>Opera</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-fortis-dark-blue mt-4 mb-2">Cookie Consent Tool</h3>
            <p>
              Our website incorporates a cookie consent management tool that enables you to select your cookie preferences upon your initial visit. You may modify these preferences at any time via our cookie settings panel.
            </p>
            
            <h3 className="text-lg font-semibold text-fortis-dark-blue mt-4 mb-2">Consequences of Disabling Cookies</h3>
            <p>
              Please be advised that if certain cookies are disabled, some features of our website may not function optimally. Specifically, essential cookies cannot be turned off, as they are necessary for the website's operation.
            </p>
            
            <h2 className="text-xl font-bold text-fortis-dark-blue mt-8 mb-4">Data Collection and Privacy</h2>
            
            <h3 className="text-lg font-semibold text-fortis-dark-blue mt-4 mb-2">Information We Collect</h3>
            <p>
              Through the use of cookies, we may collect the following information:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>IP addresses and location data</li>
              <li>Browser type and settings</li>
              <li>Operating system information</li>
              <li>Pages visited and duration of visits</li>
              <li>Referral sources</li>
              <li>Device information</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-fortis-dark-blue mt-4 mb-2">Data Protection</h3>
            <p>
              We protect cookie data in alignment with our Privacy Policy and applicable data protection laws. For additional information regarding our handling of personal data, please refer to our <Link to="/privacy-policy" className="text-fortis-light-blue hover:text-fortis-dark-blue">Privacy Policy</Link>.
            </p>
            
            <h2 className="text-xl font-bold text-fortis-dark-blue mt-8 mb-4">Updates to This Policy</h2>
            <p>
              This Cookie Policy may be updated periodically to reflect changes in our practices or for operational, legal, or regulatory reasons. The date at the top of this policy denotes when it was last updated.
            </p>
            
            <h2 className="text-xl font-bold text-fortis-dark-blue mt-8 mb-4">Contact Us</h2>
            <p>
              For inquiries regarding our Cookie Policy or our utilisation of cookies, please get in touch with us at:
            </p>
            <p className="ml-6 mt-2">
              Fortis Security<br />
              Email: privacy@fortissecurity.com<br />
              Phone: 07762 853 255
            </p>
            
            <h2 className="text-xl font-bold text-fortis-dark-blue mt-8 mb-4">Compliance</h2>
            <p>
              This Cookie Policy adheres to applicable data protection laws and regulations, including:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>General Data Protection Regulation (GDPR)</li>
              <li>Privacy and Electronic Communications Regulations (PECR)</li>
              <li>California Consumer Privacy Act (CCPA), where applicable</li>
            </ul>
            
            <p className="mt-8">
              By continuing to utilise our website, you consent to our use of cookies as described in this policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiesPolicy;
