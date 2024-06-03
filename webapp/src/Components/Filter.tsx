import { useForm, SubmitHandler, Controller } from "react-hook-form";
import "../index.css";
import { TransactionFilters } from "../Services/types";
import DatePicker from "react-datepicker";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

interface FilterProps {
  onFilterChange: (filters: TransactionFilters) => void;
}

const Filter = ({ onFilterChange }: FilterProps) => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<TransactionFilters>();

  const [startDate, setStartDate] = useState(new Date(Date.now()));
  const [endDate, setEndDate] = useState(new Date(Date.now()));

  const onSubmit: SubmitHandler<TransactionFilters> = (data) => {
    console.log(`teste do onSubmit`, data);
    onFilterChange(data);
  };

  const handleStartDate = (dateChange?: string) => {
    dateChange &&
      setValue("startDate", dateChange, {
        shouldDirty: true,
      });
    dateChange && setStartDate(new Date(dateChange));
  };

  const handleEndDate = (dateChange?: string) => {
    dateChange &&
      setValue("endDate", dateChange, {
        shouldDirty: true,
      });
    dateChange && setEndDate(new Date(dateChange));
  };

  return (
    <div className=" mx-auto h-full flex-1 flex justify-center items-center">
      <div className="w-full bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Filtro</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-wrap gap-4 flex-shrink"
        >
          <div className="my-4 w-2/12">
            <label htmlFor="minValue">minValue:</label>
            <input
              {...register("minValue", { required: false })}
              className="input"
            />
            {errors.minValue && <span>Este campo é obrigatório</span>}
          </div>
          <div className="my-4 w-2/12">
            <label htmlFor="maxValue">maxValue:</label>
            <input
              {...register("maxValue", { required: false })}
              className="input"
            />
            {errors.maxValue && <span>Este campo é obrigatório</span>}
          </div>
          <div className="my-4 w-3/12">
            <label htmlFor="recipientId">Remetente:</label>
            <input
              {...register("recipientId", { required: false })}
              className="input"
            />
            {errors.recipientId && <span>Este campo é obrigatório</span>}
          </div>

          <div className="my-4 w-2/12">
            <label htmlFor="startDate">Data inicial</label>
            <Controller
              name="startDate"
              control={control}
              defaultValue={startDate.toString()}
              render={() => (
                <DatePicker
                  className="input"
                  selected={startDate}
                  placeholderText="Select date"
                  // onChange={handleStartDate}
                  onChange={(start) => handleStartDate(start?.toString())}
                />
              )}
            />
            {errors.startDate && <span>Este campo é obrigatório</span>}
          </div>

          <div className="my-4 w-2/12">
            <label htmlFor="endDate">Data final</label>
            <Controller
              name="endDate"
              control={control}
              defaultValue={endDate.toString()}
              render={() => (
                <DatePicker
                  className="input"
                  selected={endDate}
                  placeholderText="Selecione uma data final"
                  // onChange={handleStartDate}
                  onChange={(end) => handleEndDate(end?.toString())}
                />
              )}
            />
            {errors.endDate && <span>Este campo é obrigatório</span>}
          </div>

          <div className="my-4 w-full">
            <button
              type="submit"
              value="Filtrar"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded"
            >
              Filtrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Filter;
