import Link from "next/link";
import PortableTextComponent from "../ui/PortableTextComponent";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const CaseDetailSection = ({ caseData, caseDetail }) => {
  return (
    <main className="bg-white">
      <section className=" container py-8 ">
        <article className="flex flex-col lg:flex-row gap-4">
          {/* Main case Content */}
          <article className="w-full">
            {/* case Main Image */}
            <div className="relative w-full h-[600px] rounded-xl overflow-hidden mb-6">
              <Image
                src={caseDetail?.mainImage}
                alt={caseDetail?.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Portable Text Content */}
            <div className="prose prose-lg max-w-none py-[20px]">
              <h1 className="text-2xl lg:text-3xl font-semibold mb-4">
                Introduction
              </h1>
              <PortableTextComponent content={caseDetail?.intro} />
            </div>
            <div className="prose prose-lg max-w-none py-[20px]">
              <h1 className="text-2xl lg:text-3xl font-semibold mb-4">
                Problem Statement
              </h1>
              <PortableTextComponent content={caseDetail?.problemStatement} />
            </div>
            <div className="prose prose-lg max-w-none py-[20px]">
              <h1 className="text-2xl lg:text-3xl font-semibold mb-4">
                About Company
              </h1>
              <PortableTextComponent content={caseDetail?.aboutCompany} />
            </div>
            <div className="prose prose-lg max-w-none py-[20px]">
              <h1 className="text-2xl lg:text-3xl font-semibold mb-4">
                Our Solution
              </h1>
              <PortableTextComponent content={caseDetail?.ourSolution} />
            </div>
            <div className="prose prose-lg max-w-none py-[20px]">
              <h1 className="text-2xl lg:text-3xl font-semibold mb-4">
                Results
              </h1>
              <PortableTextComponent content={caseDetail?.result} />
            </div>
            <div className="prose prose-lg max-w-none py-[20px]">
              <h1 className="text-2xl lg:text-3xl font-semibold mb-4">
                Review
              </h1>
              <div className="flex w-full items-center">
                <div className="bg-gray-50 rounded-lg">
                  <div className="flex flex-col text-left">
                    <div className="p-4">
                      <PortableTextComponent
                        content={caseDetail?.clientReview}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </article>
      </section>
    </main>
  );
};

export default CaseDetailSection;
