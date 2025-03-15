import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export const AuthDialog = () => {
  const [isAuthDialogOpen, setisAuthDialogOpen] = useState(false);
  

  useEffect(() => {

  },[])

  return (
    <AnimatePresence>
      {isAuthDialogOpen && (
      <div>authModal</div>
      )}
    </AnimatePresence>
  );
};
