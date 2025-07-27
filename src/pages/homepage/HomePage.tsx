import Container from "@/components/Container";
import type React from "react";
import { Link } from "react-router";

const HomePage: React.FC = () => {
  return (
    <Container>
      <h1 className="text-7xl font-bold mb-4">Hi, I'm Yi Hao</h1>
      <div className="text-lg space-y-2">
        <p>I'm a sophomore Computer Science student at NUS.</p>
        <p>
          I am also part of{" "}
          <Link to="https://nuscollege.nus.edu.sg" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            NUS College
          </Link>
          .
        </p>
        <p>This website is being actively developed. Come back for more!</p>
      </div>
    </Container>
  );
}

export default HomePage;
