import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import {
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  DribbbleIcon,
} from "./Icons";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center  justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="Sobre" className="mx-4" />
        <CustomLink href="/projects" title="Projetos" className="mx-4" />
        <CustomLink href="/articles" title="Artigos" className="ml-4" />
      </nav>
      <nav className="flex items-center justify-center flex-wrap gap-2">
        <motion.a
          href="https://twitter.com/"
          target={"_blank"}
          whileHover={{
            y: -5,
            transition: { duration: 0.3 },
          }}
          className="w-6 mr-3"
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="https://github.com/ederusena"
          target={"_blank"}
          whileHover={{
            y: -5,
            transition: { duration: 0.3 },
          }}
          className="w-6 mr-3"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/edersena/"
          target={"_blank"}
          whileHover={{
            y: -5,
            transition: { duration: 0.3 },
          }}
          className="w-6 mr-3"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="https://br.pinterest.com/"
          target={"_blank"}
          whileHover={{
            y: -5,
            transition: { duration: 0.3 },
          }}
          className="w-6 mr-3"
        >
          <PinterestIcon />
        </motion.a>
        <motion.a
          href="https://dribbble.com/tags/icons"
          target={"_blank"}
          whileHover={{
            y: -5,
            transition: { duration: 0.3 },
          }}
          className="w-6 mr-3"
        >
          <DribbbleIcon />
        </motion.a>
      </nav>
      <div className="absolute left-[50%] top-1 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
