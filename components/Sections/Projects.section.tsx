import type { NextComponentType } from "next";

import Link from "next/link";

const Projects: NextComponentType = () => {
  return (
    <div className="my-16 px-3 font-sen" id="projects">
      <p className="text-3xl font-bold text-white">Featured projects</p>
      <div className="my-8 flex flex-col items-center justify-center gap-10 sm:flex-row">
        <Link href="https://github.com/Mawdac/github-actions-sandbox" passHref>
          <a
            className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#D8B4FE] to-[#818CF8] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold">ci/cd sandbox</p>
              <p>a sandbox for tinkering with github actions</p>
            </div>
          </a>
        </Link>

        <Link href="https://github.com/Mawdac/github-actions-sandcastle" passHref>
          <a
            className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#BFAE48] to-[#78CDD7] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold">ci/cd sandcastle</p>
              <p>for playing with repo-to-repo shenanigans</p>
            </div>
          </a>
        </Link>

        <Link href="https://github.com/Mawdac/sm-theme-megapixels/tree/patch-2" passHref>
          <a
            className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#FDE68A] via-[#FCA5A5] to-[#FECACA] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold">rg280v theme</p>
              <p>fork of a megapixels theme for the rg280v</p>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
