type Props = {
  name: string;
  picture: string;
};

const nbsp = "\u00A0";

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center">
      by{nbsp}<div className="font-bold">{name}</div>
    </div>
  );
};

export default Avatar;
