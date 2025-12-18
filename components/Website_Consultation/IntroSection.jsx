import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import EnquiryForm from "../Common/EnquiryForm";

const IntroSection = ({ consultationData }) => {
  return (
    <main className="bg-gray-50">
      <section className="container py-[50px]">
        {consultationData.map((item, idx) => (
          <article
            key={idx}
            className="flex flex-col mx-auto justify-center items-center text-center"
          >
            <div className="w-full lg:w-3/4 p-4">
              <h4 className="text-3xl lg:text-4xl mb-4 text-primary font-semibold">
                {item?.introHeadline}
              </h4>
              <p className="text-md lg:text-lg mb-6 text-gray-700">
                {item?.introDescription}
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>{item?.introButtonText || "Book Your Clarity Call"}</Button>
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
          </article>
        ))}
      </section>
    </main>
  );
};

export default IntroSection;
