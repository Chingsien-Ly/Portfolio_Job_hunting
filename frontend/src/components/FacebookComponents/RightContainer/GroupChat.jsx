import React from "react";
import CrossCard from "./CrossCard";

function GroupChat() {
  const avatars = [
    {
      id: 1,
      image:
        "https://scontent.fadl3-1.fna.fbcdn.net/v/t39.30808-1/470229775_2005540263193088_914092589215526061_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=106&ccb=1-7&_nc_sid=e99d92&_nc_ohc=g1hOuvLvQAQQ7kNvwEa7bi4&_nc_oc=AdlJ04cNZaPXvGdtOzjaRDMkQtcjj1i8iBtnAGKeDo1cobF52nlEed_NWQhxCdTH-UU&_nc_zt=24&_nc_ht=scontent.fadl3-1.fna&_nc_gid=dWIUxZ_vUozegEpA5U8oBg&_nc_ss=8&oh=00_AfuqVFNn92ASE-HhfO1Hcr2uQzjB-VJ9JM4qhs8PT9pPYg&oe=69A80C1B",
      profile: "https://picsum.photos/200/300",
      username: "Chingsien Ly",
      status: "online",
    },
    {
      id: 2,
      image:
        "https://scontent.fadl3-1.fna.fbcdn.net/v/t39.30808-6/525044331_2181467665600346_1685222724288304632_n.jpg?stp=cp6_dst-jpg_s1080x2048_tt6&_nc_cat=109&ccb=1-7&_nc_sid=2a1932&_nc_ohc=0EhrUEQMOC8Q7kNvwFxBKY3&_nc_oc=AdnW_Q-NnASfuJHNF6cnlWD9GXE3338ggGZ2ySzMBxada29fDLcwh-cUe6qZOFnv3AA&_nc_zt=23&_nc_ht=scontent.fadl3-1.fna&_nc_gid=Cx6sZxUJX3jwfC_Q3pcPgQ&_nc_ss=8&oh=00_AfuKlXG_ScQgHepl3WMyIiKHu8HbJWV5dsmaXBTjJhNGVA&oe=69A81361",
      profile: "https://picsum.photos/200/300",
      username: "Peng Sokheng",
      status: "online",
    },
  ];
  return (
    <div>
      <span className="text-lg text-[#a7aaaf] ">Group chats</span>
      <CrossCard avatars={avatars} />
    </div>
  );
}

export default GroupChat;
