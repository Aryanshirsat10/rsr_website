"use client";

const Footer = () => {
  return (
    <footer className="text-white space-y-5 pb-4 pt-10">
      <div className="text-center">
        <button
          className="animate-bounce"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <img src="/icons/arrow.svg" className="cursor-pointer" />
        </button>
      </div>
      <div className="text-center text-xl">Follow Us</div>
      <div>
        <div className="flex items-center justify-center gap-5">
          <a href="" className="cursor-pointer">
            <img src="/icons/instagram.svg" alt="instagram" className="" />
          </a>
          <a href="" className="cursor-pointer">
            <img src="/icons/linkedin.svg" alt="linkedin" />
          </a>
          <a href="" className="cursor-pointer">
            <img src="/icons/twitter.svg" alt="twitter" />
          </a>
          <a href="" className="cursor-pointer">
            <img src="/icons/youtube.svg" alt="youtube" />
          </a>
          <a href="" className="cursor-pointer">
            <img src="/icons/facebook.svg" alt="facebook" />
          </a>
        </div>
      </div>
      <div className="h-2/5 flex items-center justify-center">
        <img src="/images/logo-white.png" alt="Logo White" className="h-20" />
      </div>
      <div className="text-center">© Redshift Racing India</div>
    </footer>
  );
};

export default Footer;
