import Head from "next/head";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCourses } from "../utilities/Redux/slices/courseSlice";
import PackageSection from "../components/HomeComponents/PackageSection";
import QuizSection from "../components/HomeComponents/QuizSection";
import HeroSection from "../components/HomeComponents/HeroSection";
import TalentSection from "../components/HomeComponents/TalentSection";
import TestimonialSection from "../components/HomeComponents/TestimonialSection";
import FeatureSection from "../components/HomeComponents/FeatureSection";
import CounterSection from "../components/HomeComponents/CounterSection";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  return (
    <div>
      <Head>
        <title>Radiant Academy</title>
        <meta name="Your learning partner" content="Best learning app for the curious learners" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* HOMEPAGE CONTENT GOES HERE (WITHOUT NAVBAR & FOOTER) */}
        <HeroSection />
        <FeatureSection />
        <TalentSection />
        <QuizSection />
        <PackageSection />
        <TestimonialSection />
        <CounterSection />

    </div>
  )
}
