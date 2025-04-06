import { IconBrandGithub, IconGitMerge } from '@tabler/icons-react';
import packageInfo from '../package.json';

const Footer = () => {
  return (
    <div className="p-4 flex flex-col gap-1 items-center">
      <p className="text-white">
        By{' '}
        <a
          href="https://github.com/rohitkr150015"
          target="_blank"
          className="text-yellow-400 underline underline-offset-1"
        >
          rohitkr150015
        </a>
        <IconBrandGithub className="inline-block ml-1" size={20} />
      </p>
      <p className="text-white">
        Version: {packageInfo.version}
        <IconGitMerge className="inline-block ml-1" size={20} />
      </p>
    </div>
  );
};

export default Footer;
