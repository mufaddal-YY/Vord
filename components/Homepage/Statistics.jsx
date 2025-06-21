import { Button } from "../ui/button";

const Statistics = ({ homeData }) => {
  return (
    <main className="bg-primary" id="results">
      <section className="container py-[50px]">
        {homeData.map((item, idx) => (
          <article className="lg:p-6 flex flex-col lg:flex-row " key={idx}>
            <div className="text-center w-full lg:w-1/2 lg:text-left space-y-2 p-2 py-6">
              <h4 className="text-5xl text-white font-semibold">
                {item?.resultHeadline}
              </h4>
              <div className="py-4">
                <Button variant="secondary" className="bg-white text-primary">
                  View Detailed Case Studies
                </Button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 py-6">
              <div className="flex flex-wrap flex-row items-center">
                {item?.results.map((data, index) => (
                  <div className="w-1/2 p-2 items-center" key={index}>
                    <div className="text-center bg-[#0d5f7643] border border-[#0d5f7643] hover:border-[#00EAB4] h-[200px] rounded-xl p-6">
                      <h3 className="mt-2 text-3xl lg:text-4xl font-bold border-b border-white pb-2 text-white">
                        {data?.resultNumber}
                      </h3>
                      <p className="text-white text-xs py-4 capitalize">
                        {data?.description}
                      </p>
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

export default Statistics;
