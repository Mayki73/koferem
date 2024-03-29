import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import * as yup from "yup";
import queryClient from "../../constants/query-client";
import { Controller, useForm } from "react-hook-form";
import { IContact } from "../../models/contact.model";
import Input from "../Form/Input";
import Button from "../Form/Button";
import { useSendEmail } from "../../services/request.service";
import { yupResolver } from "@hookform/resolvers/yup";
import toast, { Toaster } from "react-hot-toast";

interface IProps {
  setIsOpenModal?: () => void;
}

const ContactForm: React.FC<IProps> = ({ setIsOpenModal }) => {
  const {
    mutate: sendEmail,
    isSuccess,
    isPending,
  } = useSendEmail((data) => {
    reset({
      name: "",
      phone: "",
      message: "",
    });
    toast.success("Ваше сообщение отправлено!");
    setIsOpenModal ? setIsOpenModal() : null;
  });
  const QuestionFormSchema = yup.object({
    name: yup.string().required("Поле обязательно для заполнения"),
    phone: yup.string().required("Поле обязательно для заполнения"),
    message: yup.string(),
  }) as yup.ObjectSchema<Partial<IContact>>;

  const useFormReturn = useForm<Partial<IContact>>({
    resolver: yupResolver(QuestionFormSchema),
  });

  const submitContactForm = (contact: any) => {
    sendEmail(contact);
  };
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useFormReturn;

  return (
    <QueryClientProvider client={queryClient}>
      <form className="space-y-10" onSubmit={handleSubmit(submitContactForm)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-black">
          <Controller
            name="name"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                onChange={onChange}
                value={value}
                placeholder="Ваше имя*"
                error={Boolean(errors.name?.message)}
                helperText={errors.name?.message}
              />
            )}
          />
          <Controller
            name="phone"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                onChange={onChange}
                mask="+375 (99) 999-99-99"
                maskChar=" "
                placeholder="+375 (__) ___-__-__"
                error={Boolean(errors.phone?.message)}
                helperText={errors.phone?.message}
              />
            )}
          />
        </div>
        <Controller
          name="message"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              onChange={onChange}
              value={value}
              placeholder="Ваше сообщение"
              className="text-black"
              textarea
              error={Boolean(errors.message?.message)}
              helperText={errors.message?.message}
            />
          )}
        />

        <div className="flex justify-center">
          <Button className="text-white w-full" disabled={isPending}>
            {isPending ? (
              <div
                className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Loading...
                </span>
              </div>
            ) : (
              "Отправить"
            )}
          </Button>
        </div>
      </form>
    </QueryClientProvider>
  );
};

export default ContactForm;
