import { useTheme } from "@/context/theme-provider";
import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import CitySearch from "./city-search";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link to={"/"}>
          <img
            src={isDark ? "/public/logo.png" : "/public/logo2.png"}
            alt="SkyLoom Logo"
            className="h-36 pt-2"
          />
        </Link>
        <div className="flex gap-4">
          <CitySearch />
          <div
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`flex items-center cursor-pointer transition-transform duration-500 first-letter:first-line 
              ${isDark ? "rotate-180" : "rotate-0"}`}
          >
            {isDark ? (
              <Sun className="h-6 w-6 text-yellow-500 rotate-0 transition-all"></Sun>
            ) : (
              <Moon className="h-6 w-6 text-blue-500 rotate-0 transition-all"></Moon>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
  