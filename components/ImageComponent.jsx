import Image from "next/image";

const ImageComponent = ({ pic }) => {
  return (
    <div className="min-h-48 max-h-max relative overflow-hidden auto-rows-auto auto-cols-auto flex justify-center items-center rounded-md">
      <Image
        src={`/images/Gallery/${pic}`}
        alt={pic}
        width={720}
        height={480}
        loading="lazy"
        quality={100}
        className="max-h-[800px] rounded-md"
        sizes="(min-width: 2840px) 8.75vw, (min-width: 2580px) 10vw, (min-width: 2340px) calc(11.36vw - 15px), (min-width: 2080px) 12.5vw, (min-width: 1840px) calc(14.55vw - 17px), (min-width: 1580px) calc(16.67vw - 13px), (min-width: 1340px) calc(20vw - 16px), (min-width: 1080px) calc(25vw - 20px), (min-width: 840px) calc(33.64vw - 30px), (min-width: 580px) calc(50vw - 40px), (min-width: 380px) calc(100vw - 80px), calc(50vw + 100px)"
      />
    </div>
  );
};

export default ImageComponent;
