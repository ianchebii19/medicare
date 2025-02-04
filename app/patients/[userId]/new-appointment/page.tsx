import Image from "next/image";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";

// Define the type for params
interface SearchParamProps {
  params: {
    userId: string;
  };
}

const Appointment = async ({ params }: SearchParamProps) => {
  // Destructure userId from params
  const { userId } = await params;

  // Fetch patient data using userId
  const patient = await getPatient(userId);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src="/logic.png"
            alt="Logo"
            width={160}
            height={160}
            priority // Add priority for above-the-fold images
          />

          <AppointmentForm
            patientId={patient?.$id}
            userId={userId}
            type="create"
          />

          <p className="copyright mt-10 py-12">© 2024 CarePluse</p>
        </div>
      </section>

      <Image
        src="/assets/images/appointment-img.png"
        height={1500}
        width={1500}
        alt="appointment"
        className="side-img max-w-[390px] bg-bottom"
        priority // Add priority for above-the-fold images
      />
    </div>
  );
};

export default Appointment;