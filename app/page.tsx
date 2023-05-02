import LoginRegisterWrapper from "@/Components/WelcomePage/LoginRegisterWrapper";
import LogoInfoSide from "@/Components/WelcomePage/LogoInfoSide";
import ThemeBtn from "@/Components/ThemeBtn";

export default function Home() {
  return (
    <div>
      <div className="h-screen lg:flex">
        <div className="w-screen h-1/4 lg:w-2/5 lg:h-screen bg-slate-300 dark:bg-slate-600 items-center justify-center flex">
          <LogoInfoSide />
        </div>
        <div className="w-screen  lg:w-3/5 lg:h-screen items-center justify-center flex relative">
          <div className="top-4 right-4 absolute">
            <ThemeBtn />
          </div>
          <LoginRegisterWrapper />
        </div>
      </div>
    </div>
  )
}
