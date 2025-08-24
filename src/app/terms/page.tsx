import { ChevronRight, Phone, Mail, MapPin, Clock } from "lucide-react";
import type { Metadata } from "next";

// ✅ SEO metadata for App Router
export const metadata: Metadata = {
  title: "Terms and Conditions | RC Power Project Ltd.",
  description:
    "Terms and Conditions for RC Power Project Ltd. - Professional electrical contracting, power projects, and industrial automation services in Jaipur, Rajasthan.",
  keywords: [
    "RC Power",
    "terms conditions",
    "electrical contractor",
    "Jaipur",
    "power projects",
  ],
};

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}


      {/* Breadcrumb */}
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span>Home</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900">Terms and Conditions</span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 pb-12">
        <div className="bg-white rounded-lg shadow-sm border">
          {/* Page Title */}
          <div className="px-8 py-6 border-b">
            <h1 className="text-3xl font-bold text-gray-900">
              Terms and Conditions
            </h1>
            <p className="mt-2 text-gray-600">
              Last updated: January 2024 | Version 1.0
            </p>
          </div>

            {/* Content */}
            <div className="px-8 py-6 space-y-8">
              {/* Introduction */}
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  Welcome to RC Power Project Ltd. (hereinafter referred to as "RC Power," "we," "our," or "us"). 
                  By accessing our website, located at www.rcpplimited.com or any other services we provide, 
                  including electrical contracting, power projects, industrial automation, solar installations, 
                  CCTV systems, and related services (the "Services"), you agree to these Terms and Conditions. 
                  Please read the Terms and Conditions carefully.
                </p>
              </section>

              {/* Acceptance of Terms */}
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Acceptance of Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  By using our Site or any of our Services, you represent that you are an authorized user and 
                  agree to these Terms and Conditions. If any of these statements are not true, then you may 
                  not use our Services. If you are accessing our services on behalf of a company or organization, 
                  you represent that you have the authority to bind that entity to these terms.
                </p>
              </section>

              {/* Company Information */}
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Company Information</h2>
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">RC Power Project Ltd. (Formerly Known As R.C. Enterprises)</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                    <div>
                      <p><strong>Registered Office:</strong> P.No. B4/32, South Part, Chitrakoot, Vaishali Nagar, Jaipur-302021 (RAJ.)</p>
                      <p><strong>CIN:</strong> U42909RJ2023PLC087797</p>
                      <p><strong>GST No:</strong> 08AAMCR6996H1ZI</p>
                      <p><strong>PAN:</strong> AAMCR6996H</p>
                    </div>
                    <div>
                      <p><strong>Contact:</strong> +91 94621 63124</p>
                      <p><strong>Email:</strong> rcpplimited733@gmail.com</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-700">
                    RC Power is an 'A' Class Electrical & Civil Government Approved Contractor, 
                    registered with various Government of India Electrical Bodies since 2012.
                  </p>
                </div>
              </section>

              {/* Services Offered */}
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Services Offered</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>LT & HT Electrical Work</strong> - Low Tension and High Tension electrical installations</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>132 KVA Grid Stations</strong> - Power substation construction and maintenance</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>CCTV Installation & Maintenance</strong> - Security surveillance systems</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>Solar Power Projects</strong> - Renewable energy installations</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>Industrial Automation</strong> - Process control and automation solutions</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>Electrical Contracting</strong> - Government and private sector electrical work</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>Civil Construction</strong> - Associated civil works for electrical projects</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Limited License */}
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Limited License for Use of Site Content</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Ownership</h3>
                    <p className="text-gray-700 leading-relaxed">
                      All content on the Site, including text, graphics, logos, images, technical drawings, 
                      specifications, and software is owned by RC Power Project Ltd., or its licensors. 
                      You have a limited, non-exclusive, and non-transferable license to access and use 
                      the content for personal, informational and non-commercial purposes only.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Restrictions</h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      You should not copy, reproduce, distribute, modify, or use any content obtained 
                      from the Site for any commercial purpose without our express written permission. 
                      This includes but not limited to:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Technical specifications and drawings</li>
                      <li>Project images and documentation</li>
                      <li>Company logos and branding materials</li>
                      <li>Service descriptions and methodologies</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Additional Restrictions */}
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Additional Restrictions on Use</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Prohibited Actions</h3>
                    <p className="text-gray-700 leading-relaxed mb-2">You are not permitted to:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Hack, crack, or circumvent security measures</li>
                      <li>Use automated scripts, bots, or similar tools to access content</li>
                      <li>Attempt to gain unauthorized access to project information or client data</li>
                      <li>Reverse engineer any technical specifications or methodologies</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Professional Standards */}
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">13. Professional Standards and Compliance</h2>
                <div className="bg-green-50 rounded-lg p-6">
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Licensing:</strong> RC Power maintains all required licenses and certifications for electrical and civil contracting work.</li>
                    <li><strong>Safety Standards:</strong> All work is performed according to Indian electrical safety standards, environmental regulations, and occupational safety requirements.</li>
                    <li><strong>Government Compliance:</strong> We comply with all relevant Government of India regulations, tender processes, and reporting requirements.</li>
                  </ul>
                </div>
              </section>

              {/* Governing Law */}
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">17. Governing Law and Jurisdiction</h2>
                <div className="bg-yellow-50 rounded-lg p-6">
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Applicable Law:</strong> These Terms and Conditions are governed by the Laws of India, specifically the laws of Rajasthan State.</li>
                    <li><strong>Jurisdiction:</strong> Any disputes will be subject to the jurisdiction of Courts in Jaipur, Rajasthan, India.</li>
                    <li><strong>Dispute Resolution:</strong> We encourage resolution of disputes through direct communication and, if necessary, mediation before formal legal proceedings.</li>
                  </ul>
                </div>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">21. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For questions about these Terms and Conditions, please contact us at:
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">RC Power Project Ltd.</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-blue-600 mt-0.5" />
                        <div>
                          <p className="text-gray-700">P.No. B4/32, South Part,</p>
                          <p className="text-gray-700">Chitrakoot, Vaishali Nagar,</p>
                          <p className="text-gray-700">Jaipur-302021 (RAJ.)</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-blue-600" />
                        <p className="text-gray-700">+91 94621 63124</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-blue-600" />
                        <p className="text-gray-700">rcpplimited733@gmail.com</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-blue-600" />
                        <p className="text-gray-700">Monday to Saturday, 9:00 AM to 6:00 PM IST</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Footer Notice */}
              <section className="border-t pt-6">
                <div className="text-center text-sm text-gray-600">
                  <p>© 2024 RC Power Project Ltd. All rights reserved.</p>
                  <p className="mt-1">Last Updated: January 2024 | Version 1.0</p>
                </div>
              </section>
            </div>
          </div>
      </main>
    </div>
  );
}