import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import EnquiryForm from "../Common/EnquiryForm";

const WebsiteFaqs = ({ consultationData }) => {
  return (
    <main className="bg-gray-50">
      <section className="container py-[50px]">
        {consultationData.map((item, idx) => (
          <div key={idx}>
            <div className="text-center space-y-2 p-2">
              <h4 className="text-3xl text-primary font-semibold">
                {item?.faqHeadline}
              </h4>
            </div>
            <div className="my-12 w-full lg:w-3/4 flex flex-col lg:mx-auto bg-white p-6 rounded-xl">
              <Accordion type="single" collapsible className="w-full pb-4">
                {item?.faqs?.map((faq, i) => (
                  <AccordionItem value={`item-${i}`} key={i}>
                    <AccordionTrigger>
                      <h4 className="text-md text-left lg:text-lg font-semibold">
                        {faq?.question}
                      </h4>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">{faq?.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        ))}
        <div className="py-4 flex justify-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button>Talk to us</Button>
            </DialogTrigger>
            <DialogContent className="max-h-[600px] overflow-y-scroll">
              <DialogTitle>
                <h4 className="text-3xl font-bold py-2 mb-4 text-left text-primary">
                  Enquire Now
                </h4>
              </DialogTitle>
              <EnquiryForm />
            </DialogContent>
          </Dialog>
        </div>
      </section>
    </main>
  );
};

export default WebsiteFaqs;
