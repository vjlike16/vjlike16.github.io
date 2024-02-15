import Main from '@/components/main';
import Header from '@/components/header';
import Skill from '@/components/skill';
import Website from '@/components/website';
import About from '@/components/about';
export default function Home() {
  return (
    <div id='body'>
      <Header></Header>
      <Main></Main>
      <Skill></Skill>
      <About></About>
      <Website></Website>
    </div>
  );
}
