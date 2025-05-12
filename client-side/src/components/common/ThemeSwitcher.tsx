import { JSX,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setTheme, ThemeType } from "../../store/featuresApp/appSlice";
import { TbSunset2 } from "react-icons/tb";
import { MdDarkMode, MdSunny } from "react-icons/md";
import clsx from "clsx";

const iconMap: Record<ThemeType, JSX.Element> = {
  light: <MdSunny size={24} />,
  dark: <MdDarkMode size={24} />,
  sunset: <TbSunset2 size={24} />,
};

const ThemeSwitcher = () => {
  const currentTheme = useSelector((state: RootState) => state.app.theme);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleSelect = (theme: ThemeType) => {
    dispatch(setTheme(theme));
    setExpanded(false);
  };

  const isOpen = expanded || hovered;

  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Ana ikon */}
      <button
        className="cursor-pointer focus:outline-none"
        onClick={() => setExpanded((prev) => !prev)}
        aria-label="Toggle theme switcher"
      >
        {iconMap[currentTheme]}
      </button>

      {/* Diğer temalar */}
      {isOpen && (
        <div className="absolute top-full mt-2 flex gap-2 bg-[--color-background] p-2 rounded shadow-xl z-10">
          {(Object.keys(iconMap) as ThemeType[]).map((theme) => (
            <button
              key={theme}
              onClick={() => handleSelect(theme)}
              className={clsx(
                "transition-all p-1 rounded hover:scale-110 focus:outline-none",
                theme === currentTheme
                  ? "opacity-100 scale-105"
                  : "opacity-50 hover:opacity-100"
              )}
              aria-label={`Change to ${theme} theme`}
            >
              {iconMap[theme]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
