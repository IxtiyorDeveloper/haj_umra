import React from "react";

const LogoMain = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={200}
      height={128}
      viewBox="0 0 260 96"
      {...props}
    >
      <path d="M232 35.1c-1.4.6-3.5 2-4.7 3.1-1.3 1.2-2.6 1.8-3 1.5-.3-.4-1.3-.1-2.2.7-2.1 1.8-6.6.3-5.7-1.9.8-2.1-1.3-3-3.1-1.2-1.4 1.3-2.1 1.3-7.4-.6-4.3-1.6-6.1-1.9-6.9-1.1-.9.9 1.2 2.4 7.9 6 5 2.6 9.1 5 9.1 5.4 0 .3-2.2 2.9-5 5.8l-5 5.2-5.1-2c-2.8-1.2-5.3-1.9-5.6-1.7-.2.2 1.5 1.6 3.7 3.1 4.4 2.9 4.4 2.9 3 5.7-1.2 2.1-.7 2.4 1.9.9 1.5-.8 2.1-.3 3.6 3.1 2.4 5.3 3.5 5.8 2.4 1.1-1.5-6.6-1.2-7.5 4.6-11.5 3-2.1 5.9-3.6 6.4-3.2.5.3 2.1 4 3.5 8.3 1.5 4.2 3.1 8.4 3.6 9.2 1.6 2.6 2.3-1.4 1.3-7.5-.9-4.8-.8-5.7.8-7.1 2.1-1.9 1.6-3.6-.9-3.2-4.2.7-2.1-6.3 3.5-12 1.8-1.8 3.3-4.2 3.3-5.2 0-2.2-.4-2.3-4-.9zM141.6 38.7c-1 6.2-.7 13.8.6 15.1.7.7 2.8 1.1 4.8 1.1 3.3-.2 3.4-.2.5-.6-5-.8-5.3-1.6-4.7-10.8.5-8.8-.1-11.3-1.2-4.8zM28.8 40c1.9.4 3.9 1.3 4.5 1.9 1.6 1.6-1.2 4-5.5 4.8-3.2.5-3.7.3-4.1-1.8-.2-1.3-.4.5-.4 4.1 0 4.6.1 5.5.6 3.2.5-3 1.2-3.6 5.6-5 3.4-1.2 5.1-2.3 5.4-3.6.4-2.6-2.5-4.6-6.3-4.5l-3.1.1 3.3.8zM159.1 41.2c-.1 2.1-.6 2.8-2.1 2.8-1.1 0-2 .5-2 1.1 0 .6.9.9 2 .6 1.7-.4 2 0 2 2.6 0 4.9 1.2 5.9 7.1 6.3 3 .1 4.3.1 2.9-.2-6.2-1.2-7.1-1.6-8-3.9-1.2-3.3-.3-5.5 2.4-5.6 1.9-.1 1.9-.2-.4-.8-1.4-.4-2.7-1.7-3.1-3.1-.7-2.5-.7-2.5-.8.2zM50.8 43.7c.6.2 1.8.2 2.5 0 .6-.3.1-.5-1.3-.5-1.4 0-1.9.2-1.2.5zM126.2 45c-4.8 4.5-1.6 10.1 5.9 9.9l4.4-.2-4-.6c-6.2-1-8.7-3.4-4.7-4.4 1.6-.4 1.6-.5 0-.6-1 0-1.8-.8-1.8-1.6 0-1.8 4.7-3.8 6.9-3 1.3.6 1.2 1-.8 2.6-2.4 1.9-.9 2.7 1.9.9 1.2-.7 1.2-1.3.4-2.7-1.6-2.6-5.6-2.7-8.2-.3zM175.6 45.1c-3 2.3-3.3 4.5-1 7.7 1.2 1.8 2.4 2.2 6.2 2.1l4.7-.2-4-.6c-6.2-1-8.7-3.4-4.7-4.4 1.6-.4 1.6-.5 0-.6-2.8-.2-2.1-2.7 1.1-4.1 3-1.2 5.1-.7 5.1 1.1 0 .5-1 1.4-2.2 1.9-1.3.5-1.8.9-1.1.9 2.3.2 4.3-1.2 4.3-2.9 0-3.4-4.6-3.9-8.4-.9zM46 45.5c-.7.8-1.9 1.5-2.6 1.5-1.6 0-1.9 4.7-.4 7 .7 1.1 1 .6 1-2.2 0-2.7.6-4.2 2.6-5.7 1.5-1.2 2.2-2.1 1.7-2.1-.6 0-1.6.7-2.3 1.5zM58.6 47.5c-2 2.1-2 2.8.2 4.8 1.1 1 3.4 1.6 6.2 1.5 2.5 0 5.7.3 7.3.7 1.8.5 2.7.4 2.7-.5 0-.6-.8-.9-1.7-.6-2.6.8-4.1-.5-4.5-3.9-.3-2.7-.7-3-4.4-3.3-2.8-.2-4.7.2-5.8 1.3zm9.1 1.1c.6 1.8-2.6 4.4-5.3 4.4-2.6 0-4-2-3-4.6.7-1.8 7.7-1.6 8.3.2zM79.7 47.7c-1.6 1.6-1.9 1.6-2.7.3-.7-1.1-1-.6-1 2v3.4l2.9-3.2c4.3-4.7 9.1-3.9 9.1 1.4 0 1.3.5 2.6 1 2.9 1.6 1 1.2-3.8-.6-6.3-1.9-2.7-6.3-2.9-8.7-.5zM106.6 47.5c-1.8 1.9-1.9 2.4-.6 4.5.6 1 2.7 1.6 6.2 1.7 2.9 0 6.6.5 8.2.9 2 .5 2.7.4 2.2-.4-.4-.6-1.2-.9-1.9-.7-2 .8-3.5-.8-3.9-4-.3-2.7-.7-3-4.4-3.3-2.8-.2-4.7.2-5.8 1.3zm9.1 1.1c.6 1.8-2.6 4.4-5.3 4.4-2.6 0-4-2-3-4.6.7-1.8 7.7-1.6 8.3.2zM37.1 48.7c.1 1 .5 2.9.9 4.3.7 2.1.8 1.9.9-1.8.1-2.3-.3-4.2-.9-4.2-.5 0-1 .8-.9 1.7zM91.8 47.6c-.4.6-.4 2.4.1 4 .7 2.7 1.1 2.9 5.7 2.9h4.9l.3 7.1c.2 6 0 7.3-1.7 8.8-2.7 2.5-8.3 1.4-11.1-2.1-2.1-2.7-2.7-2.4-1 .7 1.2 2.3 7.3 4.4 10.5 3.6 3.8-1 5.8-5.9 5-12.3-.4-3-1.3-7.3-2-9.6-1.1-3.6-1.3-3.8-1.4-1.4-.1 1.9-.9 3.1-2.6 3.9-3.1 1.4-5.2-.2-5.7-4-.2-1.5-.6-2.2-1-1.6zM151.1 50.2c-.1 2 .4 4 .9 4.3 1.2.7 1.2-1.9 0-5.5-.7-2.2-.8-2.1-.9 1.2z" />
    </svg>
  );
};

export default LogoMain;