type TAJMarkProps = {
  gold?: boolean;
};

export default function TAJMark({ gold = false }: TAJMarkProps) {
  return (
    <span className={`taj-wordmark${gold ? " gold-text" : ""}`}>TAJ</span>
  );
}
