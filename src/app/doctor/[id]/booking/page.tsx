"use client";
import {
  Button,
  Divider,
  Input,
  RadioGroup,
  Spacer,
  Radio,
  Tabs,
  Tab,
  Spinner,
  DatePicker,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { DoctorListCard } from "@/components/Cards/DoctorListCard";
import { useParams, useRouter } from "next/navigation";
import { navigationRoutes } from "@/core/navigationRoutes";
import useAuth from "@/app/isAuth";
import { getData, postData } from "@/core/apiHandler";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getLocalTimeZone, today, CalendarDate } from "@internationalized/date";
import { toast } from "sonner";

function Booking() {
  const router = useRouter();
  const [index, setIndex] = useState<number>(1);
  const [formData, setformData] = useState<any>({});
  const { data, isLoading: isLoadingPatient } = useAuth();
  useEffect(() => {
    if (!data) {
      router.push("/siginin");
    }
  }, [data, router]);
  const [customDate, setcustomDate] = useState<any>();
  const { id } = useParams();
  const {
    data: getDoctor,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["getDoctors", id],
    queryFn: () => getData(`/doctor/get-all/${id}`, {}),
    enabled: !!id,
  });
  const appointment = useMutation({
    mutationKey: ["appointment"],
    mutationFn: (data: any) => {
      return postData("/appointment/user", {}, data);
    },
    onSuccess: (data: any) => {
      toast.success("Appointment Added", {
        position: "top-right",
        className: "bg-green-300",
      });
      router.push("/profile");
    },
    onError: (error: any) => {
      console.log(error);
      toast.error("Appointment addition cancel!", {
        position: "top-right",
        className: "bg-red-300",
      });
    },
  });
  const { data: getGender, isLoading: isLoadingGender } = useQuery({
    queryKey: ["getGender"],
    queryFn: () => {
      return getData("/gender/all", {});
    },
  });
  const { data: getSlots, isLoading: isLoadingSlot } = useQuery({
    queryKey: ["getSlots"],
    queryFn: () => {
      return getData(`/doctor-slot/user/slots/${id}`, { date: formData.date });
    },
    enabled: !!formData.date,
  });

  if (isLoading || isLoadingGender || isLoadingPatient || isLoadingSlot) {
    return (
      <div className="flex flex-col items-center justify-center">
        <Spinner />
        <h3>Loading Details..</h3>
      </div>
    );
  }
  const handleChange = (e: any, value: any) => {
    console.log(e, value, index);
    if (value === "date" && e === "today") {
      setformData((prev: any) => ({
        ...prev,
        [value]: new Date(),
      }));
      console.log(formData);
      return;
    }
    if (e === "tomorrow" && value === "date") {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const newValue = tomorrow;
      setformData((prev: any) => ({
        ...prev,
        [value]: newValue,
      }));
      console.log(formData);
      return;
    }
    if (index === 3 && value === "date") {
      const dateString = e.toString();
      const dateObject = new Date(dateString);
      setformData((prev: any) => ({
        ...prev,
        [value]: dateObject,
      }));
      return;
    }
    if (value === "doctorSlotId") {
      setformData((prev: any) => ({
        ...prev,
        [value]: e._id,
        startTime: e.slotTime,
      }));
      return;
    } else {
      setformData((prev: any) => ({
        ...prev,
        [value]: e,
      }));
    }
  };
  const handleSubmit = () => {
    const item = {
      ...formData,
      fullName: data?.data?.name,
      doctorId: id,
      price: getDoctor?.data?.data?.price,
    };
    console.log(item);
    appointment.mutate(item);
  };
  return (
    <section>
      <DoctorListCard
        data={getDoctor?.data?.data}
        consultNow={false}
        redirect={`${navigationRoutes.doctor}/${id}/booking`}
      />
      <Spacer y={5} />
      <Divider orientation="horizontal" />
      <Spacer y={5} />

      <div className="flex flex-col gap-5 w-full">
        <h3 className="text-start text-md lg:text-lg font-semibold">
          Enter Basic Details
        </h3>
        <div className="flex flex-col lg:flex-row gap-5">
          <Input
            variant="bordered"
            type="text"
            value={data?.data?.name}
            radius="none"
            className="w-full hover:outline-none h-full"
            placeholder="Full Name"
            disabled
            labelPlacement="outside"
            label="Full Name"
          />
          <RadioGroup
            label="Gender"
            orientation="horizontal"
            onChange={(e) => handleChange(e.target.value, "genderId")}
            className="flex gap-0 justify-between w-full"
          >
            {getGender?.data.data.data.map((d: any, index: any) => {
              return (
                <Radio
                  key={d._id}
                  value={d?._id}
                  description={d?.name}
                  className=" border-gray-300 p-3"
                />
              );
            })}
          </RadioGroup>
          <Input
            variant="bordered"
            type="number"
            onValueChange={(e) => handleChange(e, "age")}
            radius="none"
            className="w-full hover:outline-none"
            placeholder="Age"
            labelPlacement="outside"
            label="Age"
          />
        </div>
      </div>
      <Spacer y={5} />
      <div className="flex flex-col w-full gap-5">
        <h3 className="text-start text-md lg:text-lg font-semibold">
          Schedule date and time
        </h3>
        <h3 className="text-gray font-semibold text-[12px] lg:[24px]">Day</h3>
        <div className="flex flex-row justify-between gap-5">
          <Button
            onPress={() => {
              setIndex(1);
              handleChange("today", "date");
            }}
            variant="ghost"
            className={`w-full border-${index === 1 ? 4 : 2}  p-5 lg:p-7`}
          >
            Today
          </Button>
          <Button
            onPress={() => {
              setIndex(2);
              handleChange("tomorrow", "date");
            }}
            variant="ghost"
            className={`w-full border-${index === 2 ? 4 : 2} p-5 lg:p-7`}
          >
            Tommorow
          </Button>
          <Button
            onPress={() => {
              setIndex(3);
              setcustomDate(true);
            }}
            variant="ghost"
            className={`w-full border-${index === 3 ? 4 : 2} p-5 lg:p-7`}
          >
            Custom
          </Button>
        </div>
        {customDate && index == 3 && (
          <DatePicker
            className="w-1/4"
            label="Appointment Date"
            minValue={today(getLocalTimeZone()).subtract({
              days: 0,
            })}
            onChange={(e) => handleChange(e, "date")}
            defaultValue={
              formData.DOB
                ? new CalendarDate(
                    Number(formData.DOB.split("T")[0].split("-")[0]),
                    Number(formData.DOB.split("T")[0].split("-")[1]),
                    Number(formData.DOB.split("T")[0].split("-")[2])
                  )
                : today(getLocalTimeZone())
            }
            showMonthAndYearPickers
          />
        )}
      </div>
      <Spacer y={5} />
      <div className="flex flex-col w-full gap-5">
        <h3 className="text-start text-gray font-semibold text-[12px] lg:[24px]">
          Time Slot
        </h3>
        <div>
          <Tabs aria-label="Options">
            <Tab key="morning" title="Morning">
              <div className="grid grid-cols-3 lg:grid-cols-6 gap-5 ">
                {getSlots?.data?.data
                  .filter((d: any) => d.session === "morning")
                  .map((d: any, index: any) => {
                    const date = new Date(d.slotTime);
                    // Format the time without seconds and with AM/PM
                    const formattedDate = date
                      .toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      })
                      .replace(/\s+/g, ""); // Remove any spaces

                    return (
                      <Button
                        key={d._id}
                        onClick={() => handleChange(d, "doctorSlotId")}
                        className={`w-full ${
                          formData.doctorSlotId === d._id ? "bg-green-300" : ""
                        }`}
                        variant={
                          formData.doctorSlotId === d._id ? "solid" : "ghost"
                        }
                        color="secondary"
                      >
                        {formattedDate}
                      </Button>
                    );
                  })}
              </div>
            </Tab>
            <Tab key="afternoon" title="Afternoon">
              <div className="grid grid-cols-3 lg:grid-cols-6 gap-5 ">
                {getSlots?.data?.data
                  .filter((d: any) => d.session === "afternoon")
                  .map((d: any, index: any) => {
                    const date = new Date(d.slotTime);
                    // Format the time without seconds and with AM/PM
                    const formattedDate = date
                      .toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      })
                      .replace(/\s+/g, ""); // Remove any spaces

                    return (
                      <Button
                        key={d._id}
                        onClick={() => handleChange(d, "doctorSlotId")}
                        className={`w-full ${
                          formData.doctorSlotId === d._id ? "bg-green-300" : ""
                        }`}
                        variant={
                          formData.doctorSlotId === d._id ? "solid" : "ghost"
                        }
                        color="secondary"
                      >
                        {formattedDate}
                      </Button>
                    );
                  })}
              </div>
            </Tab>
            <Tab key="evening" title="Evening">
              <div className="grid grid-cols-3 lg:grid-cols-6 gap-5 ">
                {getSlots?.data?.data
                  .filter((d: any) => d.session === "evening")
                  .map((d: any, index: any) => {
                    const date = new Date(d.slotTime);
                    // Format the time without seconds and with AM/PM
                    const formattedDate = date
                      .toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      })
                      .replace(/\s+/g, ""); // Remove any spaces

                    return (
                      <Button
                        key={d._id}
                        onClick={() => handleChange(d, "doctorSlotId")}
                        className={`w-full ${
                          formData.doctorSlotId === d._id ? "bg-green-300" : ""
                        }`}
                        variant={
                          formData.doctorSlotId === d._id ? "solid" : "ghost"
                        }
                        color="secondary"
                      >
                        {formattedDate}
                      </Button>
                    );
                  })}
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
      <Spacer y={5} />
      <Button
        color="primary"
        className="w-full"
        onPress={() => {
          handleSubmit();
        }}
      >
        Book
      </Button>
    </section>
  );
}

export default Booking;
