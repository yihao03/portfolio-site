import Container from "@/components/Container";
import { contacts } from "./contacts";
import ContactCard from "./ContactCard";

const ContactMe: React.FC = () => {
  return (
    <Container>
      <p className="text-6xl font-bold text-center mb-4 mt-16">
        Contact Me
      </p>
      {contacts.map((contact) => (
        <ContactCard {...contact} />
      ))}
    </Container>
  );
};

export default ContactMe;
