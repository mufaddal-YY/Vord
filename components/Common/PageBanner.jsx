const PageBanner = ({ headline, subHeadline, backgroundImage }) => {
  if (backgroundImage) {
    return (
      <main>
        <section
          className="bg-primary bg-cover bg-center bg-no-repeat h-[300px] lg:h-[600px]"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></section>
        <section className="bg-white py-8">
          {/* <div className="container">
            <article className="w-full lg:w-1/2">
              <h1 className="text-2xl lg:text-4xl font-semibold">
                {headline}
              </h1>
              {subHeadline && (
                <p className="text-lg mt-4 text-gray-700">
                  {subHeadline}
                </p>
              )}
            </article>
          </div> */}
        </section>
      </main>
    );
  }

  return (
    <main className="bg-primary">
      <section className="container py-[50px] lg:py-[100px] text-left">
        <article className="w-full lg:w-1/2">
          <h1 className="text-white text-2xl lg:text-4xl font-semibold">
            {headline}
          </h1>
          {subHeadline && (
            <p className="text-white text-lg mt-4">
              {subHeadline}
            </p>
          )}
        </article>
      </section>
    </main>
  );
};

export default PageBanner;
