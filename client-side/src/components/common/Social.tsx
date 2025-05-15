import { socialLinks } from "../../data/sociallinks";

interface Socialprops {
  direction: string;
}

export default function Social({ direction }: Socialprops) {
  return (
    <span
      className={`flex ${
        direction === "row" ? "flex-row" : "flex-col"
      } gap-4 backdrop-blur-2xl p-1 bg-white/20 rounded justify-around`}
    >
      {socialLinks.map((link, index) => {
        const Icon = link.Icon;
        return (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              size={30}
              title={link.title}
              color={link.color}
              className="hover:scale-110 transition-transform"
            />
          </a>
        );
      })}
    </span>
  );
}
