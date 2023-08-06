import React from "react";
import * as yup from "yup";
import Input from "../../components/Form/Input";
import { IContact } from "../../models/contact.model";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import { useSendEmail } from "../../services/request.service";
import { Controller, useForm } from "react-hook-form";
import Button from "../Form/Button";

interface IProps {
  className?: string;
  setIsOpenModal?: () => void;
}

const PhoneNumberForm: React.FC<IProps> = ({ className, setIsOpenModal }) => {
  const { mutate: sendEmail } = useSendEmail((data) => {
    reset({
      phone: "",
    });
    setIsOpenModal ? setIsOpenModal() : null;
  });
  const QuestionFormSchema = yup.object({
    name: yup.string().required("Поле обязательно для заполнения"),
    phone: yup.string().required("Поле обязательно для заполнения"),
  }) as yup.ObjectSchema<Partial<IContact>>;

  const useFormReturn = useForm<Partial<IContact>>({
    resolver: yupResolver(QuestionFormSchema),
  });

  const { reset } = useFormReturn;

  const submitContactForm = (contact: Partial<IContact>) => {
    const data = {
      name: contact.name!,
      phone: contact.phone!,
    };
    sendEmail(data);
  };

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useFormReturn;

  return (
    <form
      className={clsx(
        "space-y-6 items-center text-center max-w-[612px] w-full",
        className
      )}
      onSubmit={handleSubmit(submitContactForm)}
    >
      <Controller
        name="name"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            value={value}
            onChange={onChange}
            placeholder="Ваше имя"
            className="max-w-[360px] w-full text-2xl text-black"
            error={Boolean(errors.phone?.message)}
            helperText={errors.phone?.message}
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
            className="max-w-[360px] w-full text-2xl text-black"
            wrapperClassName="text-center"
            error={Boolean(errors.phone?.message)}
            helperText={errors.phone?.message}
          />
        )}
      />
      <Button className="px-10 py-3 text-white">Отправить заявку</Button>
    </form>
  );
};

export default PhoneNumberForm;
