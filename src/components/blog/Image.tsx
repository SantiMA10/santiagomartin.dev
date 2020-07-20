interface Props {
  alt: string;
  src: string;
  nodeKey: string;
}

export function Image({ alt, src, nodeKey }: Props) {
  return (
    <img
      key={nodeKey}
      className="object-cover w-full h-64 pb-2 pt-2"
      alt={alt}
      src={src}
    />
  );
}
