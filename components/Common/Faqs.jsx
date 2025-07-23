import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PortableTextComponent from "../ui/PortableTextComponent";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "../ui/dialog";
import EnquiryForm from "./EnquiryForm";

const Faqs = ({ faqData }) => {
  return (
    <main className="bg-white">
      <section className="container py-[50px]">
        <div className="text-center space-y-2 p-2">
          <h4 className="text-3xl text-primary font-semibold">
            Common Questions About Revenue Engine Marketing
          </h4>
        </div>
        <div className="my-12 w-full lg:w-3/4 flex flex-col lg:mx-auto bg-gray-50 p-6 rounded-xl">
          <Accordion type="single" collapsible className="w-full pb-4">
            {faqData.map((item, i) => (
              <AccordionItem value={`item-${i}`} key={i}>
                <AccordionTrigger>
                  <h4 className="text-md text-left lg:text-lg font-semibold">
                    {item?.faqQuestion}
                  </h4>
                </AccordionTrigger>
                <AccordionContent>
                  <PortableTextComponent content={item?.answer} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="py-4 flex justify-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button>Talk to us</Button>
            </DialogTrigger>
            <DialogContent className="max-h-[600px] overflow-y-scroll">
              <DialogTitle>
                <h4 className="text-3xl font-bold py-2 mb-4 text-left text-rimary">
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

export default Faqs;
