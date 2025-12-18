import { Separator } from "../ui/separator";

const ProvenResults = ({ consultationData }) => {
  return (
    <main className="bg-gray-50">
      <section className="container py-[50px]">
        {consultationData.map((item, idx) => (
          <article key={idx}>
            <div className="w-full p-4 lg:px-12">
              <h4 className="text-3xl text-center lg:text-4xl w-full lg:w-1/2 mx-auto mb-6 text-primary font-bold">
                {item?.resultsHeadline}
              </h4>
              {item?.resultsDescription && (
                <div className="w-full text-xl text-center text-gray-600 py-4 lg:w-3/4 mx-auto">
                  <p>{item?.resultsDescription}</p>
                </div>
              )}
              <div className="rounded-lg flex flex-col lg:flex-row gap-4 p-2">
                {item?.results?.map((data, i) => (
                  <div
                    className="flex w-full lg:w-1/3 mx-auto bg-primary p-2 rounded-xl bg-[url('/bg_rounded.png')] bg-cover bg-no-repeat bg-center"
                    key={i}
                  >
                    <div className="flex flex-col p-6 rounded-xl gap-4 text-center w-full">
                      <div className="text-5xl lg:text-6xl font-bold text-[#00EAB4]">
                        {data?.stat}
                      </div>
                      <h4 className="font-bold text-white text-xl">
                        {data?.label}
                      </h4>
                      <Separator />
                      <p className="text-white/80">{data?.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default ProvenResults;
