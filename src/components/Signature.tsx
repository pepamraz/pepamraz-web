import React, { useMemo } from "react";

const Signature: React.FC = () => {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="flex justify-center bg-secondary text-white font-black text-shadow-lg py-2">
      &copy; Pepa Mráz {year}
    </div>
  );
};

export default Signature;
