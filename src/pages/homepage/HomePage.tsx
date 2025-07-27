import { Badge } from "@/components/ui/badge";
import type React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      {Array(100)
        .fill(0)
        .map((_, index) => (
          <h1 key={index}>hi</h1>
        ))}
    </div>
  );
}

export default HomePage;
