import Image from "next/image";
import { redirect } from "next/navigation";

import RegisterForm from "@/components/forms/RegisterForm";
import { getPatient, getUser } from "@/lib/actions/patient.actions";

const Register = async ({ params }: { params: { userId: string } }) => {
  const { userId } = await params; // Fix: Get userId inside the function

  const user = await getUser(userId);
  const patient = await getPatient(userId);

  if (patient) {
    redirect(`/patients/${userId}/new-appointment`);
  }

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image src="/logic.png" alt="Logo" width={160} height={160} />

          <RegisterForm user={user} />

          <p className="copyright py-12">© 2025 Medicare</p>
        </div>
      </section>

      <Image
        src="/doct.webp"
        alt="Doctor"
        width={1000}
        height={1000}
        className="side-mg md:max-w-[40%] sm:p-4 rounded-lg"
      />
    </div>
  );
};

export default Register;
