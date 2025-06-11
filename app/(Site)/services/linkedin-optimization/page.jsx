import PageBanner from "@/components/Common/PageBanner";
import WhyLinkedin from "@/components/Linkedin_Optimization/WhyLinkedin";
import { getLinkedinData } from "@/sanity/fetchedData";

export default async function LinkedinOptimization() {
  const linkedinData = await getLinkedinData();
  return (
    <main>
      {linkedinData.map((item, idx) => (
        <div key={idx}>
          <PageBanner headline={item?.headline} />
        </div>
      ))}
      <WhyLinkedin linkedinData={linkedinData} />
    </main>
  );
}
