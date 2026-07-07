import React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";

const Select = React.forwardRef(
    (
        {
            className,
            label,
            error,
            required = false,
            children,
            placeholder = "Select an option",
            ...props
        },
        ref
    ) => {

        return (

            <div className="space-y-2">

                {label && (

                    <label className="block text-sm font-semibold text-slate-700">

                        {label}

                        {required && (
                            <span className="ml-1 text-red-500">*</span>
                        )}

                    </label>

                )}

                <div className="relative">

                    <select
                        ref={ref}
                        className={cn(
                            "w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 pr-10",
                            "text-slate-700",
                            "transition-all duration-200",
                            "focus:border-orange-500",
                            "focus:ring-4 focus:ring-orange-100",
                            "outline-none",
                            error &&
                                "border-red-500 focus:border-red-500 focus:ring-red-100",
                            className
                        )}
                        {...props}
                    >

                        <option value="" disabled>
                            {placeholder}
                        </option>

                        {children}

                    </select>

                    <ChevronDown
                        size={18}
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                </div>

                {error && (

                    <p className="text-sm text-red-500">

                        {error}

                    </p>

                )}

            </div>

        );

    }
);

Select.displayName = "Select";

export default Select;