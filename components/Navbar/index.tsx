import { LogoIcon } from "@/icons/LogoIcon";

export default function NavBar() {
    return <div className="bg-gray-800 text-white h-14 flex items-center">
        <div className="wrapper-container w-full">
            <div className="flex items-center gap-1 cursor-pointer">
                <LogoIcon />
                <div className="font-semibold">
                    <span className="text-yellow-500">C</span>ypto <span className="text-yellow-500">C</span>hart
                </div>
            </div>
        </div>
    </div>
}