type TAJMarkProps = {
  gold?: boolean;
};

export default function TAJMark({ gold = false }: TAJMarkProps) {
  return (
    <>
      TA<span className={`taj-j${gold ? " gold-text" : ""}`}>J</span>
    </>
  );
}
