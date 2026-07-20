import React from "react";

function ContactList() {
  const contactLists = [
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
    {
      id: 3,
      image:
        "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
      profile: "https://picsum.photos/200/300",
      username: "Jame Bond",
      status: "online",
    },
    {
      id: 4,
      image:
        "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
      profile: "https://picsum.photos/200/300",
      username: "Sam Smith",
      status: "offline",
    },
    {
      id: 5,
      image:
        "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
      profile: "https://picsum.photos/200/300",
      username: "Chingsan Ly",
      status: "offline",
    },
    {
      id: 6,
      image:
        "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
      profile: "https://picsum.photos/200/300",
      username: "ChingChong Ly",
      status: "online",
    },
    {
      id: 7,
      image:
        "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
      profile: "https://picsum.photos/200/300",
      username: "Ching",
      status: "offline",
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <span className="text-lg text-[#a7aaaf]">Contact</span>
        <div className="flex items-center gap-1 ">
          <div className="size-8 hover:bg-[#333334] rounded-full flex items-center justify-center cursor-pointer">
            <svg viewBox="0 0 16 16" width="16" height="16" fill="#a7aaaf">
              <g fillRule="evenodd" transform="translate(-448 -544)">
                <g fillRule="nonzero">
                  <path
                    d="M10.743 2.257a6 6 0 1 1-8.485 8.486 6 6 0 0 1 8.485-8.486zm-1.06 1.06a4.5 4.5 0 1 0-6.365 6.364 4.5 4.5 0 0 0 6.364-6.363z"
                    transform="translate(448 544)"
                  ></path>
                  <path
                    d="M10.39 8.75a2.94 2.94 0 0 0-.199.432c-.155.417-.23.849-.172 1.284.055.415.232.794.54 1.103a.75.75 0 0 0 1.112-1.004l-.051-.057a.39.39 0 0 1-.114-.24c-.021-.155.014-.356.09-.563.031-.081.06-.145.08-.182l.012-.022a.75.75 0 1 0-1.299-.752z"
                    transform="translate(448 544)"
                  ></path>
                  <path
                    d="M9.557 11.659c.038-.018.09-.04.15-.064.207-.077.408-.112.562-.092.08.01.143.034.198.077l.041.036a.75.75 0 0 0 1.06-1.06 1.881 1.881 0 0 0-1.103-.54c-.435-.058-.867.018-1.284.175-.189.07-.336.143-.433.2a.75.75 0 0 0 .624 1.356l.066-.027.12-.061z"
                    transform="translate(448 544)"
                  ></path>
                  <path
                    d="m13.463 15.142-.04-.044-3.574-4.192c-.599-.703.355-1.656 1.058-1.057l4.191 3.574.044.04c.058.059.122.137.182.24.249.425.249.96-.154 1.41l-.057.057c-.45.403-.986.403-1.411.154a1.182 1.182 0 0 1-.24-.182zm.617-.616.444-.444a.31.31 0 0 0-.063-.052c-.093-.055-.263-.055-.35.024l.208.232.207-.206.006.007-.22.257-.026-.024.033-.034.025.027-.257.22-.007-.007zm-.027-.415c-.078.088-.078.257-.023.35a.31.31 0 0 0 .051.063l.205-.204-.233-.209z"
                    transform="translate(448 544)"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
          <div className="size-8 hover:bg-[#333334] rounded-full flex items-center justify-center cursor-pointer">
            <svg viewBox="0 0 20 20" width="16" height="16" fill="#a7aaaf">
              <g fillRule="evenodd" transform="translate(-446 -350)">
                <path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path>
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* contact list */}
      <div className="flex flex-col gap-2">
        <div className="w-full h-full flex items-center gap-2.5 text-white  p-2 hover:bg-[#545456] cursor-pointer rounded-lg ">
          <div className="size-8 border border-[#333334] rounded-full flex items-center justify-center">
            <img
              src="	https://www.facebook.com/images/web_messenger/gen-ai-ring-2_36-4x.png"
              alt="meta"
              className="size-[31px]"
            />
          </div>
          <div className="flex gap-2  items-center justify-around">
            <span>Meta AI </span>
            <svg
              viewBox="0 0 12 13"
              width="12"
              height="12"
              fill="#0966ff"
              title="Verified account"
            >
              <title>Verified account</title>
              <g fillRule="evenodd" transform="translate(-98 -917)">
                <path d="m106.853 922.354-3.5 3.5a.499.499 0 0 1-.706 0l-1.5-1.5a.5.5 0 1 1 .706-.708l1.147 1.147 3.147-3.147a.5.5 0 1 1 .706.708m3.078 2.295-.589-1.149.588-1.15a.633.633 0 0 0-.219-.82l-1.085-.7-.065-1.287a.627.627 0 0 0-.6-.603l-1.29-.066-.703-1.087a.636.636 0 0 0-.82-.217l-1.148.588-1.15-.588a.631.631 0 0 0-.82.22l-.701 1.085-1.289.065a.626.626 0 0 0-.6.6l-.066 1.29-1.088.702a.634.634 0 0 0-.216.82l.588 1.149-.588 1.15a.632.632 0 0 0 .219.819l1.085.701.065 1.286c.014.33.274.59.6.604l1.29.065.703 1.088c.177.27.53.362.82.216l1.148-.588 1.15.589a.629.629 0 0 0 .82-.22l.701-1.085 1.286-.064a.627.627 0 0 0 .604-.601l.065-1.29 1.088-.703a.633.633 0 0 0 .216-.819"></path>
              </g>
            </svg>
          </div>
        </div>
        {contactLists?.map((contact) => {
          return (
            <div
              className="h-12 w-full p-2 hover:bg-[#545456] cursor-pointer rounded-lg flex items-center gap-2.5"
              key={contact.id}
            >
              <div className="relative size-8 ">
                <img
                  src={contact.image}
                  alt="profile"
                  className="w-full h-full  rounded-full"
                />
                {/* status */}
                {contact.status === "online" ? (
                  <div className="size-3 rounded-full absolute -bottom-0.5 -right-0.5 bg-[#1c1c1d] flex items-center justify-center">
                    <div className="rounded-full bg-[#3fbb46] size-2.5"></div>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <span className="text-white ">{contact.username}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ContactList;
