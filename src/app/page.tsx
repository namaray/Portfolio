import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import AchievementsSection from '@/components/AchievementsSection';
import SkillsSection from '@/components/SkillsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-background min-h-screen relative overflow-hidden">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <AchievementsSection />
      <Footer />
    </main>
  );
}
