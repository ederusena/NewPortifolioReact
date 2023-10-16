import React, {useRef, useEffect} from "react";
import Head from "next/head";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import ProfilePic from "../../public/images/profile/eder.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";

const AnimetedNumbers = ({ values }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 100, damping: 50 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(values);
    }
  }, [isInView, values, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if(ref.current && latest.toFixed(0) <= values) {
        ref.current.innerHTML = latest.toFixed(0);
      }
    });
  }, [springValue, values]);

  return <span ref={ref}>{values}</span>;
};

const About = () => {
  return (
    <>
      <Head>
        <title>Eder Sena | Página Sobre</title>
        <meta name="description" content="Página Sobre do portifólio" />
      </Head>

      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Be water, my friend!"
            className="mb-16 text-7xl"
          />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biografia
              </h2>
              <p className="font-medium">
                - Hi, I'm CodeBucks, a web developer and UI/UX designer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. With 4 years of experience in the field. I
                am always looking for new and innovative ways to bring my
                clients' visions to life.
              </p>
              <p className="my-4 font-medium">
                - I believe that design is about more than just making things
                look pretty – it's about solving problems and creating
                intuitive, enjoyable experiences for users.
              </p>

              <p className="font-medium">
                - Whether I'm working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
              <div className="absolute top-4 -right-4 -z-10 w-[102%] h-[100%] rounded-[1rem] bg-dark" />
              <div className="p-8 bg-dark rounded-xl">
                <Image
                  src={ProfilePic}
                  alt="logo"
                  className="w-full h-auto rounded-2xl p-4"
                />
              </div>
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimetedNumbers values={50} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Clientes satisfeitos
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimetedNumbers values={40} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Projetos concluidos
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimetedNumbers values={4} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Anos de experiencia
                </h2>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default About;