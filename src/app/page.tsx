import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import AchievementsSection from '@/components/AchievementsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-[#0b1020] min-h-screen relative overflow-hidden">
      {/* Global Animated Background Atmosphere */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#00d2ff]/10 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute top-[30%] right-[-10%] w-[40rem] h-[40rem] bg-purple-500/10 rounded-full blur-[150px] animate-float-delayed"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[50rem] h-[50rem] bg-blue-600/10 rounded-full blur-[150px] animate-float"></div>
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
