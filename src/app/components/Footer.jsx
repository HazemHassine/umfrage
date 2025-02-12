const Footer = () => {
    const footerSections = [
      {
        title: "Solutions",
        links: ["Marketing", "Analytics", "Commerce", "Insights"],
      },
      {
        title: "Support",
        links: ["Pricing", "Documentation", "Guides", "API Status"],
      },
      {
        title: "Company",
        links: ["About", "Blog", "Jobs", "Press", "Partners"],
      },
      {
        title: "Legal",
        links: ["Claim", "Privacy", "Terms"],
      },
    ]
  
    return (
      <footer className="bg-white border-2 border-black border-solid" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8">
              <p>LOGO</p>
              <p className="text-sm leading-6 text-gray-600">
                Making online polls easy, accessible and rewarding to everyone.
              </p>
              <div className="flex space-x-6">
                {["Facebook", "Fire", "X", "GitHub", "YouTube"].map((social) => (
                  <a key={social} href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">{social}</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                {footerSections.slice(0, 2).map((section) => (
                  <div key={section.title} className={section.title === "Support" ? "mt-10 md:mt-0" : ""}>
                    <h3 className="text-sm font-semibold leading-6 text-gray-900">{section.title}</h3>
                    <ul role="list" className="mt-6 space-y-4">
                      {section.links.map((link) => (
                        <li key={link}>
                          <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                {footerSections.slice(2).map((section) => (
                  <div key={section.title} className={section.title === "Legal" ? "mt-10 md:mt-0" : ""}>
                    <h3 className="text-sm font-semibold leading-6 text-gray-900">{section.title}</h3>
                    <ul role="list" className="mt-6 space-y-4">
                      {section.links.map((link) => (
                        <li key={link}>
                          <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
            <p className="text-xs leading-5 text-gray-500">&copy; 2025 Umfrage, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer
  
  