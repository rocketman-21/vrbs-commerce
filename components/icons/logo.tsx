import clsx from 'clsx';

export default function LogoIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      className={clsx('h-4 w-4 fill-black dark:fill-white', props.className)}
      shapeRendering="crispEdges"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`${process.env.SITE_NAME} logo`}
      viewBox="0 0 90 90"
    >
      <g fill="#328452">
        <path d="m0 20h10v10h-10z" />
        <path d="m10 20h10v10h-10z" />
        <path d="m20 20h10v10h-10z" />
        <path d="m60 20h10v10h-10z" />
        <path d="m70 20h10v10h-10z" />
        <path d="m80 20h10v10h-10z" />
        <path d="m0 30h10v10h-10z" />
        <path d="m10 30h10v10h-10z" />
        <path d="m20 30h10v10h-10z" />
        <path d="m60 30h10v10h-10z" />
        <path d="m70 30h10v10h-10z" />
        <path d="m80 30h10v10h-10z" />
        <path d="m0 40h10v10h-10z" />
        <path d="m10 40h10v10h-10z" />
        <path d="m20 40h10v10h-10z" />
        <path d="m60 40h10v10h-10z" />
        <path d="m70 40h10v10h-10z" />
        <path d="m80 40h10v10h-10z" />
        <path d="m30 50h10v10h-10z" />
        <path d="m40 50h10v10h-10z" />
        <path d="m50 50h10v10h-10z" />
        <path d="m30 60h10v10h-10z" />
        <path d="m40 60h10v10h-10z" />
        <path d="m50 60h10v10h-10z" />
        <path d="m30 70h10v10h-10z" />
        <path d="m40 70h10v10h-10z" />
        <path d="m50 70h10v10h-10z" />
      </g>
    </svg>
  );
}
