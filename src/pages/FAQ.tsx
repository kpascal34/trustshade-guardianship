
import { Helmet } from "react-helmet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <Helmet>
        <title>Frequently Asked Questions | Fortis Security</title>
        <meta name="description" content="Get answers to the most common questions about Fortis Security's services and operations." />
      </Helmet>
      
      <h1 className="text-3xl font-bold text-fortis-dark-blue mb-8">Frequently Asked Questions</h1>
      
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-medium text-fortis-dark-blue">
              What security services does Fortis Security provide?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              Fortis Security offers a comprehensive range of security services including door supervision, 
              manned guarding, event security, and risk assessments. Our professional team is fully trained
              and licensed to provide security solutions tailored to your specific needs.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-medium text-fortis-dark-blue">
              Are your security personnel licensed and insured?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              Yes, all our security personnel are fully licensed with the Security Industry Authority (SIA) 
              and undergo rigorous background checks. Additionally, Fortis Security maintains comprehensive 
              insurance coverage for all our operations, including public liability and professional indemnity.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-medium text-fortis-dark-blue">
              How quickly can you provide security services?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              We typically arrange for deployment within 24 to 48 hours of the agreement for standard security contracts. 
              In addition, our rapid response team is on standby for unforeseen emergencies and can be mobilised immediately. 
              If you have urgent security needs, we encourage you to contact us directly for immediate assistance.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg font-medium text-fortis-dark-blue">
              What training do your security officers receive?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              All Fortis Security officers undergo comprehensive training that exceeds industry standards. 
              This includes SIA licensing requirements, first aid certification, conflict management, 
              emergency response procedures, and customer service training. Additionally, we provide 
              specialised training relevant to specific deployment environments.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-lg font-medium text-fortis-dark-blue">
              Do you offer customised security solutions?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              Absolutely. We understand that every client has unique security needs. Our approach begins
              with a thorough assessment of your specific requirements, allowing us to design and implement
              a tailored security solution. Whether you need short-term event security or long-term manned
              guarding, we customise our services to match your exact specifications.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="text-lg font-medium text-fortis-dark-blue">
              What types of events do you provide security for?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              We provide security for a wide range of events, including corporate functions, concerts, 
              sporting events, weddings, exhibitions, conferences, and public gatherings. No event is 
              too large or too small for our professional security team.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger className="text-lg font-medium text-fortis-dark-blue">
              How do you handle emergency situations?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              Our security personnel are extensively trained in emergency response protocols. They are 
              equipped to handle various situations including medical emergencies, fire evacuation, 
              suspicious behaviour, and other security threats. We maintain clear communication channels 
              with emergency services and follow established procedures to ensure swift and appropriate 
              responses to any situation.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger className="text-lg font-medium text-fortis-dark-blue">
              What areas do you serve?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              Fortis Security operates throughout the United Kingdom, with a strong presence in major 
              cities including London, Manchester, Birmingham, Edinburgh, and Glasgow. We can deploy
              our security personnel to any location within the UK based on client requirements.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9">
            <AccordionTrigger className="text-lg font-medium text-fortis-dark-blue">
              Do your security officers wear uniforms?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              Yes, our security officers are easily identifiable in professional uniforms unless the situation 
              necessitates plainclothes security for specific assignments. Our uniforms are designed to project 
              an authoritative and professional image, ensuring that our officers are readily recognised by staff, 
              visitors, and customers, which enhances the overall security presence.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-10">
            <AccordionTrigger className="text-lg font-medium text-fortis-dark-blue">
              How do you determine what security services we need?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              We begin every engagement with a comprehensive security assessment of your property or event. 
              One of our experienced security consultants will visit your site, engage with you to discuss 
              your concerns and requirements, identify any potential vulnerabilities, and recommend tailored 
              security measures. This consultative approach ensures you receive security services precisely 
              aligned with your needs and risks.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-11">
            <AccordionTrigger className="text-lg font-medium text-fortis-dark-blue">
              What is the pricing structure for your services?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              Our pricing structure is competitive and crystal clear, with rates provided upon request. 
              We create customised quotes based on several factors, including:
              <ul className="list-disc ml-6 mt-2">
                <li>The number of security personnel needed for your assignment.</li>
                <li>The hours of coverage required.</li>
                <li>Any specialised services or equipment that may be necessary.</li>
                <li>Location-specific factors and our findings from the risk assessment.</li>
              </ul>
              <p className="mt-2">Please get in touch with us directly for a detailed quote tailored to your security needs.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-12">
            <AccordionTrigger className="text-lg font-medium text-fortis-dark-blue">
              Do you require long-term contracts?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              We understand that every client has unique needs, so we offer flexibility regarding contract duration. 
              From long-term agreements for ongoing security solutions to short-term arrangements for temporary needs, 
              we can accommodate various client preferences to ensure your security needs are effectively met.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-13">
            <AccordionTrigger className="text-lg font-medium text-fortis-dark-blue">
              How can I request a quote for security services?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              Requesting a quote is simple. You can use our online contact form, call us directly, or 
              send an email to info@fortissecurity.com. Please provide details about your security 
              requirements, and our team will respond promptly with a comprehensive quote tailored to 
              your needs.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
