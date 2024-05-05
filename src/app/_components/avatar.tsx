// Constants
import { nbsp } from '@/constants/HTML_ENTITIES';

type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <span>
      by{nbsp}<span className="font-bold">{name}</span>
    </span>
  );
};

export default Avatar;
