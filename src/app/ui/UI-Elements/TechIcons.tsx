import Image from "next/image";

export default function TechIcons() {
  return (
    <div className="Icons mx-auto w-[90%]">
      <h3 className="Title mb-4 text-2xl font-bold capitalize text-gray-300">
        Preferred Tech Stack
      </h3>
      <div className="TechIcons flex justify-between">
        <div className="Icon flex w-fit flex-col items-center">
          <Image
            src="/techIcons/typescript.svg"
            alt="typescript"
            width={48}
            height={48}
          />
          <p className="title font-sans font-semibold text-gray-200">
            Typescript
          </p>
        </div>
        <div className="Icon flex w-fit flex-col items-center">
          <Image
            src="/techIcons/next.svg"
            alt="next.js"
            width={48}
            height={48}
          />
          <p className="title font-sans font-semibold text-gray-200">Next.js</p>
        </div>
        <div className="Icon flex w-fit flex-col items-center">
          <Image
            src="/techIcons/html5.svg"
            alt="html 5"
            width={48}
            height={48}
          />
          <p className="title font-sans font-semibold text-gray-200">Html5</p>
        </div>
        <div className="Icon flex w-fit flex-col items-center">
          <Image
            src="/techIcons/tailwind.svg"
            alt="tailwind"
            width={48}
            height={48}
          />
          <p className="title font-sans font-semibold text-gray-200">
            Tailwind
          </p>
        </div>
        <div className="Icon flex w-fit flex-col items-center">
          <Image
            src="/techIcons/mongo.png"
            alt="mongo db"
            width={48}
            height={48}
          />
          <p className="title font-sans font-semibold text-gray-200">
            Mongo DB
          </p>
        </div>
      </div>
    </div>
  );
}
