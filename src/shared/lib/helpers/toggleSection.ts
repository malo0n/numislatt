export const toggleSection = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
  setter((prev) => !prev);
};
