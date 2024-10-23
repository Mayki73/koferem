import React from "react";
import * as yup from "yup";
import { useSendEmail } from "../../services/request.service";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Form/Button";
import Input from "../Form/Input";
import toast from "react-hot-toast";

const PromoContactForm: React.FC = () => {
  const { mutate: contactForm } = useSendEmail(() => {
    reset();
    toast.success("Ваша заявка на звонок успешно отправлена!");
  });

  const PhoneFormSchema = yup.object().shape({
    phone: yup.string().required("Введите номер телефона"),
  });

  const useFormReturn = useForm({
    resolver: yupResolver(PhoneFormSchema),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useFormReturn;

  const handleSubmitForm = (data: { phone: string }) => {
    contactForm(data);
  };

  return (
    <section className="py-10 px-5 bg-[#bc46c9] text-white rounded-lg space-y-6">
      <div className="space-y-3">
        <h2 className="text-2xl font-semibold">Выезд мастера бесплатно</h2>
        <p className="text-lg">
          Оставьте заявку, и мы свяжемся с вами для уточнения деталей в течение
          15 минут.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0"
      >
        <Controller
          name="phone"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input
              name="phone"
              value={value}
              onChange={onChange}
              className="text-black flex-1 text-base"
              mask="+375 (99) 999-99-99"
              maskChar=" "
              placeholder="Номер телефона"
              error={Boolean(errors.phone?.message)}
              helperText={errors.phone?.message}
            />
          )}
        />

        <Button className="w-full md:w-auto bg-white text-base text-[#bc46c9] px-6 py-3 font-semibold border border-white hover:bg-[#ffffff90] transition-all">
          Заказать выезд мастера
        </Button>
      </form>

      <p className="text-xs text-gray-200">
        * Отправляя запрос, вы соглашаетесь на обработку персональных данных.
      </p>
    </section>
  );
};

export default PromoContactForm;
