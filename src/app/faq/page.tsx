import { getAllFAQs } from "@/lib/sanity/fetchers";
import FAQPage from "@/components/shared/FAQPage";

export default async function FAQ() {
  const faqs = await getAllFAQs();
  return <FAQPage faqs={faqs} />;
}