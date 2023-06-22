import Image from 'next/image';
import { useTheme } from "next-themes";
import ThemeBtn from "../ThemeBtn"


export default function LogoInfoSide() {
    const { theme } = useTheme();

    let backgroundImage;
    if (theme === "light") {
      backgroundImage = '/EduConnect_LightTheme.png';
    } else if (theme === "dark") {
      backgroundImage = '/EduConnect_DarkTheme.png';
    } else {
        backgroundImage = '/EduConnect_LightTheme.png';
    }

    return (
        <div className="w-full">
            <h1 className="text-xl font-bold text-white text-center">
                <div className='flex justify-center'>
                    <div>
                        <div>
                            Welcome to
                        </div>
                        <div className='flex'>
                            <img src={ backgroundImage } alt={"logo"} width={120} height={60}/>
                        </div>
                    </div>
                </div>
            </h1>
        </div>
    )
}