import React from "react";

function MainContent() {
  return (
    <div className="w-full h-[1000px]   flex flex-col gap-5 p-2 rounded-xl bg-[#242728]">
      {/* Post / ads */}
      <div className=" flex items-center justify-between">
        {/* <div className="flex items-center"> */}
        <div className="flex items-center gap-3 ">
          <div className="w-12 h-12 flex bg-primary rounded-full items-center justify-center">
            <img
              src="https://scontent.fadl3-1.fna.fbcdn.net/v/t39.30808-1/470229775_2005540263193088_914092589215526061_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=106&ccb=1-7&_nc_sid=e99d92&_nc_ohc=g1hOuvLvQAQQ7kNvwEa7bi4&_nc_oc=AdlJ04cNZaPXvGdtOzjaRDMkQtcjj1i8iBtnAGKeDo1cobF52nlEed_NWQhxCdTH-UU&_nc_zt=24&_nc_ht=scontent.fadl3-1.fna&_nc_gid=dWIUxZ_vUozegEpA5U8oBg&_nc_ss=8&oh=00_AfuqVFNn92ASE-HhfO1Hcr2uQzjB-VJ9JM4qhs8PT9pPYg&oe=69A80C1B"
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-white ">
              <span>Chingsien</span>
              <span>· </span>
              <span className="font-semibold text-[#5aa7ff] cursor-pointer">
                Follow
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[#838689]">
              <span>22h</span>
              <span> · </span>
              {/* image */}
              <svg
                viewBox="0 0 16 16"
                width="12"
                height="12"
                fill="currentColor"
                title="Shared with Public"
                class="x14rh7hd x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq"
              >
                <title>Shared with Public</title>
                <g fill-rule="evenodd" transform="translate(-448 -544)">
                  <g>
                    <path
                      d="M109.5 408.5c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 0 1 6.524 7.434"
                      transform="translate(354 143.5)"
                    ></path>
                    <path
                      d="M104.107 415.696A7.498 7.498 0 0 1 94.5 408.5a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096"
                      transform="translate(354 143.5)"
                    ></path>
                    <path
                      fill-rule="nonzero"
                      d="M110 408.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z"
                      transform="translate(354 143.5)"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex ">
          {/* image */}
          <div className="size-9 hover:bg-[#545456] rounded-full flex items-center justify-center cursor-pointer">
            <svg
              viewBox="0 0 20 20"
              width="20"
              height="20"
              fill="#838689"
              class="x14rh7hd x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq"
            >
              <g fill-rule="evenodd" transform="translate(-446 -350)">
                <path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path>
              </g>
            </svg>
          </div>
          {/* image */}
          <div className="size-9 hover:bg-[#545456] rounded-full flex items-center justify-center cursor-pointer">
            <svg
              viewBox="0 0 20 20"
              width="20"
              height="20"
              fill="#838689"
              aria-hidden="true"
              class="x14rh7hd x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq"
            >
              <path d="M15.543 3.043a1 1 0 1 1 1.414 1.414L11.414 10l5.543 5.542a1 1 0 0 1-1.414 1.415L10 11.414l-5.543 5.543a1 1 0 0 1-1.414-1.415L8.586 10 3.043 4.457a1 1 0 1 1 1.414-1.414L10 8.586l5.543-5.543z"></path>
            </svg>
          </div>
        </div>
        {/* </div> */}
      </div>
      {/* content desc*/}
      <div className="text-white">This is the barcode of F and Fm</div>
      {/* photo */}
      <img
        src="https://scontent.fsyd10-2.fna.fbcdn.net/v/t39.30808-6/643497863_899580522886377_8520393369400619360_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=KzvOpNWKDjUQ7kNvwFPYDuQ&_nc_oc=AdndLoE2e8977AuXyVgMeMTOasVVuw5cLvn0wdKyVFTFGg9JKIa_lhC1ZxAJnTbiU1E&_nc_zt=23&_nc_ht=scontent.fsyd10-2.fna&_nc_gid=CHcnnbdz5OqHul2nSk_O5A&_nc_ss=8&oh=00_AfyE2EGQgpoh_U58Bsq3Fm1XRmMAwqQD8frmF1vRsL6ODA&oe=69AD62E1"
        alt=""
        className="w-full "
      />
    </div>
  );
}

export default MainContent;
