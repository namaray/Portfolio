import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import AchievementsSection from '@/components/AchievementsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Fixed background image */}
      <div 
        className="fixed inset-0 bg-center bg-cover bg-no-repeat -z-20"
        style={{ backgroundImage: "url('/bg-swift-spring.png')" }}
      />
      {/* Subtle warm overlay to unify colors */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#2d2332]/30 via-transparent to-[#2d2332]/50 -z-10 pointer-events-none" />

      {/* Falling Sakura Petals — scattered across the whole page */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        <div className="absolute top-0 left-[5%] w-2 h-2 bg-[#e88a9a] rounded-full animate-petal-fall opacity-60" />
        <div className="absolute top-0 left-[15%] w-3 h-2 bg-[#f4a0a8] rounded-full animate-petal-fall-slow opacity-50 rotate-45" />
        <div className="absolute top-0 left-[25%] w-2 h-3 bg-[#e85d5d] rounded-full animate-petal-fall-fast opacity-40 -rotate-12" />
        <div className="absolute top-0 left-[40%] w-2 h-2 bg-[#f0b0b0] rounded-full animate-petal-fall opacity-55 rotate-[30deg]" />
        <div className="absolute top-0 left-[55%] w-3 h-2 bg-[#e88a9a] rounded-full animate-petal-fall-slow opacity-45 -rotate-45" />
        <div className="absolute top-0 left-[70%] w-2 h-2 bg-[#e85d5d] rounded-full animate-petal-fall-fast opacity-50 rotate-12" />
        <div className="absolute top-0 left-[85%] w-3 h-3 bg-[#f4a0a8] rounded-full animate-petal-fall opacity-40 rotate-[60deg]" />
        <div className="absolute top-0 left-[95%] w-2 h-2 bg-[#e88a9a] rounded-full animate-petal-fall-slow opacity-55 -rotate-[20deg]" />
      </div>

      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <AchievementsSection />
      <Footer />
    </main>
  );
}
