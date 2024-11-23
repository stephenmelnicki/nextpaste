import { cn } from '@/lib/utils';

interface LineProps {
  line: string;
  number: number;
}

export function Line(props: LineProps) {
  const before = cn(
    'before:inline-block',
    'before:mr-4',
    'before:pr-4',
    'before:w-16',
    'before:text-right',
    'before:content-[attr(data-line-number)]',
  );

  return (
    <code data-line-number={props.number + 1} className={before}>
      {props.line}
    </code>
  );
}
