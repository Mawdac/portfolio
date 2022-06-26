import type { NextComponentType } from "next";

import Link from "next/link";

const Projects: NextComponentType = () => {
  return (
    <div className="my-16 px-3 font-sen" id="projects">
      <p className="text-3xl font-bold text-white">Featured Projects</p>
      <div className="my-8 flex flex-col items-center justify-center gap-10 sm:flex-row">
        <Link href="https://github.com/Mawdac/github-actions-sandbox" passHref>
          <a
            className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#f94144] via-[#f3722c] to-[#f8961e] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold">sandbox</p>
              <p>tinkering with github actions</p>
            </div>
          </a>
        </Link>

        <Link href="https://github.com/Mawdac/github-actions-sandcastle" passHref>
          <a
            className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#f9844a] via-[#f9c74f] to-[#90be6d] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold">sandcastle</p>
              <p>for repo-to-repo shenanigans</p>
            </div>
          </a>
        </Link>

        <Link href="https://github.com/Mawdac/sm-theme-megapixels/tree/patch-2" passHref>
          <a
            className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#43aa8b] via-[#4d908e] to-[#277da1] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold">rg280v theme</p>
              <p>my fork of megapixels </p>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
