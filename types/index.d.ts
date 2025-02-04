/* eslint-disable no-unused-vars */

declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

declare type Gender = "Male" | "Female" | "Other";
declare type Status = "pending" | "scheduled" | "cancelled";

declare interface CreateUserParams {
  name: string;
  email: string;
  phone: string;
}

declare interface User extends CreateUserParams {
  $id: string;
}

declare interface RegisterUserParams extends CreateUserParams {
  userId: string;
  birthDate: string; // Consider using a string for date representation
  gender: Gender;
  address: string;
  occupation: string;
  emergencyContactName: string;
  emergencyContactNumber: string;
  primaryPhysician: string;
  insuranceProvider: string;
  insurancePolicyNumber: string;
  allergies?: string; // Optional
  currentMedication?: string; // Optional
  familyMedicalHistory?: string; // Optional
  pastMedicalHistory?: string; // Optional
  identificationType?: string; // Optional
  identificationNumber?: string; // Optional
  identificationDocument?: FormData; // Consider handling FormData carefully
  privacyConsent: boolean;
}

declare type CreateAppointmentParams = {
  userId: string;
  patient: string;
  primaryPhysician: string;
  reason: string;
  schedule: Date; // Alternatively, use a string format
  status: Status;
  note?: string; // Optional
};

declare type UpdateAppointmentParams = {
  appointmentId: string;
  userId: string;
  timeZone: string;
  appointment: Appointment; // Ensure Appointment is defined elsewhere
  type: string; // Consider defining a more specific type if possible
};
