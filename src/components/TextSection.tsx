import { useMemo } from 'react';

function TextSection({ idx, children }: Props) {
  const className = useMemo(() => `text${idx}`, [idx]);
  const id = useMemo(() => `logo${idx}`, [idx]);

  return (
    <div className={className}>
      <div id={id}>{children}</div>
    </div>
  );
}

type Props = {
  idx: number;
  children: React.ReactElement | React.ReactElement[];
};

export default TextSection;
