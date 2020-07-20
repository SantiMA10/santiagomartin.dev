interface Props {
  alt: string;
  src: string;
}

export function Image({ alt, src }: Props) {
  return (
    <img className="object-cover w-full h-64 pb-2 pt-2" alt={alt} src={src} />
  );
}
