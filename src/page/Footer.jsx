import { useSelector } from "react-redux";

export default function Footer() {
  const dark = useSelector((state) => state.dark);
  return (
    <>
      <footer className={`${dark?"bg-black":"bg-white"} w-full py-6  justify-center items-center  `}>
        <div className="text-center ">
          <span className={`${!dark?"text-black":"text-white"}`}>© All rights reserved 2024 | Designed by {"SAID KOURBISSE "}</span>
        </div>
      </footer>
    </>
  );
}
