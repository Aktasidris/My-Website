import {socialLinks} from '../../data/sociallinks'


export default function Social() {
    return (
      <div className="flex flex-col gap-4 backdrop-blur-2xl p-1 bg-white/30 rounded">
        {socialLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer ">
              <Icon size={30} title={link.title} color={link.color} className='hover:scale-110 transition-transform' />
            </a>
          );
        })}
      </div>
    );
  }