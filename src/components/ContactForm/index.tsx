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

const ContactForm: React.FC = () => {
  const { mutate: sendEmail } = useSendEmail((data) => {});
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
    console.log(contact);
  };
  const {
    handleSubmit,
    formState: { errors },
    control,
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
          <Button className="text-white w-full">Отправить</Button>
        </div>
      </form>
    </QueryClientProvider>
  );
};

export default ContactForm;
