import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className="py-8 flex items-center justify-between ">
        <span>
          {new Date().getFullYear()} &copy; Todos direitos reservados.
        </span>
        <div className="flex items-center">
          Construido com
          <span className="text-primary text-2x;l px-1">&#9825;</span>
          por&nbsp;
          <Link
            className="underline underline-offset-2"
            href="https://github.com/ederusena/"
            target={"_blank"}
          >
            Ederusena
          </Link>
        </div>
        <Link
          className="underline underline-offset-2"
          target={"_blank"}
          href="https://www.linkedin.com/in/edersena/"
        >
          Diga olá!
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
