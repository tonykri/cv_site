import Image from 'next/image';

export default function LogoInfoSide() {
    return (
        <div className="w-full">
            <h1 className="text-xl font-bold text-white text-center">
                <div className='flex justify-center'>
                    <div>
                        <div>
                        Welcome to
                        </div>
                        <div>
                            <Image src={'/EduConnectLogoSmall.ico'} alt={"logo"} width={50} height={50}/><span className="text-blue-600 mt-1 text-2xl"> Connect</span>
                             {/* localStorage.getItem('theme') === 'dark' ? <Image src="/EduConnect_DarkTheme.png" alt={"logo"} width={200} height={200}/> : <Image src="/EduConnect_LightTheme.png" alt={"logo"} width={200} height={200}/> */}
                        </div>
                    </div>
                </div>
            </h1>
        </div>
    )
}