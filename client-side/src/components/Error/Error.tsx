import React from "react";
import { FaHome, FaMailBulk } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import CTABox from "../common/CTABox";
import { errordata } from "../../data/errorPage";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

interface ErrorProps {
  message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
const lang = useSelector((state: RootState) => state.app.lang);
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-[var(--color-background)] px-4">
      <div className="bg-red-100  p-6 rounded-xl shadow-md text-center max-w-md w-full space-y-4">
        <div className="bg-[var(--color-accent)] rounded text-primary p-4">
          <MdErrorOutline className="mx-auto text-6xl" />
          <h2 className="text-2xl font-bold ">{errordata[lang].title}!</h2>
          <p className="text-base ">{message}</p>
        </div>
        <CTABox
          to="/"
          text={errordata[lang].backHome}
          Icon={FaHome}
          buttonLabel=""
        />
        <CTABox
          to="/contact"
          text={errordata[lang].sendFeedback}
          Icon={FaMailBulk}
          buttonLabel=""
        />
      </div>
    </div>
  );
};

export default Error;
