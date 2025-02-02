// import { FaFacebookF } from "react-icons/fa";
// import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
// import { BiLogoPinterestAlt } from "react-icons/bi";

function Footer() {
  const iconsTab = [
    // { icon: <FaFacebookF /> },
    // { icon: <AiOutlineTwitter /> },
    // { icon: <AiFillYoutube /> },
    // { icon: <BiLogoPinterestAlt /> },
  ];
  return (
    <>
      <footer className="bg-blue-400">
        <div className="container mx-auto  py-[10rem]">
          {/* footer div all */}
          <div className="flex justify-between flex-col md:flex-row  items-center md:items-start  md:gap-[5rem] text-left">
            {/* logo side */}
            <div className="flex flex-col w-1/2 md:p-0 py-4 gap-8">
              <img
                src={"https://i.imgur.com/520zDfd.png"}
                alt="footer_logo"
                className="w-[18rem]"
              />
              <p className="text-[15px] font-medium text-[#646464]">
              Connecting talents with opportunities, CV Link bridges the gap between ambition and success. Your career journey starts here.</p>
              {/* socials */}
              <div className="flex gap-7 text-[18px] text-[#646464] justify-center md:justify-start">
                {iconsTab.map(({ icon }, index) => {
                  return (
                    <div
                      key={index}
                      className="text-2xl bg-[#efefef] p-2 rounded-full hover:bg-red-700 hover:text-white"
                      style={{ transition: "all 0.3s" }}
                    >
                      {icon}
                    </div>
                  );
                })}
              </div>
              <p className="text-[16px] font-medium text-[#646464]">
                Privacy Policy | © {new Date().getFullYear()} Cv Link <br />{" "}
                Design & Develop by{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://anish-10.vercel.app/"
                >
                  Anish Mainali
                </a>
              </p>
            </div>

            {/* middle div */}
            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold footer-main">New Jobs</p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-red-700"></span>

              <p className="text-[16px] hover:text-red-700 cursor-pointer text-[#646464] font-medium hover:font-bold">
               Web Development Jobs
              </p>
              <p className="text-[16px] hover:text-red-700 cursor-pointer text-[#646464] font-medium hover:font-bold">
               Desgining Jobs
              </p>
              <p className="text-[16px] hover:text-red-700 cursor-pointer text-[#646464] font-medium hover:font-bold">
                UI UX Jobs
              </p>
              <p className="text-[16px] hover:text-red-700 cursor-pointer text-[#646464] font-medium hover:font-bold">
                App Development Jobs
              </p>
              <p className="text-[16px] hover:text-red-700 cursor-pointer text-[#646464] font-medium hover:font-bold">
                AI Jobs
              </p>
            </div>

            {/* right div */}
            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold footer-main">Working Hours</p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>

              <p className="text-[16px]  text-[#646464] font-bold">
                Monday - Friday:
              </p>
              <p className="text-[16px] text-[#646464] font-medium">
                7:00am - 21:00pm
              </p>
              <p className="text-[16px] text-[#646464] font-bold">Saturday:</p>
              <p className="text-[16px] text-[#646464] font-medium">
                7:00am - 19:00pm
              </p>
              <p className="text-[16px] text-[#646464] font-bold ">
                Sunday - Closed
              </p>
            </div>

            {/* middle div */}
            <span></span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;