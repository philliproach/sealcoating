const websiteContent = {
//GENERAL
        //CONTACT
    "owner-name": "John Doe",
    "company-phone": "(123) 456-7890",
    "company-email": "example@example.com",
        //COMPANY INFO
    "company-name": "The Driveway Man",
    "copyright-company-name": "The Driveway Man",
    "company-footer-about": "About the company / business for footer",
    "copyright-year": "2025",
        //SOCIAL LINKS
    "social-links": {
        "facebook-link": {
            url: "https://facebook.com/",
            icon: "bi bi-facebook"
        },
        "twitter-link": {
            url: "https://twitter.com/",
            icon: "bi bi-twitter-x"
        },
        "instagram-link": {
            url: "https://instagram.com/",
            icon: "bi bi-instagram"
        },
    },
        //INDEX AND ABOUT
   "bottom-large-header": "Professional Sealcoating",
   "bottom-large-subheader": "Professional Sealcoating Services in Harrison County.",
  
//ABOUT
   "about-tagline": "About Us",
   "about-the-business": "Paragraph about the business goes here.",
   "about-top-header": "Professional Sealcoating",
   "about-top-subheader": "Professional Sealcoating Services in Harrison County.",

//CONTACT
    "contact-tagline": "Contact Us",
    "contact-owner-name": "John Doe",
    "contact-company-phone": "(123) 456-7890",
    "contact-company-email": "example@example.com",
    
//INDEX
        //PAGE INFO
    "index-tagline": "The Driveway Man",
    "large-header": "Professional Sealcoating",
    "large-subheader": "Enhance your driveways with our professional sealcoating.",

        //---services---
    "service1": "Line Striping",
    "service1desc": "About service 1",
    "service2": "Crack Sealing",
    "service2desc": "About service 2",
    "service3": "Concrete Sealing",
    "service3desc": "About service 3",
        //---why choose us---
    "wcu1": "Experience",
    "wcu1desc": "Over 3 years of experience sealcoating",
    "wcu2": "Quality Sealcoating",
    "wcu2desc": "We offer quality sealcoating.",
    "wcu3": "Experienced Team",
    "wcu3desc": "Our team has the experience for professional sealcoating.",
    "wcu4": "Timely Service",
    "wcu4desc": "On-time project completion.",




        
    "ending": "IGNORE THIS"
};
document.addEventListener("DOMContentLoaded", function() {
    for (const id in websiteContent) {
        if (id === "social-links") continue;

        const element = document.getElementById(id);
        if (element) {
            element.textContent = websiteContent[id];
        }
    }

    const socialLinks = websiteContent["social-links"];
    for (const linkId in socialLinks) {
        const linkElement = document.getElementById(linkId);
        if (linkElement) {
            linkElement.href = socialLinks[linkId].url;

            const iconElement = linkElement.querySelector("i");
            if (iconElement) {
                iconElement.className = "";
                iconElement.className = socialLinks[linkId].icon;
            }
        }
    }
});
