import { TestimonialView } from "@/components/modules/testimonials/Testimonial-View";
import { DialogProvider } from "@/contexts/DialogContext";

export default function TestimoniosPage() {
  return (
    <DialogProvider>
      <TestimonialView />
    </DialogProvider>
  );
}
