import { ContactInfoCard } from "./Contact-Info-Card";
import { WhyChooseCard } from "./Why-Choose-Card";

export function InfoCards() {
  return (
    <div className="space-y-6">
      <ContactInfoCard />
      <WhyChooseCard />
    </div>
  );
}
