import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Doctors } from "@/constants";
import { getAppointment } from "@/lib/actions/appointment.actions";
import { formatDateTime } from "@/lib/utils";

// Define the type for searchParams and params
interface SearchParamProps {
  searchParams?: {
    appointmentId?: string;
  };
  params: {
    userId: string;
  };
}

const RequestSuccess = async ({
  searchParams,
  params: { userId },
}: SearchParamProps) => {
  // Ensure searchParams exists before accessing appointmentId
  const appointmentId = searchParams?.appointmentId || "";

  // Fetch appointment data using appointmentId
  const appointment = await getAppointment(searchParams?.appointmentId || "");

  // Find the doctor based on the primary physician in the appointment
  const doctor = Doctors.find(
    (doctor) => doctor.name === appointment?.primaryPhysician
  );

  return (
    <div className="flex h-screen max-h-screen px-[5%]">
      <div className="success-img">
        {/* Logo with Link to Home */}
        <Link href="/">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="logo"
            className="h-10 w-fit"
            priority // Add priority for above-the-fold images
          />
        </Link>

        {/* Success Message Section */}
        <section className="flex flex-col items-center">
          <Image
            src="/assets/gifs/success.gif"
            height={300}
            width={280}
            alt="success"
            priority // Add priority for above-the-fold images
          />
          <h2 className="header mb-6 max-w-[600px] text-center">
            Your <span className="text-green-500">appointment request</span> has
            been successfully submitted!
          </h2>
          <p>We&apos;ll be in touch shortly to confirm.</p>
        </section>

        {/* Appointment Details Section */}
        <section className="request-details">
          <p>Requested appointment details: </p>
          <div className="flex items-center gap-3">
            <Image
              src={doctor?.image || "/assets/icons/default-doctor.svg"} // Fallback image
              alt="doctor"
              width={100}
              height={100}
              className="size-6"
            />
            <p className="whitespace-nowrap">Dr. {doctor?.name}</p>
          </div>
          <div className="flex gap-2">
            <Image
              src="/assets/icons/calendar.svg"
              height={24}
              width={24}
              alt="calendar"
            />
            <p>{formatDateTime(appointment?.schedule).dateTime}</p>
          </div>
        </section>

        {/* New Appointment Button */}
        <Button variant="outline" className="shad-primary-btn" asChild>
          <Link href={`/patients/${userId}/new-appointment`}>
            New Appointment
          </Link>
        </Button>

        {/* Footer */}
        <p className="copyright">© 2024 CarePluse</p>
      </div>
    </div>
  );
};

export default RequestSuccess;