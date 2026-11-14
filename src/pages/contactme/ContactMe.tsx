import Container from "@/components/Container";
import { contacts } from "./contacts";
import ContactCard from "./ContactCard";

export default function ContactMe() {
  return (
    <Container>
      <section className="w-full max-w-2xl" aria-labelledby="contact-heading">
        <h1 id="contact-heading" className="mb-6">
          Contact
        </h1>
        <p className="max-w-prose text-lg leading-relaxed text-gray-300">
          Get in touch for collaborations, software projects, or a conversation.
        </p>
        <ul className="mt-10 divide-y divide-white/10 border-y border-white/10">
          {contacts.map((contact) => (
            <li key={contact.username}>
              <ContactCard {...contact} />
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}
