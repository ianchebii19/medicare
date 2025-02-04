import { PatientForm } from "@/components/forms/PatientForm";
import { PasskeyModal } from "@/components/PassKeyModal";
import Image from "next/image";
import Link from "next/link";

const Home = ({ searchParams }: SearchParamProps) => {
  const isAdmin = searchParams?.admin === "true";

  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PasskeyModal />}
      <div className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
          src="/logic.png"
          alt="Logo"
          width={160}
          height={160}
          />
          <PatientForm/>
        

          <div className="text-14-regular mt-20 flex justify-between">
            <p>
            © 2025 Medicare
            </p>
            <Link href='/?admin=true' className="text-green-500 text-xl">
            Admin
            </Link>
          </div>
        </div>

      </div>
      <Image
      src="/doct.webp"
      alt="Doctor"
      width={1000}
      height={1000}
      className="side-mg md:max-w-[50%] sm:p-4 rounded-lg "
      />
  
    </div>
  );
}
export default Home;