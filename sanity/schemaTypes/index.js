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

export const schema = {
  types: [home, linkedin, seo, emailMarketing, contentStrategy, paidads, about, clientele, testimonials, faqs, blogs],
};
