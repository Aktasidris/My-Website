import { useState, useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { MdOutlineFilterList, MdClear } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";

interface FilterBarProps {
  projects: { techStack: string[] }[];
  onFilter: (selectedTechs: string[]) => void;
}

const FilterBar = ({ projects, onFilter }: FilterBarProps) => {
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const allTechs = Array.from(
    new Set(projects.flatMap((p) => p.techStack || []))
  );

  const toggleTech = (tech: string) => {
    setSelectedTechs((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  const clearFilters = () => setSelectedTechs([]);

  useEffect(() => {
    onFilter(selectedTechs);
  }, [selectedTechs]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex flex-col items-end gap-2">
      {/* Seçilen Teknolojiler */}
      <div className="flex gap-2 flex-wrap ">
        {selectedTechs.map((tech, index) => (
          <div
            key={index}
            className="flex items-center bg-[var(--color-muted)] text-[var(--color-primary)] rounded-full px-2 py-1 text-sm border-1"
          >
            {tech}
            <button
              className="ml-2"
              onClick={() =>
                setSelectedTechs((prev) => prev.filter((t) => t !== tech))
              }
            >
              <IoMdClose className="text-[var(--color-primary)] hover:text-[var(--color-error)]" />
            </button>
          </div>
        ))}
      </div>

      {/* Filtreleme İkonu */}
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center text-[var(--color-primary)] hover:text-[var(--color-primary)]/80"
      >
        <MdOutlineFilterList className="mr-2" /> Filtrele
      </button>

      {/* Filtre Dropdown */}
      {isDropdownOpen && (
        <div
          className="absolute top-full mt-2 right-0 w-full max-w-xs bg-[var(--color-background)] shadow-lg rounded-md min-w-2xs z-30 border-2 border-[var(--color-border)]"
          ref={dropdownRef}
        >
          <div className="p-4 flex flex-col gap-2 max-h-60 overflow-auto relative backdrop-blur-2xl">
            <button
              onClick={clearFilters}
              className="mt-2 text-[var(--color-secondary)] text-sm hover:underline flex items-center justify-center"
            >
              Tümünü Temizle <MdClear  className="hover:text-[var(--color-error)] text-lg"/>
            </button>
            {allTechs.map((tech, index) => (
              <div key={index} className="flex items-center justify-between">
                <label className="text-sm text-[var(--color-primary)] flex items-center gap-1.5">
                  <GrTechnology></GrTechnology>
                  {tech}
                </label>
                <input
                  type="checkbox"
                  checked={selectedTechs.includes(tech)}
                  onChange={() => toggleTech(tech)}
                  className="text-[var(--color-primary)]"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterBar;
