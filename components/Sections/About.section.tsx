import type { NextComponentType } from "next";

import Image from "next/image";
import Link from "next/link";

import { HiOutlineArrowNarrowRight } from "../Misc/Icons.collection";

const About: NextComponentType = () => {
  return (
    <div className="my-8 flex flex-row items-center justify-between px-3 font-sen">
      <div>
        <p className="text-3xl font-bold text-white">EJ</p>
        <p className="mt-1 text-lg text-gray-300">
          devops / disc golf / music
        </p>

        <p className="mt-4 text-gray-400">
          making dev easier and throwing <br />
          plastic circles in the woods. 🥏
        </p>

        {/* <Link href="https://maddawik.hashnode.dev/" passHref>
          <a
            className="mt-4 flex cursor-pointer flex-row items-center gap-1 font-jost text-xl text-gray-400 duration-100 hover:ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            read my blog
            <HiOutlineArrowNarrowRight />
          </a>
        </Link> */}
      </div>

      <div className="hidden custom:block">
        <Image
          src="/assets/avatar.png"
          width="140"
          height="140"
          className="rounded-full"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default About;
