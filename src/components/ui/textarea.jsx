import React from "react";
import { cn } from "../../lib/utils";

const Textarea = React.forwardRef(
    (
        {
            className,
            label,
            error,
            required = false,
            rows = 5,
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
                            <span className="text-red-500 ml-1">*</span>
                        )}
                    </label>
                )}

                <textarea
                    ref={ref}
                    rows={rows}
                    className={cn(
                        "w-full rounded-xl border border-slate-200 bg-white px-4 py-3",
                        "text-slate-700 placeholder:text-slate-400",
                        "transition-all duration-200",
                        "focus:border-orange-500",
                        "focus:ring-4 focus:ring-orange-100",
                        "outline-none resize-none",
                        error &&
                            "border-red-500 focus:border-red-500 focus:ring-red-100",
                        className
                    )}
                    {...props}
                />

                {error && (
                    <p className="text-sm text-red-500">
                        {error}
                    </p>
                )}

            </div>
        );
    }
);

Textarea.displayName = "Textarea";

export default Textarea;