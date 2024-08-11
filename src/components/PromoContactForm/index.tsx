import React from "react";
import * as yup from "yup";
import { useSendEmail } from "../../services/request.service";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Form/Button";
import Input from "../Form/Input";

const PromoContactForm: React.FC = () => {
  const { mutate: contactForm } = useSendEmail(() => {
    reset();
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
    <section className="space-y-10">
      <div className="bg-[#bc46c9] text-white p-10 space-y-4">
        <div className="flex items-center space-x-10">
          <p className="text-xl font-semibold">Выезд мастера бесплатно</p>

          <p className="text-base">
            Оставьте заявку и мы свяжемся для уточнения деталей в течении 15
            минут
          </p>
        </div>

        <div className="space-y-4">
          <form
            onSubmit={handleSubmit(handleSubmitForm)}
            className="flex items-center space-x-10"
          >
            <Controller
              name="phone"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Input
                  name="phone"
                  value={value}
                  onChange={onChange}
                  className="text-black"
                  mask="+375 (99) 999-99-99"
                  maskChar=" "
                  placeholder="Номер телефона"
                  error={Boolean(errors.phone?.message)}
                  helperText={errors.phone?.message}
                />
              )}
            />

            <Button className="border border-white">
              Заказать выезд мастера
            </Button>
          </form>
          <p className="text-sm text-gray-100">
            * Отправляя запрос Вы соглашаетесь на обработку персональных данных
          </p>
        </div>
      </div>
    </section>
  );
};

export default PromoContactForm;
