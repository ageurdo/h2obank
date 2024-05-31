import { useForm, SubmitHandler } from "react-hook-form";
import "../index.css";
import { TransactionFilters } from "../Services/types";

interface FilterProps {
    onFilterChange: (filters: TransactionFilters) => void;
}

const Filter = ({ onFilterChange }: FilterProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TransactionFilters>();

    const onSubmit: SubmitHandler<TransactionFilters> = (data) => {
        onFilterChange(data);
    };

    return (
        <div className=" mx-auto h-full flex-1 flex justify-center items-center">
            <div className="w-full bg-white p-8 rounded shadow">
                <h2 className="text-2xl font-bold mb-4">Filtro</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap gap-4 flex-shrink">
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
                        <label htmlFor="senderId">senderId:</label>
                        <input
                            {...register("senderId", { required: false })}
                            className="input"
                        />
                        {errors.senderId && <span>Este campo é obrigatório</span>}
                    </div>
                    {/* <div className="my-4 w-2/12">
                        <label htmlFor="recipientId">Recipient ID:</label>
                        <input
                            {...register("recipientId", { required: true })}
                            className="input"
                        />
                        {errors.recipientId && <span>Este campo é obrigatório</span>}
                    </div> */}
                    <div className="my-4 w-2/12">
                        <label htmlFor="startDate">startDate:</label>
                        <input
                            {...register("startDate", { required: false })}
                            className="input"
                        />
                        {errors.startDate && <span>Este campo é obrigatório</span>}
                    </div>
                    <div className="my-4 w-2/12">
                        <label htmlFor="endDate">endDate:</label>
                        <input
                            {...register("endDate", { required: false })}
                            className="input"
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
