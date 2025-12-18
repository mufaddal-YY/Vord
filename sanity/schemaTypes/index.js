import about from "./about";
import clientele from "./clientele";
import contentStrategy from "./emailMarketing";
import emailMarketing from "./contentStrategy";
import faqs from "./faqs";
import home from "./home";
import linkedin from "./linkedin";
import paidads from "./paidads";
import seo from "./seo";
import testimonials from "./testimonials";
import blogs from "./blogs";
import contact from "./contact";
import caseStudies from "./caseStudies";
import websiteConsultation from "./websiteConsultation";

export const schema = {
  types: [home, linkedin, seo, emailMarketing, contentStrategy, paidads, websiteConsultation, about, clientele, testimonials, faqs, blogs, caseStudies, contact],
};
