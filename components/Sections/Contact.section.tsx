import type { NextComponentType } from "next";

import {
  BsSpotify,
  MdEmail,
  AiOutlineGithub,
} from "../Misc/Icons.collection";

import { Icon } from "../Misc/Icon.component";

const Contact: NextComponentType = () => {
  return (
    <div className="px-3 font-sen" id="contact">
      <p className="text-3xl font-bold text-white">Find me elsewhere</p>

      <div className="my-8 flex flex-row justify-center gap-x-4">
        <Icon icon={<AiOutlineGithub />} url="https://github.com/mawdac" />

        <Icon icon={<MdEmail />} url="mailto:edwardreillycomputers@gmail.com" />

        <Icon
          icon={<BsSpotify />}
          url="https://open.spotify.com/user/eifg8a7l1kox018oqjegqug1q"
        />
      </div>
    </div>
  );
};

export default Contact;
