import Button from "@/app/components/Button";
import Image from "next/image";
import dev from "../../../../public/images/dev.jpg";

const Mission = () => {
    return (
       <main className="mt-10">
             <div>
            <h1>This is mission page.</h1>
            <p className="mt-6">
            A blog mission statement reminds you why you are blogging in the first place. It helps you, your team, and even your audience understand what you are doing.
            </p>
        </div>
        <div className="mt-6">
          <Image placeholder="blur" src={dev} alt="Dev image" height={400}></Image>
          <Button></Button>
      </div>
       </main>
    );
};

export default Mission;
