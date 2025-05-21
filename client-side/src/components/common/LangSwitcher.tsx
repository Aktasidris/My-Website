import { useDispatch, useSelector } from "react-redux";
import { setLang, LangType } from "../../store/featuresApp/appSlice";
import { RootState } from "../../store";
export default function LangSwitcher() {
  const dispatch = useDispatch();
  const currentLang = useSelector((state: RootState) => state.app.lang);

  const handleLangSwitch = (lang: LangType) => {
    if (lang !== currentLang) {
      dispatch(setLang(lang));
    }
  };
  return (
    <div className="flex gap-2 items-center font-light border-x border-[var(--color-border)] rounded-full overflow-hidden bg-[var(--color-background)] text-xs sm:text-sm">
      {(["tr", "en"] as LangType[]).map((lang) => (
        <button
          key={lang}
          onClick={() => handleLangSwitch(lang)}
          className={` transition-all duration-200 px-1 w-full h-full  ${
            currentLang === lang
              ? "bg-[var(--color-accent)] text-[var(--color-background)]"
              : "text-[var(--color-primary)] hover:bg-[var(--color-accent)]/20"
          }`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
