import type { Contact } from "@/types/contact";
import { motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router";

const ContactCard: React.FC<Contact> = (props: Contact) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 15;
    const rotateY = ((x - centerX) / centerX) * 15;
    setRotate({ x: -rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      style={{
        opacity: 0.8,
        boxShadow: `${-rotate.y / 2}px ${rotate.x / 2}px 20px 0px rgba(0,0,0,0.4)`
      }}
      whileHover={{
        opacity: 0.9,
        rotateX: rotate.x,
        rotateY: rotate.y
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="m-4 align-center text-xl flex flex-col bg-gray-700 w-fit p-4 rounded-xl shadow-2xl"
      drag
      dragElastic={0.5}
      dragConstraints={{ top: -125, right: 125, bottom: 125, left: -125 }}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
    >
      <div className="flex flex-row">
        <props.icon className="text-2xl mr-2" />
        <p>{props.name}</p>
      </div>
      <Link to={props.link ?? "#"}>
        <p>{props.username}</p>
      </Link>
    </motion.div>
  )
}

export default ContactCard;
